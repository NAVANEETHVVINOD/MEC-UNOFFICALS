<!-- components/core/BottomNav.vue -->
<template>
  <div class="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-t border-gray-200">
    <div class="flex justify-around items-center h-16">
      <NuxtLink v-for="item in navItems" :key="item.name" :to="item.path" class="flex flex-col items-center justify-center text-gray-500 hover:text-purple-accent transition-colors">
        <!-- You would replace these with actual icons -->
        <div class="w-6 h-6 mb-1" v-html="item.icon"></div>
        <span class="text-xs font-medium">{{ item.name }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<!-- components/core/BottomNav.vue -->
<script setup lang="ts">
const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: '<svg>...</svg>' }, // Icon unchanged
  { name: 'Events', path: '/events', icon: '<svg>...</svg>' }, // Icon unchanged
  { name: 'Clubs', path: '/clubs', icon: '<svg>...</svg>' }, // Icon unchanged
  { name: 'Notes', path: '/notes', icon: '<svg>...</svg>' }, // Icon unchanged
  // UPDATED
  { name: 'Opportunities', path: '/opportunities', icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.311a7.5 7.5 0 01-7.5 0c-1.255 0-2.443.29-3.5.832m14.5-3.493a7.5 7.5 0 01-7.5 0c-1.255 0-2.443.29-3.5.832m14.5 2.661A11.961 11.961 0 0012 21a11.961 11.961 0 00-7.25 2.89" /></svg>' },
];
</script>

<!-- The <template> section of this file does not need any changes. -->
<style scoped>
.router-link-exact-active {
  @apply text-purple-accent;
}
</style>