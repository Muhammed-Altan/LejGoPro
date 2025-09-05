
<template>
	<div class="bg-white rounded-2xl p-8 max-w-lg mx-auto shadow-md">
		<h2 class="text-2xl font-semibold mb-6">Din kurv</h2>
		<div class="flex items-start mb-6">
			<img src="/Hero-img.jpg" alt="GoPro HERO10 Black" class="w-28 h-24 object-cover rounded-lg mr-4" />
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
				<span>198,00 kr.</span>
			</div>
			<div class="flex justify-between text-base">
				<span>1x Grip</span>
				<span>79,00 kr.</span>
			</div>
		</div>
		<div class="flex justify-between text-base mb-1">
			<span>Subtotal - 4 varer</span>
			<span>776,00 kr.</span>
		</div>
		<div class="flex justify-between text-base mb-4">
			<span>Levering</span>
			<span class="text-gray-400">Angiv leveringsadresse</span>
		</div>
		<div class="border-t pt-4 mt-4">
			<div class="flex justify-between items-end mb-1">
				<span class="text-xl font-semibold">I alt:</span>
				<span class="text-xl font-semibold">DKK 776,00 kr.</span>
			</div>
			<div class="text-sm text-gray-500">Inklusiv 200,00 kr. i afgifter</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// Static mockup for now. Replace with props or state for dynamic data.
</script>

<style scoped>
* {
	color: black !important;
}

</style>
