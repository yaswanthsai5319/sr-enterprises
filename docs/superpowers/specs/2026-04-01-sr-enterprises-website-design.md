# SR Enterprises — Website Design Spec

## Overview

A product showcase and lead generation website for SR Enterprises, a factory manufacturing fruit protection covers, leno mesh bags, and PP woven bags. Located in Andhra Pradesh, India, serving farmers and wholesale buyers.

**Primary goals:** Lead generation (WhatsApp/phone inquiries) + product catalog.
**Target audience:** Farmers (individual buyers) and wholesalers/distributors — mostly non-technical users.

## Tech Stack

- **Framework:** Next.js (App Router, static export to start, scalable to full-stack)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **i18n:** next-intl for trilingual support (English, Hindi, Telugu)
- **Deployment:** Vercel (free tier, auto-deploy from GitHub)
- **Future scalability:** API routes for payments (Razorpay/PhonePe), order forms, etc.

## Site Structure

Single-page layout with smooth scroll sections and sticky navigation.

### 1. Navbar (Sticky)
- SR logo (left)
- Nav links: Home, Products, About, Gallery, Contact
- Language toggle: EN | हि | తె (switches all content)
- Hamburger menu on mobile

### 2. Hero Section
- Tagline: "Protecting Your Harvest, Packaging Your Future"
- Subtitle: "Quality products for farmers & businesses since 2025"
- Three product category icons (Fruit Covers, Leno Bags, PP Woven Bags)
- Two CTAs: "WhatsApp Us" (green) + "Call Now" (outlined)
- Background: Navy gradient matching brand colors

### 3. Why Use Fruit Protection Covers? (Education Section)
- Three benefit cards with icons:
  - No Insects — protects without chemicals
  - Sun & Rain Shield — guards against weather damage
  - Better Price — unblemished fruit sells at premium
- Before/After visual comparison (without cover → with cover)
- Uses the mango result photo as proof

### 4. Products Section
Three product cards, each with:
- Large product image (from provided photos)
- Product name and description
- Feature tags (e.g., "Pest Free", "Reusable", "Breathable")
- "Enquire Now" WhatsApp button per product

**Products:**
1. **Fruit Protection Covers** — Non-woven covers for mango, grapes, pomegranate, dragon fruit, orange. Tags: Pest Free, Reusable, Breathable.
2. **Leno Mesh Bags** — Breathable mesh bags for onions, potatoes, vegetables. Available in all colors & sizes. Tags: Ventilated, Strong, Custom Sizes.
3. **PP Woven Bags** — Heavy-duty woven bags for rice, fertilizer, grains, cement. Custom printing available. Tags: Heavy Duty, Custom Print, Bulk Orders.

### 5. About Our Factory
Four icon cards in a 2x2 grid:
- Modern Machinery — advanced manufacturing equipment
- Andhra Pradesh — Vijayawada-Nuzvid Road location
- All India Delivery — nationwide shipping
- Quality Assured — tested & trusted products

### 6. Gallery
- Grid of product/machine/result images (3 columns on desktop, 2 on mobile)
- Uses 8 provided images (all except logo)
- Lightbox on click for full-size view

### 7. Contact / Footer
- Big tap-friendly stacked buttons:
  - WhatsApp chat (green)
  - Call 9985636699 (blue)
  - Call 9505636699 (gray)
- Factory address with "Open in Google Maps" button
- Email: srenterprises.mfg24@gmail.com
- Social media icon placeholders (Facebook, Instagram, YouTube)
- Copyright: © 2025 SR Enterprises

### 8. Floating WhatsApp Button
- Fixed bottom-right corner, always visible
- Green circular button with WhatsApp icon
- Opens: https://wa.me/919985636699?text=Hi%2C%20I'm%20interested%20in%20your%20products

## Contact Details

- **Phone 1:** 9985636699
- **Phone 2:** 9505636699
- **WhatsApp:** 9985636699 (primary)
- **Email:** srenterprises.mfg24@gmail.com
- **Address:** Burri Venkateswara Gardens, Pothavarappadu, Agiripalli Mandal, 521212, Eluru District, Andhra Pradesh, Vijayawada - Nuzvid Road

## Design System

### Colors (from logo)
- **Navy:** #1a1f36 (primary background, text)
- **Gold:** #c8a84e (accents, highlights)
- **WhatsApp Green:** #25D366 (CTA buttons)
- **White:** #ffffff (cards, sections)
- **Light Gray:** #f8f9fa (alternate section backgrounds)

### Typography
- Clean sans-serif font (Inter or system font stack)
- Large, readable text — minimum 14px body text
- Bold headings for scannability

### Mobile-First Principles
- All buttons minimum 48px tap target
- Hamburger menu on screens < 768px
- Single-column product cards on mobile
- Click-to-call phone number links
- Images lazy-loaded for performance

## Internationalization (i18n)

Three languages with a toggle in the navbar:
- **EN** — English (default)
- **हि** — Hindi
- **తె** — Telugu

All text content (headings, descriptions, labels, CTAs) will have translation keys. Images remain the same across languages.

## Image Assets

9 images provided, to be renamed and organized:

| Current File | Renamed To | Usage |
|---|---|---|
| WhatsApp Image...20.05.27.jpeg | logo.jpeg | Logo — navbar, hero, favicon source |
| WhatsApp Image...20.05.27 (1).jpeg | fruit-covers-product.jpeg | Product card — fruit covers |
| WhatsApp Image...20.05.27 (2).jpeg | mango-result.jpeg | Before/after section — result proof |
| WhatsApp Image...20.05.28.jpeg | pp-woven-bags-rice.jpeg | Product card — PP woven bags |
| WhatsApp Image...20.05.28 (1).jpeg | pp-woven-bags-fertilizer.jpeg | Gallery — fertilizer bags |
| WhatsApp Image...20.05.28 (2).jpeg | leno-mesh-rolls.jpeg | Gallery — mesh rolls |
| WhatsApp Image...20.05.28 (3).jpeg | leno-mesh-bags-vegetables.jpeg | Product card — leno mesh bags |
| WhatsApp Image...20.05.29.jpeg | machine-leno.jpeg | Gallery — leno mesh machine |
| WhatsApp Image...20.05.29 (1).jpeg | machine-paper-bag.jpeg | Gallery — paper bag machine |

## Deployment

1. Push code to GitHub repository `sr-enterprises`
2. Connect to Vercel for automatic deployments
3. Every push to `main` triggers a new deploy
4. Free tier covers this use case fully

## Future Scalability

The Next.js architecture supports adding:
- Payment integration (Razorpay, PhonePe)
- Product ordering / inquiry forms
- Admin panel for product management
- Blog / news section
- Analytics dashboard
