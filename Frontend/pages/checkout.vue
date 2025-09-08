<template>
  <Header />
  <section class="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
    <!-- Venstre side (2/3 af bredden) -->
    <div class="lg:col-span-2 space-y-6 bg-white p-6 rounded-xl shadow-md">
      <ProductStep />
      <DeliveryStep />
      <PaymentStep />
      <BookingConfirmation />
    </div>

    <!-- Højre side (1/3 af bredden, sticky kurv) -->
    <aside class="space-y-6">
      <BasketView />
      <!-- Included Equipment Card -->
      <div class="bg-white rounded-xl shadow-md p-6 flex flex-col items-start text-xs">
        <div class="flex items-center mb-4 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#22fd21" d="M16.5 22v-3H14l3.5-5v3H20zM8 22q-.425 0-.712-.288T7 21V5q0-.425.288-.712T8 4h2V2h4v2h2q.425 0 .713.288T17 5v7q-2.5.025-4.25 1.763T11 18q0 1.15.4 2.175T12.525 22z"/></svg>
            <h3 class="text-xl font-semibold text-black !text-base lg:!text-xl">Inkluderet udstyr</h3>
        </div>
        <div class="grid grid-cols-2 gap-x-8 gap-y-2 w-full text-black">
          <div>Beskyttelsescase/dykkercase</div>
          <div>Ladekabel (USB til USB-C)</div>
          <div>Micro SD-kort (minimum 64 GB)</div>
          <div>Rejsetaske</div>
        </div>
      </div>
        <!-- Gratis levering Card -->
        <div class="bg-white rounded-xl shadow-md p-6 flex flex-col items-start text-xs">
          <div class="flex items-center mb-4 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#273edb" d="m.5 13.325l.5-2h5.5l-.5 2zM7 20q-1.25 0-2.125-.875T4 17H1.5l.5-2.175h5.175l.9-3.65h2.1l1.25-5H4.5l.15-.6q.15-.7.688-1.137T6.6 4H18l-.925 4H20l3 4l-1 5h-2q0 1.25-.875 2.125T17 20t-2.125-.875T14 17h-4q0 1.25-.875 2.125T7 20M2.5 9.675l.5-2h6.5l-.5 2zM7 18q.425 0 .713-.288T8 17t-.288-.712T7 16t-.712.288T6 17t.288.713T7 18m10 0q.425 0 .713-.288T18 17t-.288-.712T17 16t-.712.288T16 17t.288.713T17 18m-1.075-5h4.825l.1-.525L19 10h-2.375z"/></svg>
            <h3 class="text-xl font-semibold text-black !text-base lg:!text-xl">Gratis levering</h3>
          </div>
          <p class="text-black">Vi sørger for, at dit GoPro og udstyr leveres helt gratis – så du kan fokusere på dit eventyr.</p>
        </div>
    </aside>
  </section>
  <Footer />
</template>

<script setup lang="ts">
import ProductStep from '@/components/booking/ProductStep.vue';
import DeliveryStep from '@/components/booking/DeliveryStep.vue';
import PaymentStep from '@/components/booking/PaymentStep.vue';
import BookingConfirmation from '@/components/booking/BookingConfirmation.vue';
import BasketView from '@/components/booking/BasketView.vue';
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
</script>