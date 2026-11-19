---
title: code-of-conduct-for-ai Pages preview deployment
date: 2026-11-19
register: FOR AGENTS
---

# Pages preview deployment

Cloudflare Pages project: `code-of-conduct-for-ai`. Preview: https://code-of-conduct-for-ai.pages.dev/ .
Production canonical and citation URL: https://codeofconduct.semanticmachines.fyi/ .
This phase attaches no custom domains and changes no DNS or Cloud Run services.

From a clean checkout with no build secrets:

```sh
npm install
npm run build
env -u CLOUDFLARE_API_TOKEN CLOUDFLARE_ACCOUNT_ID=b6ae5bced06492ee6f0c8f92776804da npx wrangler@4 pages deploy dist --project-name code-of-conduct-for-ai --branch main
```

When creating a missing project with Wrangler 4.165, use `pages project create <name> --production-branch main --force` to target the original Pages API. Once the project exists, omit `--force` from deploy commands. The project's pages.dev address is for review only; production switching requires separate approval.

No server-held AI key is required by this app.

Mechanical preview fix: link the existing `index.tsx` entry from `index.html`, so Vite bundles and starts the React app.
