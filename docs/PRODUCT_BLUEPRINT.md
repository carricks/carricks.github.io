# Product blueprint

Last updated: 20 September 2026

## Vision

Create a focused engineering portfolio that presents Diego Carrillo as a multidisciplinary systems engineer. The product should communicate technical depth without feeling like a chronological CV and should make complex experience easy to explore on desktop and mobile.

## Current product state

The website is functional and navigable on desktop, tablet and mobile in persistent dark and light themes. The design and interaction foundation is mature, and the MRI research, grid stability, photovoltaic plant control and telecommunications projects provide complete visual case-study patterns. The MRI case study combines static research evidence, an externally labelled orbital probability chart and two independently controlled 3D models with deterministic reset behavior. Grid, renewable and telecommunications diagrams share theme-aware semantic variants with explicit system relationships and strict non-overlap rules. A first verified Hardwarethon milestone is published; the remaining sections still need deeper evidence and publication review.

## Audience

- Engineering and technology leaders.
- Recruiters and hiring managers for systems, energy, automation and industrial software roles.
- Technical collaborators and research contacts.
- Product and project stakeholders evaluating multidisciplinary experience.

## Product goals

1. Explain the professional profile in under a minute.
2. Show the connection between electronics, robotics, software, industrial control and energy systems.
3. Present experience through concise narratives instead of CV-style timelines.
4. Provide credible project evidence without exposing confidential information.
5. Offer a polished and accessible contact path.

## Information architecture

```text
Homepage
  About
    Experience
    Academic
  Projects
    MRI Tumour Classification
    Grid Stability
    Photovoltaic Control
    Telecommunications Coverage Deployment
  Milestones
    Hardwarethon 2019
  Contact
```

## Primary journey

```text
Homepage introduction
  -> choose an About or Project path
  -> understand background and evidence
  -> return through persistent navigation
  -> contact or open a professional profile
```

## Experience principles

- Persistent dark and light presentations with a restrained lilac accent system and shared semantic hierarchy.
- Figures and their enlarged lightbox states remain visually consistent with the active theme: black in dark mode and page-matched soft off-white in light mode.
- Strong typography and generous spacing instead of decorative backgrounds.
- One clear action per row; no numbered controls that resemble a CV.
- Sticky navigation remains available throughout the experience. Tablets and iPads use the same dropdown model as phones, with a larger panel suited to their available space; only wide desktop layouts retain horizontal navigation.
- Desktop interactions use hover and press feedback.
- Touch interactions use press and scroll-aware feedback.
- The shared floating Back control responds to scroll, pointer, touch and keyboard activity and remains available for two seconds after activity ends.
- Motion must remain subtle and respect `prefers-reduced-motion`.
- Content must remain readable and complete without animation.

## Functional boundaries

- Static site with no application backend.
- Contact form validates locally and opens a prepared `mailto:` message.
- External profiles open with `noopener noreferrer`.
- Project and About detail pages are statically generated.
- Static research figures use a browser native dialog lightbox. The two interactive anatomy models depend on the public Sketchfab Viewer API, retain plain-text creator attribution and restore their complete initial camera state through the API.
- Complex diagrams use responsive SVG or high-resolution PNG assets and preserve their meaning at mobile widths.
- The telecommunications project delivers a concise coverage-deployment narrative with an expandable vector architecture, an open delivery sequence and a layered technology map.
- The master's report is delivered from GitHub Pages through an integrated dialog viewer.
- Probability visualization remains dependency-free and combines an optimized raster chart, accessible alternative text, external HTML labels and a decorative SVG leader overlay.
- Public PDF controls may be visually reduced, but browser delivery cannot prevent retrieval of the source document.
- The portfolio remains readable if an external 3D model is unavailable.

## Success criteria

- Visitors can identify the engineering profile, current focus and core domains quickly.
- Academic and professional narratives are understandable without dates or job-title lists.
- Project pages demonstrate contribution and outcome without confidential disclosure.
- Navigation and controls work consistently on keyboard, pointer and touch devices.
