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
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Skiing" class="rounded-2xl object-cover w-full h-64" />
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
      <!-- Card 1 -->
      <div class="bg-white rounded-2xl shadow-lg border p-6 flex flex-col">
        <img src="https://images.unsplash.com/photo-1519183071298-a2962be56693?auto=format&fit=crop&w=400&q=80" alt="GoPro HERO10 Black" class="w-full h-40 object-contain mb-4" />
        <h3 class="font-bold text-lg mb-1 text-black">GoPro HERO10 Black</h3>
        <p class="text-sm text-gray-600 mb-3">Kraftfuld performance med GP2 processor og glimrende stabilisering.</p>
        <ul class="text-xs text-gray-700 mb-4 space-y-1">
          <li>📷 5.3K Video</li>
          <li>🖥️ GP2 Processor</li>
          <li>⚡ HyperSmooth 4.0</li>
          <li>🕑 Vandtæt</li>
        </ul>
        <div class="flex items-end gap-4 mb-4">
          <div>
            <span class="font-bold text-black text-xl">29 kr</span>
            <span class="text-gray-500 text-sm">/dag</span>
          </div>
          <div>
            <span class="font-bold text-black text-base">109 kr</span>
            <span class="text-gray-500 text-sm">/uge</span>
          </div>
        </div>
        <button class="bg-[#B8082A] text-white font-semibold py-2 px-6 rounded-full mt-auto">Lej Nu</button>
      </div>
      <!-- Card 2 -->
      <div class="bg-white rounded-2xl shadow-lg border p-6 flex flex-col relative">
        <span class="absolute top-3 right-3 bg-[#B8082A] text-white text-xs font-semibold px-3 py-1 rounded-full">Mest Populær</span>
        <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="GoPro HERO11 Black" class="w-full h-40 object-contain mb-4" />
        <h3 class="font-bold text-lg mb-1 text-black">GoPro HERO11 Black</h3>
        <p class="text-sm text-gray-600 mb-3">Fremragende allround kamera med 5.3K video og forbedret natoptagelse.</p>
        <ul class="text-xs text-gray-700 mb-4 space-y-1">
          <li>� 5.3K Video</li>
          <li>🌙 Nightlapse</li>
          <li>⚡ HyperSmooth 5.0</li>
          <li>🕑 Vandtæt til 10m</li>
        </ul>
        <div class="flex items-end gap-4 mb-4">
          <div>
            <span class="font-bold text-black text-xl">39 kr</span>
            <span class="text-gray-500 text-sm">/dag</span>
          </div>
          <div>
            <span class="font-bold text-black text-base">129 kr</span>
            <span class="text-gray-500 text-sm">/uge</span>
          </div>
        </div>
        <button class="bg-[#B8082A] text-white font-semibold py-2 px-6 rounded-full mt-auto">Lej Nu</button>
      </div>
      <!-- Card 3 -->
      <div class="bg-white rounded-2xl shadow-lg border p-6 flex flex-col">
        <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80" alt="GoPro HERO9 Black" class="w-full h-40 object-contain mb-4" />
        <h3 class="font-bold text-lg mb-1 text-black">GoPro HERO9 Black</h3>
        <p class="text-sm text-gray-600 mb-3">Pålidelig og prisvenlig mulighed med fremskærm og 5K video.</p>
        <ul class="text-xs text-gray-700 mb-4 space-y-1">
          <li>📷 5K Video</li>
          <li>🖥️ Fremskærm</li>
          <li>⚡ HyperSmooth 3.0</li>
          <li>⏩ TimeWarp 3.0</li>
        </ul>
        <div class="flex items-end gap-4 mb-4">
          <div>
            <span class="font-bold text-black text-xl">25 kr</span>
            <span class="text-gray-500 text-sm">/dag</span>
          </div>
          <div>
            <span class="font-bold text-black text-base">89 kr</span>
            <span class="text-gray-500 text-sm">/uge</span>
          </div>
        </div>
        <button class="bg-[#B8082A] text-white font-semibold py-2 px-6 rounded-full mt-auto">Lej Nu</button>
      </div>
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
  <section class="bg-white py-16">
    <h2 class="text-2xl md:text-3xl font-bold text-center mb-12">Frequently asked <span class="text-[#B8082A]">questions.</span></h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-8">
      <button class="bg-white border border-gray-200 rounded-xl py-6 px-4 text-left font-medium text-black flex justify-between items-center hover:border-[#B8082A] transition">Hvordan og hvornår skal man betale?<span class="text-[#B8082A]">&gt;</span></button>
      <button class="bg-white border border-gray-200 rounded-xl py-6 px-4 text-left font-medium text-black flex justify-between items-center hover:border-[#B8082A] transition">Hvor længe holder et GoPro strøm?<span class="text-[#B8082A]">&gt;</span></button>
      <button class="bg-white border border-gray-200 rounded-xl py-6 px-4 text-left font-medium text-black flex justify-between items-center hover:border-[#B8082A] transition">Hvor lang tid tager det at oplade et GoPro?<span class="text-[#B8082A]">&gt;</span></button>
      <button class="bg-white border border-gray-200 rounded-xl py-6 px-4 text-left font-medium text-black flex justify-between items-center hover:border-[#B8082A] transition">Er kameraet forsikret?<span class="text-[#B8082A]">&gt;</span></button>
    </div>
    <div class="flex justify-center">
      <button class="bg-[#B8082A] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#a10725] transition">Læs mere</button>
    </div>
  </section>

  <!-- Footer -->
  <Footer />

</template>
<script setup lang="ts">

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

