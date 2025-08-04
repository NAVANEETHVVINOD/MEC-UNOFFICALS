<!-- components/Footer.vue -->
<template>
  <footer class="bg-white border-t border-black/10">
    <div class="container mx-auto px-4 py-6 text-center text-gray-500">
      <div class="flex justify-center items-center space-x-6 mb-4">
        <NuxtLink to="/about" class="footer-link">About</NuxtLink>
        <NuxtLink to="/contact" class="footer-link">Contact</NuxtLink>
        <NuxtLink to="/privacy" class="footer-link">Privacy Policy</NuxtLink>
      </div>
      <p class="text-sm">
        © {{ new Date().getFullYear() }} MEC-UNOFFICALS. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer-link {
  @apply hover:text-purple-accent font-medium transition-colors duration-300;
}
</style>