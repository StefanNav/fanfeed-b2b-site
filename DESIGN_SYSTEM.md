# FanFeed Design System

## Master Styling Philosophy

Do not treat references as layouts to copy literally. Treat them as a cohesive aesthetic system to interpret and extend. The goal is to replicate the feeling, tone, visual restraint, and compositional sensibility across the entire experience.

The style should feel **soft, premium, modern, and highly controlled**. It sits in the space between fintech, SaaS, and editorial product marketing. Everything should feel elegant, intentional, minimal, and quietly confident.

### Overall Aesthetic
- Airy and spacious
- Premium but approachable
- Minimal but not cold
- Polished without feeling overdesigned
- Soft, modern, and conversion-focused
- Calm, refined, and visually disciplined

### Visual Atmosphere
- Use a very light overall canvas
- Introduce soft pastel tonal environments rather than loud backgrounds
- Rely on pale lavender, blush, peach, cream, and off-white tones
- Use gradients as atmosphere, not decoration
- Gradients should feel diffused, hazy, and premium
- Think in terms of glow, tint, bloom, and softness rather than bright graphic color
- Nothing should feel saturated, harsh, or synthetic

### Surface Treatment
- Primary surfaces should feel clean, white, light, and elevated
- Maintain a sense of softness in all containers and framed areas
- Edges should feel rounded and approachable
- Depth should be subtle and quiet
- Shadows should be barely there
- Borders should be faint and supportive, never dominant
- The interface should feel feather-light, not heavy or aggressively layered

### Typography Philosophy
- Typography should carry much of the design sophistication
- Use a modern sans-serif feel with clean proportions
- Prioritize strong hierarchy, clarity, and restraint
- Headlines should feel bold and elegant, not loud
- Body text should feel quiet, neutral, and highly legible
- Avoid overly expressive type treatments
- Allow spacing, scale, and placement to create tension and beauty
- The text should feel designed, not merely placed

### Composition Principles
- Every part of the page should feel deliberately arranged
- Favor balance, asymmetry, and negative space over density
- Create a strong sense of rhythm from one area to the next
- Alternate between calm text moments and visually anchored moments
- Keep the experience flowing and breathable
- Nothing should feel cramped, overly busy, or mechanically stacked
- The page should feel curated with a strong editorial eye, even when highly product-oriented

### Design Language
- Combine soft product marketing with clean financial/product UX aesthetics
- Carry forward tension between warmth and precision
- Visuals should feel structured, but never rigid
- The page should feel systematic, but never repetitive in a dull way
- Preserve a sense of refinement and consistency across everything
- The design should feel like one brand world, not a collection of disconnected ideas

### Color Behavior
- Color should be used with restraint
- Most visual weight should come from neutrals, spacing, and typography
- Pastel tones should support the mood rather than dominate it
- Stronger accents should appear sparingly and intentionally
- Avoid high-contrast palettes unless there is a very deliberate need
- The palette should feel expensive, light, and stable

### Visual Simplification
- Simplify anything that feels noisy, cluttered, or too dashboard-like
- Reduce unnecessary detail in favor of clarity and polish
- Favor clean abstraction over literal complexity
- Make visuals feel curated and idealized
- The design should suggest sophistication through reduction, not through adding more

### Mood Keywords
- Soft
- Elevated
- Clear
- Intelligent
- Product-led
- Tasteful
- Lightly futuristic, but not "techno"
- Premium without luxury theatrics
- Modern without trend-chasing

### Stylistic Constraints (Avoid)
- Dark heavy interfaces
- Aggressive shadows
- Overly bright gradients
- Dense blocks of information
- Generic startup visual clichés
- Flashy "AI" aesthetics
- Making the page feel like a template
- Hard edges, loud contrast, and cluttered compositions

### Reference Interpretation Guide
When interpreting visual references, pay close attention to:
- The softness of the backgrounds
- The restraint in color usage
- The lightness of the surfaces
- The calm confidence of the typography
- The generous whitespace
- The subtle depth
- The polished balance between product realism and aesthetic simplification
- The overall feeling of quiet premium clarity

The final result should not merely resemble references superficially. It should internalize their visual logic and reproduce that same aesthetic point of view across the page in a cohesive way.

---

## Design Tokens

### Color Palette
```
Background:     #faf9f7   (warm off-white)
Foreground:     #1a1625   (deep plum-black)
Muted text:     #6b6580   (soft purple-gray)
Muted fg:       #9d95ab   (lighter purple-gray)
Border:         #ede9e3   (warm cream border)
Border light:   #f5f2ee   (barely-there border)
Surface:        #f5f2ee   (warm cream surface)
Surface elev:   #ffffff   (pure white cards)

Brand:          #7c5cfc   (vivid violet)
Brand dark:     #6344e0   (deep violet)
Brand light:    #9b80ff   (light violet)
Brand muted:    #ede8ff   (pale lavender wash)

Accent:         #f97316   (bright orange — CTAs, highlights)
Accent dark:    #ea580c   (deep orange)

Lavender:       #e8e0f5   (soft lavender for gradients)
Blush:          #fce4ec   (blush pink for gradients)
Peach:          #fff0e6   (warm peach for gradients)
Cream:          #fdf6f0   (cream for gradient fade)

Success:        #22c55e
Warning:        #f59e0b
```

### Typography Scale
```
Hero:           text-5xl / text-6xl / text-7xl — font-bold, tracking-tight
H2:             text-3xl / text-4xl — font-bold, tracking-tight
H3:             text-xl — font-semibold
Body:           text-base — text-muted, leading-relaxed
Body sm:        text-sm — text-muted, leading-relaxed
Eyebrow:        text-xs — font-semibold, uppercase, tracking-wider, text-brand
```

### Spacing Scale
```
Section padding:   py-24 md:py-32 lg:py-40
Container:         max-w-7xl mx-auto px-6 lg:px-8
Card padding:      p-6 or p-8
Card gap:          gap-6 or gap-8
Element gap:       gap-3 / gap-4 / gap-5
```

### Border Radius
```
Cards:          rounded-2xl or rounded-3xl
Buttons:        rounded-full
Badges:         rounded-full
Icons:          rounded-2xl
Small elements: rounded-xl
```

### Shadows
```
Card rest:      shadow-sm (barely visible)
Card hover:     shadow-lg shadow-brand/5
Elevated:       shadow-xl shadow-black/5
Float:          shadow-2xl shadow-black/5
```

### Gradient Presets
```
Hero:           from-[#ede8ff] via-[#fdf6f0] to-white
Section alt:    from-[#f5f2ee] to-white
Lavender wash:  from-[#ede8ff]/40 to-transparent
Peach wash:     from-[#fff0e6]/50 to-transparent
Blush wash:     from-[#fce4ec]/30 to-transparent
CTA band:       from-[#ede8ff] via-[#fce4ec]/30 to-[#fff0e6]
```

## Component Patterns

### Section Container
- Generous vertical padding (py-24 md:py-32 lg:py-40)
- Alternating backgrounds: white, surface (cream), gradient washes
- max-w-7xl container
- No dark sections by default

### Cards
- Pure white bg, rounded-2xl or rounded-3xl
- Very soft shadow (shadow-sm), stronger on hover
- Thin border (border-border) or borderless with shadow
- Consistent p-6 or p-8 internal padding
- Modular and reusable

### Buttons
- Primary: bg-brand rounded-full, white text, px-6 py-3
- Secondary: bg-foreground rounded-full, white text
- Outline: border rounded-full, ghost-like
- Ghost: text-brand, no background
- All buttons use rounded-full

### Eyebrow / Badge
- rounded-full, bg-brand-muted, text-brand
- text-xs, font-semibold, uppercase, tracking-wider
- px-4 py-1.5

### Feature Split
- Two-column: text left / visual right (or reversed)
- Copy: eyebrow + headline + body + optional bullet list + CTA
- Visual: layered card composition, mock UI modules

### Stat Band
- Horizontal row of 3-4 stats
- Large number, small label below
- On white card or inline

### Logo Cloud
- Muted, balanced presentation
- Centered row with generous spacing
- Text-muted-foreground opacity

### Product Mock Cards
- StatCard: large number, label, optional trend indicator
- ProfileCard: avatar, name, metadata
- ChartCard: simplified bar/donut visualization
- GaugeCard: circular progress indicator
- All use white bg, rounded-2xl, soft shadow

### CTA Band
- Full-width gradient background
- Centered headline + body + button
- Generous padding

### FAQ
- Clean accordion or open list
- On white background
- Subtle dividers

## Aesthetic Rules Summary

### Do
- Keep everything soft, clean, premium
- Let whitespace carry the design
- Use gradients as atmospheric washes, not decoration
- Make cards the primary building blocks
- Allow typography to carry design sophistication
- Create rhythm through alternating calm and anchored moments
- Maintain feather-light surfaces with subtle depth
- Use color with extreme restraint
- Favor reduction and clarity over complexity

### Don't
- Use harsh contrast or saturated colors
- Create dark heavy interfaces
- Apply aggressive shadows or loud borders
- Use glassmorphism overload
- Apply "AI neon" or flashy tech aesthetics
- Use sharp corners anywhere
- Create dense blocks of information
- Make anything feel template-like or generic
- Add complexity when simplicity serves better
