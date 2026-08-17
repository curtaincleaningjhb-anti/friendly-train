# JHB Curtain Cleaning Website

The production application lives in [`curtain-site`](./curtain-site). It is a Next.js App Router site built through Vinext/Vite and packaged as a Cloudflare Worker artifact.

## Local setup

```bash
npm run install:site
npm run dev
```

## Release validation

```bash
npm run lint
npm run audit:production
npm test
```

The test gate builds and validates the Worker artifact, checks all 33 canonical routes and internal links, enforces unique production metadata, parses JSON-LD, and verifies form validation behavior. Production form credentials are documented in [`curtain-site/.env.example`](./curtain-site/.env.example).
