<template>
  <div class="space-y-6 animate-fade-in">
    <header class="bg-white shadow-lg rounded-lg p-6">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl font-extrabold text-gray-900">Admin Dashboard</h1>
        <p class="mt-2 text-lg text-gray-600">Admin-only controls and analytics.</p>
      </div>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- User Management -->
      <div class="bg-white overflow-hidden shadow-lg rounded-lg transition-transform transform hover:scale-105 animate-slide-up">
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">User Management</h3>
          <div class="space-y-4">
            <p class="text-gray-500">Manage users, roles, and permissions.</p>
            <!-- Link to user management section/page -->
            <NuxtLink to="#" class="text-indigo-600 hover:text-indigo-900">Go to User Management</NuxtLink>
          </div>
        </div>
      </div>

      <!-- Content Moderation -->
      <div class="bg-white overflow-hidden shadow-lg rounded-lg transition-transform transform hover:scale-105 animate-slide-up delay-100">
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Content Moderation</h3>
          <div class="space-y-4">
            <p class="text-gray-500">Review and moderate reported content.</p>
             <!-- Link to content moderation section/page -->
            <NuxtLink to="#" class="text-indigo-600 hover:text-indigo-900">Go to Content Moderation</NuxtLink>
          </div>
        </div>
      </div>

      <!-- Analytics and Reports -->
      <div class="bg-white overflow-hidden shadow-lg rounded-lg transition-transform transform hover:scale-105 animate-slide-up delay-200">
        <div class="p-6">
          <h3 class="text-xl font-semibold text-gray-900 mb-4">Analytics & Reports</h3>
          <div class="space-y-4">
            <p class="text-gray-500">View platform statistics and reports.</p>
             <!-- Link to analytics section/page -->
            <NuxtLink to="#" class="text-indigo-600 hover:text-indigo-900">Go to Analytics</NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- System Settings -->
    <div class="bg-white overflow-hidden shadow-lg rounded-lg p-6 animate-fade-in delay-300">
      <h3 class="text-xl font-semibold text-gray-900 mb-4">System Settings</h3>
      <div class="space-y-4">
        <p class="text-gray-500">Configure platform settings.</p>
        <!-- Link to settings section/page -->
        <NuxtLink to="#" class="text-indigo-600 hover:text-indigo-900">Go to Settings</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Admin dashboard logic here
// Consider fetching data for analytics and reports from an API using environment variables
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

.delay-300 {
  animation-delay: 0.3s;
}
</style>
