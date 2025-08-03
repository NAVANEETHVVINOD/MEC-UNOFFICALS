# Unofficial - A Modern College Community Platform

A modern, feature-rich college community platform built with Nuxt 3. It features a unique, interactive, and illustrative design aesthetic to create a highly engaging user experience. Unofficial serves as a comprehensive hub for students, faculty, and recruiters to connect, share, and grow.

## 🎯 Mission & Vision

Our platform aims to solve common campus challenges by providing a centralized, intuitive, and visually engaging digital space. We're creating a community where:
- Knowledge sharing becomes intuitive and rewarding.
- Discovering events and clubs is simple and exciting.
- Career development is seamlessly integrated into campus life.
- Student voices are heard and valued.

---

## 🚀 Core Features

- **Interactive Dashboard**: A full-screen, parallax hero experience that welcomes users after login.
- **Notes Sharing**: Upload and download study materials, organized by subject and semester.
- **Project Showcase**: A space for students to display academic and personal projects and build a portfolio.
- **Internship & Job Portal**: Direct access to campus recruitment and career opportunities.
- **Issue Reporting System**: A streamlined way for students to report and track campus maintenance issues.
- **Anonymous Confessions**: A safe, moderated space for sharing thoughts and feedback.
- **Club Management**: Discover, join, and manage student clubs and communities.
- **Events Calendar**: Never miss an important campus event or academic deadline.

---

## 🎨 Visual Style & Design

The platform's design is modern, minimalist, and illustrative, creating a memorable user experience.

- **Hero Section:** The post-login dashboard is a full-screen, interactive hero section with a dynamic parallax effect that responds to the user's mouse movement.
- **Color Palette:** The primary design uses a clean, monochromatic palette (`#F0F0F0` light grey, black, and white) to emphasize the illustrative assets. Purple is used as a subtle accent for key actions.
- **Typography:**
    - **Headlines:** Uses **Anton** (`font-display`), a bold, impactful display font for a strong visual hierarchy.
    - **Body & UI:** Uses **Inter** (`font-sans`), a clean and highly readable sans-serif for all other text.
- **Illustrations:** The hero section is populated with hand-drawn style illustrations and animated GIFs themed around college, learning, and innovation.
- **3D Text Effect:** Headlines feature a prominent 3D shadow effect, achieved with a custom Tailwind CSS plugin.
- **UI:** The navigation bar is designed to be "smart," appearing transparent over the hero section and solid on other pages for a seamless look.

---

## 🛠️ Tech Stack

- **Frontend:** Nuxt 3 (Vue 3, TypeScript)
- **Styling:** Tailwind CSS, Google Fonts
- **State Management:** Pinia with `pinia-plugin-persistedstate` for persistent login.
- **Icons:** Inline SVGs to reduce dependencies and improve performance.
- **Backend:** *Flask (Python, REST API) is planned for future integration.*

---

## 📁 Project Structure


.
├── assets/
├── components/
│ ├── core/ # Core UI components (Navbar, Dropdowns, etc.)
│ └── dashboard/ # Components specific to the dashboard page
├── composables/ # Reusable Vue composables
├── layouts/ # Page layouts (default, landing)
├── middleware/ # Route middleware (auth.ts)
├── pages/ # Application routes and views
├── plugins/ # Nuxt plugins (persistedstate.client.ts)
├── public/ # Static assets (images, icons)
├── stores/ # Pinia state management (user.ts)
├── nuxt.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json

Generated code
---

## 📄 Page Overview

- **`pages/index.vue` (Public Landing Page):** The entry point for new visitors.
- **`pages/login.vue` & `pages/register.vue`:** Clean, focused authentication forms styled to match the main application's aesthetic.
- **`pages/dashboard.vue` (Main Post-Login Page):** The full-screen interactive hero section that serves as the main user dashboard.
- **Other pages (`/events`, `/clubs`, etc.):** Functional pages that will contain the core features of the platform.

---

## ⚙️ Example: 3D Text Effect

The signature 3D text effect is enabled by a custom plugin in `tailwind.config.ts`.

```typescript
// tailwind.config.ts

import plugin from 'tailwindcss/plugin'

export default {
  theme: {
    extend: {
      fontFamily: {
        display: ['Anton', 'sans-serif'],
      },
      textShadow: {
        'default': '0.1em 0.1em 0 rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        { 'text-shadow': (value) => ({ textShadow: value }) },
        { values: theme('textShadow') }
      )
    }),
  ],
}
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
IGNORE_WHEN_COPYING_END

Usage in a component: <h1 class="font-display text-shadow-default">Hello</h1>

🚀 Setup & Installation

Clone the repository:

Generated bash
git clone <your-repo-url>
cd <project-folder>
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Bash
IGNORE_WHEN_COPYING_END

Install dependencies:

Generated bash
npm install
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Bash
IGNORE_WHEN_COPYING_END

Start the development server:

Generated bash
npm run dev
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
Bash
IGNORE_WHEN_COPYING_END

The application will be available at http://localhost:3000.

📝 Project Status

Frontend: Core architecture is in place. The interactive dashboard, authentication flow, and "smart" navbar are fully implemented.

Backend: Currently using a mock Pinia store for user data. A Flask API is planned for the future.

