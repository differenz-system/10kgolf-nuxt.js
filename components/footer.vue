<template>
    <footer class="bg-light text-center py-3">
      © {{ currentYear }} 10kGolf
    </footer>
  </template>
  
  <script setup>
  const currentYear = new Date().getFullYear()
  </script>