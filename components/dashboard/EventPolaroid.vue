<!-- components/dashboard/EventPolaroid.vue -->
<template>
  <div class="relative group transform-gpu transition-all duration-500 hover:-translate-y-3 hover:rotate-[-1deg] bg-white p-5 pb-8 rounded-lg shadow-xl border-2 border-gray-100 w-full max-w-sm cursor-pointer polaroid-card">
    <div class="absolute -top-3 -right-2 w-16 h-8 bg-yellow-100 opacity-70 transform rotate-12 rounded-sm shadow-sm tape-piece"></div>
    <div class="absolute -top-4 right-4 w-20 h-6 bg-yellow-200 opacity-60 transform rotate-[-8deg] rounded-sm shadow-sm tape-piece"></div>
    <div class="absolute inset-0 border-2 border-gray-300 rounded-lg transform rotate-[-0.5deg] opacity-30"></div>
    <div class="relative z-10">
      <div class="relative overflow-hidden rounded-sm mb-4 shadow-inner">
        <img 
          :src="event.image" 
          :alt="event.title" 
          class="w-full h-48 object-cover filter sepia-[0.1] contrast-[1.1] brightness-[0.95] transition-all duration-300 group-hover:sepia-0 group-hover:contrast-100 group-hover:brightness-100" 
        />
        <div class="absolute inset-0 bg-gradient-to-br from-yellow-50/20 to-transparent pointer-events-none"></div>
      </div>
      <div class="space-y-2">
        <h4 class="font-handdrawn text-xl text-gray-800 mb-2 leading-tight transform -rotate-[0.5deg]">
          {{ event.title }}
        </h4>
        <p class="font-handdrawn text-sm text-gray-600 font-semibold mb-3 transform rotate-[0.3deg]">
          📅 {{ event.date }}
        </p>
        <p class="font-sans text-sm text-gray-700 leading-relaxed line-clamp-3">
          {{ event.description }}
        </p>
      </div>
      <div class="absolute bottom-2 right-2 opacity-30">
        <svg width="20" height="20" viewBox="0 0 20 20" class="text-purple-400">
          <path d="M10 2 L12 8 L18 8 L13.5 12 L15.5 18 L10 14.5 L4.5 18 L6.5 12 L2 8 L8 8 Z" 
                fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
        </svg>
      </div>
    </div>
    <div class="absolute inset-0 bg-gradient-to-br from-transparent to-gray-900/5 rounded-lg pointer-events-none"></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  event: {
    type: Object as () => { title: string; image: string; date: string; description: string; },
    required: true,
  },
});
</script>

<style scoped>
.polaroid-card {
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1), 0 6px 12px rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8);
}
.polaroid-card:hover {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15), 0 10px 20px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.9);
}
.tape-piece {
  background: linear-gradient(45deg, #fef3c7, #fde68a);
  border: 1px solid #d97706;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}
.group:hover .tape-piece { opacity: 0.9; }
.filter { transition: filter 0.3s ease; }
</style>