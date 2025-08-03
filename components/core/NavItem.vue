<!-- components/core/NavItem.vue (UPDATED) -->
<template>
  <NuxtLink 
    :to="to" 
    class="px-3 py-2 rounded-md text-sm font-medium transition-colors"
    :class="isTransparent ? 'text-black/60 hover:text-black' : 'text-gray-300 hover:text-white'"
  >
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  to: { type: String, required: true },
  isTransparent: { type: Boolean, default: false }
});
</script>