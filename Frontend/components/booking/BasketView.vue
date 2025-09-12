<template>
  <div class="bg-white rounded-2xl p-8 max-w-lg mx-auto shadow-md" :class="stickyClasses">
    <h2 class="text-2xl font-semibold mb-4">Din kurv</h2>
    <div v-if="models.length === 0" class="text-gray-500">Ingen produkter valgt endnu.</div>
    <div v-else class="space-y-4">
      <div v-for="(line, idx) in models" :key="idx" class="border rounded-lg p-4">
        <div class="flex justify-between items-center">
          <div>
            <div class="font-semibold">{{ line.name }}</div>
            <div class="text-sm text-gray-500">x{{ line.quantity }}</div>
          </div>
          <div class="font-semibold">{{ formatCurrency(lineTotals[idx] || 0) }}</div>
        </div>
      </div>
      <div v-if="accessories.length" class="pt-2">
        <div class="font-semibold mb-1">Tilbehør</div>
        <div class="space-y-1">
          <div v-for="(acc, i) in accessories" :key="i" class="flex justify-between text-sm">
            <span>{{ acc.quantity }}x {{ acc.name }}</span>
            <span>{{ formatCurrency((acc.price ?? 70) * acc.quantity) }}</span>
          </div>
        </div>
      </div>
      <div class="flex justify-between text-base mt-4">
        <span>Forsikring</span>
        <span>{{ insurance ? formatCurrency(insuranceCost) : '—' }}</span>
      </div>
      <div class="flex justify-between text-base mt-1">
        <span>Levering</span>
        <span class="text-gray-400">Gratis</span>
      </div>
      <div class="border-t pt-4 mt-4">
        <div class="flex justify-between items-end">
          <span class="text-xl font-semibold">I alt</span>
          <span class="text-xl font-semibold">{{ formatCurrency(grandTotal) }}</span>
        </div>
        <div class="text-xs text-gray-500 mt-1" v-if="rentalDays > 0">Antal dage: {{ rentalDays }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useCheckoutStore } from '@/stores/checkout';
import { calculatePriceWithConfig, calculateTotalBookingPrice, diffDaysInclusive } from '@/utils/price';

const store = useCheckoutStore();

const stickyClasses = computed(() => 'lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] lg:overflow-auto');
const models = computed(() => store.selectedModels || []);
const accessories = computed(() => store.selectedAccessories || []);
const insurance = computed(() => !!store.insurance);
const rentalDays = computed(() => diffDaysInclusive(store.startDate, store.endDate));

const lineTotals = computed(() => {
  const days = rentalDays.value;
  return models.value.map(m => {
    const cfg = m.config || { dailyPrice: m.price, weeklyPrice: m.price * 7, twoWeekPrice: m.price * 14 };
    return calculatePriceWithConfig(cfg, days) * (m.quantity || 1);
  });
});

const insuranceCost = computed(() => (insurance.value && rentalDays.value > 0 ? 50 * rentalDays.value : 0));

const grandTotal = computed(() => {
  const days = rentalDays.value;
  if (days <= 0) return 0;
  return calculateTotalBookingPrice({
    models: models.value.map(m => ({
      name: m.name,
      quantity: m.quantity || 1,
      config: m.config || { dailyPrice: m.price, weeklyPrice: m.price * 7, twoWeekPrice: m.price * 14 },
    })),
    accessories: accessories.value.map(a => ({ name: a.name, quantity: a.quantity || 1, price: a.price })),
    days,
    insurance: insurance.value,
  });
});

function formatCurrency(n: number) {
  return new Intl.NumberFormat('da-DK', { style: 'currency', currency: 'DKK', minimumFractionDigits: 0 }).format(n);
}
</script>

<style scoped>
* { color: black !important; }
</style>
