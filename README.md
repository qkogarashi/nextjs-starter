# nextjs-starter

Production-ready starter for Next.js with TypeScript, Tailwind CSS, and a comprehensive tooling setup.

## Tech Stack

- **[Next.js](https://nextjs.org/)** 15 — React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** 5 — strict mode enabled
- **[Tailwind CSS](https://tailwindcss.com/)** 4 — utility-first CSS
- **[Zod](https://zod.dev/)** — runtime schema validation
- **[Bun](https://bun.sh/)** — package manager and runtime

## Getting Started

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script             | Description                      |
| ------------------ | -------------------------------- |
| `bun dev`          | Start development server         |
| `bun build`        | Production build                 |
| `bun start`        | Start production server          |
| `bun eslint`       | Run ESLint with timing           |
| `bun eslint:fix`   | Run ESLint with auto-fix         |
| `bun typecheck`    | TypeScript type check (no emit)  |
| `bun test`         | Run Jest tests                   |
| `bun test:watch`   | Run Jest in watch mode           |
| `bun format`       | Format all files with Prettier   |
| `bun format:check` | Check formatting without writing |

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── api/              # API routes
│   ├── components/       # App-level layout components
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Root page
│   └── error.tsx         # Error boundary
├── components/           # Reusable UI components
│   ├── buttons/          # Button, IconButton, TextButton
│   └── links/            # ButtonLink, ArrowLink, PrimaryLink, IconLink, UnstyledLink, UnderlineLink
├── constant/             # App-wide constants and env config
├── lib/                  # Utilities: utils, logger, env, helper
└── styles/               # globals.css, colors.css
```

## Path Aliases

| Alias | Resolves to  |
| ----- | ------------ |
| `@/*` | `./src/*`    |
| `~/*` | `./public/*` |

## Code Quality

### ESLint

Flat config (`eslint.config.mjs`) with:

- [`@typescript-eslint`](https://typescript-eslint.io/) — type-aware rules
- [`@stylistic/eslint-plugin`](https://eslint.style/) — formatting (tabs, double quotes, no semicolons)
- [`eslint-plugin-import`](https://github.com/import-js/eslint-plugin-import) + [`simple-import-sort`](https://github.com/lydell/eslint-plugin-simple-import-sort) — import order
- [`unused-imports`](https://github.com/sweepline/eslint-plugin-unused-imports) — unused import detection
- [`@next/eslint-plugin-next`](https://nextjs.org/docs/app/api-reference/config/eslint) — Next.js rules
- Custom `eslint-plugins/` — project-specific rules

### Git Hooks (Husky + lint-staged)

- **pre-commit** — runs `eslint --fix` on staged files
- **commit-msg** — validates commit message format via [commitlint](https://commitlint.js.org/)

### Commit Convention

Follows [Conventional Commits](https://www.conventionalcommits.org/):

```
feat:     new feature
fix:      bug fix
docs:     documentation only
style:    formatting, no logic change
refactor: code restructuring
test:     adding or updating tests
chore:    maintenance
perf:     performance improvement
ci:       CI/CD changes
revert:   revert a commit
```

## Testing

```bash
bun test
bun test:watch
```

Uses **Jest** + **@testing-library/react** with jsdom environment. Path aliases (`@/*`, `~/*`) and SVG imports are mocked automatically.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the required values:

```bash
cp .env.example .env.local
```
