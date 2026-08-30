# Architecture

Last updated: 29 August 2026

## Status

This is a static Astro portfolio deployed through GitHub Pages. Astro renders the public routes at build time. Browser JavaScript is limited to navigation motion, viewport-aware effects and contact-form behavior.

## Current structure

```text
public/
  documents/                    Public academic reports
  favicon.*
  images/                       Fixed-URL company and project assets
    projects/brain-tumour-mri/  Thesis-authored MRI and model figures
    projects/grid-stability/    Conceptual architecture, regional context and CRoF visuals
    projects/renewable-control/ Responsive SVG control architecture and photovoltaic context
src/
  components/
    common/                     Container, Section and shared icons
    layout/                     Persistent navigation
    sections/                   Homepage About, Projects and Contact sections
  config/                       Site-wide profile configuration
  data/                         About destinations and project records
  layouts/                      Shared HTML shell and metadata defaults
  pages/
    index.astro                 Homepage
    about/academic.astro        Academic background
    about/experience.astro      Professional experience
    about/[slug].astro          Remaining About detail routes
    projects/[slug].astro       Static project case studies
  styles/                       Tailwind entry point and global interactions
  types/                        Shared TypeScript contracts
docs/                           Product, content, design and delivery guidance
```

## Active routes

```text
/
/about/academic/
/about/experience/
/about/international/
/projects/brain-tumour-mri-classification/
/projects/grid-contingency-analysis/
/projects/secure-offshore-data-integration/
/projects/renewable-plant-control/
```

All routes must remain compatible with static generation and GitHub Pages. A runtime backend must not become an accidental dependency.

## Ownership rules

- `pages/` defines routes and orchestrates page-specific content.
- `layouts/` owns the document shell and metadata defaults.
- `components/sections/` owns reusable homepage compositions.
- `components/common/` owns small layout and icon primitives.
- `data/` owns typed records that generate repeated navigation or routes.
- `config/` owns stable site-wide identity and link values.
- `styles/` owns shared visual tokens and cross-component interaction behavior.
- `public/images/` is reserved for visual assets that require stable URLs.
- `public/documents/` contains approved documents intended for public delivery through GitHub Pages.

Dependencies flow from pages to layouts/components/data, never from shared components back into pages.

## Content model

The current content volume is small enough to use typed arrays in `src/data/` and page-local records. Introduce an Astro content collection only when projects, research or writing require repeatable authored entries, validation and frontmatter.

Project detail routes are generated from `src/data/projects.ts`. About destinations are generated from `src/data/about-destinations.ts`, with dedicated pages excluded from the generic slug route.

## Styling and interaction

- Tailwind utilities handle most layout and typography.
- Local `<style>` blocks own route-specific presentation.
- `src/styles/global.css` owns shared controls, neon traces, navigation states and motion preferences.
- The premium neon variant is centralized through `premium-neon-control` and `premium-neon-surface`; route components must not duplicate its gradient or timing.
- The global header uses passive scroll listeners and `requestAnimationFrame`. Desktop keeps the horizontal section links; mobile exposes the same destinations through an accessible circular dropdown. A separate EN/DE/NL/FR selector currently updates presentation state only and does not yet switch routes or translated content.
- Intersection observers provide progressive section and touch feedback.
- Project case studies use one reusable native `dialog` lightbox per rendered route for all expandable figures. It restores focus to the originating image control when closed.
- Engineering diagrams use a dark semantic language: continuous grey paths for electrical or physical flows, dashed lilac paths for control and feedback, and labelled nodes for functional boundaries. Labels must occupy clear space and never overlap routes or equipment.
- The renewable-control architecture uses separate desktop and mobile SVG assets. Its integrated topology includes a three-turbine wind farm, solar generation, local PPCs, hybrid coordination, operator supervision, an MV bus, transformers and the grid POI.
- The MRI VGG16 figure uses the cache-versioned approved black, soft-white, grey and lilac raster asset with no green accent colors. The four MRI class examples share one square black image stage, consistent padding, radius and contain-fit treatment.
- The master's report uses a separate native `dialog` viewer. Its browser controls are visually reduced, although any public document delivered to a browser remains technically retrievable.
- `FloatingBackControl.astro` provides one shared Back interaction for every About and Project detail route.
- The control remains visible at the initial position, appears during pointer, touch, keyboard or scroll activity and fades after two seconds of inactivity. Hover and keyboard focus pause the hide timer.
- `prefers-reduced-motion` disables nonessential animation.

## Contact behavior

The contact form has no backend. It validates fields in the browser and opens a prepared email through `mailto:`. If reliable in-page delivery becomes a requirement, a dedicated form service and privacy review are needed.

## Security and privacy

- No secrets or API credentials belong in the repository.
- Environment files are ignored.
- External links use `target="_blank"` with `rel="noopener noreferrer"`.
- Published company names, logos and project details require authorization.
- Dependency audit and static build are required before sprint commits.

## Quality checks

```powershell
$env:ASTRO_TELEMETRY_DISABLED='1'
npm.cmd run build
npm.cmd audit --omit=dev
git diff --check
```

Also verify changed routes manually at desktop and mobile viewport sizes.

## Future architecture work

- Add canonical, Open Graph, sitemap and robots support.
- Add content collections when the authored-content volume justifies them.
- Add automated accessibility and route smoke tests.
- Document the production deployment workflow and branch policy.
