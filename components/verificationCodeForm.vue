<template>
  <div id="otp-section" class="vh-100 d-flex justify-content-center align-items-center">
    <div class="card p-4">
      <div class="logo text-center mb-3">
        <img src="/assets/images/logo.png" alt="Logo" />
      </div>
      <h3 class="mb-2 text-center">Enter Verification Code</h3>
      <p class="text-muted mb-4 text-center">Enter the 4-digit code sent to your email</p>
      <form @submit.prevent="handleSubmit" class="text-center">
        <div class="d-flex justify-content-center mb-4" style="gap: 10px;">
          <input v-for="(digit, index) in otpDigits"
                 :key="index"
                 v-model="otpDigits[index]"
                 @input="handleInput(index)"
                 @keydown.backspace="handleBackspace(index)"
                 maxlength="1"
                 type="text"
                 inputmode="numeric"
                 class="otp-input form-control text-center"
                 required
                 style="width: 50px;" />
        </div>
        <button type="submit" class="btn btn-success w-100 mt-2">Verify</button>
        <button type="button" class="btn btn-link text-success mt-2" @click="resendCode">Re-send code</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const otpDigits = ref(['', '', '', ''])
const emit = defineEmits(['submit-otp', 'resend-otp'])

// const handleInput = async (index) => {
//   if (otpDigits.value[index].length > 0 && index < otpDigits.value.length - 1) {
//     await nextTick()
//     const inputs = document.querySelectorAll('.otp-input')
//     inputs[index + 1].focus()
//   }
// }

const handleInput = async (index) => {
  // Allow only numeric input
  otpDigits.value[index] = otpDigits.value[index].replace(/[^0-9]/g, '');

  if (otpDigits.value[index].length > 0 && index < otpDigits.value.length - 1) {
    await nextTick()
    const inputs = document.querySelectorAll('.otp-input')
    inputs[index + 1].focus()
  }
}


const handleBackspace = (index) => {
  if (otpDigits.value[index] === '' && index > 0) {
    const inputs = document.querySelectorAll('.otp-input')
    inputs[index - 1].focus()
  }
}

const handleSubmit = () => {
  const otp = otpDigits.value.join('')
  emit('submit-otp', otp)
}

const resendCode = () => {
  emit('resend-otp')
}
</script>

<style scoped>
.otp-input {
  font-size: 24px;
  height: 60px;
}
</style>
