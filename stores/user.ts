// stores/user.ts (FINAL AND ROBUST CODE)

import { defineStore } from 'pinia';

// Define the type for your user object
interface User {
  name: string;
  email: string;
  role: 'Student' | 'Teacher' | 'Recruiter' | 'Admin';
  points: number;
  avatarUrl?: string;
  bio?: string;
}

interface UserState {
  user: User | null;
  isLoggedIn: boolean;
}

export const useUserStore = defineStore('user', {
  // State: The data managed by this store
  state: (): UserState => ({
    user: null,
    isLoggedIn: false,
  }),

  // Getters: Computed properties based on the state
  getters: {
    isAuthenticated: (state) => state.isLoggedIn && state.user,
    userName: (state) => state.user?.name || 'Guest',
    userRole: (state) => state.user?.role || 'Guest',
  },

  // Actions: Methods to modify the state
  actions: {
    /**
     * Attempts to register a new user.
     * In a real app, this would call your backend API.
     */
    async register(name: string, email: string, password: string) {
      console.log(`Attempting to register new user: ${email}`);
      // MOCK REGISTRATION FOR DEVELOPMENT
      await new Promise(resolve => setTimeout(resolve, 500));
      
      this.user = {
        name: name,
        email: email,
        role: 'Student',
        points: 0,
        avatarUrl: `https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(name)}`,
        bio: 'A new member of the community!',
      };
      this.isLoggedIn = true;
      console.log('Mock Registration successful for:', this.user.name);
      
      // Redirect to the dashboard after registration
      await navigateTo('/dashboard');
    },
    
    /**
     * Attempts to log in a user.
     * Throws an error on failure, which the component can catch.
     */
    async login(email: string, password: string) {
      console.log(`Attempting to log in with: ${email}`);
      // MOCK LOGIN FOR DEVELOPMENT
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (email.toLowerCase() === 'test@example.com' && password === 'password123') {
        this.user = {
          name: 'Alex Johnson',
          email: email,
          role: 'Student',
          points: 1250,
          avatarUrl: `https://api.dicebear.com/8.x/initials/svg?seed=Alex%20Johnson`,
          bio: 'Enthusiastic computer science student.'
        };
        this.isLoggedIn = true;
        console.log('Mock Login successful for:', this.user.name);
        await navigateTo('/dashboard');
        return;
      } 
      
      if (email.toLowerCase() === 'teacher@example.com' && password === 'password123') {
         this.user = {
          name: 'Prof. Sharma',
          email: email,
          role: 'Teacher',
          points: 500,
          avatarUrl: `https://api.dicebear.com/8.x/initials/svg?seed=Prof%20Sharma`,
        };
        this.isLoggedIn = true;
        console.log('Mock Login successful for:', this.user.name);
        await navigateTo('/dashboard');
        return;
      }
      
      this.$reset(); // Clear any previous state on failed login
      throw new Error('Invalid email or password.');
    },

    /**
     * Logs out the current user by resetting the store and redirecting.
     */
    async logout() {
      console.log('Logging out...');
      this.$reset(); // The easiest way to clear state and persisted data
      console.log('User logged out, state reset.');
      await navigateTo('/login'); // Redirect to login page after logout
    },
  },

  // Enables persistence for this store via pinia-plugin-persistedstate
  persist: true,
});