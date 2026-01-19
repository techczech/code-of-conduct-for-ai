# AI Practitioner Code of Conduct & Interactive Guide

This is a modern, interactive React application designed to help AI practitioners, journalists, and policymakers understand and apply a code of conduct for AI literacy. It features a "Code" section outlining core principles and an "Evaluating Evidence" dashboard with interactive case studies.

## Architecture

The application is built as a Single Page Application (SPA) using **React 19** and **TypeScript**.

### Key Technologies
*   **Framework**: React 19 (using ES Modules via `importmap`).
*   **Language**: TypeScript for type safety and developer experience.
*   **Styling**: Tailwind CSS (loaded via CDN) for rapid, utility-first styling.
*   **Icons**: Heroicons (React v2).

### State Management & Routing
Instead of a heavy routing library, the app uses **State-Based Routing** within `App.tsx`.
*   `currentView`: Toggles between the main landing page ('code') and the interactive exercises ('practice').
*   `selectedScenarioId`: Manages the drill-down navigation from the Evidence Dashboard to specific Scenario Detail pages.

## Directory Structure

*   `index.html`: Entry point. Configures the React root, Tailwind CDN, and Import Maps.
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
3.  **Tailwind**: Since Tailwind is currently loaded via CDN for simplicity, no CSS build step is strictly required for development, though a production build would typically extract CSS.

### Requirements
*   A static web server.
*   Support for serving `index.html` for the root path.
