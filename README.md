# Paradise Spa — Luxury Wellness & Holistic Sanctuary

A premium single-page website for **Paradise Spa**, showcasing 15 luxury massage therapies, gallery, special offers, reviews, and booking via WhatsApp.

![Paradise Spa Preview](assets/s1.jpeg)

---

## Features

- **15 Luxury Massage Therapies** — Deep Tissue, Swedish, Aromatherapy, Hot Stone, Balinese, Thai, Ayurvedic, Lomi Lomi, Reflexology, Shiatsu, Four-Hands, Potli, De-Stress, Body Scrub, Royal Signature
- **Filterable Gallery** with Lightbox modal (keyboard & touch navigation)
- **Testimonial Carousel** with auto-play, dots, and keyboard controls
- **Animated Counters** (15 therapies, 15,000+ clients, 4.9★ rating)
- **Scroll Reveal Animations** (IntersectionObserver)
- **Sticky Glassmorphism Navbar** with scroll-spy active links
- **Mobile-First Responsive** (breakpoints: 1024px, 768px, 480px)
- **Touch-Optimized** interactions (44px tap targets, no hover on touch)
- **WhatsApp Integration** — Floating button, header CTA, service cards, contact form
- **Google Maps Embed** — Exact location
- **Contact Form** → Pre-filled WhatsApp message
- **Performance** — No build step, vanilla HTML/CSS/JS, CDN FontAwesome

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Structure | HTML5 (semantic) |
| Styling | CSS3 (Custom Properties, Flexbox, Grid, Glassmorphism) |
| Interactivity | Vanilla ES6+ JavaScript (modules pattern) |
| Icons | FontAwesome 6.4 (CDN) |
| Fonts | Playfair Display + Plus Jakarta Sans (Google Fonts) |
| Images | Local assets (`assets/`) |

---

## Project Structure

```
paradise-spa/
├── index.html          # Main HTML document
├── styles.css          # Complete stylesheet
├── script.js           # All interactive logic
├── assets/
│   ├── logo.png        # Brand logo
│   ├── s1.jpeg – s15.jpeg  # Service images (15)
├── .gitignore          # Git ignore rules
└── README.md           # This file
```

---

## Getting Started

### Prerequisites
- A modern browser (Chrome, Firefox, Safari, Edge)
- Optional: Local server for development (VS Code Live Server, `npx serve`, Python `http.server`)

### Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd paradise-spa

# Option 1: Open directly in browser
# Double-click index.html

# Option 2: Serve locally (recommended for fetch/iframe)
npx serve .
# or
python -m http.server 8000
# Then open http://localhost:8000
```

---

## Customization

### Colors & Theme
Edit CSS variables in `styles.css`:
```css
:root {
  --bg-primary: #0B132B;       /* Midnight Navy */
  --bg-surface: #1C2541;       /* Velvet Sapphire */
  --accent-primary: #C98C7A;   /* Rose Gold */
  --accent-secondary: #A46D5E; /* Copper Dusk */
  --text-primary: #FAF8F5;     /* Cream */
  --text-muted: #94A3B8;       /* Slate Taupe */
}
```

### Services
Modify the service cards in `index.html` (lines 200–528). Each card follows:
```html
<div class="glass-card service-card fade-up">
  <div class="service-img-wrap">
    <img src="assets/s{X}.jpeg" alt="Service Name" class="service-img">
    <span class="service-tag">Tag</span>
  </div>
  <div class="service-content">
    <h3 class="service-title">Service Name</h3>
    <p class="service-desc">Description...</p>
    <div class="service-footer">
      <div class="service-meta">
        <span class="service-duration"><i class="fa-regular fa-clock"></i> XX Mins</span>
        <span class="service-price">₹X,XXX</span>
      </div>
      <a href="https://wa.me/916366377888?text=..." class="btn btn-primary btn-sm">
        <i class="fa-brands fa-whatsapp"></i> Book Treatment
      </a>
    </div>
  </div>
</div>
```

### Contact Info
Update in `index.html`:
- **Address** — Lines 803–806, 947–950
- **Phone** — Lines 813, 949
- **Email** — Line 829
- **WhatsApp** — Search `wa.me/916366377888` (multiple locations)
- **Google Maps** — Line 836 (iframe src)
- **Social** — Lines 910–911 (Instagram, Facebook)

### Logo
Replace `assets/logo.png` (recommended: 100×100px, transparent background).

---

## Scripts Overview (`script.js`)

| Module | Description |
|--------|-------------|
| Sticky Header | Adds `.scrolled` class on scroll > 50px |
| ScrollSpy | Highlights active nav link per section |
| Mobile Drawer | Slide-in nav with overlay & body lock |
| Smooth Scroll | Anchor links with header offset |
| Gallery Filter | Category tabs with animated show/hide |
| Lightbox | Modal with prev/next, keyboard, swipe-ready |
| Review Slider | Auto-play carousel (6s), dots, arrows, pause on hover |
| Counters | Animated count-up on hero reveal |
| Scroll Reveal | `.fade-up` elements via IntersectionObserver |
| Contact Form | Collects data → opens WhatsApp with pre-filled message |

---

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| Edge | 90+ |

*Uses modern CSS (custom properties, backdrop-filter) and JS (IntersectionObserver, optional chaining). Polyfills not included.*

---

## Deployment

### Static Hosting (Recommended)
- **Netlify** — Drag & drop `paradise-spa` folder
- **Vercel** — `vercel deploy`
- **GitHub Pages** — Enable in repo settings → Pages → Deploy from `main` branch
- **Firebase Hosting** — `firebase deploy`
- **Surge.sh** — `surge paradise-spa`

### Custom Domain
Add `CNAME` file with your domain (e.g., `paradisespa.com`) to project root before deploy.

---

## Performance Notes

- **No build step** — Zero dependencies to install
- **Images** — Optimize `assets/*.jpeg` (recommended: ≤200KB each, WebP for production)
- **Fonts** — `font-display: swap` via Google Fonts URL
- **CSS/JS** — Minify for production (e.g., `cssnano`, `terser`)
- **Caching** — Configure `Cache-Control` headers on host

---

## Accessibility

- Semantic HTML5 (`header`, `nav`, `main`, `section`, `footer`)
- ARIA labels on icon-only buttons (`aria-label`)
- `role="dialog"` on lightbox modal
- Focus-visible outlines (browser default)
- Color contrast ≥ 4.5:1 (WCAG AA)
- Keyboard navigable (Tab, Enter, Escape, Arrow keys)
- `prefers-reduced-motion` respected via `@media` (add if needed)

---

## License

MIT License — Free to use, modify, and distribute.

---

## Credits

- **Design & Development** — Custom Imperial Sapphire & Rose Gold theme
- **Images** — Local assets + [Unsplash](https://unsplash.com) (gallery placeholders)
- **Icons** — [FontAwesome 6](https://fontawesome.com)
- **Fonts** — [Playfair Display](https://fonts.google.com/specimen/Playfair+Display), [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)

---

## Contact

**Paradise (Blue Heaven) Spa & Wellness Centre**  
1st floor, Nasco Ishanya Building, Khanapur Main Rd, above Airtel Office, Tilakwadi, Belagavi, Karnataka 590006  
📞 63663 77888  
✉️ paradisespaandwellnesscentre@gmail.com  
📍 [Google Maps](https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.3524778963265!2d74.50481377634911!3d15.838061184808444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbf67a3399e50af%3A0xd4a8f1013bd9057!2sParadise%20(Blue%20Heaven)%20Spa%20%26%20Wellness%20Centre!5e0!3m2!1sen!2sin!4v1788203182172!5m2!1sen!2sin)  
📷 [Instagram](https://www.instagram.com/paradise_spa_belagavi/)  
📘 [Facebook](https://www.facebook.com/profile.php?id=61558304188139)