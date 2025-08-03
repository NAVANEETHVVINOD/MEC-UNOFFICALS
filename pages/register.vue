<!-- pages/register.vue (FIXED) -->
<template>
  <div class="relative flex items-center justify-center min-h-screen overflow-hidden bg-[#F0F0F0] font-sans">
    <!-- Background Decorative Element -->
    <img
    src="https://i.ibb.co/GcvDCMw/alien.png"
      alt="Alien Illustration"
      class="absolute bottom-1/4 left-1/4 w-32 h-auto opacity-10 -z-10 transform -translate-x-1/2 translate-y-1/2 rotate-[10deg] hidden lg:block"
    />
    <img
    src="https://i.ibb.co/vVRgMvV/planet-saturn.png"
      alt="Saturn Illustration"
      class="absolute top-1/4 right-1/4 w-48 h-auto opacity-10 -z-10 transform translate-x-1/2 -translate-y-1/2 hidden lg:block"
    />

    <div class="w-full max-w-sm p-8 space-y-8 z-10">
      <div class="text-center">
        <h1 class="font-display text-6xl md:text-7xl uppercase text-black">
          Join Us
        </h1>
        <p class="mt-2 text-center text-sm text-gray-600">
          or <NuxtLink to="/login" class="font-medium text-black hover:underline">login to your account</NuxtLink>
        </p>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="handleRegister">
        <div class="space-y-4">
          <div>
            <label for="name" class="text-sm font-medium text-gray-700">Full Name</label>
            <input id="name" v-model="name" name="name" type="text" autocomplete="name" required class="form-input" placeholder="Alex Johnson">
          </div>
          <div>
            <label for="email-address" class="text-sm font-medium text-gray-700">Email address</label>
            <input id="email-address" v-model="email" name="email" type="email" autocomplete="email" required class="form-input" placeholder="alex@example.com">
          </div>
          <div>
            <label for="password" class="text-sm font-medium text-gray-700">Password</label>
            <input id="password" v-model="password" name="password" type="password" autocomplete="new-password" required class="form-input" placeholder="••••••••">
          </div>
        </div>

        <p v-if="errorMsg" class="text-red-600 text-sm text-center pt-2">{{ errorMsg }}</p>

        <div>
          <button type="submit" :disabled="isLoading" class="form-button group">
            <span v-if="isLoading" class="loading-spinner"></span>
            {{ isLoading ? 'Creating Account...' : 'Create Account' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useUserStore } from '~/stores/user';

// REMOVED a-lot-of-images-from-here IMPORTS

definePageMeta({
  layout: 'landing',
  public: true, 
});

const userStore = useUserStore();
const name = ref('');
const email = ref('');
const password = ref('');
const errorMsg = ref('');
const isLoading = ref(false);

const handleRegister = async () => {
  if (isLoading.value) return;
  isLoading.value = true;
  errorMsg.value = '';
  try {
    await userStore.register(name.value, email.value, password.value);
  } catch (error: any) {
    errorMsg.value = error.message || 'An unexpected error occurred.';
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.form-input { @apply block w-full px-3 py-2 mt-1 bg-transparent border-b-2 border-black placeholder-gray-400 focus:outline-none focus:border-gray-500 sm:text-sm transition-colors; }
.form-button { @apply relative w-full flex justify-center items-center py-3 px-4 border border-transparent text-sm uppercase tracking-wider font-display rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 disabled:opacity-50; }
.loading-spinner { @apply w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin; margin-right: 0.5rem; }
</style>