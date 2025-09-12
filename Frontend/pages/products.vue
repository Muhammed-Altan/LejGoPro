<template>
  <div>
    <Header />
    <h1 class="text-3xl md:text-4xl font-bold text-center mb-8">Vores GoPro Produkter</h1>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto mt-12 mb-16">
      <ProductCard
        v-for="p in products"
        :key="p.id"
        :title="p.name"
        :description="p.description"
        :img="placeholderImage"
        :features="Array.isArray(p.features) ? p.features : p.features.split(',')"
        :priceDay="p.dailyPrice"
        :priceWeek="p.weeklyPrice"
        :popular="p.popular"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import Header from '@/components/Header.vue';
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

interface Product {
  id: number;
  name: string;
  description: string;
  features: string | string[];
  dailyPrice: number;
  weeklyPrice: number;
  twoWeekPrice: number;
  popular: boolean;
}

const products = ref<Product[]>([]);
const placeholderImage = 'https://images.unsplash.com/photo-1519183071298-a2962be56693?auto=format&fit=crop&w=400&q=80';

onMounted(async () => {
  const { $config } = useNuxtApp();
  const base = ($config?.public?.apiBase) || 'http://localhost:3001';
  const res = await fetch(`${base}/products`);
  if (res.ok) {
    products.value = await res.json();
  }
});
</script>
