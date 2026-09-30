<div align="center">

# 🏛️ CASA ANTICA — Leading India's Furniture Evolution
### *Artisan Living & Heirloom Handcrafted Woodcraft*
#### *Crafted & Engineered by PipoZa Dev Studio*

[![Studio](https://img.shields.io/badge/Crafted%20By-PipoZa%20Dev%20Studio-9333ea?style=for-the-badge&logo=instagram&logoColor=white)](https://pipoza.s.gy/pipoza.in)
[![Themes](https://img.shields.io/badge/Themes-Default%20%7C%20Dark%20%7C%20Toasted%20Almond-f59e0b?style=for-the-badge&logo=moo&logoColor=white)](#-liquid-glass-design-system)
[![Artisan Heritage](https://img.shields.io/badge/Guild%20Experience-15%2B%20Years-d97706?style=for-the-badge&logo=roots&logoColor=white)](#-craftsmanship-philosophy)
[![Routing](https://img.shields.io/badge/Routing-Extensionless%20Clean%20URLs-00e599?style=for-the-badge&logo=googlechrome&logoColor=white)](#-clean-url-routing)

<br/>

<p align="center">
  <b>Bangalore · Mumbai · Noida</b><br/>
  <i>Handcrafting bespoke solid American Walnut, plantation Teak, and French Bouclé suites built by generational master woodworkers — tailored to your exact architectural specifications.</i>
</p>

[Home (/index)](index.html) • [Experience Studios (/experience-studios)](experience-studios.html) • [Our Heritage (/about)](about.html) • [Client Reviews (/reviews)](reviews.html) • [Contact (/contact)](contact.html) • [PipoZa Dev Studio](https://pipoza.s.gy/pipoza.in)

</div>

---

## 🎨 Brand Identity & Logos

**CASA ANTICA** features two primary brand assets:

1. **Logo 1 (With Name & Tagline)** — [`logo.png`](logo.png) & [`logo-transparent.png`](logo-transparent.png):
   - Features the stylized deep crimson monogram, bold lowercase "casa antica" wordmark, and the official tagline *"Leading India's Furniture Evolution"*.
   - Presented prominently on Desktop Navigation bar, Footer brand cards, and Mobile navigation drawer.

2. **Logo 2 (Simple Monogram)** — [`logo-symbol.png`](logo-symbol.png) & [`logo-symbol-transparent.png`](logo-symbol-transparent.png):
   - The iconic square monogram mark with red "A/C" typography and hallmark dot.
   - Used for the browser Favicon, high-contrast Mobile Navigation bar badge, and compact brand marks.

---

## 💎 Liquid Glass Design System (3 Distinct Themes)

The website features three warm, organic themes celebrating roasted walnut, rich espresso, caramel tones, and honey amber glows:

1. **Default Theme (Warm Roasted Coffee & Honey Amber)**:
   - Deep warm coffee canvas (`#18110b`), aged chestnut surface (`#22170f`), and honey amber glows (`#f59e0b`).
2. **Dark Theme (Deep Roasted Obsidian Espresso)**:
   - Pure midnight espresso canvas (`#0e0805`), high-contrast alabaster typography, and golden honey glows (`#fbbf24`).
3. **Light Theme (Toasted Almond Sand & Caramel Latte — Rich Non-White)**:
   - Specially calibrated to eliminate stark white glare! Rich warm sand canvas (`#e8dec8`), caramel oat surfaces (`#ded2ba`), and deep dark roasted espresso typography (`#1c1007`).

---

## 📂 Flat Main Folder Architecture (Zero Sub-Folders)

All project files reside cleanly in the root directory for immediate local browser testing and cloud deployment:

```
D:\Projects\Furniture/
├── .htaccess                   # Apache mod_rewrite clean URL rules & /home rewrite
├── _redirects                  # Netlify clean URL rules & /home rewrite
├── vercel.json                 # Vercel cleanUrls & /home rewrite
├── .nojekyll                   # Disables Jekyll processing for GitHub Pages
├── 404.html                    # Modern liquid glass 404 with client-side fallback router
├── index.html                  # Main Homepage (/index) with Hero, Visualizer, Artisans & Reviews
├── home.html                   # Instant forwarder to index.html (/index) for backward compatibility
├── experience-studios.html      # Dedicated Showcase for Bangalore, Mumbai & Noida Studios
├── about.html                  # Guild Heritage, Artisan Profiles & 120k Trees Pledge
├── reviews.html                # Verified Client Feedbacks, Real Photos & Video Reviews
├── contact.html                # Concierge Inquiries & Direct Desks
├── style.css                   # 3-Theme Design Tokens, Brand Colors, Base Layout
├── components.css              # Liquid Glass Cards, Responsive Brand Logos, Swatches, Nav
├── animations.css              # GPU-accelerated translate3d animations (Lag-Free)
├── responsive.css              # Mobile Responsive Layouts & Horizontal Card Dock
├── products-data.js            # CASA ANTICA Furniture Catalog Specifications & Swatch Assets
├── main.js                     # Core Engine: 3-Way Theme Switcher, Web Audio & Lightbox
├── animations.js               # IntersectionObserver reveals, counters & room visualizer
├── logo.png                    # Logo 1: Full Brand Logo with Wordmark & Tagline
├── logo-symbol.png             # Logo 2: Iconic Simple Monogram
├── logo-transparent.png        # Transparent PNG of Logo 1
├── logo-symbol-transparent.png # Transparent PNG of Logo 2
└── README.md                   # Project Documentation
```

---

## ⚡ Key Engineering & Optimizations

- **Zero-Lag Performance**: Lightweight blur filters and composite `translate3d(0,0,0)` transforms ensure 60fps smooth scrolling.
- **Dual Responsive Logo System**: Displays full horizontal branding on desktops and automatically switches to compact monogram badge on mobile to prevent navbar crowding.
- **Horizontal Mobile Card Scrolling**: On mobile devices (`≤ 768px`), cards and reviews smoothly snap and swipe horizontally without page squishing or layout bugs.
- **Fixed Top Announcement Bar**: Proper document flow positioning so the top bar never overlaps or hides the navigation bar.
- **Pure Web Audio API**: Tactile acoustic wood clicks and fifth chimes on user interaction with zero audio asset overhead.
- **Extensionless Clean URLs**: Seamless clean URLs (`/index`, `/experience-studios`, `/about`, `/reviews`, `/contact`) configured across GitHub Pages, Vercel, Netlify, Apache, and local files.
- **PipoZa Dev Studio Attribution**: Integrated header badge and footer links directly to [https://pipoza.s.gy/pipoza.in](https://pipoza.s.gy/pipoza.in).
