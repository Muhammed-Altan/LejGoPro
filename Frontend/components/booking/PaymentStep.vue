
<template>
	<div class="bg-[#eef5ff] rounded-xl p-6 w-full max-w-xl mx-auto shadow-md">
		<div>
			<label class="flex items-center cursor-pointer mb-4">
				<input
					type="radio"
					class="form-radio accent-black w-6 h-6 mr-3"
					value="creditcard"
					v-model="selectedPayment"
				/>
				<span class="text-lg font-medium">Kreditkort</span>
			</label>
			<div v-if="selectedPayment === 'creditcard'" class="space-y-3 mb-4">
				<input
					type="text"
					placeholder="Navn på kort"
					class="w-full rounded-lg px-4 py-3 bg-white text-base focus:outline-none focus:ring-2 focus:ring-blue-200"
				/>
				<input
					type="text"
					placeholder="Kortnummer"
					class="w-full rounded-lg px-4 py-3 bg-white text-base focus:outline-none focus:ring-2 focus:ring-blue-200"
				/>
				<div class="flex gap-3">
					<input
						type="text"
						placeholder="Udløbsdato (MM/ÅÅ)"
						class="flex-1 rounded-lg px-4 py-3 bg-white text-base focus:outline-none focus:ring-2 focus:ring-blue-200"
					/>
					<input
						type="text"
						placeholder="Sikkerhedskode"
						class="flex-1 rounded-lg px-4 py-3 bg-white text-base focus:outline-none focus:ring-2 focus:ring-blue-200"
					/>
				</div>
			</div>
		</div>
		<div class="bg-white rounded-lg mb-2 flex items-center px-4 py-3 cursor-pointer border border-transparent hover:border-blue-200 transition" :class="selectedPayment === 'mobilpay' ? 'ring-2 ring-blue-300' : ''" @click="selectedPayment = 'mobilpay'">
			<input
				type="radio"
				class="form-radio accent-black w-6 h-6 mr-3"
				value="mobilpay"
				v-model="selectedPayment"
			/>
			<span class="text-lg">MobilPay</span>
		</div>
		<div class="bg-white rounded-lg flex items-center px-4 py-3 cursor-pointer border border-transparent hover:border-blue-200 transition" :class="selectedPayment === 'googlepay' ? 'ring-2 ring-blue-300' : ''" @click="selectedPayment = 'googlepay'">
			<input
				type="radio"
				class="form-radio accent-black w-6 h-6 mr-3"
				value="googlepay"
				v-model="selectedPayment"
			/>
			<span class="text-lg">GooglePay</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const selectedPayment = ref('creditcard');
</script>

<!-- No additional styles needed, all handled by Tailwind -->
