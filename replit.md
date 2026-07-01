# Khaled Sourani Portfolio

A bilingual (Arabic/English) personal portfolio for Khaled Akram Al-Sourani, a 16-year-old self-taught Full Stack Web Developer from Gaza.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- Portfolio frontend: `artifacts/portfolio/src/` — components in `src/components/`, language context in `src/contexts/LanguageContext.tsx`
- Contact API route: `artifacts/api-server/src/routes/contact.ts`
- Theme/colors: `artifacts/portfolio/src/index.css`
- User photo: `attached_assets/khaled1_1782917413564.jpg`

## Architecture decisions

- Frontend-only portfolio (no DB) — contact form POSTs to `/api/contact` on the shared API server
- Bilingual via React Context (`LanguageContext`): all text keyed in `en`/`ar` objects, RTL applied via `dir` attribute on document
- Animated globe built with pure CSS gradients + SVG + framer-motion (no 3D libs)
- Contact endpoint logs only metadata (no PII) — real email sending can be added later via nodemailer + app password

## Product

Single-page bilingual (AR/EN) portfolio with: Hero with animated globe, About with photo, Projects, Skills grid, Achievements timeline, and a working Contact form.

## User preferences

- The portfolio owner is Khaled Akram Al-Sourani (خالد أكرم الصوراني), 16 years old, from Gaza, Palestine
- Contact email: khaledakram1234567890@gmail.com
- Website must support both Arabic (RTL) and English (LTR)

## Gotchas

- The contact form sends to `/api/contact` — to enable real email delivery, add nodemailer + Gmail app password as a secret and update `artifacts/api-server/src/routes/contact.ts`

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
