
<template>
				<div class="flex flex-col items-center justify-center min-h-[160px] bg-white w-full max-w-2xl mx-auto">
			<div class="flex flex-row items-center w-full px-6 py-4 mb-4">
				<input id="acceptTerms" type="checkbox" v-model="accepted" class="form-checkbox h-5 w-5 text-[#B90C2C] focus:ring-[#B90C2C] border-gray-300 rounded mr-3" />
				<label for="acceptTerms" class="text-base text-gray-800 select-none cursor-pointer">
					Jeg accepterer <a href="#" class="text-[#B90C2C] underline hover:text-[#a10a25]">lejebetingelserne</a>
				</label>
			</div>
						<button :disabled="!canBook" @click="bookNow" class="w-full bg-[#B90C2C] hover:bg-[#a10a25] text-white text-lg font-semibold py-3 rounded-b-lg focus:outline-none transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
								Betal Nu
						</button>
		</div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useCheckoutStore } from '@/stores/checkout';
const accepted = ref(false);
let store;
if (process.client) {
	store = useCheckoutStore();
} else {
	// fallback for SSR, use empty/defaults
	store = {
		startDate: null,
		endDate: null,
		productId: null,
	};
}

const canBook = computed(() => !!accepted.value && !!store.startDate && !!store.endDate);

async function bookNow() {
	if (!store.startDate || !store.endDate) return;
	try {
		// Prefer productId from selected models; fallback to legacy store.productId, then default 1
		const productId = (store.getFirstProductId && store.getFirstProductId()) || store.productId || 1;
		const { $config } = useNuxtApp();
		const base = ($config?.public?.apiBase) || 'http://localhost:3001';
		const res = await fetch(`${base}/bookings/by-product`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				productId,
				startDate: store.startDate, // already ISO string
				endDate: store.endDate,
			}),
		});
		if (!res.ok) {
			const txt = await res.text();
			throw new Error(txt || 'Booking failed');
		}
		const data = await res.json();
		alert('Booking successful! ID: ' + data.id);
	} catch (e) {
		alert('Booking failed: ' + (e?.message ?? e));
	}
}
</script>
