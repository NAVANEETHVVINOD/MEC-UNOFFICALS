<!-- File: pages/index.vue -->
<!-- This is the original landing page with the 'Nobody Cares' button and doodle sticky notes. -->
<template>
  <div class="relative min-h-screen flex flex-col items-center justify-center p-8 text-center bg-notebook">
    
    <!-- Main Content -->
    <div class="z-10 relative flex flex-col items-center">
      <!-- UNOFFICIAL Title -->
      <h2 class="font-handdrawn text-5xl md:text-7xl text-purple-600 transform -rotate-3 select-none">
        UNOFFICIAL
      </h2>
      
      <!-- Code, Create, Celebrate Slogan -->
      <h1 class="text-3xl md:text-5xl font-bold text-gray-800 mt-4 select-none">
        Code, Create, Celebrate
      </h1>
      
      <!-- Description -->
      <p class="text-gray-700 mt-2 max-w-lg mx-auto select-none">
        Your Gateway to Tech Excellence. A modern college community to enhance student engagement, campus life, and career development.
      </p>

      <!-- Nobody Cares Button -->
      <NuxtLink
        to="/dashboard"
        class="
          mt-8 inline-block
          bg-purple-600 text-white
          font-handdrawn text-3xl
          py-3 px-8 rounded-full
          shadow-lg hover:shadow-xl
          transform rotate-2
          hover:scale-105 hover:rotate-1
          transition-all duration-300
          cursor-pointer
          relative z-20
          select-none
        "
        style="padding-top: 0.8rem; padding-bottom: 0.8rem;"
      >
        Nobody Cares <span class="ml-2 text-2xl">🚀</span>
      </NuxtLink>
    </div>

    <!-- Doodle Sticky Notes -->
    <!-- You can use your DoodleStickyNote component here if you have it -->
    <div class="absolute top-[16%] left-[10%] w-48 p-4 bg-yellow-200 border-2 border-black shadow-lg transform -rotate-6">
      Knowledge Sharing & Notes
    </div>
    <div class="absolute top-[16%] right-[10%] w-52 p-4 bg-blue-200 border-2 border-black shadow-lg transform rotate-6">
      Innovation Hub & Project Portfolios
    </div>
    <div class="absolute bottom-[18%] left-[18%] w-40 p-4 bg-pink-200 border-2 border-black shadow-lg transform rotate-3">
      #Community
    </div>
    <div class="absolute bottom-[18%] right-[18%] w-48 p-4 bg-green-200 border-2 border-black shadow-lg transform -rotate-3">
      GAMIFICATION!
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'landing', // Use the landing layout which has the notebook background
});
</script>

<style scoped>
/* Add any specific styles for this page if needed */
.bg-notebook {
  background-color: #F7F5F2;
  background-image: 
    linear-gradient(#D1D5DB 1px, transparent 1px),
    linear-gradient(to right, #D1D5DB 1px, #F7F5F2 1px);
  background-size: 20px 20px;
}
</style>