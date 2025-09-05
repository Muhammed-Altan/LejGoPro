
<template>
	<div class="space-y-6">
		<!-- GoPro Model Selection -->
		<section class="bg-gray-50 rounded-xl p-6 shadow flex flex-col gap-2">
			<h2 class="font-semibold text-lg mb-2">Vælg en GoPro Model</h2>
			<div v-for="model in models" :key="model.name" class="flex items-center justify-between py-2">
				<div class="flex flex-col">
					<span class="text-base">{{ model.name }}</span>
				</div>
				<div class="flex items-center gap-6">
					<span class="text-base">{{ model.price.toFixed(2) }} kr./dag</span>
					<button @click="selectModel(model)" class="flex items-center text-rose-600 hover:text-rose-700 font-semibold">
						<span class="mr-1 text-xl">+</span> Tilføj
					</button>
				</div>
			</div>
		</section>

		<!-- Selected Model and Quantity -->
		<div class="flex gap-4">
			<div class="flex-1 bg-blue-100 text-center rounded-lg py-2 font-medium">{{ selectedModel ? selectedModel.name : 'Vælg model' }}</div>
			<div class="flex-1 bg-blue-100 text-center rounded-lg py-2 font-medium">Antal modeller</div>
		</div>

		<!-- Accessories Selection -->
		<section class="bg-gray-50 rounded-xl p-6 shadow flex flex-col gap-2">
			<h2 class="font-semibold text-lg mb-2">Vælg tilbehør</h2>
			<div v-for="acc in accessories" :key="acc.name" class="flex items-center justify-between py-2">
				<div class="flex flex-col">
					<span class="text-base">{{ acc.name }}</span>
				</div>
				<div class="flex items-center gap-6">
					<span class="text-base">{{ acc.price.toFixed(2) }} kr./dag</span>
					<button @click="addAccessory(acc)" class="flex items-center text-rose-600 hover:text-rose-700 font-semibold">
						<span class="mr-1 text-xl">+</span> Tilføj
					</button>
				</div>
			</div>
		</section>

		<!-- Selected Accessory and Quantity -->
		<div class="flex gap-4">
			<div class="flex-1 bg-blue-100 text-center rounded-lg py-2 font-medium">Ekstra batterier</div>
			<div class="flex-1 bg-blue-100 text-center rounded-lg py-2 font-medium">Antal modeller</div>
		</div>

		<!-- Insurance Toggle -->
		<section class="bg-gray-50 rounded-xl p-6 shadow flex items-center justify-between">
			<div class="flex items-center gap-3">
				<span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-100">
					<svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
				</span>
				<div>
					<div class="font-semibold">Forsikring</div>
					<div class="text-sm text-gray-500">Fuld erstatningsdækning</div>
				</div>
			</div>
			<label class="inline-flex relative items-center cursor-pointer">
				<input type="checkbox" v-model="insurance" class="sr-only peer">
				<div class="w-14 h-8 bg-gray-200 rounded-full peer peer-checked:bg-rose-600 transition-colors"></div>
				<div class="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow peer-checked:translate-x-6 transition-transform"></div>
			</label>
		</section>

		<!-- Date Pickers -->
		<div class="flex gap-4">
			<div class="flex-1">
				<input type="text" placeholder="dd-mm-åååå" class="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400" />
			</div>
			<div class="flex-1">
				<input type="text" placeholder="dd-mm-åååå" class="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const models = [
	{ name: 'GoPro HERO10 Black', price: 70 },
	{ name: 'GoPro HERO11 Black', price: 90 },
];

const accessories = [
	{ name: 'Ekstra batterier', price: 70 },
	{ name: 'Grip', price: 70 },
	{ name: 'Sugekop til bil og ruder', price: 70 },
	{ name: 'Headstrap', price: 70 },
	{ name: 'Brystmount', price: 70 },
	{ name: 'Beskyttelsescase', price: 70 },
];

const selectedModel = ref<null | { name: string; price: number }>(null);
const insurance = ref(false);

function selectModel(model: { name: string; price: number }) {
	selectedModel.value = model;
}

function addAccessory(acc: { name: string; price: number }) {
	// Implement accessory selection logic as needed
}
</script>
