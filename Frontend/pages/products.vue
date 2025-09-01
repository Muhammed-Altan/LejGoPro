<template>
  <div>
    <Header />
    <h1 class="text-3xl md:text-4xl font-bold text-center mb-8">Vores GoPro Produkter</h1>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto mt-12 mb-16">
      <ProductCard
        title="GoPro HERO10 Black"
        description="Kraftfuld performance med GP2 processor og glimrende stabilisering."
        img="https://images.unsplash.com/photo-1519183071298-a2962be56693?auto=format&fit=crop&w=400&q=80"
        :features="['📷 5.3K Video', '🖥️ GP2 Processor', '⚡ HyperSmooth 4.0', '🕑 Vandtæt']"
        :priceDay="29"
        :priceWeek="109"
      />
      <ProductCard
        title="GoPro HERO11 Black"
        description="Fremragende allround kamera med 5.3K video og forbedret natoptagelse."
        img="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
        :features="['📷 5.3K Video', '🌙 Nightlapse', '⚡ HyperSmooth 5.0', '🕑 Vandtæt til 10m']"
        :priceDay="39"
        :priceWeek="129"
        :popular="true"
      />
      <ProductCard
        title="GoPro HERO9 Black"
        description="Pålidelig og prisvenlig mulighed med fremskærm og 5K video."
        img="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80"
        :features="['📷 5K Video', '🖥️ Fremskærm', '⚡ HyperSmooth 3.0', '⏩ TimeWarp 3.0']"
        :priceDay="25"
        :priceWeek="89"
      />
      <ProductCard
        title="GoPro HERO8 Black"
        description="Solid actionkamera med 4K video og kompakt design."
        img="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
        :features="['📷 4K Video', '🖥️ Kompakt', '⚡ HyperSmooth 2.0', '🕑 Vandtæt']"
        :priceDay="19"
        :priceWeek="69"
      />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'
import Header from '@/components/Header.vue'
</script>
