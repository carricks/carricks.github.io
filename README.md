# Diego Carrillo Engineering Portfolio

Static professional portfolio built with Astro and Tailwind CSS. The site presents multidisciplinary engineering experience, academic background and project case studies through a responsive black and lilac interface.

Production: [https://carricks.github.io](https://carricks.github.io)

## Local development

Requirements:

- Node.js 22.12 or newer
- npm

Install dependencies:

```powershell
npm install
```

Start the background development server:

```powershell
npx astro dev --background
```

Manage the server:

```powershell
npx astro dev status
npx astro dev logs
npx astro dev stop
```

## Validation

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'
npm run build
npm audit --omit=dev
git diff --check
```

## Main routes

- English: `/`
- Dutch: `/nl/`
- German: `/de/`
- Localized About routes: `/[locale]/about/experience/` and `/[locale]/about/academic/`
- Localized milestone route: `/[locale]/milestones/hardwarethon/`
- Localized project routes: `/[locale]/projects/[slug]/`

English is unprefixed. `[locale]` is `nl` or `de` for translated routes.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`. The workflow uses the official Astro action to build the static site and publishes the generated artifact through GitHub Pages.

The project builds as a static site for GitHub Pages. Public documents and images live under `public/` and must not contain confidential material.
