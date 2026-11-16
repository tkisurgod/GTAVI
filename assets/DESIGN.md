---
name: Vice Midnight
colors:
  surface: '#151123'
  surface-dim: '#151123'
  surface-bright: '#3b364b'
  surface-container-lowest: '#100b1e'
  surface-container-low: '#1d192c'
  surface-container: '#211d30'
  surface-container-high: '#2c273b'
  surface-container-highest: '#373246'
  on-surface: '#e7def9'
  on-surface-variant: '#e3bdc5'
  inverse-surface: '#e7def9'
  inverse-on-surface: '#322d42'
  outline: '#aa888f'
  outline-variant: '#5b3f46'
  surface-tint: '#ffb1c5'
  primary: '#ffb1c5'
  on-primary: '#65002f'
  primary-container: '#ff4a8e'
  on-primary-container: '#590028'
  inverse-primary: '#ba005c'
  secondary: '#ffb68a'
  on-secondary: '#522300'
  secondary-container: '#ff7b00'
  on-secondary-container: '#5c2800'
  tertiary: '#00dbe9'
  on-tertiary: '#00363a'
  tertiary-container: '#00a0aa'
  on-tertiary-container: '#002f33'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffd9e1'
  primary-fixed-dim: '#ffb1c5'
  on-primary-fixed: '#3f001b'
  on-primary-fixed-variant: '#8f0045'
  secondary-fixed: '#ffdbc8'
  secondary-fixed-dim: '#ffb68a'
  on-secondary-fixed: '#321300'
  on-secondary-fixed-variant: '#743500'
  tertiary-fixed: '#7df4ff'
  tertiary-fixed-dim: '#00dbe9'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#151123'
  on-background: '#e7def9'
  surface-variant: '#373246'
typography:
  display-xl:
    fontFamily: Anton
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 76px
    letterSpacing: 0.04em
  display-xl-mobile:
    fontFamily: Anton
    fontSize: 44px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: 0.03em
  headline-lg:
    fontFamily: Anton
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 52px
    letterSpacing: 0.03em
  headline-lg-mobile:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Anton
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: 0.02em
  headline-sm:
    fontFamily: Outfit
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Outfit
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Outfit
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Outfit
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.08em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.1em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 10px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.12em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system channels an adrenaline-charged, luxury-outlaw aesthetic built for high-stakes digital experiences, festival events, and late-night media launches. Drawing direct inspiration from 1980s neon noir, retro-futuristic synthwave, and sun-drenched subtropical decadence, the tone balances cinematic drama with razor-sharp modern precision.

The emotional atmosphere is cinematic, illicit, electric, and celebratory. Dark substrates absorb light, allowing high-voltage neon chromatic edges and warm sunset hues to cut through the canvas. The styling hybridizes **Glassmorphic** container layering with **High-Contrast / Bold** typography and subtle **Tactile / Neon** rim accents. Containers behave like tinted windshields speeding across an ocean drive at 2 A.M.—translucent, reflective, and rim-lit by roadside neon tubes.

## Colors

The chromatic architecture is constructed entirely around an abyss of midnight violet-black (`#0B0719`), punctuated by four distinct chromatic channels:

- **Primary (`#FF2A85` - Electric Magenta):** Dominates high-priority focal points, primary interactive states, key CTAs, and active countdowns.
- **Secondary (`#FF7B00` - Miami Sunset Orange):** Fuels kinetic energy, hot state warnings, dynamic live-event tags, and secondary action highlights. Used in linear gradients blending from magenta to orange to invoke coastal twilight.
- **Tertiary (`#00F0FF` - Palm Teal / Cyan):** Dedicated to technical data, live network connectivity statuses, telemetry readouts, schedules, and secondary badges.
- **Accent Warm Gold (`#FFD166`):** Reserved for VIP indicators, currency/pricing markers, unlocked achievements, and special edition distinctions.
- **Base & Neutral Tiers:** 
  - Background Base: `#0B0719`
  - Container Surfaces: `rgba(20, 14, 40, 0.75)`
  - Elevated Popovers/Modals: `rgba(32, 22, 64, 0.85)`
  - Rim Borders & Grid Accents: `rgba(255, 42, 133, 0.25)` and `rgba(0, 240, 255, 0.2)`
  - Body Text: `#E6E1F2` (85% opacity lavender-tinted white for low eye strain)
  - Muted Text: `#8D84A6`

## Typography

The typographic hierarchy relies on a high-contrast pairing between monumental cinematic displays and technical geometric efficiency:

1. **Display & Primary Headlines (Anton):** Condensed, commanding, and unapologetic. All uppercase by default for display sizes. Used to emulate vintage film titles, billboard slogans, and midnight event drops.
2. **Body Copy (Outfit):** Highly legible, rounded geometric grotesque that counterbalances the aggression of Anton. It keeps descriptive text, mission briefs, and dialog readable against deep tinted glass backgrounds.
3. **Data, Schedules & Labels (Space Grotesk):** Engineered, monospace-leaning geometric clarity. Applied to launch timestamps, server clocks, badge identifiers, and numeric metadata. Uppercase tracking enhances the high-tech cockpit/dashboard feel.

## Layout & Spacing

The system runs on a **Fluid grid** with maximum content bounding at 1440px to preserve cinematic density.

- **Desktop (1024px+):** 12-column layout with `1.5rem` gutters and `3rem` section margins. Supports multi-column telemetry sidebars, full-bleed media headers, and asymmetric schedule blocks.
- **Tablet (768px - 1023px):** 8-column layout with `1.25rem` gutters and `2rem` screen margins. Dynamic sidebars collapse into persistent bottom navigation or floating drawer sheets.
- **Mobile (<768px):** 4-column layout with `1rem` gutters and `1.25rem` screen margins. Heavy components snap into single-column vertical stacks.

Components use tight interior token increments (`space-xs` through `space-md`) for compact telemetry panels, while macro-sections leverage `space-xl` and higher to inject breathing room between high-saturation neon focal points.

## Elevation & Depth

Visual hierarchy does not use drop shadows in the traditional corporate sense; depth is manifested through **Glassmorphic luminescence and layered luminosity**:

- **Ground Level (Canvas):** Deep twilight `#0B0719` layered with subtle radial gradients (e.g., `#FF2A85` at 8% opacity blurred 140px off top-right edges; `#00F0FF` at 6% opacity blurred 180px bottom-left).
- **Surface Level 1 (Panels & Cards):** Backed by `rgba(20, 14, 40, 0.75)` with `backdrop-filter: blur(16px)` and an interior stroke: `1px solid rgba(255, 255, 255, 0.08)`. Top and left edges receive a gradient keyline shifting from `rgba(255, 42, 133, 0.35)` to transparent.
- **Surface Level 2 (Modals, Flyouts & Floating HUDs):** `rgba(28, 18, 56, 0.88)` with `backdrop-filter: blur(24px)`. Outer edge rimmed by `1px solid rgba(0, 240, 255, 0.45)`, cast with an ambient neon bloom: `0 0 25px rgba(0, 240, 255, 0.2)`.
- **Interactive Active Focus:** Interactive elements emit a dual-stage glow: an inner highlight of `inset 0 0 12px rgba(255, 42, 133, 0.5)` paired with an outer aura `0 0 20px rgba(255, 42, 133, 0.4)`.

## Shapes

The shape system adopts a **Soft (`1`)** approach (base `0.25rem` / 4px, `rounded-lg` at 8px, and `rounded-xl` at 12px). Roundedness is kept strictly controlled to retain an aerodynamic, cybernetic silhouette reminiscent of 80s sports car dashboards, cassette shells, and HUD viewfinders.

Large circular radii are banned for containers and cards; circular shaping is exclusively reserved for status indicator dots, avatars, and select icon badges. Chamfered or cut-corner aesthetics (clip-path 45-degree micro-notches) may be optionally applied to primary action CTAs and telemetry badge borders.

## Components

- **Buttons:** 
  - *Primary Button:* Saturated gradient fill from `#FF2A85` to `#FF7B00` (135deg angle), crisp white bold Anton or Space Grotesk text, uppercase, with a persistent soft neon bloom: `0 0 16px rgba(255, 42, 133, 0.4)`. On hover, scale 1.02x with intensified bloom.
  - *Secondary / Ghost Button:* Background in `rgba(20, 14, 40, 0.6)`, 1px border in `#00F0FF`, text in `#00F0FF`. On hover, fills with `rgba(0, 240, 255, 0.15)` and glows teal.
- **Input Fields:** 
  - Substrate styled as `rgba(11, 7, 25, 0.85)` with a base 1px border of `rgba(230, 225, 242, 0.18)`.
  - Focused state transitions border to `#FF2A85` with an exterior rim halo `0 0 10px rgba(255, 42, 133, 0.3)`. Typography uses `Space Grotesk` for input strings with an electric teal caret cursor.
- **Cards & Containers:** 
  - Built with frosted glassmorphism (`rgba(20, 14, 40, 0.75)` + 16px blur). 
  - Outlined with hairline multi-stop gradient borders (`#FF2A85` to `#00F0FF` at low opacities). Header areas within cards feature a 1px border separator and uppercase label tags.
- **Chips & Badges:** 
  - Micro-pills with `0.25rem` radius. Tinted backdrops at 15% opacity corresponding to the accent color: Live (Magenta `#FF2A85`), Confirmed/Online (Teal `#00F0FF`), VIP/Exclusive (Gold `#FFD166`).
  - Space Grotesk uppercase text with `0.1em` letter spacing.
- **Checkboxes & Radios:** 
  - Square micro-frames with 2px corner radii. Inactive: dark violet inset fill with `rgba(255, 255, 255, 0.2)` border.
  - Checked: Radiant `#FF2A85` fill with white glyph checkmark and an immediate outer glow.
- **Lists & Schedule Rows:** 
  - Border-bottom divider using `1px solid rgba(255, 255, 255, 0.06)`.
  - Hovering a row triggers a smooth horizontal sweep of `linear-gradient(90deg, rgba(255, 42, 133, 0.08) 0%, transparent 100%)` with the leading schedule time shifting to `#FFD166`.
- **Special Launch Components (Event Countdown & Live Ticker):** 
  - Tabular digital counters displaying days/hours/seconds using high-impact Anton numerals framed by neon teal corner brackets (`border-corner` accents) and blinking divider colons in sunset orange.