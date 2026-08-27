# Portfolio Design System

## 1. Visual theme and atmosphere

The portfolio is a premium, technical and editorial presentation of a Full Stack developer. It borrows the discipline of modern SaaS products—precise grids, restrained surfaces and clear information architecture—without cloning another brand. The interface should feel engineered, not decorated.

## 2. Color palette and roles

- Background: deep navy `#080B12` for the page canvas.
- Surface: `#0D121C` for contained product areas.
- Raised surface: `#121A28` for hover and elevated states.
- Primary text: ice white `#F4F7FB`.
- Secondary text: blue gray `#A7B0BF`.
- Muted text: slate `#687385`.
- Border: slate blue at 14% opacity; stronger borders at 24%.
- Accent: cobalt `#5B8CFF`, reserved for primary actions, active states and small technical signals.

Never introduce a second accent color. Do not use gradient text or strong neon glows.

## 3. Typography

- Inter is the main typeface; JetBrains Mono is reserved for labels, metadata and technical details.
- Display headings use tight tracking and line-height, with fluid responsive sizing.
- Body copy remains between 15–18px with generous line-height.
- Keep a limited hierarchy: display, section title, card title, body and mono metadata.

## 4. Components

- Buttons use 6px radius, 48px minimum height and visible focus rings.
- Primary actions use the cobalt accent; secondary actions use a subtle border.
- Cards only wrap meaningful project or product groups. Avoid card-on-card compositions.
- Tech badges are compact rectangular metadata, never the dominant visual element.
- Navigation is sticky, translucent and uses an underline for the active section.

All interactive elements need default, hover, focus and active states.

## 5. Layout

- Maximum container: 1200px.
- Desktop gutters: 24px; mobile gutters: 16–18px.
- Main section rhythm: 128px desktop, 92px tablet.
- Major content aligns to the section-title column after a 76px index rail.
- Use borders sparingly to express structure; use whitespace for hierarchy.

## 6. Depth and elevation

The base page is flat. Elevation is reserved for the Hero architecture window and sticky navigation. Shadows are soft and neutral. Blur is limited to the navigation backdrop.

## 7. Do and do not

Do:

- Prioritize recruiter scanability and project storytelling.
- Keep cobalt scarce and purposeful.
- Use real data and valid external links.
- Preserve keyboard navigation and clear focus.
- Prefer CSS and Server Components for static visuals.

Do not:

- Add glass cards throughout the page.
- Use large rounded capsules or excessive gradients.
- Add fake metrics, clients, testimonials or technologies.
- Use heavy animation or JavaScript for decoration.
- Compress desktop layouts directly into mobile.

## 8. Responsive behavior

- At 800px, navigation becomes a full mobile menu; the Hero becomes one column.
- At 520px, CTAs become full width, complex preview details are reduced and section rails collapse.
- Projects remain one column on mobile and touch targets stay at least 44px.
- The BarberFlow product preview keeps its visual hierarchy while hiding secondary dashboard details on small screens.

## 9. Agent quick reference

When extending the portfolio, reuse the semantic CSS variables and existing UI primitives. Use Inter for interface copy, JetBrains Mono for metadata, 6/10/16px radii, the 1200px container and the existing responsive breakpoints. Keep the product narrative and hierarchy stronger than any visual effect.
