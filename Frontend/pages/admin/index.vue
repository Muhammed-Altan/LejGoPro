
<template>
    <div class="max-w-5xl mx-auto py-12">
        <h1 class="text-3xl font-bold mb-8 text-center">Admin Panel</h1>
        <div class="flex justify-center gap-4 mb-8">
            <button
                class="px-6 py-2 rounded font-semibold border transition"
                :class="activeTab === 'products' ? 'bg-[#B8082A] text-white border-[#B8082A]' : 'bg-white text-[#B8082A] border-[#B8082A]'"
                @click="activeTab = 'products'"
            >Produkter</button>
            <button
                class="px-6 py-2 rounded font-semibold border transition"
                :class="activeTab === 'orders' ? 'bg-[#B8082A] text-white border-[#B8082A]' : 'bg-white text-[#B8082A] border-[#B8082A]'"
                @click="activeTab = 'orders'"
            >Ordrer</button>
        </div>

        <div v-if="activeTab === 'products'">
                    <div class="flex justify-end mb-4">
                        <button class="bg-[#B8082A] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#a10725] transition" @click="showModal = true">Opret Produkt</button>
                    </div>
                    <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                        <div class="bg-white rounded-xl shadow-md p-8 w-full max-w-lg relative">
                            <button @click="showModal = false" class="absolute top-4 right-4 text-gray-400 hover:text-[#B8082A] text-2xl font-bold">&times;</button>
                            <h2 class="mb-1 text-xl font-semibold">Opret Produkt</h2>
                            <form @submit.prevent="createProduct" class="space-y-7">
                                <div class="flex flex-col">
                                    <label for="title" class="text-base font-semibold mb-1 text-gray-900">Navn</label>
                                    <input id="title" v-model="form.title" required class="p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
                                </div>
                                <div class="flex flex-col">
                                    <label for="description" class="text-base font-semibold mb-1 text-gray-900">Beskrivelse</label>
                                    <textarea id="description" v-model="form.description" required class="p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
                                </div>
                                <div class="flex flex-col">
                                    <label for="img" class="text-base font-semibold mb-1 text-gray-900">Billede URL</label>
                                    <input id="img" v-model="form.img" required class="p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
                                </div>
                                <div class="flex flex-col">
                                    <label for="features" class="text-base font-semibold mb-1 text-gray-900">Features (kommasepareret)</label>
                                    <input id="features" v-model="form.features" class="p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" placeholder="fx: 📷 5K Video, 🖥️ GP2 Processor" />
                                </div>
                                <div class="flex flex-row gap-4">
                                    <div class="flex-1 flex flex-col">
                                        <label for="priceDay" class="text-base font-semibold mb-1 text-gray-900">Pris pr. dag</label>
                                        <input id="priceDay" type="number" v-model.number="form.priceDay" required class="p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
                                    </div>
                                    <div class="flex-1 flex flex-col">
                                        <label for="priceWeek" class="text-base font-semibold mb-1 text-gray-900">Pris pr. uge</label>
                                        <input id="priceWeek" type="number" v-model.number="form.priceWeek" required class="p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
                                    </div>
                                </div>
                                <div class="flex items-center gap-2">
                                    <input id="popular" type="checkbox" v-model="form.popular" class="w-4 h-4" />
                                    <label for="popular" class="text-base font-semibold text-gray-900">Populær</label>
                                </div>
                                <div class="flex justify-end">
                                    <button type="submit" class="bg-[#B8082A] text-white px-6 py-2 rounded font-semibold shadow hover:bg-[#a10725] transition">Opret</button>
                                </div>
                            </form>
                        </div>
                    </div>
            <table class="w-full border rounded-xl overflow-hidden">
                <thead class="bg-gray-100">
                    <tr>
                        <th class="py-2 px-4 text-left">Navn</th>
                        <th class="py-2 px-4 text-left">Pris pr. dag</th>
                        <th class="py-2 px-4 text-left">Pris pr. uge</th>
                        <th class="py-2 px-4 text-left">Handlinger</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in products" :key="product.id">
                        <td class="py-2 px-4">{{ product.title }}</td>
                        <td class="py-2 px-4">{{ product.priceDay }} kr</td>
                        <td class="py-2 px-4">{{ product.priceWeek }} kr</td>
                                    <td class="py-2 px-4 flex gap-2">
                                        <button class="bg-blue-500 text-white px-2 py-1 rounded text-xs" @click="editProduct(product)">Rediger</button>
                                        <button class="bg-red-500 text-white px-2 py-1 rounded text-xs" @click="deleteProduct(product.id)">Slet</button>
                                    </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-else-if="activeTab === 'orders'">
            <div class="text-center text-gray-500 py-12">
                <h2 class="text-xl font-semibold mb-2">Ordrer</h2>
                <p>Ingen ordrer at vise endnu.</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showModal = ref(false);
const editingId = ref<number|null>(null);

const form = ref({
    title: '',
    description: '',
    img: '',
    features: '',
    priceDay: 0,
    priceWeek: 0,
    popular: false
});

function createProduct() {
    if (editingId.value !== null) {
        // Edit existing product
        const idx = products.value.findIndex(p => p.id === editingId.value);
        if (idx !== -1) {
            products.value[idx] = {
                ...products.value[idx],
                title: form.value.title,
                description: form.value.description,
                img: form.value.img,
                features: form.value.features.split(',').map(f => f.trim()),
                priceDay: form.value.priceDay,
                priceWeek: form.value.priceWeek,
                popular: form.value.popular
            };
        }
    } else {
        // Create new product
        products.value.push({
            id: Date.now(),
            title: form.value.title,
            description: form.value.description,
            img: form.value.img,
            features: form.value.features.split(',').map(f => f.trim()),
            priceDay: form.value.priceDay,
            priceWeek: form.value.priceWeek,
            popular: form.value.popular
        });
    }
    showModal.value = false;
    editingId.value = null;
    form.value = { title: '', description: '', img: '', features: '', priceDay: 0, priceWeek: 0, popular: false };
}

function deleteProduct(id: number) {
    products.value = products.value.filter(p => p.id !== id);
}

function editProduct(product: any) {
    editingId.value = product.id;
    form.value = {
        title: product.title,
        description: product.description,
        img: product.img,
        features: Array.isArray(product.features) ? product.features.join(', ') : product.features,
        priceDay: product.priceDay,
        priceWeek: product.priceWeek,
        popular: product.popular || false
    };
    showModal.value = true;
}

const activeTab = ref('products');

const products = ref([
    { id: 1, title: 'GoPro HERO10 Black', priceDay: 29, priceWeek: 109 },
    { id: 2, title: 'GoPro HERO11 Black', priceDay: 39, priceWeek: 129 },
    { id: 3, title: 'GoPro HERO9 Black', priceDay: 25, priceWeek: 89 }
]);
</script>

<style scoped>
table {
    border-collapse: collapse;
}
th, td {
    border-bottom: 1px solid #e5e7eb;
}
</style>
<script>

</script>

<style>

</style>