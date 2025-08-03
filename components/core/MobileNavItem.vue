<!-- components/core/MobileNavItem.vue -->
<template>
  <NuxtLink 
    :to="to" 
    class="block text-gray-300 hover:text-white hover:bg-gray-800 px-3 py-2 rounded-md text-base font-medium"
    active-class="bg-purple-600 text-white"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({ to: { type: String, required: true } });
</script>