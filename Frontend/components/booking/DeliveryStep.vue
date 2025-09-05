
<template>
	<form class="bg-white rounded-xl p-6 flex flex-col gap-4 max-w-2xl mx-auto shadow-md">
		<div class="flex flex-col md:flex-row gap-4">
			<input
				type="text"
				placeholder="Indtast dit fulde navn"
				class="flex-1 px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-500"
				autocomplete="name"
			/>
			<input
				type="tel"
				placeholder="+45 12 34 56 78"
				class="flex-1 px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-500"
				autocomplete="tel"
			/>
		</div>
		<input
			type="email"
			placeholder="din@email.com"
			class="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-500"
			autocomplete="email"
		/>
		<input
			type="text"
			placeholder="Adresse"
			class="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-500"
			autocomplete="address-line1"
		/>
		<input
			type="text"
			placeholder="Lejlighed, etage osv. (Valgfri)"
			class="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-500"
			autocomplete="address-line2"
		/>
		<div class="flex flex-col md:flex-row gap-4">
			<input
				type="text"
				placeholder="Postnummer"
				class="flex-1 px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-500"
				autocomplete="postal-code"
			/>
			<input
				type="text"
				placeholder="By"
				class="flex-1 px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 placeholder-gray-500"
				autocomplete="address-level2"
			/>
		</div>
		<div class="bg-blue-50 text-center text-gray-800 rounded-lg py-4 px-2 mt-2 text-base font-medium">
			Angiv din leveringsadresse for at se de tilgængelige leveringsmetoder
		</div>
	</form>
</template>

<script setup>
// No logic yet, presentational only
</script>

<!-- No additional styles needed, Tailwind is used -->
