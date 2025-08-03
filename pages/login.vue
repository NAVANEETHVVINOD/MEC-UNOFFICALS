<!-- pages/login.vue (FIXED) -->
<template>
  <div class="relative flex items-center justify-center min-h-screen overflow-hidden bg-[#F0F0F0] font-sans">
    <!-- Background Decorative Element -->
    <img
      src="https://i.ibb.co/hM2Xf9w/ufo.png" 
      alt="UFO Illustration"
      class="absolute top-1/4 left-1/4 w-48 h-auto opacity-10 -z-10 transform -translate-x-1/2 -translate-y-1/2 rotate-[-15deg] hidden lg:block"
    />
     <img
       src="https://i.ibb.co/rfnLp5h/planet-moon.png" 
      alt="Moon Illustration"
      class="absolute bottom-1/4 right-1/4 w-32 h-auto opacity-10 -z-10 transform translate-x-1/2 translate-y-1/2 hidden lg:block"
    />

    <div class="w-full max-w-sm p-8 space-y-8 z-10">
      <div class="text-center">
        <h1 class="font-display text-6xl md:text-7xl uppercase text-black">
          Log In
        </h1>
        <p class="mt-2 text-center text-sm text-gray-600">
          or <NuxtLink to="/register" class="font-medium text-black hover:underline">create a new account</NuxtLink>
        </p>
      </div>

      <form class="mt-8 space-y-6" @submit.prevent="handleLogin">
        <div class="space-y-4">
          <!-- Email Input -->
          <div>
            <label for="email-address" class="text-sm font-medium text-gray-700">Email address</label>
            <input 
              id="email-address" v-model="email" name="email" type="email" autocomplete="email" required
              class="form-input" placeholder="alex@example.com"
            >
          </div>
          <!-- Password Input -->
          <div>
            <label for="password" class="text-sm font-medium text-gray-700">Password</label>
            <input 
              id="password" v-model="password" name="password" type="password" autocomplete="current-password" required
              class="form-input" placeholder="••••••••"
            >
          </div>
        </div>

        <p v-if="errorMsg" class="text-red-600 text-sm text-center pt-2">{{ errorMsg }}</p>

        <div>
          <button type="submit" :disabled="isLoading" class="form-button group">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg v-if="!isLoading" class="h-5 w-5 text-gray-300 group-hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clip-rule="evenodd" /></svg>
            </span>
            <span v-if="isLoading" class="loading-spinner"></span>
            {{ isLoading ? 'Signing In...' : 'Sign In' }}
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
const email = ref('');
const password = ref('');
const errorMsg = ref('');
const isLoading = ref(false);

const handleLogin = async () => {
  if (isLoading.value) return;
  isLoading.value = true;
  errorMsg.value = '';
  try {
    await userStore.login(email.value, password.value);
  } catch (error: any) {
    errorMsg.value = error.message || 'An unexpected error occurred.';
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
.form-input { @apply block w-full px-3 py-2 mt-1 bg-transparent border-b-2 border-black placeholder-gray-400 focus:outline-none focus:border-gray-500 sm:text-sm transition-colors; }
.form-button { @apply relative w-full flex justify-center py-3 px-4 border border-transparent text-sm uppercase tracking-wider font-display rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 disabled:opacity-50; }
.loading-spinner { @apply w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin; margin-right: 0.5rem; }
</style>