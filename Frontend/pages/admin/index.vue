<template>
    <Header />
    <div class="max-w-5xl mx-auto py-12 mb-10">
        <h1 class="text-3xl font-bold mb-8 text-center">Admin Panel</h1>
        <div class="flex justify-center gap-4 mb-8">
            <button
                class="px-6 py-2 rounded font-semibold border transition cursor-pointer"
                :class="activeTab === 'products' ? 'bg-[#B8082A] text-white border-[#B8082A]' : 'bg-white text-[#B8082A] border-[#B8082A]'"
                @click="activeTab = 'products'"
            >Produkter</button>
            <button
                class="px-6 py-2 rounded font-semibold border transition cursor-pointer"
                :class="activeTab === 'accessory' ? 'bg-[#B8082A] text-white border-[#B8082A]' : 'bg-white text-[#B8082A] border-[#B8082A]'"
                @click="activeTab = 'accessory'"
            >Tilbehør</button>
            <button
                class="px-6 py-2 rounded font-semibold border transition cursor-pointer"
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
                            <h2 class="mb-1 text-xl font-semibold cursor-pointer">Opret Produkt</h2>
                            <form @submit.prevent="createProduct" class="space-y-7">
                                <div class="flex flex-col">
                                    <label for="name" class="text-base font-semibold mb-1 text-gray-900">Navn</label>
                                    <input id="name" v-model="form.name" required class="p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
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
                                        <label for="dailyPrice" class="text-base font-semibold mb-1 text-gray-900">Pris pr. dag</label>
                                        <input id="dailyPrice" type="number" v-model.number="form.dailyPrice" required class="p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
                                    </div>
                                    <div class="flex-1 flex flex-col">
                                        <label for="weeklyPrice" class="text-base font-semibold mb-1 text-gray-900">Pris pr. uge</label>
                                        <input id="weeklyPrice" type="number" v-model.number="form.weeklyPrice" required class="p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
                                    </div>
                                    <div class="flex-1 flex flex-col">
                                        <label for="twoWeekPrice" class="text-base font-semibold mb-1 text-gray-900">Pris pr. 2 uger</label>
                                        <input id="twoWeekPrice" type="number" v-model.number="form.twoWeekPrice" required class="p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
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
                        <td class="py-2 px-4">{{ product.name }}</td>
                        <td class="py-2 px-4">{{ product.dailyPrice }} kr</td>
                        <td class="py-2 px-4">{{ product.weeklyPrice }} kr</td>
                        <td class="py-2 px-4 flex gap-2">
                            <button class="bg-blue-500 text-white px-2 py-1 rounded text-xs cursor-pointer" @click="editProduct(product)">Rediger</button>
                            <button class="bg-red-500 text-white px-2 py-1 rounded text-xs cursor-pointer" @click="deleteProduct(product)">Slet</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    <div v-else-if="activeTab === 'accessory'">
            <div class="flex justify-end mb-4">
                <button class="bg-[#B8082A] text-white px-4 py-2 rounded font-semibold shadow hover:bg-[#a10725] transition cursor-pointer" @click="showAccessoryModal = true">Opret Tilbehør</button>
            </div>
            <div v-if="showAccessoryModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                <div class="bg-white rounded-xl shadow-md p-8 w-full max-w-lg relative">
                    <button @click="showAccessoryModal = false" class="absolute top-4 right-4 text-gray-400 hover:text-[#B8082A] text-2xl font-bold cursor-pointer">&times;</button>
                    <h2 class="mb-1 text-xl font-semibold cursor-pointer">Opret Tilbehør</h2>
                    <form @submit.prevent="createAccessory" class="space-y-7">
                        <div class="flex flex-col">
                            <label for="accessoryName" class="text-base font-semibold mb-1 text-gray-900">Navn</label>
                            <input id="accessoryName" v-model="accessoryForm.name" required class="p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
                        </div>
                        <div class="flex flex-col">
                            <label for="accessoryDescription" class="text-base font-semibold mb-1 text-gray-900">Beskrivelse</label>
                            <textarea id="accessoryDescription" v-model="accessoryForm.description" required class="p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
                        </div>
                        <div class="flex flex-col">
                            <label for="accessoryImg" class="text-base font-semibold mb-1 text-gray-900">Billede URL</label>
                            <input id="accessoryImg" v-model="accessoryForm.img" required class="p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
                        </div>
                        <div class="flex flex-row gap-4">
                            <div class="flex-1 flex flex-col">
                                <label for="accessoryPrice" class="text-base font-semibold mb-1 text-gray-900">Pris</label>
                                <input id="accessoryPrice" type="number" v-model.number="accessoryForm.price" required class="p-3 border border-gray-200 rounded-lg bg-gray-50 text-base" />
                            </div>
                        </div>
                        <div class="flex justify-end">
                            <button type="submit" class="bg-[#B8082A] text-white px-6 py-2 rounded font-semibold shadow hover:bg-[#a10725] transition cursor-pointer">Opret</button>
                        </div>
                    </form>
                </div>
            </div>
            <table class="w-full border rounded-xl overflow-hidden">
                <thead class="bg-gray-100">
                    <tr>
                        <th class="py-2 px-4 text-left">Navn</th>
                        <th class="py-2 px-4 text-left">Pris</th>
                        <th class="py-2 px-4 text-left">Handlinger</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="accessory in accessory" :key="accessory.id">
                        <td class="py-2 px-4">{{ accessory.name }}</td>
                        <td class="py-2 px-4">{{ accessory.price }} kr</td>
                        <td class="py-2 px-4 flex gap-2">
                            <button class="bg-blue-500 text-white px-2 py-1 rounded text-xs cursor-pointer" @click="editAccessory(accessory)">Rediger</button>
                            <button class="bg-red-500 text-white px-2 py-1 rounded text-xs cursor-pointer" @click="deleteAccessory(accessory.id)">Slet</button>
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
    <Footer />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showModal = ref(false);
const editingId = ref<number|null>(null);
const form = ref({
    name: '',
    description: '',
    img: '',
    features: '',
    dailyPrice: 0,
    weeklyPrice: 0,
    twoWeekPrice: 0,
    popular: false
});
const products = ref([]);

async function fetchProducts() {
    const res = await fetch('http://localhost:3001/products');
    products.value = await res.json();
}

fetchProducts();

async function createProduct() {
    // Log all form data
    const payload = {
        name: form.value.name,
        description: form.value.description,
        img: form.value.img,
        features: form.value.features,
        dailyPrice: form.value.dailyPrice,
        weeklyPrice: form.value.weeklyPrice,
        twoWeekPrice: form.value.twoWeekPrice,
        popular: form.value.popular
    };
    if (editingId.value) {
        // Update existing product
        await fetch(`http://localhost:3001/products/${editingId.value}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    } else {
        // Create new product
        await fetch('http://localhost:3001/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    }
    showModal.value = false;
    editingId.value = null;
    form.value = { name: '', description: '', img: '', features: '', dailyPrice: 0, weeklyPrice: 0, twoWeekPrice: 0, popular: false };
    await fetchProducts();
}

async function deleteProduct(product: any) {
    await fetch(`http://localhost:3001/products/${product.id}`, {
        method: 'DELETE'
    });
    await fetchProducts();
}

function editProduct(product: any) {
    editingId.value = product.id;
    form.value = {
        name: product.name,
        description: product.description,
        img: product.img,
        features: Array.isArray(product.features) ? product.features.join(', ') : product.features,
        dailyPrice: product.dailyPrice,
        weeklyPrice: product.weeklyPrice,
        twoWeekPrice: product.twoWeekPrice || 0,
        popular: product.popular || false
    };
    showModal.value = true;
}

const activeTab = ref('products');

const showAccessoryModal = ref(false);
const editingAccessoryId = ref<number|null>(null);
interface Accessory {
    id: number;
    name: string;
    description: string;
    img: string;
    price: number;
}
const accessory = ref<Accessory[]>([]);
const accessoryForm = ref({ name: '', description: '', img: '', price: 0 });

async function fetchAccessory() {
    const res = await fetch('http://localhost:3001/accessory');
    accessory.value = await res.json();
}
fetchAccessory();

async function createAccessory() {
    const payload = { name: accessoryForm.value.name, description: accessoryForm.value.description, img: accessoryForm.value.img, price: accessoryForm.value.price };
    if (editingAccessoryId.value) {
        await fetch(`http://localhost:3001/accessory/${editingAccessoryId.value}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    } else {
        await fetch('http://localhost:3001/accessory', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    }
    showAccessoryModal.value = false;
    editingAccessoryId.value = null;
    accessoryForm.value = { name: '', description: '', img: '', price: 0 };
    await fetchAccessory();
}

async function deleteAccessory(id: number) {
    await fetch(`http://localhost:3001/accessory/${id}`, { method: 'DELETE' });
    await fetchAccessory();
}

function editAccessory(accessory: any) {
    editingAccessoryId.value = accessory.id;
    accessoryForm.value = {
        name: accessory.name,
        description: accessory.description,
        img: accessory.img,
        price: accessory.price
    };
    showAccessoryModal.value = true;
}
</script>

<style scoped>
table {
    border-collapse: collapse;
}
th, td {
    border-bottom: 1px solid #e5e7eb;
}

button {
    cursor: pointer;
}
</style>