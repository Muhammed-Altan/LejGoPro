<template>
    <section class="max-w-xl mx-auto bg-white rounded-xl shadow-md p-8 font-sans text-gray-900">
        <h2 class="mb-1 text-xl font-semibold">Vælg dit udstyr</h2>
        <p class="mb-6 text-gray-600">Udfyld formularen nedenfor for at få et tilbud</p>
        <form @submit.prevent="submitBooking" class="space-y-7">
            <!-- Datoer -->
            <div class="flex flex-wrap gap-6 mb-4">
                <div class="flex-1 min-w-[180px] flex flex-col">
                    <label for="startDate" class="text-base font-semibold mb-1 text-gray-900">Startdato</label>
                    <input id="startDate" type="date" v-model="form.startDate" required class="p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
                </div>
                <div class="flex-1 min-w-[180px] flex flex-col">
                    <label for="endDate" class="text-base font-semibold mb-1 text-gray-900">Slutdato</label>
                    <input id="endDate" type="date" v-model="form.endDate" required class="p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
                </div>
            </div>
            <!-- Kamera og antal -->
            <div class="flex flex-wrap gap-6 mb-4 items-end">
                <div class="flex-1 min-w-[180px] flex flex-col">
                    <label for="camera" class="text-base font-semibold mb-1 text-gray-900">Vælg Kamera</label>
                    <select id="camera" v-model="form.camera" required class="p-3 border border-gray-200 rounded-lg bg-gray-50 text-base">
                        <option disabled value="">Vælg en GoPro Model</option>
                        <option>GoPro Hero 12</option>
                        <option>GoPro Hero 11</option>
                        <option>GoPro Max</option>
                    </select>
                </div>
                <div class="flex-1 min-w-[180px] flex flex-col">
                    <label for="amount" class="text-base font-semibold mb-1 text-gray-900">Antal</label>
                    <input id="amount" type="number" min="1" v-model.number="form.amount" required placeholder="Antal modeller" class="p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
                </div>
                <button type="button" class="ml-auto text-red-700 font-semibold flex items-center gap-2 mt-7" @click="addCamera">
                    <span class="text-xl">+</span>
                    <span>Tilføj</span>
                </button>
            </div>
            <!-- Ekstraudstyr -->
            <div class="mb-4">
                <label class="block text-base font-semibold mb-2 text-gray-900">Vælg Ekstraudstyr</label>
                <div class="flex flex-wrap gap-x-10 gap-y-3">
                    <label class="flex items-center"><input type="checkbox" v-model="form.extras" value="Ekstra batteri" class="mr-2" /> Ekstra batteri</label>
                    <label class="flex items-center"><input type="checkbox" v-model="form.extras" value="Grip" class="mr-2" /> Grip</label>
                    <label class="flex items-center"><input type="checkbox" v-model="form.extras" value="Headstrap" class="mr-2" /> Headstrap</label>
                    <label class="flex items-center"><input type="checkbox" v-model="form.extras" value="Brystmount" class="mr-2" /> Brystmount</label>
                    <label class="flex items-center"><input type="checkbox" v-model="form.extras" value="Beskyttelsescase" class="mr-2" /> Beskyttelsescase</label>
                    <label class="flex items-center"><input type="checkbox" v-model="form.extras" value="Sugekop til bil og ruder" class="mr-2" /> Sugekop til bil og ruder</label>
                </div>
            </div>
            <!-- Estimeret pris -->
            <div class="mb-4">
                <div class="bg-blue-50 rounded-lg p-4 w-full flex flex-col gap-1">
                    <div class="flex justify-between items-center">
                        <strong class="text-base">Estimeret pris:</strong>
                        <span class="text-lg font-semibold">{{ estimatedPrice }} kr</span>
                    </div>
                    <div class="text-sm text-gray-500">Vælg datoer og kamera for at se prisen</div>
                </div>
            </div>
            <!-- Levering -->
            <div>
                <h3 class="text-lg font-semibold mb-1">Levering</h3>
                <p class="mb-6 text-gray-600">Udfyld formularen nedenfor for at se Leveringsmetoder</p>
                <div class="flex flex-wrap gap-6 mb-4">
                    <div class="flex-1 min-w-[180px] flex flex-col">
                        <label for="name" class="text-base font-semibold mb-1 text-gray-900">Dit Fulde Navn</label>
                        <input id="name" v-model="form.name" required placeholder="Indtast dit fulde navn" class="p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
                    </div>
                    <div class="flex-1 min-w-[180px] flex flex-col">
                        <label for="phone" class="text-base font-semibold mb-1 text-gray-900">Telefonnummer</label>
                        <input id="phone" v-model="form.phone" required placeholder="+45 12 34 56 78" class="p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
                    </div>
                </div>
                <div class="flex flex-wrap gap-6 mb-4">
                    <div class="flex-1 min-w-[180px] flex flex-col">
                        <label for="email" class="text-base font-semibold mb-1 text-gray-900">Email</label>
                        <input id="email" type="email" v-model="form.email" required placeholder="din@email.com" class="p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
                    </div>
                </div>
                <!-- Adresse -->
                <div class="mb-4 space-y-3">
                    <div>
                        <label for="address" class="text-base font-semibold mb-1 text-gray-900">Adresse</label>
                        <input id="address" v-model="form.address" required placeholder="Adresse" class="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
                    </div>
                    <div>
                        <input id="address2" v-model="form.address2" placeholder="Lejlighed, etage osv. (Valgfri)" class="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
                    </div>
                    <div class="flex gap-4">
                        <input id="zip" v-model="form.zip" required placeholder="Postnummer" class="flex-1 p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
                        <input id="city" v-model="form.city" required placeholder="By" class="flex-1 p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
                    </div>
                </div>
                <div class="mb-4">
                    <div class="bg-blue-50 rounded-lg p-4 w-full text-sm text-gray-700">
                        Angiv din leveringsadresse for at se de tilgængelige leveringsmetoder
                    </div>
                </div>
            </div>
            <!-- Accept terms -->
            <div class="mb-6">
                <label class="flex items-center">
                    <input type="checkbox" v-model="form.acceptTerms" required class="mr-2" />
                    Accepter Lejebetingelser
                    <span class="text-red-600 ml-1">*</span>
                </label>
            </div>
            <!-- Submit -->
            <button type="submit" class="w-full bg-red-700 text-white text-lg font-semibold rounded-lg py-3 cursor-pointer mt-2 hover:bg-red-800 transition">Send forespørgelse</button>
        </form>
        <div v-if="submitted" class="mt-8 bg-green-50 rounded-lg p-4 text-center text-green-700 font-medium">
            <p>Tak for din forespørgsel, {{ form.name }}!</p>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            form: {
                startDate: '',
                endDate: '',
                camera: '',
                amount: 1,
                extras: [],
                name: '',
                phone: '',
                email: '',
                address: '',
                address2: '',
                zip: '',
                city: '',
                acceptTerms: false
            },
            submitted: false
        };
    },
    computed: {
        estimatedPrice() {
            // Simple price estimation logic
            if (!this.form.startDate || !this.form.endDate || !this.form.camera) return 0;
            const days = this.getDays(this.form.startDate, this.form.endDate);
            const basePrice = 100; // Example base price per day per camera
            return days > 0 ? days * basePrice * this.form.amount : 0;
        }
    },
    methods: {
        getDays(start, end) {
            const startDate = new Date(start);
            const endDate = new Date(end);
            const diff = (endDate - startDate) / (1000 * 60 * 60 * 24);
            return Math.ceil(diff) || 0;
        },
        addCamera() {
            // Placeholder for adding more camera models
            alert('Tilføj funktion ikke implementeret endnu.');
        },
        submitBooking() {
            this.submitted = true;
            // Here you can add logic to send booking data to your backend
        }
    }
};
</script>

