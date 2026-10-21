# Diego Carrillo Engineering Portfolio

Static professional portfolio built with Astro and Tailwind CSS. The site presents multidisciplinary engineering experience, academic background and project case studies through a responsive black and lilac interface.

Current production: [https://dc-x1.github.io](https://dc-x1.github.io)

GitHub account: [dc-x1](https://github.com/dc-x1). Repository: [dc-x1.github.io](https://github.com/dc-x1/dc-x1.github.io).

## Local development

Requirements:

- Node.js 22.12 or newer
- npm

Install dependencies:

```powershell
npm.cmd ci
```

Start the background development server:

```powershell
npx.cmd astro dev --background
```

Manage the server:

```powershell
npx.cmd astro dev status
npx.cmd astro dev logs
npx.cmd astro dev stop
```

## Validation

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'
npm.cmd run build
npm.cmd audit --omit=dev
npm.cmd run check:models
npm.cmd run check:french
npm.cmd run check:translations
npm.cmd run audit:repo
git diff --check
```

## Main routes

- English: `/`
- Dutch: `/nl/`
- German: `/de/`
- French: `/fr/`
- Localized About routes: `/[locale]/about/experience/` and `/[locale]/about/academic/`
- Localized milestone route: `/[locale]/milestones/hardwarethon/`
- Localized project routes: `/[locale]/projects/[slug]/`

English is unprefixed. `[locale]` is `nl`, `de` or `fr` for translated routes.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`. The workflow uses the official Astro action to build the static site and publishes the generated artifact through GitHub Pages.

The project builds as a static site for GitHub Pages. Public documents and images live under `public/` and must not contain confidential material.

## GitHub Pages identity

The confirmed username is `dc-x1`; the repository is `dc-x1/dc-x1.github.io`. The local remote points to `https://github.com/dc-x1/dc-x1.github.io.git`.

Both local builds and production use `https://dc-x1.github.io`. CI supplies `PUBLIC_GITHUB_USERNAME` from the repository owner. Local builds default to `dc-x1`, with the same variable available for explicit previews. Pushes to `main` trigger deployment.

## Maintenance tools

- `npm.cmd run assets:grid`: regenerate the self-contained light grid/map SVGs.
- `npm.cmd run check:models`: exercise independent 3D controller state using a simulated Viewer API.
- `npm.cmd run audit:repo`: after a build, inspect public asset references, source imports, duplicate hashes and internal links. Reports are saved under ignored `tmp/`.

These checks do not constitute live browser, Sketchfab rendering or physical-device visual validation.

French localization includes eight equivalent routes, contextual copy and runtime 3D labels. After building, `npm.cmd run check:french` checks coverage, alternate links, language switches and French Unicode.

The multilingual editorial review is documented in [docs/TRANSLATION_REVIEW.md](docs/TRANSLATION_REVIEW.md).

## Sprint 09 delivery

Sprint09_082126 is delivered on `sprint/09-translations`. It adds French and reviews all four languages across 32 routes. Merge into `main` separately to publish through Pages. Contact and Hardwarethon design improvements remain next.
