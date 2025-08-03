<!-- components/dashboard/QuickActionButton.vue -->
<template>
  <NuxtLink :to="to" class="action-button group">
    <div class="icon-wrapper">
      <!-- Raw SVG for icons -->
      <svg v-if="icon === 'clubs'" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.962a3.75 3.75 0 015.962 0zM12 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM12 12.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>
      <svg v-if="icon === 'events'" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0h18" /></svg>
      <svg v-if="icon === 'confessions'" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </div>
    <span class="font-semibold">{{ title }}</span>
  </NuxtLink>
</template>
<script setup lang="ts">
defineProps({ to: String, icon: String, title: String });
</script>
<style scoped>
.action-button { @apply flex flex-col items-center justify-center gap-3 p-6 bg-white border-2 border-black rounded-lg shadow-[4px_4px_0_#000] transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0_#BF40BF]; }
.icon-wrapper { @apply h-16 w-16 flex items-center justify-center bg-violet-100 border-2 border-black rounded-full; }
</style>