
<template>
	<div
		class="bg-white rounded-2xl p-8 max-w-lg mx-auto shadow-md"
		:class="stickyClasses"
	>
		<h2 class="text-2xl font-semibold mb-6">Din kurv</h2>
		<div class="flex items-start mb-6">
			<img src="/hero-bg/federico-persiani-XvPuZ2Q71GA-unsplash.jpg" alt="GoPro HERO10 Black" class="w-28 h-24 object-cover rounded-lg mr-4" />
			<div class="flex-1">
				<div class="flex justify-between items-start">
					<div>
						<div class="text-lg font-semibold">GoPro HERO10 Black</div>
						<div class="text-sm text-gray-500">Standard udstyr inkluderet</div>
						<div class="text-lg font-medium whitespace-nowrap">499,00 kr.</div>
					</div>
				</div>
			</div>
		</div>
		<div class="mb-4">
			<div class="font-semibold mb-1">Ekstra udstyr:</div>
			<div class="flex justify-between text-base mb-1">
				<span>2x Ekstra batteri</span>
				<span>140,00 kr.</span>
			</div>
			<div class="flex justify-between text-base">
				<span>1x Grip</span>
				<span>70,00 kr.</span>
			</div>
		</div>
		<div class="flex justify-between text-base mb-1">
			<span>Subtotal - 4 varer</span>
			<span>700 kr.</span>
		</div>
		<div class="flex justify-between text-base mb-4">
			<span>Levering</span>
			<span class="text-gray-400">Gratis</span>
		</div>
		<div class="border-t pt-4 mt-4">
			<div class="flex justify-between items-end mb-1">
				<span class="text-xl font-semibold">I alt:</span>
				<span class="text-xl font-semibold">DKK 776,00 kr.</span>
			</div>
			<div class="text-sm text-gray-500">Inklusiv 200,00 kr. i afgifter</div>
		</div>

		<!-- Included Equipment Card -->
		<!-- <div class="bg-white rounded-xl shadow-md p-6 flex flex-col items-start text-xs mt-6">
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
		</div> -->

		<!-- Gratis levering Card -->
		<!-- <div class="bg-white rounded-xl shadow-md p-6 flex flex-col items-start text-xs mt-6">
			<div class="flex items-center mb-4 w-full">
				<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#273edb" d="m.5 13.325l.5-2h5.5l-.5 2zM7 20q-1.25 0-2.125-.875T4 17H1.5l.5-2.175h5.175l.9-3.65h2.1l1.25-5H4.5l.15-.6q.15-.7.688-1.137T6.6 4H18l-.925 4H20l3 4l-1 5h-2q0 1.25-.875 2.125T17 20t-2.125-.875T14 17h-4q0 1.25-.875 2.125T7 20M2.5 9.675l.5-2h6.5l-.5 2zM7 18q.425 0 .713-.288T8 17t-.288-.712T7 16t-.712.288T6 17t.288.713T7 18m10 0q.425 0 .713-.288T18 17t-.288-.712T17 16t-.712.288T16 17t.288.713T17 18m-1.075-5h4.825l.1-.525L19 10h-2.375z"/></svg>
				<h3 class="text-xl font-semibold text-black !text-base lg:!text-xl">Gratis levering</h3>
			</div>
			<p class="text-black">Vi sørger for, at dit GoPro og udstyr leveres helt gratis – så du kan fokusere på dit eventyr.</p>
		</div> -->
	</div>
</template>

<script setup lang="ts">
// Sticky on desktop: keep basket visible while scrolling.
// Mobile: normal flow to avoid covering content.
import { computed } from 'vue'

const stickyClasses = computed(() =>
	// Tailwind classes:
	// lg:sticky -> sticky on large screens and up
	// lg:top-6 -> offset from top
	// lg:max-h-[calc(100vh-3rem)] -> keep inside viewport with padding
	// lg:overflow-auto -> scroll internal content if taller
	'lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] lg:overflow-auto'
)
</script>

<style scoped>
* {
	color: black !important;
}

</style>
