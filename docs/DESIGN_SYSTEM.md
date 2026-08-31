# Design system

Last updated: 1 September 2026

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
| Accent support | Soft white and deeper violet inside animated traces |
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
- Sections use a compact but breathable vertical rhythm on black backgrounds.
- Detail pages use a readable maximum width rather than full-screen text lines.
- Experience and study records appear one per row, never in two-column CV grids.
- Spacing follows a practical rhythm based primarily on 4, 8, 16, 24, 32, 48 and 64 pixels.

## Components

### Navigation

- Sticky translucent header.
- Thin animated neon line only at the top resting position.
- Stronger blur while scrolling; subtle directional tilt.
- Desktop navigation remains horizontal above 1366 pixels. Phones, tablets, coarse-pointer devices and detected iPads use a Home-sized circular trigger with a right-aligned dropdown. Tablet panels use wider spacing and larger touch targets than the compact phone variant.
- The compact language selector presents constructed rectangular US, German, Dutch and French flags with EN, DE, NL and FR codes only. Until translated routes exist, selection changes visual state only.

### Neon controls and panels

- Near-black surface, one-pixel lilac border and rounded corners.
- Animated black, lilac and soft white trace on hover or focus.
- Press feedback uses translation, scale and inset shadow.
- Mobile replaces the heavy arrow with a one-pixel line.
- Numbered controls are not used.
- Primary controls use the shared `premium-neon-control` variant: a 1.5-pixel lilac and soft white trace completing its circuit in 2.5 seconds.
- Informational panels that need the same hover presence use `premium-neon-surface`; they must not imply clickability.
- The premium trace is shared by About, Projects, MRI source links and Submit.

### Project figures and lightbox

- Project images sit inside near-black, one-pixel lilac frames.
- Expandable figures use a visible zoom affordance and one reusable modal surface.
- The modal closes through its close control, Escape or a click outside the image, then restores focus to the trigger.
- MRI class cards preserve a monochrome scientific treatment, a uniform black image stage, equal square dimensions, consistent inner spacing and contain-fit anatomy.
- The MRI preprocessing visual uses the same restrained one-pixel lilac scan on desktop and mobile. Its five-second cycle traverses the image proportionally so the motion remains consistent across aspect ratios.
- Grid stability figures preserve their full composition and use high resolution PNG assets suitable for close inspection.
- The CRoF single-line interface uses a symmetrical black HMI canvas with sparse generic labels, soft-white equipment and lilac network structure. Its paired isometric substation uses a pure black background, cool-grey equipment and restrained lilac perimeter light.
- Technical diagrams use black backgrounds without white padding or heavy framing.
- Continuous grey lines communicate electrical, physical or data paths; dashed lilac lines communicate control, setpoints and feedback. Legends must name these roles rather than relying on color alone.
- Diagram connections terminate cleanly at equipment, buses, controllers, hubs or external boundaries. Labels must not intersect routes.
- Diagram labels require dedicated clear space: they must never overlap lines, symbols, cards, nodes or other labels.
- Scientific diagrams use black, lilac, soft-white and cool-grey tones. Green, mint, olive and teal accents are excluded unless they encode an explicitly approved state.
- Dense engineering diagrams require a dedicated mobile composition when simple responsive scaling compromises legibility.
- The academic report opens in a dedicated modal viewer and returns focus to its trigger when closed.
- The MRI prediction chart is an inline SVG wireframe sculpture: separated three-dimensional sectors, restrained dotted and radial mesh, translucent dark surfaces and class-colored neon perimeters. The chart itself contains no visible text or numbers; names and exact percentages sit in external black tags connected through fine guide lines.
- Prediction colors remain subordinate to the page: soft lilac for pituitary, soft white for glioma, deeper violet for meningioma and graphite for no tumour. Glow is limited to edges, dots and guide terminals.

### Interactive 3D models

- Interactive anatomy appears inside proportional black frames with a 16:9 desktop ratio and a taller mobile ratio.
- Viewer controls sit above each model and align to the right on every viewport.
- Both models use the same semantic palette: lilac for brain tissue, red for tumour tissue and black for the background.
- The CT model uses a softer lilac for the exterior head layer so that it remains distinct from the brain without introducing another hue.
- Camera reset restores the initial position, target and field of view through a short transition. Tumour visibility remains independent for each model, and annotation visibility is offered only by the CT viewer.
- Control buttons use a fixed width so `Hide` and `Show` label changes never shift adjacent controls. Pointer and touch activation produce a brief lilac background, dark text, subtle compression and glow.
- Native creator attribution remains visible beneath every embed.
- The page does not duplicate the loading message already supplied by Sketchfab.

### Research references

- Responsible use and technical foundation share one concise editorial section.
- The academic report uses a black, fine-outlined capsule beneath the MRI hero description. A circular arrow terminal distinguishes the action without introducing a filled primary button.
- Technology tags are smaller than the report action and occupy a separate row.
- The ALLEA research integrity reference is centered in the case study footer.

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

- Press feedback remains immediate, while decorative neon movement uses a measured 2.5 second cycle.
- Continuous neon movement is limited to active accent states.
- Every About and Project detail route uses the same floating Back control.
- The control remains visible at the top, moves subtly during scrolling and fades after two seconds of inactivity away from the initial position.
- Scroll, pointer, touch and keyboard activity reveal the control. Hover and keyboard focus pause its inactivity timer.
- On small screens its initial position sits between the header line and the first page label.
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
