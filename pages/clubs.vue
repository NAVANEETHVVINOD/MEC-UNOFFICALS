<template>
  <div class="space-y-6 animate-fade-in">
    <header class="bg-white shadow-lg rounded-lg p-6">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl font-extrabold text-gray-900">Clubs & Communities</h1>
        <p class="mt-2 text-lg text-gray-600">Join, create, and interact with student clubs and groups.</p>
      </div>
    </header>

    <div class="bg-white overflow-hidden shadow-lg rounded-lg p-6 animate-slide-up">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">Your Clubs</h3>
      <div class="space-y-4">
        <!-- List of user's joined clubs will go here -->
        <p class="text-gray-500">You haven't joined any clubs yet.</p>
      </div>
    </div>

    <div class="bg-white overflow-hidden shadow-lg rounded-lg p-6 animate-slide-up delay-100">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">Explore Clubs</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Grid of other clubs will go here -->
        <div class="bg-gray-100 p-4 rounded-md shadow">
          <h4 class="text-lg font-medium text-gray-900">Club Name Placeholder</h4>
          <p class="text-gray-600 text-sm mt-1">Number of Members: XX</p>
          <p class="text-indigo-600 text-sm mt-2">Brief description of the club.</p>
        </div>
         <p class="text-gray-500">No clubs to explore.</p>
      </div>
    </div>

     <div class="bg-white overflow-hidden shadow-lg rounded-lg p-6 animate-slide-up delay-200">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">Create a New Club</h3>
      <div class="space-y-4">
        <!-- Form to create a new club will go here -->
        <p class="text-gray-500">Form to create a new club.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Clubs page logic here
const animateFadeIn = 'opacity-0 animate-fadeIn';
const animateSlideUp = 'opacity-0 transform translate-y-4 animate-slideUp';
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(1rem); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
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
</style>
