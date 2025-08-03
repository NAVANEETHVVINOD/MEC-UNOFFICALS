<template>
  <div class="space-y-6 animate-fade-in">
    <header class="bg-white shadow-lg rounded-lg p-6">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl font-extrabold text-gray-900">Internship & Job Portal</h1>
        <p class="mt-2 text-lg text-gray-600">Apply for jobs/internships and view company postings.</p>
      </div>
    </header>

    <div class="bg-white overflow-hidden shadow-lg rounded-lg p-6 animate-slide-up">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">Available Listings</h3>
      <div class="space-y-4">
        <!-- List of job/internship postings will go here -->
        <div class="border-b pb-4 last:border-b-0">
          <h4 class="text-lg font-medium text-gray-900">Job Title Placeholder</h4>
          <p class="text-gray-600 text-sm mt-1">Company Name | Location | Type (Full-time, Internship)</p>
          <p class="text-indigo-600 text-sm mt-2">Application Deadline: Date</p>
        </div>
        <p class="text-gray-500">No job or internship listings available.</p>
      </div>
    </div>

    <div class="bg-white overflow-hidden shadow-lg rounded-lg p-6 animate-slide-up delay-100">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">Your Applications</h3>
      <div class="space-y-4">
        <!-- List of user's applications will go here -->
         <p class="text-gray-500">No applications submitted yet.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Jobs page logic here
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
