<template>
    <div
      v-if="visible"
      class="toast show position-fixed top-0 end-0 m-4"
      :class="toastType"
      style="z-index: 9999"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="d-flex">
        <div class="toast-body">{{ message }}</div>
        <button type="button" class="btn-close btn-close-white me-2 m-auto" @click="visible = false" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const visible = ref(false)
  const message = ref('')
  const toastType = ref('')
  
  const showToast = (msg = 'Success!',type='text-bg-success', duration = 3000) => {
    message.value = msg
    visible.value = true
    toastType.value = type
    setTimeout(() => {
      visible.value = false
    }, duration)
  }
  
  defineExpose({ showToast })
  </script>