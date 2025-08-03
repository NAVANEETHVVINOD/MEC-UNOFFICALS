<template>
  <div class="space-y-6 animate-fade-in">
    <header class="bg-white shadow-lg rounded-lg p-6">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl font-extrabold text-gray-900">Anonymous Confessions</h1>
        <p class="mt-2 text-lg text-gray-600">Share and read anonymous confessions here.</p>
      </div>
    </header>

    <div class="bg-white overflow-hidden shadow-lg rounded-lg p-6 animate-slide-up">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">Submit a Confession</h3>
      <div class="space-y-4">
        <!-- Confession submission form will go here -->
        <p class="text-gray-500">Form to submit an anonymous confession.</p>
      </div>
    </div>

    <div class="bg-white overflow-hidden shadow-lg rounded-lg p-6 animate-slide-up delay-100">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">Recent Confessions</h3>
      <div class="space-y-4">
        <!-- List of recent confessions will go here -->
        <p class="text-gray-500">No recent confessions.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Confessions page logic here
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
</style>
