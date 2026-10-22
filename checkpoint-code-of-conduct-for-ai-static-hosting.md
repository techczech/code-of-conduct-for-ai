---
title: code-of-conduct-for-ai independent static hosting checkpoint
date: 2026-10-22
register: FOR AGENTS
status: checked
---

# Scope

Preserve app content, styling, interaction and browser data. No AI calls exist; add no key UI. No deployment, DNS change, GCP deletion or licence change.

# Implementation plan

1. Pull clean main; create `feat/independent-static-hosting` (completed).
2. Remove unused environment-key injection and runtime import maps. Connect the React entry point.
3. Bundle Tailwind, fonts and existing JavaScript dependencies. Commit reproducible npm lockfile.
4. Add credential-free static hosting and Cloudflare Pages instructions.
5. Run clean npm installation, typecheck, production build and browser mounted-content/interaction checks. Record exact results here.
6. Commit and push the feature branch for independent review.

# Checks and limitations

- Clean `npm ci --no-audit --no-fund --cache .npm-cache`: passed (140 packages).
- `npm run typecheck`: passed.
- `GEMINI_API_KEY=STATIC_BUILD_TEST_SENTINEL API_KEY=STATIC_BUILD_TEST_SENTINEL npm run build`: passed.
- `npm run check:static`: passed; real module entry, compiled CSS and local fonts; no runtime CDNs, injected key or sentinel.
- T3 background production preview: Code of Conduct landing heading and 3,104 text characters; zero external landing-page resource requests.
- Practice Scenarios opened five scenario cards. Scenario 1 opened assessment. Selected the existing correct answer and clicked Check Answer: Correct Assessment appeared and expert analysis remained available.
- All authored scenario content and application logic unchanged. No exhaustive check of every scenario or viewport. T3 accessibility snapshots time out; DOM evaluation and locator clicks succeeded.
- npm reported unapproved optional install scripts; installation/build succeeded without changing machine policy.
- No deployment, DNS/GCP changes, licence changes or model calls.

# Handoff

Feature branch: `feat/independent-static-hosting`. Browser evidence: `evidence-code-of-conduct-for-ai-static-browser.json`.

Full scenario coverage and every viewport were not exhaustively tested. Prepared for independent review; production hosting unchanged.
