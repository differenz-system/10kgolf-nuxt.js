<template>
    <div id="signup-section">
        <div class="card p-4">
        <div class="logo text-center">
            <img src="/assets/images/logo.png" alt="Logo" />
        </div>
        <h3 class="mt-3">Sign Up</h3>
        <p>Create your account to get started</p>

        <form @submit.prevent="handleSubmit">
            <div class="mb-3">
            <label for="firstName" class="form-label">First Name</label>
            <input v-model="form.firstName" type="text" class="form-control" id="firstName" required />
            </div>
            <div class="mb-3">
            <label for="lastName" class="form-label">Last Name</label>
            <input v-model="form.lastName" type="text" class="form-control" id="lastName" required />
            </div>
            <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input v-model="form.email" type="email" class="form-control" id="email" required />
            </div>
            <button type="submit" class="btn btn-success w-100 main-btn mt-4">
            Send Code
            </button>
        </form>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['submit-form'])
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
})
const handleSubmit = () => {
  emit('submit-form', { ...form })
}
</script>