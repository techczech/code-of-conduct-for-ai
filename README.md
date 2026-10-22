# AI Practitioner Code of Conduct & Interactive Guide

This is a modern, interactive React application designed to help AI practitioners, journalists, and policymakers understand and apply a code of conduct for AI literacy. It features a "Code" section outlining core principles and an "Evaluating Evidence" dashboard with interactive case studies.

## Architecture

The application is built as a Single Page Application (SPA) using **React 19** and **TypeScript**.

### Key Technologies
*   **Framework**: React 19 (bundled by Vite).
*   **Language**: TypeScript for type safety and developer experience.
*   **Styling**: Tailwind CSS compiled locally during the Vite build.
*   **Icons**: Heroicons (React v2).

### State Management & Routing
Instead of a heavy routing library, the app uses **State-Based Routing** within `App.tsx`.
*   `currentView`: Toggles between the main landing page ('code') and the interactive exercises ('practice').
*   `selectedScenarioId`: Manages the drill-down navigation from the Evidence Dashboard to specific Scenario Detail pages.

## Directory Structure

*   `index.html`: Entry point. Loads the bundled React entry point.
*   `index.tsx`: React DOM mounting logic.
*   `App.tsx`: Main application layout and state container.
*   `types.ts`: TypeScript interfaces defining the shape of Principles, Scenarios, Quizzes, and Learning Points.
*   `data.tsx`: Centralized static data repository. content for the app is separated from presentation logic here.

### Components (`components/`)

*   **`NavBar.tsx`**: Top navigation that handles view switching and resets state when necessary.
*   **`Hero.tsx`**: Landing page header with calls-to-action.
*   **`PrinciplesSection.tsx`**: Displays the core "Code of Conduct" cards.
*   **`EvidencePage.tsx`**: The main container for the interactive section. It acts as a controller that conditionally renders either the **Dashboard** (list of scenarios) or the **ScenarioDetail** view.
*   **`ScenarioDetail.tsx`**: A complex view component containing:
    *   The scenario context/story.
    *   An interactive quiz logic.
    *   An expandable "Expert Analysis" section that unlocks upon quiz completion.
*   **`LearningSection.tsx`**: Educational preamble for the evidence page.
*   **`Footer.tsx`**: Application footer.

## Deployment

This application is designed to be deployed to any static site hosting service (e.g., GitHub Pages, Vercel, Netlify, AWS S3).

### Build Process
1.  **Transpilation**: The `.tsx` and `.ts` files need to be transpiled to JavaScript (ES Modules).
2.  **Assets**: Ensure `index.html` is served as the entry point.
3.  **Tailwind**: Vite compiles the local Tailwind CSS and bundles fonts with the application.

### Requirements
*   A static web server.
*   Support for serving `index.html` for the root path.


## Independent static build

AI Practitioner Code of Conduct runs without an API key, AI Studio runtime or Google Cloud hosting. React, icons, styles and fonts are bundled locally.

Use Node.js 22.12 or newer and npm. Run `npm ci`, `npm run typecheck` and `npm run build`. Run `npm run preview -- --host 127.0.0.1` to inspect the production build. Serve `dist/` from the root of any static host; do not serve the TypeScript source files. No environment variables, backend or proxy are required.

### Cloudflare Pages preparation

When deployment is authorised, connect this repository to Cloudflare Pages, choose the intended branch, set the build command to `npm ci && npm run build`, and set the output directory to `dist`. Use Node.js 22.12 or newer. Leave API-key and Google Cloud settings empty. This migration does not deploy the site or change DNS.
