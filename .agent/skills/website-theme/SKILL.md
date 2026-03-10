---
name: website-theme
description: Guidelines and design tokens for the Aequitas Management Consultancies website to maintain consistency across new webpages.
---

# Aequitas Management Consultancies Design System

Use this skill to ensure all new components and pages align with the established brand identity of Aequitas Management Consultancies.

## 1. Website Purpose
- **Client**: Aequitas Management Consultancies LLC.
- **Industry**: Financial Compliance & Regulatory Consulting (UAE-based).
- **Core Values**: Trust, Professionalism, Luxury, and Regulatory Excellence.

## 2. Color Palette
The website uses a **Modern Dark Theme** with a sophisticated Navy and Gold combination.

### Navy Palette (Backgrounds & Depth)
- `navy-900`: `#080f1d` (Core body background)
- `navy-800`: `#0c1b33` (Secondary backgrounds)
- `navy-500`: `#1a3665` (Primary brand navy)
- `navy-950`: `#04080f` (Deepest accents)

### Gold Palette (Accents & CTAs)
- `gold-500`: `#c9a84c` (Primary brand gold)
- `gold-400`: `#e8be5a` (Hover states and highlights)
- `gold-300`: `#f5d88a` (Light accents and gradients)

### Text Colors
- **Primary**: `#f0f4f8` (Off-white for readability)
- **Secondary**: `gray-300` / `gray-400` (Muted descriptions)
- **Highlight**: `gold-500` (Key phrases, icons)

## 3. Typography
- **Primary Font**: `Inter` (Sans-serif)
  - Google Font: `Inter:wght@300;400;500;600;700;800;900`
- **Headings**: Bold/Extra-bold, wide tracking, often using `gold-shimmer` or gold accents for emphasis.
- **Body**: Regular/Medium weight, high contrast for readability against dark backgrounds.

## 4. Design Components & Utilities
Always prefer these pre-defined patterns:

### Glassmorphism
- **Class**: `.glass-card`
- **Style**: Semi-transparent background (`rgba(255, 255, 255, 0.04)`), `12px` backdrop-blur, subtle border (`rgba(255, 255, 255, 0.08)`).

### Gradients & Effects
- **Gold Gradient**: `.gold-gradient` (Linear 135deg: `#c9a84c` to `#f5d88a`)
- **Navy Gradient**: `.navy-gradient` (Deep navy depth)
- **Gold Shimmer**: `.gold-shimmer` (Animated text clipping effect for headings)

### Buttons
- **Primary**: Solid gold background, dark text, rounded-lg.
- **Secondary**: Transparent background, gold border, gold text.

## 5. Animations
- **Float**: Subtle vertical movement for icons/images (`animation-float`).
- **Fade-in / Slide-up**: Used for page entrances and scroll reveals.
- **Pulse-slow**: Used for subtle ambient glows.

## 6. Layout Principles
- Use the **Grid Pattern** background (`bg-grid-pattern`) for subtle texture.
- Maintain **High Contrast** between text and backgrounds.
- Use **Wide Spacing** (tracking and padding) for a premium, corporate feel.
