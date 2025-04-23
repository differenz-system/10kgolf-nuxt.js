<template>
        <div v-if="splash" id="splash" class="splash-screen">
            <img src="/assets/images/green-logo.png" alt="10k Golf Logo">
            <div class="d-flex justify-content-center mt-3">
                <!-- Bootstrap Spinner -->
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
      <div v-else id="first_section" class="vh-100 d-flex justify-content-center align-items-center">
            <div class="card p-4 text-center" style="max-width: 400px; width: 100%;">
                <img src="/assets/images/logo.png" alt="10k Golf Logo" class="mx-auto" style="max-width: 150px;">
                <h3 class="mt-4 mb-3">Take Your Game to the<br>Next Level Together!</h3>
                <p class="text-muted">Helping players and coaches track progress between lessons</p>
                <button @click="handleSignIn()" class="btn btn-success w-100 mt-3" id="to-sec-section-btn">Sign In</button>
                <button @click="handleSignUP()" class="btn btn-outline-success w-100 mt-2" id="to-sec-section-btn">Sign Up</button>
            </div>
        </div>
        <BootstrapToast ref="toast" />
</template>

<script setup>
const toast = ref(null)
// let showSplash = ref(true);
const showSplash = useCookie('splash')
var splash = ref(true);
splash.value = showSplash.value
onMounted(() => {
    if(!splash.value){
        showSplash.value=true;
    }
    setTimeout(() => {
        splash.value=false;
    }, 2000);
});

const handleSignIn = () => {
    toast.value.showToast('Sign-In is under development','text-bg-warning')
}

const handleSignUP = () => {
    navigateTo('/signup');
}
</script>