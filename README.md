# The Cosmic Lo-Fi Archive
## Personal Portfolio - Kim Andrei Besmar

A high-end, responsive personal portfolio that blends **Hard Sci-Fi** (Futurism, Blockchain, Terminal) with **Soft Mellow R&B** (Dreamy, Nostalgic, Jazz-hop).

## Design Philosophy: "Cosmic Lo-Fi"

This portfolio captures the intersection of technical precision and aesthetic beauty—where blockchain systems meet vintage photography, where terminal commands flow like poetry, and where jazz plays in the background of a spaceship cockpit.

### Visual Style: "The Cozy Spaceship"
- **Background**: Deep void black (#050505) with slow-moving nebula gradients
- **Glassmorphism**: Heavy glass effects (backdrop-blur-xl) for cards and navigation
- **Typography**: 
  - Headers: JetBrains Mono (Sci-Fi/Code feel)
  - Body: Lora (Elegant/Laufey literary feel)
- **Colors**: Holographic Pastels
  - Soft Lavender (#E6E6FA) - Wave to Earth vibe
  - Muted Peach (#FFDAB9) - Laufey vibe
  - Terminal Green (#00FF94) - Tech elements
- **Effects**: Custom crosshair cursor, noise grain overlay, nebula glows

## Features

### 🎵 Orbit Radio
A persistent floating music player widget in the bottom-right corner that simulates listening to "cosmic_dreams.mp3" while drifting through space.

### 🚀 The Cockpit (Hero)
Animated hero section with rotating abstract shapes and smooth text reveals. Features a terminal-style CTA button: `> Initialize Sequence`.

### ⭐ Mission Logs (Constellation Map)
Technical projects displayed as nodes in a star map, connected with faint SVG lines. Projects glow softly on hover like stars.

### 📸 The Darkroom
Masonry grid layout for creative work with vintage photo filters (sepia, contrast) and hover tilt effects.

### 📻 Current Frequency
Album art-style mood indicators for Laufey, Wave to Earth, Munimuni, and Joji—capturing the musical inspiration behind the design.

### 💻 Frequency (About)
Split-section showing technical skills in a terminal JSON format alongside a literary journal entry about interests and inspirations.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: 
  - JetBrains Mono (via Google Fonts)
  - Lora (via Google Fonts)
  - Inter (via Google Fonts)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Placeholder Images Needed

Add these images to the `public` folder:

1. **`placeholder-everscent.jpg`** - Product packaging design for Everscent coffee-scented candles
2. **`placeholder-prizmak.jpg`** - Multimedia assets for Prizmak Media
3. **`placeholder-photo-1.jpg`** - Digital vintage photography (Canon G7X aesthetic)
4. **`placeholder-photo-2.jpg`** - Digital vintage photography (Kodak-inspired)
5. **`placeholder-photo-3.jpg`** - Digital vintage photography (nostalgic moments)

## Customization

- Update project details in `components/ConstellationMap.tsx`
- Modify creative items in `components/TheDarkroom.tsx`
- Adjust colors in `tailwind.config.ts`
- Update skills and interests in `components/Frequency.tsx`
- Customize the Orbit Radio track info in `components/OrbitRadio.tsx`

## Build for Production

```bash
npm run build
npm start
```

## Design References

- **Music**: Wave to Earth, Laufey, Joji, Munimuni
- **Aesthetics**: Vintage film photography, spaceship HUDs, jazz album covers
- **Tech**: Terminal interfaces, blockchain systems, glassmorphism UI

---

*"Listening to jazz while drifting through space."*
