<!-- components/dashboard/FeaturedActivityCard.vue -->
<template>
  <div class="relative p-6 bg-gradient-to-br from-yellow-100 to-amber-100 border-4 border-amber-200 rounded-xl shadow-2xl w-full max-w-xs transform transition-all duration-500 cursor-pointer sticky-note"
       :class="cardRotation"
       @mouseenter="isHovered = true"
       @mouseleave="isHovered = false">
    <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-red-500 rounded-full border-3 border-white shadow-lg pin-shadow z-20">
      <div class="absolute inset-1 bg-red-400 rounded-full"></div>
      <div class="absolute top-1 left-1 w-2 h-2 bg-red-300 rounded-full"></div>
    </div>
    <div class="absolute inset-2 border border-amber-300 rounded-lg border-dashed opacity-30"></div>
    <div class="relative z-10 space-y-4">
      <div class="flex items-center justify-center gap-3 mb-4">
        <span class="text-3xl drop-shadow-sm animate-bounce-subtle" :style="{ animationDelay: `${Math.random() * 2}s` }">
          {{ activity.icon }}
        </span>
        <span class="font-handdrawn text-xl text-gray-800 font-bold tracking-wide">
          {{ activity.clubName }}
        </span>
      </div>
      <h3 class="font-stencil text-lg text-gray-900 text-center font-bold leading-tight transform -rotate-[0.5deg]">
        {{ activity.title }}
      </h3>
      <div class="flex justify-center">
        <span class="text-xs font-bold uppercase px-4 py-2 rounded-full shadow-md transform rotate-[1deg] transition-all duration-300" :class="tagStyles">
          {{ activity.tag }}
          <span v-if="activity.tag === 'Live'" class="inline-block w-2 h-2 bg-white rounded-full ml-2 animate-pulse"></span>
        </span>
      </div>
    </div>
    <div class="absolute inset-0 opacity-5 rounded-xl" style="background-image: radial-gradient(circle at 20% 50%, rgba(120, 119, 109, 0.3) 3px, transparent 3px); background-size: 50px 50px;"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const props = defineProps({
  activity: {
    type: Object as () => { icon: string; clubName: string; title: string; tag: string },
    required: true,
  },
});
const isHovered = ref(false);
const rotations = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', '-rotate-3', 'rotate-3'];
const cardRotation = computed(() => {
  const index = Math.abs(props.activity.title.charCodeAt(0)) % rotations.length;
  return isHovered.value ? 'rotate-0 scale-110' : rotations[index];
});
const tagStyles = computed(() => {
  return props.activity.tag === 'Live' ? 'bg-red-500 text-white border-2 border-red-600' : 'bg-blue-500 text-white border-2 border-blue-600';
});
</script>

<style scoped>
.sticky-note { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
.sticky-note:hover { transform: rotate(0deg) scale(1.05) translateY(-8px) !important; box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15); }
.pin-shadow { filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)); }
.border-3 { border-width: 3px; }
</style>