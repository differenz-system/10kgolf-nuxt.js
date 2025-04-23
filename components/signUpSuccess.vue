<template>
    <div class="vh-100 d-flex align-items-center">
        <div id="home-section" class="card p-4">
            <div class="logo text-center">
                <img src="/assets/images/logo.png" alt="Logo" />
            </div>
            <h3 class="text-center mb-3">Welcome to 10k Golf!</h3>
            <p class="text-center">You’ve successfully signed in.</p>
            <button @click="$router.push('/')" class="btn btn-success w-100 main-btn mt-4">Go to Dashboard</button>
        </div>
    </div>
</template>