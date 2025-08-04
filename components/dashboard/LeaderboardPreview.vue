<!-- components/dashboard/LeaderboardPreview.vue -->
<template>
  <div class="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-lg p-6 shadow-sm">
    <h3 class="text-2xl font-stencil mb-4 text-gray-900">Top Contributors</h3>
    <ul class="space-y-4">
      <li v-for="(leader, index) in leaders" :key="leader.name" class="flex items-center gap-4">
        <span class="font-bold text-lg text-purple-accent">{{ index + 1 }}.</span>
        <img :src="leader.avatar" :alt="leader.name" class="w-10 h-10 rounded-full object-cover border-2 border-white" />
        <div class="flex-grow">
          <p class="font-bold text-gray-800">{{ leader.name }}</p>
          <p class="text-sm text-gray-500">{{ leader.points }} Points</p>
        </div>
      </li>
    </ul>
    <button class="w-full mt-6 bg-purple-accent text-white py-2 rounded-lg font-bold hover:bg-purple-700 transition-colors">
      View Full Leaderboard
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps({
  leaders: {
    type: Array as () => { name: string; avatar: string; points: number }[],
    required: true,
  },
});
</script>