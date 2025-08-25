<template>
    <Header />
    <div class="hero-bg min-h-screen flex items-center justify-center bg-cover bg-center">
    <div class="flex items-center justify-center gap-16 pt-12 bg-white rounded-3xl shadow-lg mx-auto max-w-7xl p-16 min-h-[60vh] flex">
      <div class="max-w-xl">
        <h1 class="text-4xl font-bold mb-4 text-black">
          Lej din <span class="text-[#B8082A]">GoPro</span> til næste eventyr
        </h1>
        <p class="text-lg text-black mb-8">
          Professionelle actionkameraer til rejsende og eventyrere. Nem booking, <span class="text-black">hurtig levering</span>, og konkurrencedygtige priser.
        </p>
        <div class="flex gap-4 mb-8">
          <UButton color="primary" size="lg">Se Alle Produkter</UButton>
          <UButton color="white" size="lg" class="border border-gray-200 text-black bg-white">Få Et Tilbud</UButton>
        </div>
        <div class="flex gap-16 mt-6 border-t border-gray-200 pt-6 justify-center">
          <div class="flex flex-col items-center gap-1">
            <span class="text-xl">⭐</span>
            <span class="font-semibold text-black">4.3/5</span>
            <span class="text-sm text-black">Trustpilot</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <span class="text-xl">👥</span>
            <span class="font-semibold text-black">2000+</span>
            <span class="text-sm text-black">Tilfredse kunder</span>
          </div>
          <div class="flex flex-col items-center gap-1">
            <span class="text-xl">🕓</span>
            <span class="font-semibold text-black">24/7</span>
            <span class="text-sm text-black">Support</span>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <img src="/Hero-img.jpg" alt="Skiing GoPro" class="w-[500px] h-auto rounded-3xl shadow-lg" />
      </div>
    </div>
  </div>

<!-- Adventure Headline -->
<div class="max-w-7xl mx-auto mt-16">
  <h2 class="text-2xl md:text-3xl font-bold text-center mb-8">
    Rejs Ikke Bare — <span class="text-[#B8082A]">Fang Eventyret.</span>
  </h2>

  <!-- Adventure Image Grid -->
  <div class="grid grid-cols-3 gap-6 mb-12">
    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Adventure 1" class="rounded-2xl object-cover w-full h-48" />
    <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Adventure 2" class="rounded-2xl object-cover w-full h-48" />
    <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80" alt="Adventure 3" class="rounded-2xl object-cover w-full h-48" />
    <img src="https://images.unsplash.com/photo-1465378790036-ffd8c8e80015?auto=format&fit=crop&w=400&q=80" alt="Adventure 4" class="rounded-2xl object-cover w-full h-48" />
    <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Adventure 5" class="rounded-2xl object-cover w-full h-48" />
    <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80" alt="Adventure 6" class="rounded-2xl object-cover w-full h-48" />
  </div>

  <!-- CTA Button -->
  <div class="flex justify-center mb-12">
    <button class="bg-[#B8082A] text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-[#a10725] transition">Fang dit eventyr her</button>
  </div>

  <!-- Underwater Hero Image & Product Cards -->
  <div class="grid grid-cols-3 gap-8 items-start">
    <img src="https://images.unsplash.com/photo-1465101178521-c1a4c8a0f8f5?auto=format&fit=crop&w=600&q=80" alt="Underwater Hero" class="rounded-2xl object-cover w-full h-80" />
    <div class="col-span-2 grid grid-cols-2 gap-8">
      <!-- Product Card 1 -->
      <div class="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
        <img src="https://images.unsplash.com/photo-1519183071298-a2962be56693?auto=format&fit=crop&w=400&q=80" alt="GoPro HERO10 Black" class="w-32 h-24 object-contain mb-4" />
        <h3 class="font-bold text-lg mb-2 text-black">GoPro HERO10 Black</h3>
        <p class="text-sm text-gray-600 mb-4 text-center">Kraftfuld performance med GP2 processor og 5.3K video</p>
        <div class="flex gap-2 text-xs text-gray-500 mb-4">
          <span>5.3K Video</span>
          <span>•</span>
          <span>Hypersmooth 4.0</span>
          <span>•</span>
          <span>Vandtæt</span>
        </div>
        <div class="flex items-center gap-2 mb-4">
          <span class="font-bold text-black">29 kr</span>
          <span class="text-gray-500">/ dag</span>
        </div>
        <button class="bg-[#B8082A] text-white font-semibold py-2 px-6 rounded-full shadow hover:bg-[#a10725] transition">Lej Nu</button>
      </div>
      <!-- Product Card 2 -->
      <div class="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
        <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="GoPro HERO11 Black" class="w-32 h-24 object-contain mb-4" />
        <h3 class="font-bold text-lg mb-2 text-black">GoPro HERO11 Black</h3>
        <p class="text-sm text-gray-600 mb-4 text-center">Avanceret billedsensor og 5.3K video</p>
        <div class="flex gap-2 text-xs text-gray-500 mb-4">
          <span>5.3K Video</span>
          <span>•</span>
          <span>Hypersmooth 5.0</span>
          <span>•</span>
          <span>Vandtæt</span>
        </div>
        <div class="flex items-center gap-2 mb-4">
          <span class="font-bold text-black">39 kr</span>
          <span class="text-gray-500">/ dag</span>
        </div>
        <button class="bg-[#B8082A] text-white font-semibold py-2 px-6 rounded-full shadow hover:bg-[#a10725] transition">Lej Nu</button>
      </div>
    </div>
  </div>
</div>


</template>
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

