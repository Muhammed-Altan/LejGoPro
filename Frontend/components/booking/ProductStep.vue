<template>
<div class="space-y-6">
		<!-- GoPro Model Selection (Collapsible) -->
		<section class="bg-gray-50 rounded-xl p-6 shadow flex flex-col gap-2">
			<div class="flex items-center justify-between mb-2">
				<h2 class="font-semibold text-lg">Vælg en GoPro Model</h2>
				<button @click="showModels = !showModels" class="text-black font-medium focus:outline-none">
					{{ showModels ? 'Skjul' : 'Vis' }}
				</button>
			</div>
			<div v-show="showModels">
				<div v-for="model in models" :key="model.name" class="flex items-center justify-between py-2">
					<div class="flex flex-col">
						<span class="text-base">{{ model.name }}</span>
					</div>
					<div class="flex items-center gap-6">
						<span class="text-base">{{ model.price.toFixed(2) }} kr./dag</span>
						<button @click="selectModel(model)" class="flex items-center tilfoej-btn font-semibold">
							<span class="mr-1 text-xl plus-red">+</span> Tilføj
						</button>
					</div>
				</div>
			</div>
		</section>

		<!-- Selected Model and Quantity -->
		<div v-if="selectedModels.length" class="space-y-2">
			<div v-for="(item, idx) in selectedModels" :key="item.name" class="flex gap-4 items-center">
				<div class="flex-1 bg-blue-100 text-center rounded-lg py-2 font-medium">{{ item.name }}</div>
				<div class="flex-1 bg-blue-100 text-center rounded-lg py-2 font-medium flex items-center justify-center gap-2">
					<span>Antal modeller</span>
					<input type="number" min="1" v-model.number="item.quantity" class="w-20 text-center rounded border border-gray-300" />
				</div>
				<button @click="removeModel(idx)" class="ml-2 text-sm text-gray-500 hover:text-black">Fjern</button>
			</div>
		</div>

		<!-- Accessories Selection (Collapsible) -->
		<section class="bg-gray-50 rounded-xl p-6 shadow flex flex-col gap-2">
			<div class="flex items-center justify-between mb-2">
				<h2 class="font-semibold text-lg">Vælg tilbehør</h2>
				<button @click="showAccessories = !showAccessories" class="text-black font-medium focus:outline-none">
					{{ showAccessories ? 'Skjul' : 'Vis' }}
				</button>
			</div>
			<div v-show="showAccessories">
				<div v-for="acc in accessories" :key="acc.name" class="flex items-center justify-between py-2">
					<div class="flex flex-col">
						<span class="text-base">{{ acc.name }}</span>
					</div>
					<div class="flex items-center gap-6">
						<span class="text-base">{{ acc.price.toFixed(2) }} kr./dag</span>
						<button @click="addAccessory(acc)" class="flex items-center tilfoej-btn font-semibold">
							<span class="mr-1 text-xl plus-red">+</span> Tilføj
						</button>
					</div>
				</div>
			</div>
		</section>

		<!-- Selected Accessory and Quantity -->
		<div v-if="selectedAccessories.length" class="space-y-2">
			<div v-for="(item, idx) in selectedAccessories" :key="item.name" class="flex gap-4 items-center">
				<div class="flex-1 bg-blue-100 text-center rounded-lg py-2 font-medium">{{ item.name }}</div>
				<div class="flex-1 bg-blue-100 text-center rounded-lg py-2 font-medium flex items-center justify-center gap-2">
					<span>Antal modeller</span>
					<input type="number" min="1" v-model.number="item.quantity" class="w-20 text-center rounded border border-gray-300" />
				</div>
				<button @click="removeAccessory(idx)" class="ml-2 text-sm text-gray-500 hover:text-black">Fjern</button>
			</div>
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

const selectedModels = ref<{ name: string; price: number; quantity: number }[]>([]);
const selectedAccessories = ref<{ name: string; price: number; quantity: number }[]>([]);
const insurance = ref(false);
const showModels = ref(false);
const showAccessories = ref(false);

function selectModel(model: { name: string; price: number }) {
	const found = selectedModels.value.find((m) => m.name === model.name);
	if (found) {
		found.quantity++;
	} else {
		selectedModels.value.push({ ...model, quantity: 1 });
	}
}

function removeModel(idx: number) {
	selectedModels.value.splice(idx, 1);
}

function addAccessory(acc: { name: string; price: number }) {
	const found = selectedAccessories.value.find((a) => a.name === acc.name);
	if (found) {
		found.quantity++;
	} else {
		selectedAccessories.value.push({ ...acc, quantity: 1 });
	}
}

function removeAccessory(idx: number) {
	selectedAccessories.value.splice(idx, 1);
}
</script>
<style scoped>
* {
	color: black !important;
}

/* Custom red for Tilføj buttons */
.tilfoej-btn {
	color: #B8082A !important;
}
.tilfoej-btn:hover {
	color: #8a061f !important;
}
.plus-red {
	color: #B8082A !important;
}
</style>
