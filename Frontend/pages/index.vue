<template>
  <Header />

  <!-- Hero Section -->
  <section class="relative flex flex-col items-center justify-center min-h-[60vh] bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80');">
  <div class="absolute inset-0 bg-white/20"></div>
    <div class="relative z-10 flex flex-col items-center justify-center py-24">
      <h1 class="text-4xl md:text-5xl font-bold text-center text-black mb-8">
        Lej dit <span class="text-[#B8082A]">GoPro</span> til næste eventyr
      </h1>
      <p class="text-lg text-center text-black mb-8 max-w-xl">
        Professionelle actionkameraer til rejsende og eventyrere – nem booking, gratis levering og konkurrencedygtige priser.
      </p>
      <div class="flex gap-4 justify-center mb-8">
        <button class="bg-[#B8082A] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#a10725] transition">Se Alle Produkter</button>
        <button class="bg-white text-[#B8082A] font-semibold py-3 px-8 rounded-full shadow-lg border border-[#B8082A] hover:bg-[#B8082A] hover:text-white transition">Få Et Tilbud</button>
      </div>
    </div>
  </section>

  <!-- Adventure Headline -->
  <section class="max-w mx-auto bg-white">
    <div class="w-full py-12">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">
          Rejs Ikke Bare — <span class="text-[#B8082A]">Fang Eventyret.</span>
        </h2>
        <!-- Adventure Image Grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80" alt="Waterfall selfie" class="rounded-2xl object-cover w-full h-64" />
          <img src="https://images.unsplash.com/photo-1465101178521-c1a4c8a0f8f5?auto=format&fit=crop&w=600&q=80" alt="Diving" class="rounded-2xl object-cover w-full h-64" />
          <img src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=80" alt="Dog adventure" class="rounded-2xl object-cover w-full h-64" />
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Helicopter" class="rounded-2xl object-cover w-full h-64" />
          <img src="https://images.unsplash.com/photo-1517841905240-8c2b1a67b8a0?auto=format&fit=crop&w=600&q=80" alt="Skiing" class="rounded-2xl object-cover w-full h-64" />
          <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80" alt="Mountain climbing" class="rounded-2xl object-cover w-full h-64" />
        </div>
        <div class="flex justify-center mb-12">
          <button class="bg-[#B8082A] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#a10725] transition">Fang dit eventyr her</button>
        </div>
      </div>
    </div>
  </section>

  <!-- Product Cards Section -->
  <section class="max-w-7xl mx-auto mt-16 mb-16">
    <h2 class="text-2xl md:text-3xl font-bold text-center mb-8">Vælg Din Perfekte <span class="text-[#B8082A]">GoPro</span></h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
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
    </div>
  </section>

  <!-- Booking Steps -->
  <section class="bg-white py-16">
    <h2 class="text-2xl md:text-3xl font-bold text-center mb-12">Sådan <span class="text-[#B8082A]">booker</span> du</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
      <div class="flex flex-col items-center">
        <span class="text-5xl mb-4">📅</span>
        <h3 class="font-bold mb-2">1. booking</h3>
        <p class="text-center text-gray-600">Udfyld kontaktformularen, og vi sender dig et tilbud.</p>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-5xl mb-4">🚚</span>
        <h3 class="font-bold mb-2">2. fragt</h3>
        <p class="text-center text-gray-600">Når du accepterer tilbuddet, sender vi kameraet til dig med den nærmeste pakkeshop og altid inkluderet.</p>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-5xl mb-4">💳</span>
        <h3 class="font-bold mb-2">3. betaling</h3>
        <p class="text-center text-gray-600">Bekræft via SMS og betal med MobilePay inden du tager afsted på din rejse.</p>
      </div>
      <div class="flex flex-col items-center">
        <span class="text-5xl mb-4">🎥</span>
        <h3 class="font-bold mb-2">4. GoPro</h3>
        <p class="text-center text-gray-600">Når betalingen er på plads, er alt klar til at starte din oplevelse og indfange dine eventyr.</p>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="bg-white py-16 ">
    <h2 class="text-2xl md:text-3xl font-bold text-center mb-12">Frequently asked <span class="text-[#B8082A]">questions.</span></h2>
    <div class="flex flex-row gap-10 justify-center align-center mx-auto mb-10">
  <UAccordion class = "!w-64" :items="[items[0]]" :ui="{ ...ui, item: ui.item + '  min-h-[100px] py-1 border-b-2 border-[#B8082A] !border-b-2 !border-[#B8082A]' }" />
  <UAccordion class = "!w-64" :items="[items[1]]" :ui="{ ...ui, item: ui.item + '  min-h-[100px] py-1 border-b-2 border-[#B8082A] !border-b-2 !border-[#B8082A]' }" />
  <UAccordion class = "!w-64" :items="[items[2]]" :ui="{ ...ui, item: ui.item + '  min-h-[100px] py-1 border-b-2 border-[#B8082A] !border-b-2 !border-[#B8082A]' }" />
  <UAccordion class = "!w-64" :items="[items[3]]" :ui="{ ...ui, item: ui.item + '  min-h-[100px] py-1 border-b-2 border-[#B8082A] !border-b-2 !border-[#B8082A]' }" />
    </div>
    <div class="flex justify-center">
      <NuxtLink to="/faq" class="bg-[#B8082A] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#a10725] transition">Læs mere</NuxtLink>
    </div>
  </section>

  <!-- Footer -->
  <Footer />

</template>
<script setup lang="ts">

import ProductCard from '../components/ProductCard.vue';

import type { AccordionItem } from '@nuxt/ui'

const items = ref<AccordionItem[]>([
  {
    label: 'Hvordan og hvornår skal man betale?',
    icon: 'i-lucide-credit-card',
    content: 'Betaling sker via MobilePay inden afrejse, efter du har accepteret tilbuddet og modtaget kameraet.'
  },
  {
    label: 'Hvor længe holder et GoPro strøm?',
    icon: 'i-lucide-battery-charging',
    content: 'Et GoPro holder typisk 1-2 timer afhængigt af brug og model. Med ekstra batterier kan du forlænge tiden.'
  },
  {
    label: 'Hvor lang tid tager det at oplade et GoPro?',
    icon: 'i-lucide-clock',
    content: 'Opladning tager ca. 2 timer med den medfølgende oplader.'
  },
  {
    label: 'Er kameraet forsikret?',
    icon: 'i-lucide-shield-check',
    content: 'Ja, der er basisforsikring inkluderet. Kontakt os for detaljer om dækning.'
  }
])

const ui = {
  item: 'bg-white border border-gray-200 rounded-xl font-medium text-black hover:border-[#B8082A] transition flex flex-col items-center justify-center text-center',
  leadingIcon: 'mb-2 text-[#B8082A]',
  trigger: 'flex justify-center items-center px-4 w-full h-full min-h-[100px] cursor-pointer',
  content: 'p-2 text-gray-700 text-center flex flex-col items-center justify-center'
}

</script>

<style scoped>


.hero-bg {
  background-image: url('/Hero-bg-img.png');
  background-size: cover;
  background-position: center;
  position: relative;
}
.hero-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 50% black overlay */
  z-index: 1;
  pointer-events: none;
}
.hero-bg > * {
  position: relative;
  z-index: 2;
}
</style>

