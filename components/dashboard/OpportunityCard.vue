<!-- components/dashboard/OpportunityCard.vue -->
<template>
  <div class="bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-xl p-6 shadow-lg w-full max-w-md hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 opportunity-card">
    <div class="flex items-center justify-between mb-4">
      <div class="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
        <span class="text-white font-bold text-lg">{{ opportunity.company.charAt(0) }}</span>
      </div>
      <span class="text-xs font-semibold uppercase px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border border-blue-300">
        {{ opportunity.type }}
      </span>
    </div>
    <h4 class="font-stencil text-xl text-gray-900 mb-2 leading-tight">{{ opportunity.title }}</h4>
    <p class="text-gray-600 mb-4 font-semibold">
      <span class="inline-flex items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-purple-500"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
        {{ opportunity.company }}
      </span>
    </p>
    <button class="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-3 px-6 rounded-lg font-bold transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg">
      <span class="flex items-center justify-center gap-2">View Details</span>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  opportunity: {
    type: Object as () => { title: string; company: string; type: string },
    required: true,
  },
});
</script>

<style scoped>
.opportunity-card { position: relative; border: 2px solid transparent; background-clip: padding-box; }
.opportunity-card::before {
  content: '';
  position: absolute;
  inset: 0;
  padding: 2px;
  background: linear-gradient(145deg, #e2e8f0, #cbd5e1);
  border-radius: inherit;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: xor;
  pointer-events: none;
}
.opportunity-card:hover::before { background: linear-gradient(145deg, #a855f7, #7c3aed); }
</style>