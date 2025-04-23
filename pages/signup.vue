<template>
    <BootstrapToast ref="toast" />
    <PreSignUpForm v-if="stage === 'default'" @next-form="handleNextForm()" />
    <SignUpForm v-if="stage === 'signup'" @submit-form="handleSignup" />
    <VerificationCodeForm v-if="stage === 'verify'" @submit-otp="handleOtp" @resend-otp="handleResendOtp" />
    <SignUpSuccess v-if="stage === 'success'" />
</template>
  
<script setup>
definePageMeta({ layout: 'auth' })
const stage = ref('default');
const toast = ref(null)
const user = ref(null);
const userData = useCookie('user')
const splash = useCookie('splash');

const handleNextForm = () => {
    stage.value = 'signup'
}

const handleSignup = (formData) => {
    user.value = formData
    stage.value = 'verify'
}

const handleOtp = (otp) => {
    userData.value = JSON.stringify(user.value)
    stage.value = 'success'
    splash.value = false;
}

const handleResendOtp = () => {
    toast.value.showToast('Re-Sent successfully!')
}
</script>