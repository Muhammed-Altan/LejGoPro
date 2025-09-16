<template>
  <div>
    <VueDatePicker
      v-model="startDate"
      :enable-time-picker="false"
      format="dd/MM/yyyy"
      :input-class="'w-full border border-gray-300 rounded-lg py-3 px-4'"
      placeholder="Start dato"
    />
    <VueDatePicker
      v-model="endDate"
      :enable-time-picker="false"
      format="dd/MM/yyyy"
      :input-class="'w-full border border-gray-300 rounded-lg py-3 px-4'"
      placeholder="Slut dato"
    />
    <div class="mt-2">
      <button class="bg-[#B8082A] text-white px-4 py-2 rounded" @click="bookCamera">Book kamera</button>
    </div>
    <div class="mt-4">
      <ul>
        <li v-for="booking in bookings" :key="booking.id">
          {{ booking.start }} - {{ booking.end }} ({{ booking.cameraName }}, {{ booking.productName }})
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const props = defineProps<{ cameraId: number; cameraName?: string; productName?: string }>();
const startDate = ref<Date|null>(null);
const endDate = ref<Date|null>(null);
const bookings = ref<Array<{ id: number; start: string; end: string; cameraName: string; productName: string }>>([]);

async function fetchBookings() {
  const { $config } = useNuxtApp();
  const base = ($config?.public?.apiBase) || 'http://localhost:3001';
  const res = await fetch(`${base}/bookings/camera/${props.cameraId}`);
  if (res.ok) {
    const data = await res.json();
    bookings.value = data.map((booking: any) => ({
      id: booking.id,
      start: new Date(booking.startDate).toLocaleDateString(),
      end: new Date(booking.endDate).toLocaleDateString(),
      cameraName: booking.cameraName,
      productName: booking.productName
    }));
  }
}

onMounted(fetchBookings);

async function bookCamera() {
  if (!startDate.value || !endDate.value) return;
  // Post booking to backend
  const { $config } = useNuxtApp();
  const base = ($config?.public?.apiBase) || 'http://localhost:3001';
  const res = await fetch(`${base}/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      cameraId: props.cameraId,
      cameraName: props.cameraName,
      productName: props.productName,
      startDate: startDate.value,
      endDate: endDate.value
    })
  });
  if (res.ok) {
    await fetchBookings(); // Refresh bookings after successful booking
    startDate.value = null;
    endDate.value = null;
  } else {
    alert('Booking fejlede: Ugyldig booking');
  }
}
</script>
