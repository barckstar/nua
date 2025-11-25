# Walkthrough - Fundación Nua Website

I have successfully initialized and built the core structure of the Fundación Nua website using React, Tailwind CSS, and TypeScript.

## Features Implemented

### 1. Project Setup & Architecture
- **Vite + React + TypeScript**: Fast and type-safe development environment.
- **Tailwind CSS**: Configured with the custom "Nua" color palette.
- **Routing**: `react-router-dom` setup for navigation between pages.
- **Internationalization (i18n)**: Custom `LanguageContext` to switch between Spanish (ES) and English (EN).

### 2. Components
- **Navbar**: A modern, responsive navbar featuring a "Hamburger" menu that opens a full-screen overlay, as requested. Includes a language switcher.
- **Footer**: Simple footer with copyright information.
- **Layout**: Wraps all pages to ensure consistent header/footer presence.

### 3. Pages
- **Home**: Features a Hero section with a background image, animated title/subtitle, and a "Call to Action" button.
- **Gallery**: Responsive 4-column grid with **LightGallery** integration for full-screen image viewing. Includes an automation script to manage images.
- **Blog**: Dynamic blog section with internationalized content. Features a list of posts with cards and individual post pages (`/blog/:id`).
- **Support, About**: Placeholder pages created and routed.

### 4. Design & Aesthetics
- **Color Palette**:
    - Dark Green: `#2E5C38`
    - Light Green: `#A3C940`
    - Brown: `#966F46`
    - Blue: `#7FB5D3`
    - Cream: `#F5F2E1`
- **Typography**: Used `Inter` (default sans) and `Serif` fonts for a premium feel.
- **Animations**: Used `framer-motion` for smooth entrance animations on the Home page and Navbar.

## How to Run

1.  **Install Dependencies** (if not already done):
    ```bash
    npm install
    ```
2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
3.  **Build for Production**:
    ```bash
    npm run build
    ```
4.  **Update Gallery**:
    - Place images in `public/gallery`.
    - Run the script to update the JSON data:
    ```bash
    npm run update-gallery
    ```

## Verification Results
- **Build**: Passed (`npm run build` successful).
- **Type Safety**: No TypeScript errors.
- **Routing**: Verified routes `/`, `/support`, `/about`, `/blog`, `/gallery`.

## Next Steps
- Add real content and images.
- Implement the specific layouts for the inner pages (About, Blog, Gallery).
- Optimize images for SEO.
