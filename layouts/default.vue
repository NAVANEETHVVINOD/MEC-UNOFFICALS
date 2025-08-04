<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen flex flex-col bg-graph-paper relative">
    <Navbar />
    <main class="flex-grow container mx-auto px-4 py-8 pb-24 md:pb-8">
      <slot />
    </main>
    <Footer />
    
    <!--
      [CRITICAL FIX]
      Wrap BottomNav in <ClientOnly> to prevent hydration mismatch.
      This ensures the component is only rendered in the browser,
      where the screen size is known.
    -->
    <ClientOnly>
      <BottomNav />
    </ClientOnly>
  </div>
</template>