// composables/useDarkMode.ts
import { ref, onMounted } from 'vue'

export function useDarkMode() {
  const isDarkMode = ref(true) // Default to dark mode

  onMounted(() => {
    // This code runs ONLY in the browser
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      isDarkMode.value = savedTheme === 'dark';
    } else {
      isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    document.documentElement.classList.toggle('dark', isDarkMode.value);
  });

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
    localStorage.setItem('theme', isDarkMode.value ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkMode.value);
  };

  return { isDarkMode, toggleDarkMode };
}