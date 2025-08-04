<!-- components/Navbar.vue -->
<template>
  <nav class="sticky top-0 z-50 bg-white/50 backdrop-blur-lg border-b border-black/10">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <NuxtLink to="/dashboard" class="flex items-center gap-3 group">
          <!-- NEW: SVG Logo Icon -->
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="text-gray-900 group-hover:text-purple-accent transition-colors duration-300"
          >
            <circle cx="12" cy="12" r="3" fill="currentColor" />
            <path
              d="M19.95 19.95A11 11 0 0 1 4.05 4.05"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
             <path
              d="M4.05 19.95A11 11 0 0 0 19.95 4.05"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
          <!-- UPDATED: Logo Text -->
          <span class="text-xl font-pixel text-gray-900 group-hover:text-purple-accent transition-colors duration-300">
            MEC-UNOFFICALS
          </span>
        </NuxtLink>

        <!-- Desktop Nav Links -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink v-for="item in navItems" :key="item.name" :to="item.path" class="nav-link">
            {{ item.name }}
          </NuxtLink>
        </div>

        <!-- Right Side: User Dropdown or Login -->
        <div class="hidden md:block">
          <div class="w-10 h-10 bg-purple-accent rounded-full flex items-center justify-center font-bold text-white">
            N
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-gray-900">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-4 6h4"></path></svg>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="md:hidden bg-white/80 backdrop-blur-xl">
      <div class="flex flex-col items-center py-4 space-y-4">
        <NuxtLink v-for="item in navItems" :key="item.name" :to="item.path" @click="isMobileMenuOpen = false" class="nav-link">
          {{ item.name }}
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const navItems = [
  { name: 'Events', path: '/events' },
  { name: 'Clubs', path: '/clubs' },
  { name: 'Notes', path: '/notes' },
  // UPDATED
  { name: 'Opportunities', path: '/opportunities' },
  { name: 'Leaderboard', path: '/leaderboard' },
];
</script>

<style scoped>
/* UPDATED: Nav link colors for light background */
.nav-link {
  @apply text-gray-500 font-semibold tracking-wider uppercase text-sm
         hover:text-gray-900 transition-colors duration-300 relative;
}
.nav-link::after {
  content: '';
  @apply absolute bottom-0 left-0 w-0 h-0.5 bg-purple-accent
         transition-all duration-300;
  transform: translateY(4px);
}
.nav-link:hover::after,
.nav-link.router-link-exact-active::after {
  @apply w-full;
}
</style>