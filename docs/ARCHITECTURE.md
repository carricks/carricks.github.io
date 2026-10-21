# Architecture

Last updated: 22 October 2026

## Status

This is a static Astro portfolio deployed through GitHub Pages. Astro renders the public routes at build time. Browser JavaScript supports navigation, viewport aware effects, the contact form, accessible media dialogs and the Sketchfab Viewer API used by the MRI case study.

## Current structure

```text
public/
  documents/                    Public academic reports
  favicon.*
  images/library/               Canonical themed and responsive media library
    logos/                      Company and research marks
    projects/brain-tumour-mri/  Thesis-authored MRI and model figures
    projects/grid-stability/    Conceptual architecture, regional context and CRoF visuals
    projects/renewable-control/ Responsive SVG control architecture and photovoltaic context
    projects/telecommunications-coverage/ Portfolio-authored distributed coverage SVG
src/
  components/
    common/                     Container, Section and shared icons
    layout/                     Persistent navigation
    pages/                      Shared localized page compositions
    sections/                   Homepage About, Projects, FAQ and Contact sections
  config/                       Site-wide profile configuration
  data/                         About destinations and project records
  layouts/                      Shared HTML shell and metadata defaults
  i18n/                         Typed English, Dutch, German and French content
  pages/
    index.astro                 Homepage
    de/                         German homepage, About and Milestone routes
    nl/                         Dutch homepage, About and Milestone routes
    fr/                         French homepage, About and Milestone routes
    about/academic.astro        Academic background
    about/experience.astro      Professional experience
    milestones/hardwarethon.astro Published recognition detail
    [...path].astro             Shared EN/NL/DE/FR static project case studies
  styles/                       Tailwind entry point and global interactions
  types/                        Shared TypeScript contracts
docs/                           Product, content, design and delivery guidance
.github/workflows/deploy.yml    Astro build and GitHub Pages deployment
```

## Active routes

```text
/
/de/
/de/about/academic/
/de/about/experience/
/de/milestones/hardwarethon/
/de/projects/brain-tumour-mri-classification/
/de/projects/grid-contingency-analysis/
/de/projects/telecommunications-coverage-deployment/
/de/projects/renewable-plant-control/
/nl/
/nl/about/academic/
/nl/about/experience/
/nl/milestones/hardwarethon/
/nl/projects/brain-tumour-mri-classification/
/nl/projects/grid-contingency-analysis/
/nl/projects/telecommunications-coverage-deployment/
/nl/projects/renewable-plant-control/
/fr/
/fr/about/academic/
/fr/about/experience/
/fr/milestones/hardwarethon/
/fr/projects/brain-tumour-mri-classification/
/fr/projects/grid-contingency-analysis/
/fr/projects/telecommunications-coverage-deployment/
/fr/projects/renewable-plant-control/
/about/academic/
/about/experience/
/milestones/hardwarethon/
/projects/brain-tumour-mri-classification/
/projects/grid-contingency-analysis/
/projects/telecommunications-coverage-deployment/
/projects/renewable-plant-control/
```

All routes must remain compatible with static generation and GitHub Pages. A runtime backend must not become an accidental dependency.

## Ownership rules

- `pages/` defines routes and orchestrates page-specific content.
- `layouts/` owns the document shell and metadata defaults.
- `components/sections/` owns reusable homepage compositions.
- `components/common/` owns small layout and icon primitives, including the semantic homepage project-icon set.
- `data/` owns typed records that generate repeated navigation or routes.
- `data/image-library.ts` is the single source of truth for dark/light and desktop/mobile asset selection. Theme-neutral resources deliberately reuse one canonical file instead of creating byte-identical duplicates.
- `config/` owns stable site-wide identity and link values.
- `styles/` owns shared visual tokens and cross-component interaction behavior.
- `public/images/` is reserved for visual assets that require stable URLs.
- `public/documents/` contains approved documents intended for public delivery through GitHub Pages.

Dependencies flow from pages to layouts/components/data, never from shared components back into pages.

## Content model

The current content volume is small enough to use typed arrays in `src/data/` and page-local records. Introduce an Astro content collection only when projects, research or writing require repeatable authored entries, validation and frontmatter.

Project detail routes are generated from `src/data/projects.ts`. Homepage About destinations link directly to the dedicated Experience and Academic pages; the retired generic About slug route is no longer part of the build.

## Styling and interaction

- Tailwind utilities handle most layout and typography.
- Local `<style>` blocks own route-specific presentation.
- `src/styles/global.css` owns shared controls, neon traces, navigation states, the dark-first session theme and motion preferences.
- The premium neon variant is centralized through `premium-neon-control` and `premium-neon-surface`; route components must not duplicate its gradient or timing.
- The global header uses passive scroll listeners and `requestAnimationFrame`. Viewports up to 1366 pixels, coarse pointer devices and detected iPads use the accessible circular dropdown; wider desktop layouts retain horizontal section links. The tablet dropdown increases spacing and target size without changing the compact phone treatment.
- English remains the unprefixed default route; Dutch, German and French use `/nl/`, `/de/` and `/fr/`. All four locales share layouts and interactions. Typed copy lives in `src/i18n/`; each language selector preserves the equivalent route and hash. Document language, metadata, navigation, form feedback, accessible labels and alternate-language links follow the active locale.
- Production deployment runs from `main` through the official Astro GitHub Action. The workflow builds the static output, uploads the Pages artifact and deploys it to the `github-pages` environment at the owner-derived Pages origin `https://dc-x1.github.io`.
- `FaqSection.astro` uses native `details` and `summary` elements, keeps only one answer expanded at a time and includes contextual links to the relevant About and Project routes. FAQ is available in both desktop and dropdown navigation.
- Intersection observers provide progressive section and touch feedback.
- Project case studies use one reusable native `dialog` lightbox per rendered route for all expandable figures. It restores focus to the originating image control when closed.
- Engineering diagrams use theme-aware semantic variants: dark pages use black canvases, while light pages match the surrounding soft off-white canvas. Continuous grey paths identify electrical or physical flows, dashed lilac paths identify control and feedback, and labels occupy clear space without overlapping routes or equipment.
- The renewable-control architecture uses separate desktop and mobile SVG assets. Its integrated topology includes a three-turbine wind farm, solar generation, local PPCs, hybrid coordination, operator supervision, an MV bus, transformers and the grid POI.
- The MRI VGG16 figure uses the cache-versioned approved black, soft-white, grey and lilac raster asset with no green accent colors. The four MRI class examples share one square black image stage, consistent padding, radius and contain-fit treatment.
- The MRI case study embeds three Sketchfab models through Viewer API 1.12.1. Each viewer has independent camera and tumour controls; annotation controls appear only on the CT model that contains tags. The CT viewer derives a deterministic reference camera through ordered Z, X and Y rotations, applies it when ready and restores the same position, target and field of view through `setCameraLookAt`. Runtime material mapping gives all three models a theme-aware background, a lilac brain and a red tumour; the CT model uses a lighter lilac for its exterior head layer. Creator credits beneath all three embeds are static text rather than navigation links.
- The grid-stability CRoF gallery pairs a simplified portfolio-safe SCADA single-line diagram with a black-background isometric substation. Both use high-resolution raster assets and the shared lightbox.
- The telecommunications project uses one external SVG for the distributed coverage architecture. Its rebuilt engineering layout reserves independent fields for the donor antenna, protection, repeater, splitter, coaxial backbone and indoor branches. Its delivery workflow and technical foundation reuse the MRI case study's shared vertical pipeline and technical-tag patterns for visual consistency across desktop and mobile.
- The master's report uses a separate native `dialog` viewer. Its browser controls are visually reduced, although any public document delivered to a browser remains technically retrievable.
- The master's report trigger is a single black outlined capsule in the MRI hero. The same `data-report-open` hook opens the existing dialog; duplicate report triggers are not allowed.
- The MRI prediction distribution uses paired dark/light solid raster charts with four external HTML labels and an SVG connector overlay. Both theme variants use the same controlled translucency; desktop leaders terminate at dedicated tag guide rails so no connector passes beneath label text, while mobile removes the leaders and presents the labels in a compact two-column arrangement. The image alternative text preserves the complete values.
- Global typography is defined through semantic tokens in `src/styles/global.css` for display, section, body, card, UI, caption, microcopy and metric roles. Light and dark themes share this scale, and responsive layouts change composition without introducing unrelated font systems.
- Homepage Projects actions use `ProjectIcon.astro` to provide dedicated brain, AC generator, photovoltaic and telecommunications symbols inside the same shared control structure used by About and Milestones.
- `FloatingBackControl.astro` provides one shared Back interaction for every About and Project detail route.
- The control remains visible at the initial position, appears during pointer, touch, keyboard or scroll activity and fades after two seconds of inactivity. Hover and keyboard focus pause the hide timer.
- `prefers-reduced-motion` disables nonessential animation.

## Contact behavior

The contact form has no backend. It validates fields in the browser and opens a prepared email through `mailto:`. Fields share one pointer/touch state model: an 80-percent-transparent lilac resting surface changes to equally transparent white during interaction, while text, caret and icons retain a stable lilac. If reliable in-page delivery becomes a requirement, a dedicated form service and privacy review are needed.

## Security and privacy

- No secrets or API credentials belong in the repository. The public Sketchfab viewers require no repository credential.
- Environment files are ignored.
- Local build output, dependencies, generated Astro types and workspace temporary files are ignored.
- External links use `target="_blank"` with `rel="noopener noreferrer"`.
- Published company names, logos and project details require authorization.
- Dependency audit and static build are required before sprint commits.
- External 3D embeds must fail without blocking the surrounding case study content.

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

## Sprint 06 repository audit

- Every retained file in `public/images/` and `public/documents/` is referenced directly, through a page-local image record, or by browser convention in the case of `favicon.ico`.
- Every source component, data module, configuration module and shared type has an active import path.
- Empty untracked scaffolding directories were removed; build output, dependencies and generated Astro types remain intentionally ignored.
- The 6 September closeout rechecked dynamic MRI class-image records, the public report, company marks, project figures and browser-convention favicon before retaining them; no public asset qualified for safe deletion.
- The 13 September closeout rechecked the new prediction wireframe, all static project assets, direct and dynamic source references, the removed generic About route and the Hardwarethon route. No retained asset or source module qualified for safe deletion.

## Sprint 07 repository audit

- The 20 September closeout rechecked every public document and image against direct URLs, the central image-library registry, page-local records and browser-convention favicon use.
- All source components, data modules, configuration modules and shared types retain active import paths; no empty source or public directories remain.
- No retained asset or code module qualified for safe deletion. Generated Astro output, dependencies and local build metadata remain ignored rather than committed.
- Theme-specific figure treatments, lightbox presentation, responsive renewable diagrams, telecommunications artwork and Experience logo rendering are documented as current behavior.
- The 2 October closeout rechecked every retained public asset, dynamic image-library path, source-module import, public report reference, browser-convention favicon, duplicate hash, empty directory and temporary artifact boundary.
- The superseded `prediction-orbital-wireframe.png` has no remaining reference and is replaced by the registered dark/light solid variants. No other retained public asset or source module qualifies for deletion.
- The 4 October closeout rechecked the complete public library, source-module import graph, duplicate hashes, generated-output boundaries and temporary artifacts after the project-icon and prediction-label refinements; no additional file qualified for safe deletion.
- The same closeout updated the transitive `http-cache-semantics` dependency from 4.2.0 to 4.3.0 to resolve `GHSA-ch52-4w7c-c8xp`; the production dependency audit then returned zero vulnerabilities.


## Sprint 08 audit and identity migration

- The third anatomy viewer embeds jamiecronin's Cronin CT model (`3ca52ce84c94458ba0357fa7bfeb5cd8`). It shares the unannotated viewer controller, maps tumour material `mtl41186` explicitly, retains independent camera/FOV and tumour state, and uses the same responsive frame and touch feedback. All three backgrounds update on theme changes. `node scripts/check-model-controls.mjs` checks controller behavior with a simulated Viewer API; live WebGL rendering requires browser verification.

- Release commit: `Sprint08_081026`; release branch: `main`. The retired remote feature branch is not used for deployment.
- The confirmed identity is `dc-x1`. The account and repository have been renamed; the repository is `dc-x1/dc-x1.github.io`. GitHub Actions supplies `PUBLIC_GITHUB_USERNAME` from `github.repository_owner`; Astro site metadata and the GitHub profile link use that value. Local builds default to the currently active `dc-x1` account.
- The Git remote is `https://github.com/dc-x1/dc-x1.github.io.git`; pushes to `main` deploy the site. Neither the local workspace folder nor past commit authors need renaming.
- Map and architecture figures each use one image element with dark/light source attributes. Initial selection and theme changes update the source; enlargement uses the selected source. Light SVGs are self-contained and generated by `npm.cmd run assets:grid`, with a #f1eef5 canvas, dark lilac linework and an unfiltered Netherlands tricolour. Original dark assets remain referenced.
- Removed the unreferenced `desktopAsset` helper. `npm.cmd run audit:repo` checks the built public-asset references, source import graph, duplicate hashes and local links; its report stays under ignored `tmp/`.
- Build output, generated Astro metadata, local previews and dependencies are excluded from Git. Browser conventions retain `favicon.ico`.

Validation on 21 October 2026: the static build generated 24 routes; all 24 routes and 29 public assets returned HTTP 200 locally. The reference/import audit found no unreferenced assets or source modules, duplicate hashes or broken local links. Simulated 3D controls passed in both themes; the production dependency audit reported zero vulnerabilities. The future dc-x1 origin/profile override was also built and checked before restoring the active identity for release. Live WebGL and physical-device visual QA remain pending.

Identity migration confirmed on 21 October 2026: `dc-x1` is the final username; the Pages repository and local remote are `dc-x1/dc-x1.github.io`. Both CI and local metadata/profile links use this identity.

## French localization - 21 October 2026

French is a full locale under /fr/, with homepage, Academic, Experience, Hardwarethon and four project routes. The language selector preserves the equivalent route and hash; alternate-language metadata includes fr. French editorial dictionaries live in home.fr.ts, pages.fr.ts and projects.fr.ts. Runtime model controls and enlarged-image labels also use French. The build now generates 32 routes.

## Sprint 09 closeout - 22 October 2026

Project translation dictionaries are separated into projects.nl.ts, projects.de.ts and projects.fr.ts. The shared English case-study copy remains the lookup source. The static build exposes 32 routes. The reference audit checks all 29 public assets and the page-rooted source import graph; browser-convention favicon use is retained.
