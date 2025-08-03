// middleware/auth.ts (CORRECT - NO CHANGES NEEDED)

import { useUserStore } from '~/stores/user'

export default defineNuxtRouteMiddleware((to, from) => {
  // If the route is marked as public, allow access without checks.
  if (to.meta.public) {
    return;
  }

  // For protected routes, get the user store.
  const userStore = useUserStore();

  // On page load, the store's state is restored from localStorage *before*
  // this middleware runs. So, `isLoggedIn` will be correct.
  if (!userStore.isLoggedIn) {
    // If the user is not logged in, redirect them to the login page.
    return navigateTo('/login');
  }
})