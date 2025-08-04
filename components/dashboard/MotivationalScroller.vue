<!-- components/dashboard/MotivationalScroller.vue -->
<template>
  <div class="scroller-container">
    <div class="scroller-content">
      <span v-for="n in 3" :key="n" class="flex-shrink-0">
        <span v-for="(quote, index) in quotes" :key="`${n}-${quote}`" class="scroller-item" :style="{ color: colors[index % colors.length] }">
          {{ quote }}
        </span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const quotes = ["✨ Hakuna Matata! ✨", "🚀 No one cares, do you! 🚀", "🎭 Why so serious? 🎭", "🏊‍♀️ Just keep swimming! 🏊‍♀️", "🌟 To infinity, and beyond! 🌟"];
const colors = ['#a855f7', '#ec4899', '#06b6d4', '#10b981', '#f59e0b'];
</script>

<style scoped>
.scroller-container {
  @apply w-full overflow-hidden my-6 py-2 relative;
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
  mask-image: linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%);
}
.scroller-container::before, .scroller-container::after {
  content: '';
  @apply absolute top-0 bottom-0 w-24 z-10 pointer-events-none;
}
.scroller-container::before { left: 0; background: linear-gradient(to right, white, transparent); }
.scroller-container::after { right: 0; background: linear-gradient(to left, white, transparent); }
.scroller-content {
  @apply flex w-max;
  animation: scroll-left 60s linear infinite;
}
.scroller-item {
  @apply mx-12 text-2xl md:text-3xl font-bold whitespace-nowrap font-handdrawn;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}
.scroller-item:hover { transform: scale(1.1) translateY(-2px); }
@keyframes scroll-left {
  from { transform: translateX(0%); }
  to { transform: translateX(-33.333%); }
}
</style>