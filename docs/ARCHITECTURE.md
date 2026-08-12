# Architecture

## Status and decision

This is a static, content-led Astro application deployed to GitHub Pages. Astro
renders HTML at build time; browser JavaScript is opt-in and must only be added
for an interaction that cannot be served by semantic HTML and CSS.

The structure below is the project contract. New work belongs in an existing
area. A new top-level directory requires an architectural decision recorded in
this document.

## Project structure

```text
public/                         Files served unchanged (favicon, robots.txt)
src/
  assets/                       Imported, build-optimized images, fonts and icons
  components/
    common/                     Layout primitives: Container, Section
    layout/                     Shared site chrome: Navbar, Footer
    sections/                   Page-section compositions, never route files
    ui/                         Reusable controls with a small API: Button, Card
  config/                       Typed site-wide configuration, not page content
  content/                      Validated collections: projects, research, writing
  layouts/                      Document shells and page-level metadata defaults
  pages/                        Astro routes only; file location defines the URL
  styles/                       Global layers, tokens and Tailwind entry point
  types/                        Shared TypeScript contracts
```

The `content/` directory is intentionally versioned for future validated
content collections. New directories are introduced only when their ownership
is needed by approved functionality.

## Ownership and dependency rules

```text
pages -> layouts / sections -> common + ui
       -> config / content / data / lib / types
layouts -> layout / common / config
sections -> ui / common / types
```

- `pages/` orchestrates a route. It does not contain reusable presentation
  logic.
- `layouts/` owns the HTML document shell, global metadata defaults and shared
  chrome placement.
- `components/sections/` composes a page area. It may receive data through
  props, but it never reads route parameters directly.
- `components/ui/` is generic and must not know project, research, or home-page
  terminology.
- `config/` contains stable site configuration. `site.ts` owns the typed
  identity/profile record currently used by the site.
- A future `data/` directory is for small, typed, structured data that is not
  an authored content entry. Authored material belongs in `content/` once
  introduced.
- A future `lib/` directory and `types/` may not import Astro components,
  layouts or pages.

Imports must flow down this diagram. In particular, shared components never
import sections or pages, and content never imports UI.

## Routing contract

`src/pages/` is the only routing boundary because Astro derives routes from the
file system. The initial public route remains `/` in `pages/index.astro`.

Future public route families are reserved conceptually, but no empty page files
will be created before their content and user journey are approved:

```text
/                         Portfolio overview
/projects/[slug]/          Project case study
/research/[slug]/          Research or independent academic work
/writing/[slug]/           Article or publication
```

Dynamic routes will be generated statically from their corresponding content
collection. This preserves GitHub Pages compatibility and prevents a runtime
backend from becoming an accidental dependency.

## Content and data contract

When the first repeatable content type is approved, define its schema in
`src/content.config.ts` before adding any entries. Collections will start with
`projects`, `research`, and `writing` only when each is needed. Do not create a
collection, page, or taxonomy speculatively.

Small cross-site records that behave as configuration live in `config/`. When
needed, lists that feed a UI but are not authored documents belong in `data/`.
This keeps portfolio content separate from product configuration.

## Assets

- `public/` is only for files needing a fixed URL or no build processing.
- `src/assets/` is the default for images, fonts and icons imported by a page or
  component, so Astro can optimize and fingerprint them.
- Content media should be colocated with its content entry when a collection is
  introduced.

## Styling and interaction boundaries

No section owns global styles. `src/styles/` owns global reset, design tokens
and the Tailwind entry point. Components express their visual composition with
Tailwind utilities and only introduce a local style block when a utility cannot
express the requirement.

Interactive islands are an exception, not the default. They must be isolated
in `components/`, have an explicit hydration directive, and document why static
HTML is insufficient.

## Delivery, quality and operations

- Build target: static output for GitHub Pages.
- Canonical production URL: `https://carricks.github.io`.
- Before introducing deployment automation, configure Astro's `site` value to
  that URL and confirm the repository remains a user site (therefore no `base`
  path is required).
- Required checks for each implementation sprint: `npm.cmd run build` and a
  manual local route check when a route changes.
- SEO, sitemap, robots, Open Graph metadata and analytics will be added as
  dedicated concerns in `layouts/`, `config/` and build configuration—not mixed
  into individual sections.

## Naming conventions

- Components and layouts: `PascalCase.astro`.
- Route and content filenames: lowercase `kebab-case`.
- TypeScript modules: lowercase `kebab-case.ts`.
- One component per file; colocate only private helper modules with their
  feature when they are not shared.
