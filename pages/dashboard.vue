<!-- pages/dashboard.vue -->
<!-- New design featuring a central photo slider and corner void elements. -->
<template>
  <div class="bg-gray-100">
    <!-- Main container for the hero section -->
    <header class="relative w-full h-screen overflow-hidden font-sans">
      
      <!-- Fullscreen Particle System -->
      <div class="particle-background">
        <div v-for="i in 50" :key="`particle-${i}`" class="star" :style="getStarStyle()"></div>
      </div>

      <!-- 3 Corner Void Elements -->
      <div class="absolute inset-0 z-0">
        <!-- Top-left void -->
        <div class="void" style="width: 25vw; height: 25vw; top: -5%; left: -8%;">
          <div class="stars-bg"></div>
        </div>
        <!-- Top-right void -->
        <div class="void" style="width: 20vw; height: 20vw; top: 0%; right: -5%; animation-delay: -3s;">
          <div class="stars-bg"></div>
        </div>
        <!-- Bottom-right void -->
        <div class="void" style="width: 30vw; height: 30vw; bottom: -10%; right: -10%; animation-delay: -6s;">
          <div class="stars-bg"></div>
        </div>
      </div>
      
      <!-- Central Content Layout -->
      <main class="relative z-20 w-full h-screen flex flex-col items-center justify-center p-4">
        <!-- Headline Section -->
        <div class="text-center animate-fade-in-up">
          <h1 class="hero-heading">Unofficials</h1>
          <h1 class="hero-heading mt-1">Campus Life</h1>
          <h1 class="hero-heading mt-1">Your Way!</h1>
          <p class="mt-4 text-lg font-semibold text-gray-600 max-w-md mx-auto">
              Where Confessions, Clubs, and Chaos Collide!
          </p>
        </div>

        <!-- Event Photo Slider -->
        <div class="slider-container mt-8 animate-fade-in-up" style="animation-delay: 0.3s;">
          <div class="slider-wrapper" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div v-for="(slide, index) in slides" :key="index" class="slide">
              <img :src="slide.img" :alt="slide.alt" class="slide-image"/>
            </div>
          </div>
          <!-- Slider Navigation -->
          <div class="slider-dots">
            <button v-for="(slide, index) in slides" :key="`dot-${index}`" @click="goToSlide(index)" :class="{ 'active': currentSlide === index }"></button>
          </div>
        </div>
      </main>

    </header>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useAppConfig } from '#app';

// Set the layout for this page
definePageMeta({
  layout: 'default'
});

const appConfig = useAppConfig();
let slideInterval: ReturnType<typeof setInterval>;

// --- Slider Logic ---
const currentSlide = ref(0);
const slides = ref([
  { img: 'https://placehold.co/800x450/000000/FFFFFF?text=College+Fest', alt: 'College festival event' },
  { img: 'https://placehold.co/800x450/000000/FFFFFF?text=Hackathon', alt: 'Students at a hackathon' },
  { img: 'https://placehold.co/800x450/000000/FFFFFF?text=Sports+Day', alt: 'College sports day' },
  { img: 'https://placehold.co/800x450/000000/FFFFFF?text=Club+Activity', alt: 'Student club activity' },
  { img: 'https://placehold.co/800x450/000000/FFFFFF?text=Graduation', alt: 'Graduation ceremony' },
]);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};

// --- Particle System Logic ---
const getStarStyle = () => {
  const size = Math.random() * 1.5 + 0.5; // Star size
  const duration = Math.random() * 3 + 4; // Animation duration
  return {
    width: `${size}px`,
    height: `${size}px`,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${Math.random() * 3}s`,
  };
};

onMounted(() => {
  // Make the navbar transparent when this page is active
  appConfig.navbar.isTransparent = true;
  // Start auto-sliding
  slideInterval = setInterval(nextSlide, 4000);
});

onUnmounted(() => {
  // Reset the navbar and clear interval when leaving this page
  appConfig.navbar.isTransparent = false;
  clearInterval(slideInterval);
});
</script>

<style scoped>
/* Fullscreen Particle System */
.particle-background {
  @apply absolute inset-0 z-0 overflow-hidden;
}
.star {
  @apply absolute bg-gray-400 rounded-full;
  animation-name: twinkle;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.1; transform: scale(0.7); }
  50% { opacity: 0.7; transform: scale(1); }
}

/* Black Void (Blob) Styling */
.void {
    @apply absolute bg-black rounded-full overflow-hidden;
    background: radial-gradient(circle at center, #000 70%, transparent 100%);
    animation: float-blob 20s ease-in-out infinite;
    box-shadow: 0 0 25px 8px rgba(0,0,0,0.25);
    border-radius: 45% 55% 60% 40% / 65% 50% 50% 35%;
}

.stars-bg {
    @apply absolute inset-0 w-full h-full opacity-60;
    background-image: 
        radial-gradient(white 0.5px, transparent 0.5px);
    background-size: 150px 150px;
    background-position: 0 0;
    animation: drift 120s linear infinite;
}

@keyframes drift {
    from { transform: translateY(0px) rotate(0deg); }
    to { transform: translateY(-150px) rotate(15deg); }
}

@keyframes float-blob {
    0%, 100% { transform: scale(1) translateY(0px) rotate(0deg); border-radius: 45% 55% 60% 40% / 65% 50% 50% 35%;}
    50% { transform: scale(1.03) translateY(-15px) rotate(4deg); border-radius: 65% 35% 45% 55% / 55% 60% 40% 45%;}
}

/* Hero Heading Typography */
.hero-heading {
    @apply font-display uppercase text-gray-800 tracking-wider;
    font-size: clamp(2.5rem, 10vw, 6rem);
    line-height: 1;
}

/* Photo Slider Styling */
.slider-container {
  @apply relative w-full max-w-4xl mx-auto rounded-lg shadow-2xl overflow-hidden;
  aspect-ratio: 16 / 9;
}
.slider-wrapper {
  @apply flex h-full transition-transform duration-700 ease-in-out;
}
.slide {
  @apply w-full h-full flex-shrink-0;
}
.slide-image {
  @apply w-full h-full object-cover;
  filter: grayscale(100%);
}
.slider-dots {
  @apply absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2;
}
.slider-dots button {
  @apply w-3 h-3 bg-white/50 rounded-full transition-all duration-300;
}
.slider-dots button.active {
  @apply bg-white w-6;
}

/* Entrance Animations */
@keyframes fade-in-up {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
    animation: fade-in-up 1s ease-out forwards;
}
</style>
