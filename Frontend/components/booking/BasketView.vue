<template>
  <div :class="['bg-white rounded-2xl p-10 max-w-[400px] mx-auto text-[#111]', stickyClasses]">
    <h2 class="text-xl font-semibold mb-6">Din kurv</h2>
    <div v-if="models.length === 0" class="text-[#888] text-base">Ingen produkter valgt endnu.</div>
    <div v-else>
      <div v-for="(line, idx) in models" :key="idx" class="mb-5">
        <div class="flex justify-between items-baseline">
         <span class="font-semibold text-lg">{{ line.name }}</span> 
         <span class="text-base text-[#222]">{{ line.quantity }}x</span>
        </div>
        <div class="text-base text-[#222] mt-1">{{ formatCurrency(line.price) }}</div>
      </div>
      <div v-if="backendBreakdown && backendBreakdown.accessories && backendBreakdown.accessories.length" class="mt-6 mb-4">
        <div class="font-semibold mb-2 text-[1.05rem]">Ekstra udstyr:</div>
        <div>
          <div v-for="(acc, i) in backendBreakdown.accessories" :key="i" class="flex justify-between text-base mb-1">
            <span>{{ acc.quantity }}x {{ acc.name }}</span>
            <span>{{ formatCurrency(acc.price) }}</span>
          </div>
        </div>
      </div>
      <div v-if="backendBreakdown && backendBreakdown.discount" class="flex justify-between text-base mt-5 text-[#1a7f37] font-medium">
        <span>Du sparer</span>
        <span class="font-semibold">{{ formatCurrency(backendBreakdown.discount) }}</span>
      </div>
      <div v-if="insurance" class="flex justify-between text-base mt-5">
        <span>Forsikring</span>
        <span>
          <template v-if="backendBreakdown && backendBreakdown.insurance !== undefined && backendBreakdown.insurance !== null">
            {{ formatCurrency(backendBreakdown.insurance) }}
          </template>
          <template v-else>—</template>
        </span>
      </div>
      <div class="flex justify-between text-base mt-2">
        <span>Levering</span>
        <span class="text-[#888]">Gratis</span>
      </div>
      <div class="flex justify-between items-end mt-8 text-[1.3rem] font-semibold">
        <span class="text-[1.2rem] font-semibold">I alt:</span>
        <span class="text-[1.3rem] font-semibold text-[#222]">
          <span v-if="loading">Beregner…</span>
          <span v-else-if="error">Fejl</span>
          <span v-else><span class="text-base text-[#888] mr-1">DKK</span> {{ formatCurrency(backendTotal, false) }}</span>
        </span>
      </div>
      <div class="text-sm text-[#888] mt-2" v-if="rentalDays > 0">Antal dage: {{ rentalDays }}</div>
      <div class="text-sm text-[#d00] mt-2" v-if="error">{{ error }}</div>
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

</style>
