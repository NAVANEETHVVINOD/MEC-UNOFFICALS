<template>
  <div class="min-h-screen bg-black text-white relative overflow-hidden">
    <!-- Background Doodle Lines (Placeholder) -->
    <div class="absolute inset-0 z-0 opacity-30" style="background-image: url('/background-doodles.svg'); background-size: cover; background-repeat: no-repeat; background-position: center;"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <!-- Header Section -->
      <header class="text-center mb-16">
        <h2 class="text-lg font-semibold text-purple-400 uppercase tracking-wide animate-fade-in">Code, Create, <span class="text-green-400">Celebrate</span></h2>
        <h1 class="mt-2 text-5xl font-extrabold text-white sm:text-6xl animate-slide-down">YUKTHI</h1>
        <p class="mt-4 text-xl text-gray-300 animate-fade-in delay-100">Your Gateway to Tech Excellence.</p>
      </header>

      <!-- Key Features Section (Inspired by second image cards) -->
      <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div class="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg border border-purple-600 animate-slide-up">
          <div class="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253" /></svg>
          </div>
          <h3 class="mt-5 text-lg font-medium text-white">Knowledge Sharing</h3>
          <p class="mt-2 text-base text-gray-400">Upload and download study materials, with ratings and rewards.</p>
        </div>

        <div class="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg border border-green-600 animate-slide-up delay-100">
           <div class="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zm-4 4a2 2 0 11-4 0 2 2 0 014 0zm-2-4a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </div>
          <h3 class="mt-5 text-lg font-medium text-white">Community Building</h3>
          <p class="mt-2 text-base text-gray-400">Join, create, and interact with student clubs and groups.</p>
        </div>

        <div class="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg border border-yellow-600 animate-slide-up delay-200">
           <div class="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          </div>
          <h3 class="mt-5 text-lg font-medium text-white">Innovation Hub</h3>
          <p class="mt-2 text-base text-gray-400">Showcase projects, receive feedback, and earn badges.</p>
        </div>

         <div class="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg border border-blue-600 animate-slide-up delay-300">
           <div class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 17v5m6.44-4.16a2.5 2.5 0 00-3.535-3.535L9.331 13.58a1 1 0 00-.322.323l-1.106 1.106A2.5 2.5 0 015.33 16.44L2.88 18.88a1.5 1.5 0 002.12 2.12l2.44-2.44a2.5 2.5 0 003.535-3.535l1.106-1.106a1 1 0 00.323-.322l1.106-1.106a2.5 2.5 0 000-3.536zM12 17.5l1.5-1.5m-1.5 1.5l-1.5-1.5m3 0l-1.5 1.5m-3-1.5l1.5 1.5" /></svg>
          </div>
          <h3 class="mt-5 text-lg font-medium text-white">Design Thinking</h3>
          <p class="mt-2 text-base text-gray-400">Foster creative problem-solving and user-centered design approaches.</p>
        </div>

         <div class="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg border border-red-600 animate-slide-up delay-400">
           <div class="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h3 class="mt-5 text-lg font-medium text-white">Hands-on</h3>
          <p class="mt-2 text-base text-gray-400">Engage in practical activities, workshops, and coding challenges.</p>
        </div>

         <div class="bg-gray-800 bg-opacity-70 rounded-lg p-6 shadow-lg border border-teal-600 animate-slide-up delay-500">
           <div class="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" /></svg>
          </div>
          <h3 class="mt-5 text-lg font-medium text-white">Emerging Tech</h3>
          <p class="mt-2 text-base text-gray-400">Explore and learn about the latest technologies and trends.</p>
        </div>
      </section>

      <!-- Call to Action (Example) -->
      <section class="text-center animate-fade-in delay-600">
        <h3 class="text-2xl font-semibold text-white mb-4">Ready to join the community?</h3>
        <NuxtLink to="/register" class="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 md:py-4 md:text-lg md:px-10 transition-colors">
          Get Started
        </NuxtLink>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// You can add component-specific logic here if needed

// Animation classes (defined in global CSS or a shared file if preferred)
const animateFadeIn = 'opacity-0 animate-fadeIn';
const animateSlideDown = 'opacity-0 transform -translate-y-4 animate-slideDown';
const animateSlideUp = 'opacity-0 transform translate-y-4 animate-slideUp';
</script>

<style scoped>
/* Add keyframes for animations if not defined globally */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-1rem); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(1rem); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-slide-down {
  animation: slideDown 0.8s ease-out forwards;
}

.animate-slide-up {
  animation: slideUp 0.6s ease-out forwards;
}

.delay-100 {
  animation-delay: 0.1s;
}
.delay-200 {
  animation-delay: 0.2s;
}
.delay-300 {
  animation-delay: 0.3s;
}
.delay-400 {
  animation-delay: 0.4s;
}
.delay-500 {
  animation-delay: 0.5s;
}
.delay-600 {
  animation-delay: 0.6s;
}
</style>
