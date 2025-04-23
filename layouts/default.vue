

<template>
    <div class="d-flex flex-column min-vh-100">
      <Header />
      
      <main class="flex-grow-1 d-flex justify-content-center text-center">
        <div>
          <slot />
        </div>
      </main>
  
      <Footer />
    </div>
  </template>
  
  <style scoped>
  </style>
  