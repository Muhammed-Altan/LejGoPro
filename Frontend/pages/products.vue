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
    <div class="flex flex-wrap justify-center gap-8 my-12 max-w-7xl mx-auto">
      <div class="w-full md:w-[30%] lg:w-[30%] bg-gray-50 rounded-xl p-6 shadow flex flex-col items-center mb-8">
        <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Grip" class="w-24 h-24 object-cover rounded-lg mb-3" />
        <h4 class="text-lg font-bold mb-1">Grip</h4>
        <p class="text-sm text-gray-600 text-center">Stabilt håndtag til actionoptagelser og nem håndtering af kameraet.</p>
      </div>
      <div class="w-full md:w-[30%] lg:w-[30%] bg-gray-50 rounded-xl p-6 shadow flex flex-col items-center mb-8">
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Ekstra batteri" class="w-24 h-24 object-cover rounded-lg mb-3" />
        <h4 class="text-lg font-bold mb-1">Ekstra batteri</h4>
        <p class="text-sm text-gray-600 text-center">Sørger for ekstra strøm, så du kan optage længere tid uden afbrydelser.</p>
      </div>
      <div class="w-full md:w-[30%] lg:w-[30%] bg-gray-50 rounded-xl p-6 shadow flex flex-col items-center mb-8">
        <img src="https://images.unsplash.com/photo-1519183071298-a2962be56693?auto=format&fit=crop&w=400&q=80" alt="Headstrap" class="w-24 h-24 object-cover rounded-lg mb-3" />
        <h4 class="text-lg font-bold mb-1">Headstrap</h4>
        <p class="text-sm text-gray-600 text-center">Monter kameraet på hovedet for hands-free POV-optagelser.</p>
      </div>
      <div class="w-full md:w-[30%] lg:w-[30%] bg-gray-50 rounded-xl p-6 shadow flex flex-col items-center mb-8">
        <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80" alt="Brystmount" class="w-24 h-24 object-cover rounded-lg mb-3" />
        <h4 class="text-lg font-bold mb-1">Brystmount</h4>
        <p class="text-sm text-gray-600 text-center">Perfekt til sport og aktiviteter, hvor du vil have kameraet tæt på kroppen.</p>
      </div>
      <div class="w-full md:w-[30%] lg:w-[30%] bg-gray-50 rounded-xl p-6 shadow flex flex-col items-center mb-8">
        <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Beskyttelsescase" class="w-24 h-24 object-cover rounded-lg mb-3" />
        <h4 class="text-lg font-bold mb-1">Beskyttelsescase</h4>
        <p class="text-sm text-gray-600 text-center">Robust etui der beskytter kameraet mod stød, vand og snavs.</p>
      </div>
      <div class="w-full md:w-[30%] lg:w-[30%] bg-gray-50 rounded-xl p-6 shadow flex flex-col items-center mb-8">
        <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=400&q=80" alt="Sugekop til ruder" class="w-24 h-24 object-cover rounded-lg mb-3" />
        <h4 class="text-lg font-bold mb-1">Sugekop til ruder</h4>
        <p class="text-sm text-gray-600 text-center">Fastgør kameraet sikkert til bilruder og glatte overflader for unikke vinkler.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import ProductCard from '@/components/ProductCard.vue'
import Header from '@/components/Header.vue'
</script>
