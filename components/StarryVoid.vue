<!-- components/StarryVoid.vue -->
<template>
  <div class="void">
    <div class="stars-bg">
      <div v-for="i in 100" :key="`particle-${i}`" class="star" :style="getStarStyle()"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Generates random styles for each star
// Inside StarryVoid.vue
const getStarStyle = () => {
  const size = Math.random() * 1.5 + 0.5; // <-- Problem here!
  // ...
  const duration = Math.random() * 4 + 5;
  return {
    width: `${size}px`,
    height: `${size}px`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${Math.random() * 4}s`,
  };
};
</script>

<style scoped>
.void {
  @apply absolute bg-black overflow-hidden;
  /* UPDATED: This animation now handles shape and movement */
  animation: float-blob 20s ease-in-out infinite;
  box-shadow: 0 0 40px 10px rgba(0, 0, 0, 0.2);
}

.stars-bg {
  @apply absolute inset-0 w-full h-full opacity-70;
}

.star {
  @apply absolute bg-white rounded-full;
  animation-name: twinkle;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

/* NEW: Keyframes for the combined shape and movement animation */
@keyframes float-blob {
  0%, 100% {
    transform: scale(1) translateY(0px) rotate(0deg);
    border-radius: 45% 55% 60% 40% / 65% 50% 50% 35%;
  }
  50% {
    transform: scale(1.05) translateY(-20px) rotate(5deg);
    border-radius: 65% 35% 45% 55% / 55% 60% 40% 45%;
  }
}
</style>