<!-- File: pages/profile.vue -->
<template>
  <div class="space-y-8 animate-fade-in min-h-[calc(100vh-120px)]">
    <!-- Profile Header Section -->
    <header class="bg-gray-900/50 backdrop-blur-md shadow-lg rounded-lg p-6 md:p-8 border border-white/10">
      <div class="flex flex-col md:flex-row items-center gap-6">
        <!-- Avatar/Profile Picture -->
        <div class="relative w-32 h-32 rounded-full border-4 border-purple-accent overflow-hidden shadow-xl">
          <!-- Placeholder SVG or actual image -->
          <img
            src="https://via.placeholder.com/128/9333EA/FFFFFF?text=AJ"
            alt="User Avatar"
            class="w-full h-full object-cover"
          >
        </div>

        <!-- User Info -->
        <div class="text-center md:text-left flex-grow">
          <h1 class="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {{ userStore.user?.name || 'Student Profile' }}
          </h1>
          <p class="mt-2 text-lg text-gray-400">
            {{ userStore.user?.role || 'Community Member' }} at College
          </p>
          <p class="mt-1 text-md text-gray-500">
            {{ userStore.user?.email || 'No email available' }}
          </p>
        </div>

        <!-- Points/Gamification Display -->
        <div class="flex flex-col items-center md:items-end text-right">
          <span class="text-6xl font-bold text-purple-accent leading-none">{{ userStore.user?.points || 0 }}</span>
          <span class="text-lg text-gray-300 -mt-2">YUKTHI Points</span>
          <button class="mt-4 bg-purple-accent text-white px-5 py-2 rounded-full hover:bg-purple-accent/80 transition-colors shadow-lg">
            Edit Profile
          </button>
        </div>
      </div>
    </header>

    <!-- Main Content Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Achievements & Badges -->
      <div class="lg:col-span-2 bg-gray-900/50 backdrop-blur-md shadow-lg rounded-lg p-6 md:p-8 border border-white/10 animate-slide-up delay-100">
        <h3 class="text-2xl font-bold text-white mb-6">Achievements & Badges</h3>
        <div v-if="userStore.user?.points && userStore.user.points > 0" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <!-- Example Badges (Conditional based on points or actual data) -->
          <div v-if="userStore.user.points >= 500" class="badge-card">
            <span class="text-4xl">🏆</span>
            <span class="text-sm mt-1">Learner Pro</span>
          </div>
          <div v-if="userStore.user.points >= 1000" class="badge-card">
            <span class="text-4xl">💡</span>
            <span class="text-sm mt-1">Idea Innovator</span>
          </div>
          <div v-if="userStore.user.points >= 2000" class="badge-card">
            <span class="text-4xl">🏅</span>
            <span class="text-sm mt-1">Community Hero</span>
          </div>
          <div class="badge-card">
            <span class="text-4xl">✨</span>
            <span class="text-sm mt-1">First Login</span>
          </div>
           <div class="badge-card opacity-50 grayscale">
            <span class="text-4xl">🌱</span>
            <span class="text-sm mt-1">Growth Mindset</span>
          </div>
           <div class="badge-card opacity-50 grayscale">
            <span class="text-4xl">🤝</span>
            <span class="text-sm mt-1">Collaborator</span>
          </div>
        </div>
        <div v-else class="text-center py-8 text-gray-500">
          <p>No achievements earned yet. Start contributing to earn badges!</p>
        </div>
      </div>

      <!-- Recent Activity / Project Showcase (Right Column) -->
      <div class="bg-gray-900/50 backdrop-blur-md shadow-lg rounded-lg p-6 md:p-8 border border-white/10 animate-slide-up delay-200">
        <h3 class="text-2xl font-bold text-white mb-6">Recent Activity / Projects</h3>
        <div class="space-y-4">
          <div class="activity-item">
            <p class="text-sm text-gray-400">July 15, 2024</p>
            <p class="text-white">Uploaded notes for <span class="text-purple-accent font-semibold">"Advanced Data Structures"</span></p>
          </div>
          <div class="activity-item">
            <p class="text-sm text-gray-400">July 10, 2024</p>
            <p class="text-white">Joined <span class="text-purple-accent font-semibold">"Competitive Programming Club"</span></p>
          </div>
          <div class="activity-item">
            <p class="text-sm text-gray-400">July 08, 2024</p>
            <p class="text-white">Showcased project <span class="text-purple-accent font-semibold">"AI Chatbot for Campus Support"</span></p>
          </div>
          <div class="activity-item">
            <p class="text-sm text-gray-400">July 01, 2024</p>
            <p class="text-white">Received <span class="text-purple-accent font-semibold">"Learner Pro"</span> badge!</p>
          </div>
          <div class="text-center mt-6">
            <NuxtLink to="/projects" class="text-purple-accent hover:text-purple-accent/80 font-semibold">View All Projects →</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user';

// Apply the auth middleware to this page
definePageMeta({
  middleware: 'auth'
});

const userStore = useUserStore();
</script>

<style scoped>
/* These scoped styles are specifically for elements within this profile page */
.badge-card {
  @apply flex flex-col items-center justify-center p-4 bg-gray-800/60 rounded-lg text-gray-200 border border-white/5 shadow-md hover:bg-gray-700/60 transition-colors duration-200;
}

.activity-item {
  @apply border-l-4 border-purple-accent pl-4 py-2 bg-gray-800/40 rounded-r-md;
}
</style>