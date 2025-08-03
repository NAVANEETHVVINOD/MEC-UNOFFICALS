<!-- components/Navbar.vue -->
<!-- This navbar is styled to match the video and includes your requested links. -->
<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-40 transition-all duration-300"
    :class="navbarClasses"
  >
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        
        <!-- Logo Section -->
        <NuxtLink to="/dashboard" class="flex items-center space-x-3">
          <!-- SVG Logo to replicate the one in the video -->
          <svg class="w-9 h-9 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"/>
            <path d="M12 2V6M12 18V22M6 12H2M22 12H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M15.5355 8.46448L12.7071 11.2929M8.46448 15.5355L11.2929 12.7071" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <span class="font-display text-xl uppercase tracking-widest font-bold">Voyager</span>
        </NuxtLink>

        <!-- Desktop Navigation Links -->
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink to="/events" class="nav-link">Events</NuxtLink>
          <NuxtLink to="/clubs" class="nav-link">Clubs</NuxtLink>
          <NuxtLink to="/notes" class="nav-link">Notes</NuxtLink>
          <NuxtLink to="/jobs" class="nav-link">Jobs</NuxtLink>
          <NuxtLink to="/leaderboard" class="nav-link">Leaderboard</NuxtLink>
        </div>

        <!-- User Dropdown -->
        <div class="hidden md:flex items-center">
           <CoreUserDropdown />
        </div>

        <!-- Mobile Menu Button (Future enhancement) -->
        <div class="md:hidden">
          <!-- A button can be added here to toggle a mobile menu -->
        </div>

      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useAppConfig } from '#app';

// Use the global app config to check for navbar transparency state
const appConfig = useAppConfig();

// Dynamically compute the navbar's classes based on the transparency state
const navbarClasses = computed(() => {
  if (appConfig.navbar.isTransparent) {
    // Classes for the transparent state (on top of the dashboard hero)
    return 'bg-transparent text-black';
  }
  // Default classes for all other pages
  return 'bg-white/80 backdrop-blur-md border-b border-gray-200 text-black';
});
</script>

<style scoped>
/* Custom styles for the navigation links for a clean, modern look */
.nav-link {
  @apply text-sm font-semibold uppercase tracking-wider text-gray-700 transition-colors duration-200;
  position: relative;
  padding-bottom: 4px;
}

.nav-link:hover {
  @apply text-black;
}

/* Underline effect on hover */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: black;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}

.nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

/* Style for the active page link */
.router-link-exact-active {
  @apply text-black;
}

.router-link-exact-active::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}
</style>
