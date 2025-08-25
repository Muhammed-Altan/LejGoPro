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

