<!-- File: pages/about.vue -->
<template>
  <div class="flex flex-col items-center justify-center min-h-screen text-center text-gray-100 p-8">
    <h1 class="text-5xl font-bold text-purple-accent mb-4">About UNOFFICIAL</h1>
    <p class="text-lg max-w-2xl text-gray-300 mb-8">
      UNOFFICIAL is your modern college community app, built by students, for students.
      We aim to enhance campus life, foster engagement, and support academic and career development.
    </p>
    <div class="space-y-2 text-gray-400">
      <p>
        <span class="font-semibold">Our Mission:</span> To connect students, enable knowledge sharing, and promote innovation in a fun, gamified environment.
      </p>
      <p>
        <span class="font-semibold">Tech Stack:</span> Nuxt 3 (Vue 3, TypeScript), Tailwind CSS, Pinia, and a planned Flask backend.
      </p>
      <p>
        <span class="font-semibold">Features:</span> Dashboard, Events, Confessions, Notes, Projects, Jobs, Clubs, Leaderboard, and more!
      </p>
    </div>
    <NuxtLink to="/" class="mt-8 inline-block bg-purple-accent text-white px-6 py-3 rounded-full text-lg hover:bg-purple-accent/80 transition-colors shadow-lg">
      Back to Home
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
// This page uses the default layout (dark theme)
</script>