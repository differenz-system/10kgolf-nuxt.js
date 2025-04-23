<template>
    <div id="sec_section" class="vh-100 d-flex justify-content-center align-items-center">
                    <div class="card p-4 text-center" style="max-width: 400px; width: 100%;">
                        <img src="/assets/images/logo.png" alt="10k Golf Logo" class="mx-auto" style="max-width: 150px;">
                        <div
                            class="form-check w-100 mt-4 text-start border rounded p-2 d-flex align-items-center gap-2">
                            <input class="form-check-input m-0" type="radio" name="role" id="player" checked>
                            <label class="form-check-label w-100 m-0" for="player">I am a golf player</label>
                        </div>

                        <div
                            class="form-check w-100 mt-2 text-start border rounded p-2 d-flex align-items-center gap-2">
                            <input class="form-check-input m-0" type="radio" name="role" id="coach">
                            <label class="form-check-label w-100 m-0" for="coach">I am a golf coach</label>
                        </div>

                        <button @click="handleNext()" class="btn btn-success w-100 mt-4" id="to-signup-section-btn">Next</button>
                    </div>
                </div>
</template>

<script setup>
const emit = defineEmits(['next-form']);

const handleNext = () => {
  emit('next-form')
}
</script>
