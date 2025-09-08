
<template>
		<div class="flex flex-col items-center justify-center min-h-[160px] bg-white w-full max-w-2xl mx-auto">
			<div class="flex flex-row items-center w-full px-6 py-4 mb-4">
				<input id="acceptTerms" type="checkbox" v-model="accepted" class="form-checkbox h-5 w-5 text-[#B90C2C] focus:ring-[#B90C2C] border-gray-300 rounded mr-3" />
				<label for="acceptTerms" class="text-base text-gray-800 select-none cursor-pointer">
					Jeg accepterer <a href="#" class="text-[#B90C2C] underline hover:text-[#a10a25]">lejebetingelserne</a>
				</label>
			</div>
			<button :disabled="!accepted" class="w-full bg-[#B90C2C] hover:bg-[#a10a25] text-white text-lg font-semibold py-3 rounded-b-lg focus:outline-none transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
				Betal Nu
			</button>
		</div>
</template>

<script setup>
import { ref } from 'vue';
const accepted = ref(false);
</script>
