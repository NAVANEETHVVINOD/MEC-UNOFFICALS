<template>
  <div class="space-y-6 animate-fade-in">
    <header class="bg-white shadow-lg rounded-lg p-6">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl font-extrabold text-gray-900">Notes Sharing</h1>
        <p class="mt-2 text-lg text-gray-600">Upload and download study materials, with ratings and rewards.</p>
      </div>
    </header>

    <div class="bg-white overflow-hidden shadow-lg rounded-lg p-6 animate-slide-up">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">Upload Notes</h3>
      <div class="space-y-4">
        <!-- Notes upload form will go here -->
        <p class="text-gray-500">Form to upload study materials.</p>
      </div>
    </div>

    <div class="bg-white overflow-hidden shadow-lg rounded-lg p-6 animate-slide-up delay-100">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">Browse Notes</h3>
      <div class="space-y-4">
        <!-- List of shared notes will go here -->
        <div class="border-b pb-4 last:border-b-0">
          <h4 class="text-lg font-medium text-gray-900">Note Title Placeholder</h4>
          <p class="text-gray-600 text-sm mt-1">Course Name | Uploaded by Student Name</p>
          <p class="text-indigo-600 text-sm mt-2">Rating: 4.5/5</p>
        </div>
        <p class="text-gray-500">No notes shared yet.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Notes page logic here
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
