<!-- File: pages/index.vue -->
<template>
  <div class="relative min-h-screen flex flex-col items-center justify-center p-8 text-center bg-notebook overflow-hidden">
    
    <!-- Main Content -->
    <div class="z-10 relative flex flex-col items-center max-w-3xl mx-auto px-6">
      
      <!-- UNOFFICIAL Title -->
      <h2 
        class="font-handdrawn text-6xl md:text-7xl text-purple-600 transform -rotate-3 select-none
        drop-shadow-lg transition-all duration-500 hover:rotate-0 hover:scale-105">
        UNOFFICIAL
      </h2>
      
      <!-- Code, Create, Celebrate Slogan -->
      <h1 
        class="text-4xl md:text-5xl font-bold text-gray-900 mt-4 select-none
        tracking-tight leading-snug transition-all duration-500">
        Code, Create, Celebrate
      </h1>
      
      <!-- Description -->
      <p class="text-gray-700 mt-4 max-w-lg mx-auto select-none leading-relaxed text-lg">
        Your Gateway to Tech Excellence. A modern college community to enhance student engagement, campus life, and career development.
      </p>

      <!-- CTA Button -->
      <NuxtLink
        to="/dashboard"
        class="mt-10 inline-block bg-purple-600 text-white font-handdrawn text-2xl py-3 px-10
        rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-rotate-1
        transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300"
      >
        Nobody Cares
      </NuxtLink>
    </div>

    <!-- Decorative Sticky Notes -->
    <div 
      class="absolute top-[14%] left-[8%] w-48 p-4 bg-yellow-200/90 backdrop-blur-md border-2 
      border-black shadow-md transform -rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300">
      Knowledge Sharing & Notes
    </div>
    <div 
      class="absolute top-[14%] right-[8%] w-52 p-4 bg-blue-200/90 backdrop-blur-md border-2 
      border-black shadow-md transform rotate-6 hover:rotate-0 hover:scale-105 transition-all duration-300">
      Innovation Hub & Project Portfolios
    </div>
    <div 
      class="absolute bottom-[16%] left-[16%] w-44 p-4 bg-pink-200/90 backdrop-blur-md border-2 
      border-black shadow-md transform rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300">
      #Community
    </div>
    <div 
      class="absolute bottom-[16%] right-[16%] w-48 p-4 bg-green-200/90 backdrop-blur-md border-2 
      border-black shadow-md transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300">
      GAMIFICATION!
    </div>

    <!-- Gradient Overlay for depth -->
    <div class="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'landing',
});
</script>

<style scoped>
.bg-notebook {
  background-color: #F7F5F2;
  background-image: 
    linear-gradient(#D1D5DB 1px, transparent 1px),
    linear-gradient(to right, #D1D5DB 1px, #F7F5F2 1px);
  background-size: 20px 20px;
}
</style>
