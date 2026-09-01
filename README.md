# Diego Carrillo Engineering Portfolio

Static professional portfolio built with Astro and Tailwind CSS. The site presents multidisciplinary engineering experience, academic background and project case studies through a responsive black and lilac interface.

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

- `/`
- `/about/experience/`
- `/about/academic/`
- `/about/international/`
- `/projects/brain-tumour-mri-classification/`
- `/projects/grid-contingency-analysis/`
- `/projects/telecommunications-coverage-deployment/`
- `/projects/renewable-plant-control/`

The project builds as a static site for GitHub Pages. Public documents and images live under `public/` and must not contain confidential material.
