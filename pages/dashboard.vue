<!-- pages/dashboard.vue -->
<template>
  <div class="min-h-screen bg-white relative overflow-hidden">
    <!-- Notebook Grid Background -->
    <div class="notebook-grid"></div>
    
    <!-- Decorative Stickers (Paths Corrected to be valid web paths) -->
    <img 
        src="assets\images\dashboard\book.webp" alt="Doodle" class="absolute top-[90px] right-[20px] w-20 h-auto opacity-80 hidden md:block z-10"/>
     
    <img 
       src="assets/images/dashboard/luffy-gear-5-laughing-sticker.gif" alt="Doodle" class="absolute bottom-[50px] left-[20px] w-20 h-auto opacity-80 hidden md:block z-10"/>
   
    <img 
       src="assets/images/dashboard/pc.jpg" alt="Doodle" class="absolute top-[400px] left-[3%] w-16 h-auto opacity-50 hidden lg:block transform -rotate-12 z-10"/> 
    
    
    <!-- Main Content Flow -->
    <div class="relative z-20 flex flex-col items-center space-y-24 md:space-y-32 pt-[120px] pb-20">
      
      <!-- Section 1: Hero -->
      <section class="text-center animate-fade-in-up">
        <!-- This now correctly uses 'Black Ops One' -->
        <h1 class="font-stencil text-5xl md:text-7xl uppercase text-brand-purple-title">Campus Life</h1>
        <h2 class="font-stencil text-4xl md:text-6xl uppercase mt-2 text-brand-purple-title">Your Way!</h2>
        <p class="mt-6 text-lg text-brand-grey-sub max-w-2xl mx-auto font-sans">
          A centralized hub for events, notes, clubs, and all things campus.
        </p>
      </section>

      <!-- Section 2: Event Highlights -->
      <section class="w-full animate-fade-in-up" style="animation-delay: 0.2s;">
        <!-- UPDATED: Applied new font class -->
        <div class="text-center mb-12"><h3 class="text-4xl font-heading-secondary font-bold text-gray-800">Event Highlights</h3></div>
        <ClientOnly>
          <div class="flex justify-center flex-wrap gap-8 md:gap-12 px-4 max-w-7xl mx-auto">
            <EventPolaroid v-for="event in events" :key="event.title" :event="event" />
          </div>
        </ClientOnly>
      </section>

      <!-- Section 3: Featured Activities -->
      <section class="w-full animate-fade-in-up" style="animation-delay: 0.4s;">
        <!-- UPDATED: Applied new font class -->
        <div class="text-center mb-12"><h3 class="text-4xl font-heading-secondary font-bold text-gray-800">Featured Activities</h3></div>
        <ClientOnly>
          <div class="flex justify-center flex-wrap gap-8 md:gap-10 px-4 max-w-6xl mx-auto">
            <FeaturedActivityCard v-for="activity in featuredActivities" :key="activity.title" :activity="activity" />
          </div>
        </ClientOnly>
      </section>

      <!-- Section 4: Opportunities & Scroller -->
      <section class="w-full text-center animate-fade-in-up" style="animation-delay: 0.6s;">
        <!-- UPDATED: Applied new font class -->
        <div class="mb-8"><h3 class="text-4xl font-heading-secondary font-bold text-gray-800">Opportunities</h3></div>
        <ClientOnly><MotivationalScroller /></ClientOnly>
        <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl mx-auto">
          <OpportunityCard v-for="opp in opportunities" :key="opp.title" :opportunity="opp" />
        </div>
        <div class="mt-10">
          <NuxtLink to="/opportunities" class="inline-flex items-center gap-2 px-8 py-4 bg-purple-accent text-white font-bold rounded-full hover:bg-purple-700 transition-all duration-300 shadow-lg">
            See More Opportunities
          </NuxtLink>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Dashboard - MEC-UNOFFICALS',
  meta: [{ name: 'description', content: 'Your centralized hub for campus life.' }]
})

// Corrected image paths to point to the 'public' folder
const events = [
  { 
    title: 'Tech Fest 2024', 
    image: '/images/img1.webp', 
    date: 'Oct 26', 
    description: 'A massive celebration of technology and innovation.' 
  },
  { 
    title: 'Art & Culture Night', 
    image: '/images/por2.webp', 
    date: 'Nov 12', 
    description: 'Showcasing student talent in music, dance, and arts.' 
  },
  { 
    title: 'Annual Sports Meet', 
    image: '/images/pot1.webp', 
    date: 'Nov 28', 
    description: 'Compete in track and field events. Go for gold!' 
  },
];

const featuredActivities = [
  { icon: '💻', clubName: 'Dev Club', title: 'Hackathon Prep', tag: 'Live' },
  { icon: '🎨', clubName: 'Art Circle', title: 'Live Sketching', tag: 'Upcoming' },
  { icon: '🎮', clubName: 'Gaming Guild', title: 'Valorant Night', tag: 'Live' },
];

const opportunities = [
  { title: 'Frontend Intern', company: 'Vercel', type: 'Remote' },
  { title: 'Campus Ambassador', company: 'Google', type: 'On-Campus' },
  { title: 'Event Volunteer', company: 'NASA Space Apps', type: 'Volunteer' },
  { title: 'Data Science Intern', company: 'Microsoft', type: 'Remote' },
];
</script>

<style scoped>
.notebook-grid {
  position: fixed;
  inset: 0;
  background-image: 
    linear-gradient(rgba(200, 200, 200, 0.3) 1px, transparent 1px),
    linear-gradient(90deg, rgba(200, 200, 200, 0.3) 1px, transparent 1px);
  background-size: 20px 20px;
  z-index: 0;
  pointer-events: none;
}
</style>