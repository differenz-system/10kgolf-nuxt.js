<template>
    <h1>Dashboard</h1>
    <div>
        <p>Welcome to 10kGolf {{ user.firstName + " " + user.lastName }}  </p>
        <button class="btn btn-warning" @click="user = null, navigateTo('/')">Logout</button>
    </div>
</template>

<script setup>
const user = useCookie('user')
</script> 