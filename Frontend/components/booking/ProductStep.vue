<template>
	<div class="space-y-6 w-full max-w-2xl mx-auto">
	<article>
		<h1 class="font-semibold text-lg">Vælg dit udstyr</h1>
		<h2 class="font-medium text-base">Udfyld formularen nedenfor for at få et tilbud</h2>
	</article>
		<!-- GoPro Model Selection (Dropdown) -->
		<section class="bg-gray-50 rounded-xl p-6 shadow flex flex-col gap-2">
			<div class="flex items-center justify-between mb-2">
				<h2 class="font-semibold text-lg">Vælg en GoPro Model</h2>
			</div>
			<div class="flex items-center gap-3">
				<select
					v-model="selectedModelName"
					class="flex-1 w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
				>
					<option disabled value="">Vælg en model…</option>
					<option v-for="model in models" :key="model.name" :value="model.name">
						{{ model.name }} — {{ model.price.toFixed(2) }} kr./dag
					</option>
				</select>
				<button
					:disabled="!selectedModelName"
					@click="onAddSelectedModel"
					class="flex items-center tilfoej-btn font-semibold disabled:opacity-40"
				>
					<span class="mr-1 text-xl plus-red">+</span> Tilføj
				</button>
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

		<!-- Accessories Selection (Dropdown) -->
		<section class="bg-gray-50 rounded-xl p-6 shadow flex flex-col gap-2">
			<div class="flex items-center justify-between mb-2">
				<h2 class="font-semibold text-lg">Vælg tilbehør</h2>
			</div>
			<div class="flex items-center gap-3">
				<select
					v-model="selectedAccessoryName"
					class="flex-1 w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white"
				>
					<option disabled value="">Vælg tilbehør…</option>
					<option v-for="acc in accessories" :key="acc.name" :value="acc.name">
						{{ acc.name }} — {{ acc.price.toFixed(2) }} kr./dag
					</option>
				</select>
				<button
					:disabled="!selectedAccessoryName"
					@click="onAddSelectedAccessory"
					class="flex items-center tilfoej-btn font-semibold disabled:opacity-40"
				>
					<span class="mr-1 text-xl plus-red">+</span> Tilføj
				</button>
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
					<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#08d035" d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22m0-2.1q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3m0-7.9"/></svg>
				</span>
				<div>
						 <div class="font-semibold flex items-center gap-1">
							 Forsikring
							 <span class="relative group cursor-pointer">
								 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="#FBBF24"/><text x="12" y="17" text-anchor="middle" font-size="16" fill="#fff" font-family="Arial" font-weight="bold">!</text></svg>
								 <span class="absolute left-1/2 z-10 -translate-x-1/2 mt-2 w-56 rounded bg-white text-white text-xs px-3 py-2 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-normal shadow-lg">
									 Dette er dummy tekst om forsikringen. Her kan du forklare hvad forsikringen dækker, f.eks. skader, tyveri, selvrisiko osv.
								 </span>
							 </span>
						 </div>
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
				<VueDatePicker v-model="startDate" :input-class="'w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400'" placeholder="Start dato" />
			</div>
			<div class="flex-1">
				<VueDatePicker v-model="endDate" :input-class="'w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400'" placeholder="Slut dato" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

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
// Replaced collapsibles with dropdown selections
const selectedModelName = ref<string>('');
const selectedAccessoryName = ref<string>('');
const startDate = ref(null);
const endDate = ref(null);


function selectModel(model: { name: string; price: number }) {
	const found = selectedModels.value.find((m) => m.name === model.name);
	if (found) {
		found.quantity++;
	} else {
		selectedModels.value.push({ ...model, quantity: 1 });
	}
}

function onAddSelectedModel() {
	const model = models.find(m => m.name === selectedModelName.value);
	if (model) selectModel(model);
	// reset selection to allow adding the same again
	selectedModelName.value = '';
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

function onAddSelectedAccessory() {
	const acc = accessories.find(a => a.name === selectedAccessoryName.value);
	if (acc) addAccessory(acc);
	selectedAccessoryName.value = '';
}

function removeAccessory(idx: number) {
	selectedAccessories.value.splice(idx, 1);
}

// --- Optionally, expose totalPrice and getRentalDays for template use ---
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
