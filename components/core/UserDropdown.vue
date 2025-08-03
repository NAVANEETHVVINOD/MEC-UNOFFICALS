<!-- components/core/UserDropdown.vue (UPDATED) -->
<template>
  <div class="relative">
    <button @click="isOpen = !isOpen" class="flex items-center space-x-2 focus:outline-none">
      <!-- FIXED: Changed color to a nice purple -->
      <div class="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-sm">
        {{ userInitials }}
      </div>
    </button>
    <div v-if="isOpen" @click="isOpen = false" class="fixed inset-0 z-10"></div>
    <!-- ... rest of the transition and dropdown menu ... -->
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <div v-if="isOpen" class="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-20 border border-gray-700">
        <div class="px-4 py-2 border-b border-gray-700">
          <p class="text-sm text-white font-semibold">{{ userStore.userName }}</p>
          <p class="text-xs text-gray-400 truncate">{{ userStore.user?.email }}</p>
        </div>
        <NuxtLink to="/profile" class="dropdown-item">Profile</NuxtLink>
        <button @click="handleLogout" class="dropdown-item w-full text-left text-red-400 hover:bg-red-500/20">Logout</button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
// The script remains the same
import { ref, computed } from 'vue';
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
const isOpen = ref(false);
const handleLogout = async () => { isOpen.value = false; await userStore.logout(); };
const userInitials = computed(() => {
  if (!userStore.user?.name) return '??';
  return userStore.user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
});
</script>

<style scoped>
.dropdown-item { @apply block px-4 py-2 text-sm text-gray-300 hover:bg-purple-600 hover:text-white transition-colors; }
</style>