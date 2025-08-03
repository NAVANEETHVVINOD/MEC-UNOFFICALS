<!-- components/dashboard/ParallaxBackground.vue -->
<template>
  <div class="fixed inset-0 -z-10 overflow-hidden bg-gray-900">
    <div class="absolute top-10 left-[10%] w-48 h-48 bg-purple-900/20 blur-3xl rounded-full"></div>
    <div class="absolute bottom-20 right-[15%] w-64 h-64 bg-indigo-900/20 blur-3xl rounded-full"></div>
    <div v-for="i in 100" :key="i" class="absolute rounded-full bg-white/50" :style="starStyle()"></div>
  </div>
</template>

<script setup lang="ts">
const starStyle = () => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  width: `${Math.random() * 2 + 1}px`,
  height: `${Math.random() * 2 + 1}px`,
  opacity: `${Math.random() * 0.5 + 0.2}`,
  animation: `twinkle ${Math.random() * 5 + 3}s linear infinite`,
  animationDelay: `${Math.random() * 5}s`,
});
</script>

<style>
@keyframes twinkle {
  0%, 100% { transform: scale(0.5); opacity: 0.3; }
  50% { transform: scale(1); opacity: 0.8; }
}
</style>