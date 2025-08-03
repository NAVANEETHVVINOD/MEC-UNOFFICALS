<!-- pages/dashboard.vue (FINAL DESIGN) -->
<template>
  <div>
    <header ref="container" class="relative w-full h-screen overflow-hidden bg-[#F0F0F0] text-black font-sans">
      
      <!-- The Animated Starry Voids -->
      <DashboardStarryVoid class="parallax-element blob-1" :style="getParallaxStyle(15)" />
      <DashboardStarryVoid class="parallax-element blob-2" :style="getParallaxStyle(20)" />

      <!-- Your College-Themed Doodles, Placed in the White Space -->
      <img src="/images/dashboard/book.webp" alt="Stack of books" class="parallax-element doodle doodle-book" :style="getParallaxStyle(10)"/>
      <img src="/images/dashboard/bulb.gif" alt="Lightbulb idea GIF" class="parallax-element doodle doodle-bulb" :style="getParallaxStyle(30)"/>
      <img src="/images/dashboard/pc.jpg" alt="Vintage computer" class="parallax-element doodle doodle-pc" :style="getParallaxStyle(25)"/>
      <img src="/images/dashboard/Robo-Walk.gif" alt="Walking robot GIF" class="parallax-element doodle doodle-robot" :style="getParallaxStyle(40)"/>
      <img src="/images/dashboard/solder.gif" alt="Soldering iron GIF" class="parallax-element doodle doodle-solder" :style="getParallaxStyle(50)"/>

      <!-- Central Content -->
      <div class="absolute inset-0 z-10 flex items-center justify-center">
        <div class="relative w-full max-w-4xl px-4 text-center">
          <h1 class="font-display text-7xl md:text-9xl uppercase tracking-wider text-white text-shadow-default leading-none">
            EXPLORE
          </h1>
          <h1 class="font-display text-7xl md:text-9xl uppercase tracking-wider text-white text-shadow-default leading-none mt-[-1.5rem] md:mt-[-2.5rem]">
            YOUR CAMPUS
          </h1>
          <p class="mt-8 text-lg font-sans text-gray-800 max-w-md mx-auto">
            Discover clubs, find events, and connect with peers in a universe of possibilities.
          </p>
          <p class="mt-4 text-sm font-semibold text-gray-900">- Welcome, {{ userStore.user?.name || 'Student' }}</p>
        </div>
      </div>
      
      <!-- FIXED Floating Action Buttons -->
      <div class="fixed bottom-5 right-5 z-50 flex flex-row gap-3">
        <CoreDarkModeToggle />
        <button @click="toggleParallax" class="fab" :title="isParallaxEnabled ? 'Disable motion effects' : 'Enable motion effects'">
          <svg v-if="isParallaxEnabled" class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>
          <svg v-else class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 9V3.75M9 9h-5.25M9 9L3.75 3.75M9 15v5.25M9 15H3.75M9 15l-5.25 5.25M15 9V3.75M15 9h5.25M15 9l5.25-5.25M15 15v5.25M15 15h5.25M15 15l5.25 5.25" /></svg>
        </button>
      </div>

      <!-- Subtle Scroll Indicator -->
      <div class="absolute bottom-5 left-1/2 -translate-x-1/2 z-20">
        <div class="w-8 h-8 rounded-full bg-black/20 flex items-center justify-center animate-bounce">
          <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
      </div>

    </header>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from 'vue';
import { useUserStore } from '~/stores/user';
import { useAppConfig } from '#app';

definePageMeta({ middleware: 'auth', layout: 'default' });

const userStore = useUserStore();
const appConfig = useAppConfig();
const container = ref<HTMLElement | null>(null);
const isParallaxEnabled = ref(true);
const mouse = reactive({ x: 0, y: 0 });

const toggleParallax = () => { isParallaxEnabled.value = !isParallaxEnabled.value; };

const handleMouseMove = (event: MouseEvent) => {
  if (!isParallaxEnabled.value || !container.value) return;
  const rect = container.value.getBoundingClientRect();
  mouse.x = (event.clientX - rect.left) / rect.width - 0.5;
  mouse.y = (event.clientY - rect.top) / rect.height - 0.5;
};

const getParallaxStyle = (depth: number) => {
  const transform = isParallaxEnabled.value ? `translate3d(${-mouse.x * depth}px, ${-mouse.y * depth}px, 0)` : 'translate3d(0, 0, 0)';
  return { transform };
};

onMounted(() => {
  appConfig.navbar.isTransparent = true;
  window.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  appConfig.navbar.isTransparent = false;
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<style scoped>
.fab { @apply p-3 rounded-full bg-black/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-black/40 active:scale-95; }
.parallax-element { @apply absolute transition-transform duration-300 ease-out pointer-events-none; }

/* Blob Shapes & Positions */
.blob-1 {
  top: -10%; left: -15%; width: 55%; height: 60%;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}
.blob-2 {
  top: 10%; right: -15%; width: 60%; height: 80%;
  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
}

/* Doodle Positions & Sizes */
.doodle { @apply bg-white shadow-lg rounded-lg p-2; }
.doodle-book   { bottom: 5%; left: 8%; width: 15%; transform: rotate(-10deg); }
.doodle-bulb   { top: 18%; left: 10%; width: 8%; transform: rotate(15deg); }
.doodle-pc     { bottom: 15%; left: 30%; width: 12%; }
.doodle-robot  { top: 15%; right: 12%; width: 20%; transform: rotate(5deg); }
.doodle-solder { top: 60%; right: 8%; width: 10%; transform: rotate(-5deg); }

/* Content Transition */
.content-swap-enter-active, .content-swap-leave-active { transition: opacity 0.4s ease, transform 0.4s ease; }
.content-swap-enter-from { opacity: 0; transform: translateY(30px) scale(0.95); }
.content-swap-leave-to { opacity: 0; transform: translateY(-30px) scale(0.95); }
</style>