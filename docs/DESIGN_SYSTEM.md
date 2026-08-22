# Design system

## Direction

The interface combines engineering precision with restrained neon detail. It should feel modern and technical without becoming visually noisy. Black, slate and lilac are the core language; additional colors are reserved for validation or accessibility states.

## Color roles

| Role | Current use |
| --- | --- |
| Canvas | Black `#000` |
| Elevated surface | Near-black translucent panels |
| Primary text | Slate 200-300 |
| Secondary text | Slate 400 |
| Accent | Lilac `rgb(196 181 253)` |
| Accent support | Violet and restrained cyan inside animated traces |
| Error | Red, only for invalid form fields |

Company marks in Experience are normalized to the same lilac to protect visual consistency.

## Typography

- Primary interface family: Inter with system sans-serif fallback.
- Credits use Georgia as a restrained editorial accent.
- Section labels are uppercase with wide tracking.
- Headings use compact tracking and strong scale contrast.
- Body text favors readable line height and moderate line length.

## Layout and spacing

- Shared `Container` controls horizontal alignment.
- Sections use generous vertical spacing and black backgrounds.
- Detail pages use a readable maximum width rather than full-screen text lines.
- Experience and study records appear one per row, never in two-column CV grids.
- Spacing follows a practical rhythm based primarily on 4, 8, 16, 24, 32, 48 and 64 pixels.

## Components

### Navigation

- Sticky translucent header.
- Thin animated neon line only at the top resting position.
- Stronger blur while scrolling; subtle directional tilt.
- Horizontal navigation remains available on small screens.

### Neon controls and panels

- Near-black surface, one-pixel lilac border and rounded corners.
- Animated multicolor trace on hover or focus.
- Press feedback uses translation, scale and inset shadow.
- Mobile replaces the heavy arrow with a one-pixel line.
- Numbered controls are not used.
- Primary controls use the shared `premium-neon-control` variant: a 1.5-pixel cyan-blue-violet-magenta trace completing its circuit in 900 ms.
- Informational panels that need the same hover presence use `premium-neon-surface`; they must not imply clickability.
- The premium trace is shared by About, Projects, MRI source links, engineering-reflection panels and Submit.

### Research figures and lightbox

- Research images sit inside near-black, one-pixel lilac frames.
- Expandable figures use a visible zoom affordance and one reusable modal surface.
- The modal closes through its close control, Escape or a click outside the image, then restores focus to the trigger.
- MRI class cards preserve a monochrome scientific treatment and equal visual dimensions.

### Experience logos

- Monochrome lilac with transparent backgrounds.
- Original proportions are preserved.
- Per-brand dimensions compensate for different source aspect ratios.
- Logo and country share a vertically centered heading row.

### Forms

- Visible focus state and semantic labels.
- Invalid fields use red border and short feedback animation.
- Status updates use an `aria-live` region.

## Motion

- Quick interaction feedback: approximately 160-520 ms.
- Continuous neon movement is limited to active or resting accent states.
- Section opacity and mobile scroll feedback are progressive enhancement.
- All nonessential animation is disabled or reduced under `prefers-reduced-motion`.

## Accessibility baseline

- Semantic links and buttons.
- Visible keyboard focus.
- Descriptive alternative text for company logos.
- Descriptive alternative text and keyboard-operable enlargement for research figures.
- Touch targets sized for comfortable interaction.
- Color is not the only form-validation signal.

## Design QA still required

- Formal contrast audit.
- Screen-reader journey.
- Keyboard-only route review.
- Browser zoom and 320 px viewport checks.
- Final logo permission and rendering review.
