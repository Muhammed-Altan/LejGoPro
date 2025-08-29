<template>
    <section class="booking-container">
        <h2>Book dit udstyr</h2>
        <p>Udfyld formularen nedenfor for at få et tilbud</p>
        <form @submit.prevent="submitBooking" class="booking-form">
            <div class="row">
                <div class="field">
                    <label for="startDate">Startdato</label>
                    <input id="startDate" type="date" v-model="form.startDate" required />
                </div>
                <div class="field">
                    <label for="endDate">Slutdato</label>
                    <input id="endDate" type="date" v-model="form.endDate" required />
                </div>
            </div>
            <div class="row">
                <div class="field">
                    <label for="camera">Vælg Kamera</label>
                    <select id="camera" v-model="form.camera" required>
                        <option disabled value="">Vælg en GoPro Model</option>
                        <option>GoPro Hero 12</option>
                        <option>GoPro Hero 11</option>
                        <option>GoPro Max</option>
                    </select>
                </div>
                <div class="field">
                    <label for="amount">Antal</label>
                    <input id="amount" type="number" min="1" v-model.number="form.amount" required placeholder="Antal modeller" />
                </div>
                <button type="button" class="add-btn" @click="addCamera">Tilføj</button>
            </div>
            <div class="row">
                <label>Vælg Ekstraudstyr</label>
                <div class="extras">
                    <label><input type="checkbox" v-model="form.extras" value="Ekstra batteri" /> Ekstra batteri</label>
                    <label><input type="checkbox" v-model="form.extras" value="Grip" /> Grip</label>
                    <label><input type="checkbox" v-model="form.extras" value="Headstrap" /> Headstrap</label>
                    <label><input type="checkbox" v-model="form.extras" value="Brystmount" /> Brystmount</label>
                    <label><input type="checkbox" v-model="form.extras" value="Beskyttelsescase" /> Beskyttelsescase</label>
                    <label><input type="checkbox" v-model="form.extras" value="Sugekop til bil og ruder" /> Sugekop til bil og ruder</label>
                </div>
            </div>
            <div class="row">
                <div class="field">
                    <label for="name">Dit Fulde Navn</label>
                    <input id="name" v-model="form.name" required placeholder="Indtast dit fulde navn" />
                </div>
                <div class="field">
                    <label for="phone">Telefonnummer</label>
                    <input id="phone" v-model="form.phone" required placeholder="+45 12 34 56 78" />
                </div>
            </div>
            <div class="row">
                <div class="field">
                    <label for="email">Email</label>
                    <input id="email" type="email" v-model="form.email" required placeholder="din@email.com" />
                </div>
            </div>
            <div class="row">
                <div class="price-box">
                    <strong>Estimeret pris:</strong>
                    <span>{{ estimatedPrice }} kr</span>
                    <div class="price-note">Vælg datoer og kamera for at se prisen</div>
                </div>
            </div>
            <div class="row terms-row">
                <label>
                    <input type="checkbox" v-model="form.acceptTerms" required />
                    Accepter Lejebetingelser
                </label>
            </div>
            <button type="submit" class="submit-btn">Send forespørgelse</button>
        </form>
        <div v-if="submitted" class="confirmation">
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

<style scoped>
.booking-container {
    max-width: 600px;
    margin: 2rem auto;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.07);
    padding: 2rem 2.5rem;
    font-family: 'Inter', Arial, sans-serif;
    color: #222;
}
h2 {
    margin-bottom: 0.2rem;
    font-size: 1.4rem;
    font-weight: 600;
}
.booking-form p {
    margin-bottom: 1.5rem;
    color: #555;
}
.row {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 1.2rem;
}
.field {
    flex: 1;
    min-width: 180px;
    display: flex;
    flex-direction: column;
}
label {
    font-size: 0.98rem;
    margin-bottom: 0.3rem;
    color: #222;
}
input, select {
    padding: 0.6rem;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1rem;
    background: #fafafa;
}
input[type="checkbox"] {
    margin-right: 0.5em;
}
.extras {
    display: flex;
    flex-wrap: wrap;
    gap: 1.2rem;
}
.add-btn {
    align-self: flex-end;
    background: none;
    border: none;
    color: #c00;
    font-weight: 600;
    cursor: pointer;
    margin-top: 1.7rem;
}
.price-box {
    background: #f4f7fa;
    border-radius: 6px;
    padding: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
}
.price-note {
    font-size: 0.95rem;
    color: #888;
}
.terms-row {
    margin-bottom: 1.5rem;
}
.submit-btn {
    width: 100%;
    background: #c00;
    color: #fff;
    font-size: 1.1rem;
    font-weight: 600;
    border: none;
    border-radius: 6px;
    padding: 1rem 0;
    cursor: pointer;
    margin-top: 0.5rem;
    transition: background 0.2s;
}
.submit-btn:hover {
    background: #a00;
}
.confirmation {
    margin-top: 2rem;
    background: #e6ffe6;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    color: #2a7a2a;
    font-weight: 500;
}
</style>