<!-- components/dashboard/StarryVoid.vue -->
<template>
  <div class="relative overflow-hidden bg-black">
    <div v-for="i in 50" :key="`star-${i}`" class="absolute rounded-full bg-white" :style="starStyle()"></div>
  </div>
</template>
<script setup lang="ts">
const starStyle = () => ({
  top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
  width: `${Math.random() * 2 + 1}px`, height: `${Math.random() * 2 + 1}px`,
  opacity: `${Math.random() * 0.7 + 0.3}`,
  animation: `twinkle ${Math.random() * 5 + 3}s linear infinite`,
  animationDelay: `${Math.random() * 5}s`,
});
</script>
<style>
@keyframes twinkle { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.8; } }
</style>