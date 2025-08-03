<!-- components/dashboard/DoodleSticker.vue -->
<template>
  <div 
    class="doodle-sticker" 
    :class="`shape-${shape}`" 
    :style="{ width, top, left, right, bottom, transform: `rotate(${rotate}deg)` }"
  >
    <img :src="src" :alt="alt" class="w-full h-full object-cover" />
  </div>
</template>

<script setup lang="ts">
defineProps({
  src: String,
  alt: String,
  width: String,
  shape: { type: String, default: '1' }, // Shape can be '1', '2', or '3'
  top: { type: String, default: 'auto' },
  left: { type: String, default: 'auto' },
  right: { type: String, default: 'auto' },
  bottom: { type: String, default: 'auto' },
  rotate: { type: String, default: '0' },
});
</script>

<style scoped>
.doodle-sticker {
  @apply absolute bg-white p-2 border-2 border-black shadow-[4px_4px_0_#000] transition-transform duration-300 ease-out pointer-events-none;
}
/* Unique, non-rectangular shapes using clip-path */
.shape-1 {
  clip-path: polygon(5% 0%, 100% 10%, 95% 100%, 0% 90%);
  border-radius: 4% 96% 6% 94% / 93% 5% 95% 7%;
}
.shape-2 {
  clip-path: polygon(0 20%, 60% 0, 100% 40%, 80% 100%, 20% 95%);
  border-radius: 100% 0% 100% 0% / 0% 100% 0% 100%;
}
.shape-3 {
  clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
  border-radius: 50%;
}
</style>