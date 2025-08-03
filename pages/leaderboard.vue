<template>
  <div class="space-y-6 animate-fade-in">
    <header class="bg-white shadow-lg rounded-lg p-6">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl font-extrabold text-gray-900">Leaderboard</h1>
        <p class="mt-2 text-lg text-gray-600">See top students and rankings based on points and achievements.</p>
      </div>
    </header>

    <div class="bg-white overflow-hidden shadow-lg rounded-lg p-6 animate-slide-up">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">Top Students</h3>
      <div class="space-y-4">
        <!-- Leaderboard table or list will go here -->
        <div class="border-b pb-4 last:border-b-0 flex justify-between items-center">
          <div>
            <h4 class="text-lg font-medium text-gray-900">Student Name Placeholder</h4>
            <p class="text-gray-600 text-sm mt-1">Points: XXXX</p>
          </div>
          <span class="text-xl font-bold text-indigo-600">#1</span>
        </div>
        <p class="text-gray-500">Leaderboard data will appear here.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Leaderboard page logic here
// Consider fetching leaderboard data from an API
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
</style>
