<!-- File: components/Footer.vue -->
<template>
  <footer class="bg-black/30 border-t border-white/10 mt-12">
    <div class="container mx-auto py-6 px-4 text-center text-gray-400 text-sm">
      <p>© {{ new Date().getFullYear() }} College Community. All rights reserved.</p>
      <div class="flex justify-center space-x-4 mt-2">
        <NuxtLink to="/about" class="hover:text-white">About</NuxtLink>
        <NuxtLink to="/contact" class="hover:text-white">Contact</NuxtLink>
        <NuxtLink to="/privacy" class="hover:text-white">Privacy Policy</NuxtLink>
      </div>
    </div>
  </footer>
</template>