<template>
  <div
    class="basket-container"
    :class="stickyClasses"
  >
    <h2 class="basket-title">Din kurv</h2>
    <div v-if="models.length === 0" class="basket-empty">Ingen produkter valgt endnu.</div>
    <div v-else>
      <div v-for="(line, idx) in models" :key="idx" class="basket-line">
        <div class="basket-line-header">
          <span class="basket-product-name">{{ line.name }}</span>
          <span class="basket-product-qty">{{ line.quantity }}x</span>
        </div>
        <div class="basket-product-price">{{ formatCurrency(line.price) }}</div>
      </div>
      <div v-if="backendBreakdown && backendBreakdown.accessories && backendBreakdown.accessories.length" class="basket-accessories">
        <div class="basket-accessories-title">Ekstra udstyr:</div>
        <div>
          <div v-for="(acc, i) in backendBreakdown.accessories" :key="i" class="basket-accessory-line">
            <span>{{ acc.quantity }}x {{ acc.name }}</span>
            <span>{{ formatCurrency(acc.price) }}</span>
          </div>
        </div>
      </div>
      <div v-if="backendBreakdown && backendBreakdown.discount" class="basket-row basket-row-discount">
        <span>Du sparer</span>
        <span class="basket-discount-value">{{ formatCurrency(backendBreakdown.discount) }}</span>
      </div>
      <div v-if="insurance" class="basket-row basket-row-insurance">
        <span>Forsikring</span>
        <span>
          <template v-if="backendBreakdown && backendBreakdown.insurance !== undefined && backendBreakdown.insurance !== null">
            {{ formatCurrency(backendBreakdown.insurance) }}
          </template>
          <template v-else>—</template>
        </span>
      </div>
      <div class="basket-row basket-row-delivery">
        <span>Levering</span>
        <span class="basket-delivery-free">Gratis</span>
      </div>
      <div class="basket-total-row">
        <span class="basket-total-label">I alt:</span>
        <span class="basket-total-value">
          <span v-if="loading">Beregner…</span>
          <span v-else-if="error">Fejl</span>
          <span v-else><span class="basket-total-currency">DKK</span> {{ formatCurrency(backendTotal, false) }}</span>
        </span>
      </div>
      <div class="basket-days" v-if="rentalDays > 0">Antal dage: {{ rentalDays }}</div>
      <div class="basket-error" v-if="error">{{ error }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useCheckoutStore } from "@/stores/checkout";
import { useNuxtApp } from "#app";

const store = useCheckoutStore();
const stickyClasses = computed(
  () => "lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] lg:overflow-auto"
);
const models = computed(() => store.selectedModels || []);
const accessories = computed(() => store.selectedAccessories || []);
const insurance = computed(() => !!store.insurance);
function diffDaysInclusive(
  start: Date | string | null | undefined,
  end: Date | string | null | undefined
) {
  if (!start || !end) return 0;
  const s = new Date(start);
  const e = new Date(end);
  if (isNaN(s.getTime()) || isNaN(e.getTime())) return 0;
  // Normalize to midnight to avoid DST/timezone issues
  s.setHours(0, 0, 0, 0);
  e.setHours(0, 0, 0, 0);
  const msPerDay = 24 * 60 * 60 * 1000;
  const diff = Math.round((e.getTime() - s.getTime()) / msPerDay) + 1; // inclusive
  return diff > 0 ? diff : 0;
}
const rentalDays = computed(() =>
  diffDaysInclusive(store.startDate, store.endDate)
);

const backendTotal = ref<number | null>(null);
const backendBreakdown = ref<any | null>(null);
const loading = ref(false);
const error = ref<string | null>(null);

async function fetchBackendTotal() {
  if (!models.value.length || rentalDays.value <= 0) {
    backendTotal.value = 0;
    backendBreakdown.value = null;
    return;
  }
  loading.value = true;
  error.value = null;
  try {
    const { $config } = useNuxtApp();
    const base = $config?.public?.apiBase || "http://localhost:3001";
    const res = await fetch(`${base}/price/quote`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        models: models.value.map((m) => ({
          name: m.name,
          quantity: m.quantity || 1,
          config: m.config || {
            dailyPrice: m.price,
            weeklyPrice: m.price * 7,
            twoWeekPrice: m.price * 14,
          },
        })),
        accessories: accessories.value.map((a) => ({
          name: a.name,
          quantity: a.quantity || 1,
          price: a.price,
        })),
        days: rentalDays.value,
        insurance: insurance.value,
      }),
    });
    if (!res.ok) throw new Error("Prisforespørgsel fejlede");
    const data = await res.json();
    backendTotal.value = typeof data.total === "number" ? data.total : 0;
    backendBreakdown.value = data.breakdown || null;
    // Sync backendTotal to Pinia store for booking
    store.setBackendTotal(backendTotal.value ?? 0);
  } catch (e: any) {
    error.value =
      typeof e === "object" && e && "message" in e
        ? (e as any).message
        : "Ukendt fejl ved prisforespørgsel";
    backendTotal.value = null;
    backendBreakdown.value = null;
    store.setBackendTotal(0);
  } finally {
    loading.value = false;
  }
}

// Watch for changes and update price live
watch([models, accessories, insurance, rentalDays], fetchBackendTotal, {
  immediate: true,
  deep: true,
});

function formatCurrency(n: number | null, showCurrency = true) {
  if (n == null) return "—";
  const formatted = new Intl.NumberFormat("da-DK", {
    style: showCurrency ? "currency" : "decimal",
    currency: "DKK",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
  return showCurrency ? formatted : formatted.replace(/\s*kr\.?$/, " kr.");
}
</script>

<style scoped>
.basket-row-discount {
  margin-top: 1.2rem;
  color: #1a7f37;
  font-weight: 500;
}
.basket-discount-value {
  font-weight: 600;
}
.basket-row-insurance {
  margin-top: 1.2rem;
}
.basket-container {
  background: #fff;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: none;
  color: #111;
}
.basket-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}
.basket-empty {
  color: #888;
  font-size: 1rem;
}
.basket-line {
  margin-bottom: 1.2rem;
}
.basket-line-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}
.basket-product-name {
  font-weight: 600;
  font-size: 1.1rem;
}
.basket-product-qty {
  font-size: 1rem;
  color: #222;
}
.basket-product-price {
  font-size: 1rem;
  color: #222;
  margin-top: 0.2rem;
}
.basket-accessories {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}
.basket-accessories-title {
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 1.05rem;
}
.basket-accessory-line {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  margin-bottom: 0.2rem;
}
.basket-row {
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  margin-top: 1.2rem;
}
.basket-row-delivery {
  margin-top: 0.5rem;
}
.basket-delivery-free {
  color: #888;
}
.basket-total-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 2rem;
  font-size: 1.3rem;
  font-weight: 600;
}
.basket-total-label {
  font-size: 1.2rem;
  font-weight: 600;
}
.basket-total-value {
  font-size: 1.3rem;
  font-weight: 600;
  color: #222;
}
.basket-total-currency {
  font-size: 1rem;
  color: #888;
  margin-right: 0.2em;
}
.basket-days {
  font-size: 0.85rem;
  color: #888;
  margin-top: 0.5rem;
}
.basket-error {
  font-size: 0.85rem;
  color: #d00;
  margin-top: 0.5rem;
}
</style>
