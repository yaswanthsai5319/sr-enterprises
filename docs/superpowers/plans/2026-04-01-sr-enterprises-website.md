# SR Enterprises Website Implementation Plan (Senior Revision)

Date: 2026-04-01
Owner: SR Enterprises web team
Status: Draft v2 (UX-first, end-user-first)

## Why this revision

The original plan is a strong implementation checklist, but it is code-first.
This revision makes it user-first and conversion-first while staying practical for engineering.

## Product outcomes (what success looks like)

- A first-time visitor can understand products and contact SR Enterprises in under 30 seconds.
- A mobile user can start WhatsApp chat or call in at most 2 taps from any section.
- The site works reliably in EN, HI, and TE with accurate, readable translations.
- The website feels trustworthy: clear visuals, real photos, factory credibility, and consistent branding.

## Primary user journeys

1. Farmer (mobile, low patience)
- Lands on home page
- Quickly understands product relevance
- Taps WhatsApp or Call CTA

2. Wholesaler / distributor
- Reviews product cards and specs
- Validates factory credibility via About + Gallery
- Contacts sales via WhatsApp with intent context

3. Returning visitor
- Reopens site from shared link
- Switches language
- Navigates directly to products or contact

## Experience principles

- Conversion clarity over visual noise.
- Mobile-first touch targets (minimum 48px).
- Readability first for multilingual copy.
- Trust signals in every fold.
- Fast page loads on low-bandwidth networks.

## Visual direction and styling system

### Brand direction

- Tone: practical, agricultural, trustworthy, modern.
- Use real product/factory imagery as primary visual proof.
- Avoid generic startup look; no purple-heavy palette.

### Color tokens

- `--color-primary`: `#1a1f36` (deep navy)
- `--color-accent`: `#c8a84e` (warm gold)
- `--color-whatsapp`: `#25D366`
- `--color-surface`: `#ffffff`
- `--color-surface-alt`: `#f6f8fb`
- `--color-text`: `#121826`
- `--color-muted`: `#5b6475`

### Typography (locale-aware)

- English: `Manrope`
- Hindi: `Noto Sans Devanagari`
- Telugu: `Noto Sans Telugu`
- Keep body text >= 16px on mobile for readability.

### Interaction style

- Sticky nav with clear section anchors.
- Subtle reveal animations only (no distracting motion).
- CTA states: default, hover, focus-visible, active, disabled.
- Clear visual focus rings for keyboard users.

## Content and copy standards

- Hero headline must communicate what SR Enterprises manufactures in plain language.
- Each product card must answer: what it is, who it is for, why buy it.
- Contact section must prioritize action buttons above all other details.
- All locale files must be native-reviewed (not machine-only) before launch.

## Technical guardrails (Next.js + maintainability)

- Use current Next.js conventions for v16+.
- Replace deprecated `middleware.ts` approach with `proxy.ts` convention.
- Keep section components modular and mostly server components.
- Use client components only for interactive units (menu, language toggle, lightbox).
- Keep one source of truth for translation keys and route locales.

## Revised execution plan

### Phase 0: Baseline cleanup and alignment

- [ ] Confirm runtime baseline: Next.js, React, next-intl versions and any deprecations.
- [ ] Replace deprecated request interception pattern with Next.js 16 `proxy.ts` pattern.
- [ ] Remove leftover starter artifacts (`src/app/page.tsx` demo content, default metadata, default favicon if unused).
- [ ] Set metadata and title templates for SEO and trust.
- [ ] Define workspace root explicitly in `next.config.ts` if Turbopack root warning persists.

Definition of done:
- Build/dev runs without deprecation warnings from known outdated conventions.

### Phase 1: Information architecture and conversion skeleton

- [ ] Implement locale route structure (`/en`, `/hi`, `/te`) with stable fallback behavior.
- [ ] Build sticky navbar with section anchors and clear active state.
- [ ] Add persistent conversion actions: hero CTA and floating WhatsApp CTA.
- [ ] Ensure every major section includes at least one route to contact action.

Definition of done:
- A user can reach WhatsApp or phone contact from any major section in <= 2 taps.

### Phase 2: Style system and UI consistency

- [ ] Create CSS variables for palette, spacing, radius, and shadows.
- [ ] Add typography scale and consistent heading hierarchy.
- [ ] Standardize card, button, chip, and section spacing components/patterns.
- [ ] Add a subtle textured/gradient background strategy (not flat single-color pages).

Definition of done:
- UI appears consistent across all sections with shared tokens and components.

### Phase 3: Section implementation (content + usability)

- [ ] Hero: clear value proposition, immediate dual CTA, product category cues.
- [ ] Why section: benefit cards plus before/after proof image.
- [ ] Products section: strong card layout, feature tags, contextual WhatsApp message per product.
- [ ] About section: trust signals (machinery, location, delivery, quality).
- [ ] Gallery: fast grid + accessible lightbox.
- [ ] Contact/footer: action-first layout with map/email/support details.

Definition of done:
- All key business sections are present and readable on mobile and desktop.

### Phase 4: Localization quality pass

- [ ] Validate all EN/HI/TE keys are complete and consistent.
- [ ] Fix encoding issues and ensure proper Unicode rendering.
- [ ] Add locale-specific microcopy where cultural context improves clarity.
- [ ] Verify language switch preserves current route/section context.

Definition of done:
- No missing keys, no mojibake, no broken language switch flows.

### Phase 5: Accessibility, performance, and trust

- [ ] Run accessibility checks (keyboard navigation, focus order, contrast, alt text).
- [ ] Optimize images (dimensions, compression, lazy loading, priority for above-the-fold).
- [ ] Verify Core Web Vitals targets on mobile-grade network.
- [ ] Add structured data (`Organization`, `LocalBusiness`) and social metadata.

Definition of done:
- Lighthouse mobile targets: Performance >= 80, Accessibility >= 90, Best Practices >= 90, SEO >= 90.

### Phase 6: QA, launch, and measurement

- [ ] Test matrix: devices (small Android, iPhone, desktop), browsers (Chrome, Safari, Edge), locales.
- [ ] Verify all external actions (WhatsApp, tel, maps, email) work in each locale.
- [ ] Deploy to Vercel and complete smoke test on production URL.
- [ ] Add lightweight analytics events for conversion tracking.

Definition of done:
- Production launch complete with verified lead-capture paths.

## Measurement plan (post-launch)

Track weekly:

- CTA click-through rate (WhatsApp, Call, Maps)
- Locale split by sessions
- Product section to contact conversion rate
- Mobile bounce rate
- Time to first interaction (TTFI)

## Prioritized backlog after launch

- [ ] Add FAQ section from real customer objections.
- [ ] Add product inquiry form with prefilled product context.
- [ ] Add downloadable product sheet (PDF) in EN/HI/TE.
- [ ] Add social proof (testimonials, buyer logos) when available.
- [ ] Add campaign-specific landing pages for seasonal demand.

## Current baseline snapshot (as of 2026-04-01)

Already in place:

- Next.js scaffold and project dependencies
- Renamed image assets in `public/images`
- `next-intl` base setup (`messages`, `routing`, `request`)
- Smooth-scroll CSS

Not yet in place:

- Locale route layout and section components
- End-to-end UX flow and styling system
- Accessibility/performance/launch verification

---

## Legacy Detailed Plan (Reference)

The original detailed checklist is preserved below for historical tracking.
# SR Enterprises Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a trilingual (EN/HI/TE) product showcase and lead generation website for SR Enterprises — a fruit protection cover and packaging bag manufacturer.

**Architecture:** Next.js 15 App Router with next-intl for internationalization. Single-page layout with smooth scroll sections. Each section is an isolated component. Static export initially, scalable to full-stack.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS v4, next-intl, Vercel

---

## File Structure

```
sr-enterprises/
├── public/images/          # Product/factory images
├── messages/               # Translation JSON files (en, hi, te)
├── src/
│   ├── i18n/               # next-intl config
│   ├── app/
│   │   ├── [locale]/       # Locale-aware pages
│   │   └── layout.tsx      # Base HTML layout
│   ├── components/         # Section components
│   └── middleware.ts       # Locale detection
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

### Task 1: Project Scaffolding & Image Setup

**Files:**
- Create: `package.json`, `next.config.ts`, `tailwind.config.ts`, `tsconfig.json`, `.gitignore`
- Create: `public/images/` (renamed images)

- [ ] **Step 1: Initialize Next.js project**

```bash
cd /c/Users/User/sr-enterprises
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --no-import-alias --turbopack
```

When prompted: accept defaults. This creates the full Next.js scaffold.

- [ ] **Step 2: Rename and move images**

```bash
mkdir -p public/images
cp "WhatsApp Image 2026-04-01 at 20.05.27.jpeg" public/images/logo.jpeg
cp "WhatsApp Image 2026-04-01 at 20.05.27 (1).jpeg" public/images/fruit-covers-product.jpeg
cp "WhatsApp Image 2026-04-01 at 20.05.27 (2).jpeg" public/images/mango-result.jpeg
cp "WhatsApp Image 2026-04-01 at 20.05.28.jpeg" public/images/pp-woven-bags-rice.jpeg
cp "WhatsApp Image 2026-04-01 at 20.05.28 (1).jpeg" public/images/pp-woven-bags-fertilizer.jpeg
cp "WhatsApp Image 2026-04-01 at 20.05.28 (2).jpeg" public/images/leno-mesh-rolls.jpeg
cp "WhatsApp Image 2026-04-01 at 20.05.28 (3).jpeg" public/images/leno-mesh-bags-vegetables.jpeg
cp "WhatsApp Image 2026-04-01 at 20.05.29.jpeg" public/images/machine-leno.jpeg
cp "WhatsApp Image 2026-04-01 at 20.05.29 (1).jpeg" public/images/machine-paper-bag.jpeg
```

- [ ] **Step 3: Install next-intl**

```bash
npm install next-intl
```

- [ ] **Step 4: Clean up default Next.js files**

Remove default content from `src/app/page.tsx`, `src/app/globals.css` (keep Tailwind directives only), and delete `src/app/favicon.ico` (we'll use our logo).

`src/app/globals.css` should contain only:

```css
@import "tailwindcss";
```

- [ ] **Step 5: Update .gitignore**

Add to `.gitignore`:

```
.superpowers/
```

- [ ] **Step 6: Commit**

```bash
git init
git add .
git commit -m "chore: scaffold Next.js project with images and dependencies"
```

---

### Task 2: Internationalization (i18n) Setup

**Files:**
- Create: `messages/en.json`, `messages/hi.json`, `messages/te.json`
- Create: `src/i18n/request.ts`, `src/i18n/routing.ts`
- Create: `src/middleware.ts`
- Modify: `next.config.ts`

- [ ] **Step 1: Create routing config**

Create `src/i18n/routing.ts`:

```typescript
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "hi", "te"],
  defaultLocale: "en",
});
```

- [ ] **Step 2: Create request config**

Create `src/i18n/request.ts`:

```typescript
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
```

- [ ] **Step 3: Create middleware**

Create `src/middleware.ts`:

```typescript
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  matcher: ["/((?!api|_next|_vercel|images|.*\\..*).*)"],
};
```

- [ ] **Step 4: Update next.config.ts**

Replace `next.config.ts` with:

```typescript
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {};

export default withNextIntl(nextConfig);
```

- [ ] **Step 5: Create English translations**

Create `messages/en.json`:

```json
{
  "nav": {
    "home": "Home",
    "products": "Products",
    "about": "About",
    "gallery": "Gallery",
    "contact": "Contact"
  },
  "hero": {
    "subtitle": "MANUFACTURER & SUPPLIER",
    "title": "Fruit Covers & Packaging Bags",
    "description": "Quality products for farmers & businesses since 2025",
    "whatsapp": "WhatsApp Us",
    "call": "Call Now",
    "fruitCovers": "Fruit Covers",
    "lenoBags": "Leno Bags",
    "ppBags": "PP Woven Bags"
  },
  "why": {
    "title": "Why Use Fruit Protection Covers?",
    "subtitle": "See the difference they make",
    "noInsects": "No Insects",
    "noInsectsDesc": "Protects fruit from pests without chemicals",
    "sunShield": "Sun & Rain Shield",
    "sunShieldDesc": "Guards against sunburn and rain damage",
    "betterPrice": "Better Price",
    "betterPriceDesc": "Unblemished fruit sells at premium rates",
    "without": "WITHOUT COVER",
    "withoutDesc": "Spots, insect marks, lower price",
    "with": "WITH COVER",
    "withDesc": "Clean, premium quality, top price"
  },
  "products": {
    "title": "Our Products",
    "enquire": "Enquire Now",
    "fruitCovers": {
      "name": "Fruit Protection Covers",
      "description": "Non-woven covers for mango, grapes, pomegranate, dragon fruit, orange & more",
      "tag1": "Pest Free",
      "tag2": "Reusable",
      "tag3": "Breathable"
    },
    "lenoBags": {
      "name": "Leno Mesh Bags",
      "description": "Breathable mesh bags for onions, potatoes, vegetables — available in all colors & sizes",
      "tag1": "Ventilated",
      "tag2": "Strong",
      "tag3": "Custom Sizes"
    },
    "ppBags": {
      "name": "PP Woven Bags",
      "description": "Heavy-duty woven bags for rice, fertilizer, grains, cement — with custom printing",
      "tag1": "Heavy Duty",
      "tag2": "Custom Print",
      "tag3": "Bulk Orders"
    }
  },
  "about": {
    "title": "About Our Factory",
    "machinery": "Modern Machinery",
    "machineryDesc": "Advanced manufacturing equipment",
    "location": "Andhra Pradesh",
    "locationDesc": "Vijayawada - Nuzvid Road",
    "delivery": "All India Delivery",
    "deliveryDesc": "We ship across the country",
    "quality": "Quality Assured",
    "qualityDesc": "Tested & trusted products"
  },
  "gallery": {
    "title": "Gallery",
    "subtitle": "Products • Machines • Results"
  },
  "contact": {
    "title": "Contact Us",
    "subtitle": "Tap to call or message",
    "whatsapp": "Chat on WhatsApp",
    "call": "Call",
    "address": "Factory Address",
    "addressText": "Burri Venkateswara Gardens, Pothavarappadu, Agiripalli Mandal, 521212, Eluru District, Andhra Pradesh, Vijayawada - Nuzvid Road",
    "openMaps": "Open in Google Maps",
    "email": "Email",
    "copyright": "© 2025 SR Enterprises. All rights reserved."
  }
}
```

- [ ] **Step 6: Create Hindi translations**

Create `messages/hi.json`:

```json
{
  "nav": {
    "home": "होम",
    "products": "उत्पाद",
    "about": "हमारे बारे में",
    "gallery": "गैलरी",
    "contact": "संपर्क"
  },
  "hero": {
    "subtitle": "निर्माता और आपूर्तिकर्ता",
    "title": "फल कवर और पैकेजिंग बैग",
    "description": "2025 से किसानों और व्यवसायों के लिए गुणवत्तापूर्ण उत्पाद",
    "whatsapp": "व्हाट्सएप करें",
    "call": "कॉल करें",
    "fruitCovers": "फल कवर",
    "lenoBags": "लेनो बैग",
    "ppBags": "पीपी बैग"
  },
  "why": {
    "title": "फल सुरक्षा कवर क्यों उपयोग करें?",
    "subtitle": "देखें ये कैसे फर्क लाते हैं",
    "noInsects": "कीट मुक्त",
    "noInsectsDesc": "बिना रसायन के फलों को कीटों से बचाता है",
    "sunShield": "धूप और बारिश से सुरक्षा",
    "sunShieldDesc": "धूप की जलन और बारिश के नुकसान से बचाता है",
    "betterPrice": "बेहतर कीमत",
    "betterPriceDesc": "बेदाग फल प्रीमियम दरों पर बिकते हैं",
    "without": "कवर के बिना",
    "withoutDesc": "धब्बे, कीट के निशान, कम कीमत",
    "with": "कवर के साथ",
    "withDesc": "साफ, प्रीमियम गुणवत्ता, अच्छी कीमत"
  },
  "products": {
    "title": "हमारे उत्पाद",
    "enquire": "पूछताछ करें",
    "fruitCovers": {
      "name": "फल सुरक्षा कवर",
      "description": "आम, अंगूर, अनार, ड्रैगन फ्रूट, संतरा और अन्य के लिए नॉन-वोवन कवर",
      "tag1": "कीट मुक्त",
      "tag2": "पुन: प्रयोज्य",
      "tag3": "सांस लेने योग्य"
    },
    "lenoBags": {
      "name": "लेनो मेश बैग",
      "description": "प्याज, आलू, सब्जियों के लिए सांस लेने योग्य मेश बैग — सभी रंगों और आकारों में उपलब्ध",
      "tag1": "हवादार",
      "tag2": "मजबूत",
      "tag3": "कस्टम आकार"
    },
    "ppBags": {
      "name": "पीपी वोवन बैग",
      "description": "चावल, उर्वरक, अनाज, सीमेंट के लिए भारी शुल्क वोवन बैग — कस्टम प्रिंटिंग के साथ",
      "tag1": "भारी शुल्क",
      "tag2": "कस्टम प्रिंट",
      "tag3": "थोक ऑर्डर"
    }
  },
  "about": {
    "title": "हमारी फैक्ट्री के बारे में",
    "machinery": "आधुनिक मशीनरी",
    "machineryDesc": "उन्नत विनिर्माण उपकरण",
    "location": "आंध्र प्रदेश",
    "locationDesc": "विजयवाड़ा - नूजविड रोड",
    "delivery": "पूरे भारत में डिलीवरी",
    "deliveryDesc": "हम पूरे देश में शिप करते हैं",
    "quality": "गुणवत्ता सुनिश्चित",
    "qualityDesc": "परीक्षित और विश्वसनीय उत्पाद"
  },
  "gallery": {
    "title": "गैलरी",
    "subtitle": "उत्पाद • मशीनें • परिणाम"
  },
  "contact": {
    "title": "संपर्क करें",
    "subtitle": "कॉल या मैसेज करने के लिए टैप करें",
    "whatsapp": "व्हाट्सएप पर चैट करें",
    "call": "कॉल",
    "address": "फैक्ट्री का पता",
    "addressText": "बुर्री वेंकटेश्वरा गार्डन्स, पोथावरप्पाडु, अगिरिपल्ली मंडल, 521212, एलुरु जिला, आंध्र प्रदेश, विजयवाड़ा - नूजविड रोड",
    "openMaps": "गूगल मैप्स में खोलें",
    "email": "ईमेल",
    "copyright": "© 2025 SR एंटरप्राइजेज। सर्वाधिकार सुरक्षित।"
  }
}
```

- [ ] **Step 7: Create Telugu translations**

Create `messages/te.json`:

```json
{
  "nav": {
    "home": "హోమ్",
    "products": "ఉత్పత్తులు",
    "about": "మా గురించి",
    "gallery": "గ్యాలరీ",
    "contact": "సంప్రదించండి"
  },
  "hero": {
    "subtitle": "తయారీదారు & సరఫరాదారు",
    "title": "ఫ్రూట్ కవర్లు & ప్యాకేజింగ్ బ్యాగ్‌లు",
    "description": "2025 నుండి రైతులు & వ్యాపారుల కోసం నాణ్యమైన ఉత్పత్తులు",
    "whatsapp": "వాట్సాప్ చేయండి",
    "call": "కాల్ చేయండి",
    "fruitCovers": "ఫ్రూట్ కవర్లు",
    "lenoBags": "లెనో బ్యాగ్‌లు",
    "ppBags": "PP బ్యాగ్‌లు"
  },
  "why": {
    "title": "ఫ్రూట్ ప్రొటెక్షన్ కవర్లు ఎందుకు వాడాలి?",
    "subtitle": "అవి చేసే తేడా చూడండి",
    "noInsects": "పురుగులు రావు",
    "noInsectsDesc": "రసాయనాలు లేకుండా పండ్లను పురుగుల నుండి కాపాడుతుంది",
    "sunShield": "ఎండ & వర్షం నుండి రక్షణ",
    "sunShieldDesc": "ఎండ కాలడం మరియు వర్షం నష్టం నుండి కాపాడుతుంది",
    "betterPrice": "మంచి ధర",
    "betterPriceDesc": "మచ్చలు లేని పండ్లు ప్రీమియం ధరలకు అమ్ముడవుతాయి",
    "without": "కవర్ లేకుండా",
    "withoutDesc": "మచ్చలు, పురుగు గుర్తులు, తక్కువ ధర",
    "with": "కవర్‌తో",
    "withDesc": "శుభ్రంగా, ప్రీమియం నాణ్యత, అధిక ధర"
  },
  "products": {
    "title": "మా ఉత్పత్తులు",
    "enquire": "ఇప్పుడు అడగండి",
    "fruitCovers": {
      "name": "ఫ్రూట్ ప్రొటెక్షన్ కవర్లు",
      "description": "మామిడి, ద్రాక్ష, దానిమ్మ, డ్రాగన్ ఫ్రూట్, నారింజ & మరిన్నింటి కోసం నాన్-వోవెన్ కవర్లు",
      "tag1": "పురుగు రహితం",
      "tag2": "మళ్ళీ వాడవచ్చు",
      "tag3": "గాలి ఆడుతుంది"
    },
    "lenoBags": {
      "name": "లెనో మెష్ బ్యాగ్‌లు",
      "description": "ఉల్లిపాయలు, బంగాళాదుంపలు, కూరగాయల కోసం గాలి ఆడే మెష్ బ్యాగ్‌లు — అన్ని రంగులు & సైజుల్లో",
      "tag1": "గాలి ఆడుతుంది",
      "tag2": "బలమైన",
      "tag3": "కస్టమ్ సైజులు"
    },
    "ppBags": {
      "name": "PP వోవెన్ బ్యాగ్‌లు",
      "description": "బియ్యం, ఎరువులు, ధాన్యాలు, సిమెంట్ కోసం హెవీ డ్యూటీ వోవెన్ బ్యాగ్‌లు — కస్టమ్ ప్రింటింగ్‌తో",
      "tag1": "హెవీ డ్యూటీ",
      "tag2": "కస్టమ్ ప్రింట్",
      "tag3": "బల్క్ ఆర్డర్లు"
    }
  },
  "about": {
    "title": "మా ఫ్యాక్టరీ గురించి",
    "machinery": "ఆధునిక యంత్రాలు",
    "machineryDesc": "అధునాతన తయారీ పరికరాలు",
    "location": "ఆంధ్ర ప్రదేశ్",
    "locationDesc": "విజయవాడ - నూజివీడు రోడ్",
    "delivery": "భారతదేశం అంతటా డెలివరీ",
    "deliveryDesc": "మేము దేశవ్యాప్తంగా షిప్ చేస్తాము",
    "quality": "నాణ్యత హామీ",
    "qualityDesc": "పరీక్షించి నమ్మదగిన ఉత్పత్తులు"
  },
  "gallery": {
    "title": "గ్యాలరీ",
    "subtitle": "ఉత్పత్తులు • యంత్రాలు • ఫలితాలు"
  },
  "contact": {
    "title": "సంప్రదించండి",
    "subtitle": "కాల్ లేదా మెసేజ్ చేయడానికి నొక్కండి",
    "whatsapp": "వాట్సాప్‌లో చాట్ చేయండి",
    "call": "కాల్",
    "address": "ఫ్యాక్టరీ చిరునామా",
    "addressText": "బుర్రి వెంకటేశ్వర గార్డెన్స్, పొతవరప్పాడు, అగిరిపల్లి మండలం, 521212, ఏలూరు జిల్లా, ఆంధ్ర ప్రదేశ్, విజయవాడ - నూజివీడు రోడ్",
    "openMaps": "Google Maps లో తెరవండి",
    "email": "ఇమెయిల్",
    "copyright": "© 2025 SR ఎంటర్‌ప్రైజెస్. అన్ని హక్కులు రిజర్వ్ చేయబడ్డాయి."
  }
}
```

- [ ] **Step 8: Commit**

```bash
git add messages/ src/i18n/ src/middleware.ts next.config.ts
git commit -m "feat: set up next-intl with EN/HI/TE translations"
```

---

### Task 3: Base Layout & Locale Provider

**Files:**
- Create: `src/app/[locale]/layout.tsx`
- Modify: `src/app/layout.tsx`
- Create: `src/app/[locale]/page.tsx` (placeholder)

- [ ] **Step 1: Create base layout**

Replace `src/app/layout.tsx`:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SR Enterprises — Fruit Covers & Packaging Bags",
  description:
    "Manufacturer of fruit protection covers, leno mesh bags, and PP woven bags. Quality packaging solutions for farmers and businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
```

- [ ] **Step 2: Create locale layout**

Create `src/app/[locale]/layout.tsx`:

```tsx
import { NextIntlClientProvider, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Create placeholder page**

Create `src/app/[locale]/page.tsx`:

```tsx
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("hero");
  return (
    <main>
      <h1>{t("title")}</h1>
    </main>
  );
}
```

- [ ] **Step 4: Verify dev server starts**

```bash
npm run dev
```

Open `http://localhost:3000` — should redirect to `/en` and show "Fruit Covers & Packaging Bags". Test `/hi` and `/te` for Hindi and Telugu.

- [ ] **Step 5: Commit**

```bash
git add src/app/
git commit -m "feat: add locale-aware layout with next-intl provider"
```

---

### Task 4: Navbar Component

**Files:**
- Create: `src/components/Navbar.tsx`
- Create: `src/components/LanguageToggle.tsx`
- Modify: `src/app/[locale]/layout.tsx` (add Navbar)

- [ ] **Step 1: Create LanguageToggle component**

Create `src/components/LanguageToggle.tsx`:

```tsx
"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const locales = [
  { code: "en", label: "EN" },
  { code: "hi", label: "हि" },
  { code: "te", label: "తె" },
];

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  function switchLocale(newLocale: string) {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  }

  return (
    <div className="flex gap-1 bg-white/10 rounded-md p-1">
      {locales.map((loc) => (
        <button
          key={loc.code}
          onClick={() => switchLocale(loc.code)}
          className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
            currentLocale === loc.code
              ? "bg-[#c8a84e] text-[#1a1f36]"
              : "text-white hover:bg-white/10"
          }`}
        >
          {loc.label}
        </button>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Create Navbar component**

Create `src/components/Navbar.tsx`:

```tsx
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import LanguageToggle from "./LanguageToggle";

const navLinks = ["home", "products", "about", "gallery", "contact"] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const [menuOpen, setMenuOpen] = useState(false);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1f36] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollTo("home")}
        >
          <Image
            src="/images/logo.jpeg"
            alt="SR Enterprises"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-white font-bold text-lg hidden sm:block">
            SR Enterprises
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-white/80 hover:text-[#c8a84e] transition-colors text-sm font-medium capitalize"
            >
              {t(link)}
            </button>
          ))}
          <LanguageToggle />
        </div>

        {/* Mobile: Language + Hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a1f36] border-t border-white/10 px-4 pb-4">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="block w-full text-left text-white/80 hover:text-[#c8a84e] py-3 text-base capitalize border-b border-white/5"
            >
              {t(link)}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
```

- [ ] **Step 3: Add Navbar to locale layout**

In `src/app/[locale]/layout.tsx`, import and add `<Navbar />` inside `<body>` before `{children}`.

- [ ] **Step 4: Verify navbar renders**

```bash
npm run dev
```

Check desktop nav links, mobile hamburger menu, and language toggle switching between `/en`, `/hi`, `/te`.

- [ ] **Step 5: Commit**

```bash
git add src/components/Navbar.tsx src/components/LanguageToggle.tsx src/app/
git commit -m "feat: add sticky navbar with language toggle and mobile menu"
```

---

### Task 5: Hero Section

**Files:**
- Create: `src/components/Hero.tsx`
- Modify: `src/app/[locale]/page.tsx`

- [ ] **Step 1: Create Hero component**

Create `src/components/Hero.tsx`:

```tsx
import { useTranslations } from "next-intl";

const WHATSAPP_URL =
  "https://wa.me/919985636699?text=Hi%2C%20I'm%20interested%20in%20your%20products";

const categories = [
  { key: "fruitCovers", icon: "🍇" },
  { key: "lenoBags", icon: "🥔" },
  { key: "ppBags", icon: "🌾" },
] as const;

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#1a1f36] to-[#2d3561] text-white pt-24 pb-16 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#c8a84e] text-sm tracking-[3px] mb-4 font-medium">
          {t("subtitle")}
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {t("title")}
        </h1>
        <p className="text-gray-300 text-lg mb-8">{t("description")}</p>

        {/* Category Icons */}
        <div className="flex justify-center gap-8 mb-10">
          {categories.map((cat) => (
            <div key={cat.key} className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-3xl mx-auto mb-2">
                {cat.icon}
              </div>
              <span className="text-[#c8a84e] text-sm">{t(cat.key)}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
          >
            💬 {t("whatsapp")}
          </a>
          <a
            href="tel:+919985636699"
            className="border-2 border-white hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors"
          >
            📞 {t("call")}
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Update page to use Hero**

Replace `src/app/[locale]/page.tsx`:

```tsx
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <main>
      <Hero />
    </main>
  );
}
```

- [ ] **Step 3: Verify hero renders**

```bash
npm run dev
```

Check hero section with tagline, icons, WhatsApp and Call buttons. Test all 3 languages.

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.tsx src/app/
git commit -m "feat: add hero section with CTAs and product category icons"
```

---

### Task 6: Why Section (Education)

**Files:**
- Create: `src/components/WhySection.tsx`
- Modify: `src/app/[locale]/page.tsx`

- [ ] **Step 1: Create WhySection component**

Create `src/components/WhySection.tsx`:

```tsx
import { useTranslations } from "next-intl";
import Image from "next/image";

const benefits = [
  { key: "noInsects", descKey: "noInsectsDesc", icon: "🐛" },
  { key: "sunShield", descKey: "sunShieldDesc", icon: "☀️" },
  { key: "betterPrice", descKey: "betterPriceDesc", icon: "💰" },
] as const;

export default function WhySection() {
  const t = useTranslations("why");

  return (
    <section className="py-16 px-4 bg-amber-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1f36]">
            {t("title")}
          </h2>
          <p className="text-gray-500 mt-2">{t("subtitle")}</p>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {benefits.map((b) => (
            <div
              key={b.key}
              className="bg-white p-6 rounded-xl text-center shadow-sm"
            >
              <div className="text-4xl mb-3">{b.icon}</div>
              <h3 className="font-bold text-[#1a1f36] text-lg">{t(b.key)}</h3>
              <p className="text-gray-500 text-sm mt-2">{t(b.descKey)}</p>
            </div>
          ))}
        </div>

        {/* Before/After */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center">
          <div className="bg-red-50 border border-red-200 p-4 rounded-xl text-center flex-1 max-w-xs">
            <p className="text-red-600 font-bold text-sm">❌ {t("without")}</p>
            <p className="text-gray-500 text-sm mt-1">{t("withoutDesc")}</p>
          </div>
          <div className="text-3xl">→</div>
          <div className="bg-green-50 border border-green-200 p-4 rounded-xl text-center flex-1 max-w-xs">
            <p className="text-green-600 font-bold text-sm">✅ {t("with")}</p>
            <p className="text-gray-500 text-sm mt-1">{t("withDesc")}</p>
          </div>
        </div>

        {/* Result Photo */}
        <div className="mt-8 flex justify-center">
          <Image
            src="/images/mango-result.jpeg"
            alt="Premium mangoes grown with fruit protection covers"
            width={400}
            height={300}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add WhySection to page**

In `src/app/[locale]/page.tsx`, import `WhySection` and add `<WhySection />` after `<Hero />`.

- [ ] **Step 3: Verify and commit**

```bash
npm run dev
git add src/components/WhySection.tsx src/app/
git commit -m "feat: add why section with benefits and before/after comparison"
```

---

### Task 7: Products Section

**Files:**
- Create: `src/components/Products.tsx`
- Modify: `src/app/[locale]/page.tsx`

- [ ] **Step 1: Create Products component**

Create `src/components/Products.tsx`:

```tsx
import { useTranslations } from "next-intl";
import Image from "next/image";

const WHATSAPP_URL =
  "https://wa.me/919985636699?text=Hi%2C%20I'm%20interested%20in%20your%20products";

const products = [
  {
    key: "fruitCovers",
    image: "/images/fruit-covers-product.jpeg",
    tagColors: "bg-green-50 text-green-700",
  },
  {
    key: "lenoBags",
    image: "/images/leno-mesh-bags-vegetables.jpeg",
    tagColors: "bg-amber-50 text-amber-700",
  },
  {
    key: "ppBags",
    image: "/images/pp-woven-bags-rice.jpeg",
    tagColors: "bg-purple-50 text-purple-700",
  },
] as const;

export default function Products() {
  const t = useTranslations("products");

  return (
    <section id="products" className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1f36] text-center mb-10">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.key}
              className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-52">
                <Image
                  src={product.image}
                  alt={t(`${product.key}.name`)}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-[#1a1f36] mb-2">
                  {t(`${product.key}.name`)}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {t(`${product.key}.description`)}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span
                    className={`${product.tagColors} px-3 py-1 rounded-full text-xs font-medium`}
                  >
                    {t(`${product.key}.tag1`)}
                  </span>
                  <span
                    className={`${product.tagColors} px-3 py-1 rounded-full text-xs font-medium`}
                  >
                    {t(`${product.key}.tag2`)}
                  </span>
                  <span
                    className={`${product.tagColors} px-3 py-1 rounded-full text-xs font-medium`}
                  >
                    {t(`${product.key}.tag3`)}
                  </span>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-[#25D366] hover:bg-[#20bd5a] text-white text-center py-3 rounded-lg font-bold transition-colors"
                >
                  💬 {t("enquire")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Products to page**

In `src/app/[locale]/page.tsx`, import `Products` and add `<Products />` after `<WhySection />`.

- [ ] **Step 3: Verify and commit**

```bash
npm run dev
git add src/components/Products.tsx src/app/
git commit -m "feat: add products section with image cards and enquire buttons"
```

---

### Task 8: About Section

**Files:**
- Create: `src/components/About.tsx`
- Modify: `src/app/[locale]/page.tsx`

- [ ] **Step 1: Create About component**

Create `src/components/About.tsx`:

```tsx
import { useTranslations } from "next-intl";

const items = [
  { key: "machinery", descKey: "machineryDesc", icon: "🏭" },
  { key: "location", descKey: "locationDesc", icon: "📍" },
  { key: "delivery", descKey: "deliveryDesc", icon: "🚚" },
  { key: "quality", descKey: "qualityDesc", icon: "✅" },
] as const;

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1f36] text-center mb-10">
          {t("title")}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.key}
              className="bg-white p-6 rounded-xl text-center shadow-sm"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="font-bold text-[#1a1f36]">{t(item.key)}</h3>
              <p className="text-gray-500 text-sm mt-1">{t(item.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add About to page and commit**

In `src/app/[locale]/page.tsx`, import `About` and add `<About />` after `<Products />`.

```bash
npm run dev
git add src/components/About.tsx src/app/
git commit -m "feat: add about section with factory highlights"
```

---

### Task 9: Gallery Section

**Files:**
- Create: `src/components/Gallery.tsx`
- Modify: `src/app/[locale]/page.tsx`

- [ ] **Step 1: Create Gallery component**

Create `src/components/Gallery.tsx`:

```tsx
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";

const images = [
  { src: "/images/fruit-covers-product.jpeg", alt: "Fruit protection covers" },
  { src: "/images/leno-mesh-bags-vegetables.jpeg", alt: "Leno mesh bags with vegetables" },
  { src: "/images/leno-mesh-rolls.jpeg", alt: "Leno mesh rolls" },
  { src: "/images/pp-woven-bags-rice.jpeg", alt: "PP woven bags for rice" },
  { src: "/images/pp-woven-bags-fertilizer.jpeg", alt: "PP woven bags for fertilizer" },
  { src: "/images/mango-result.jpeg", alt: "Premium mangoes" },
  { src: "/images/machine-leno.jpeg", alt: "Leno mesh manufacturing machine" },
  { src: "/images/machine-paper-bag.jpeg", alt: "Bag making machine" },
];

export default function Gallery() {
  const t = useTranslations("gallery");
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a1f36]">
            {t("title")}
          </h2>
          <p className="text-gray-500 mt-2">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => setLightbox(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-3xl max-h-[80vh] w-full">
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              width={800}
              height={600}
              className="rounded-lg object-contain w-full h-auto max-h-[80vh]"
            />
            <button
              className="absolute top-2 right-2 bg-white/20 hover:bg-white/40 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl"
              onClick={() => setLightbox(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
```

- [ ] **Step 2: Add Gallery to page and commit**

In `src/app/[locale]/page.tsx`, import `Gallery` and add `<Gallery />` after `<About />`.

```bash
npm run dev
git add src/components/Gallery.tsx src/app/
git commit -m "feat: add gallery section with lightbox viewer"
```

---

### Task 10: Contact Section & Footer

**Files:**
- Create: `src/components/Contact.tsx`
- Modify: `src/app/[locale]/page.tsx`

- [ ] **Step 1: Create Contact component**

Create `src/components/Contact.tsx`:

```tsx
import { useTranslations } from "next-intl";

const WHATSAPP_URL =
  "https://wa.me/919985636699?text=Hi%2C%20I'm%20interested%20in%20your%20products";
const MAPS_URL =
  "https://www.google.com/maps/search/Burri+Venkateswara+Gardens+Pothavarappadu+Agiripalli+521212";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-16 px-4 bg-[#1a1f36] text-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">{t("title")}</h2>
          <p className="text-gray-400 mt-2">{t("subtitle")}</p>
        </div>

        {/* Big Tap-Friendly Buttons */}
        <div className="flex flex-col gap-3 mb-8">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 rounded-xl text-center text-lg font-bold transition-colors"
          >
            💬 {t("whatsapp")}
          </a>
          <a
            href="tel:+919985636699"
            className="bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl text-center text-lg font-bold transition-colors"
          >
            📞 {t("call")}: 9985636699
          </a>
          <a
            href="tel:+919505636699"
            className="bg-gray-600 hover:bg-gray-700 text-white py-4 rounded-xl text-center text-lg font-bold transition-colors"
          >
            📞 {t("call")}: 9505636699
          </a>
        </div>

        {/* Address */}
        <div className="bg-white/5 p-6 rounded-xl mb-6">
          <h3 className="text-[#c8a84e] font-bold mb-2">
            📍 {t("address")}
          </h3>
          <p className="text-gray-300 leading-relaxed">{t("addressText")}</p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-[#c8a84e] text-[#1a1f36] px-5 py-2 rounded-lg font-bold text-sm hover:bg-[#b8983e] transition-colors"
          >
            📍 {t("openMaps")}
          </a>
        </div>

        {/* Email */}
        <div className="bg-white/5 p-6 rounded-xl mb-6">
          <h3 className="text-[#c8a84e] font-bold mb-2">
            📧 {t("email")}
          </h3>
          <a
            href="mailto:srenterprises.mfg24@gmail.com"
            className="text-gray-300 hover:text-white transition-colors"
          >
            srenterprises.mfg24@gmail.com
          </a>
        </div>

        {/* Social Media Placeholders */}
        <div className="text-center text-gray-500 text-sm mb-4">
          [Facebook] [Instagram] [YouTube]
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm">
          {t("copyright")}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Contact to page and commit**

In `src/app/[locale]/page.tsx`, import `Contact` and add `<Contact />` after `<Gallery />`.

```bash
npm run dev
git add src/components/Contact.tsx src/app/
git commit -m "feat: add contact section with click-to-call and maps link"
```

---

### Task 11: Floating WhatsApp Button

**Files:**
- Create: `src/components/FloatingWhatsApp.tsx`
- Modify: `src/app/[locale]/layout.tsx`

- [ ] **Step 1: Create FloatingWhatsApp component**

Create `src/components/FloatingWhatsApp.tsx`:

```tsx
const WHATSAPP_URL =
  "https://wa.me/919985636699?text=Hi%2C%20I'm%20interested%20in%20your%20products";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}
```

- [ ] **Step 2: Add FloatingWhatsApp to locale layout**

In `src/app/[locale]/layout.tsx`, import `FloatingWhatsApp` and add `<FloatingWhatsApp />` after `{children}`.

- [ ] **Step 3: Verify and commit**

```bash
npm run dev
git add src/components/FloatingWhatsApp.tsx src/app/
git commit -m "feat: add floating WhatsApp button"
```

---

### Task 12: Final Polish & Build Verification

**Files:**
- Modify: `src/app/[locale]/page.tsx` (verify all sections assembled)
- Modify: `src/app/globals.css` (smooth scroll)

- [ ] **Step 1: Add smooth scroll CSS**

In `src/app/globals.css`, add:

```css
@import "tailwindcss";

html {
  scroll-behavior: smooth;
  scroll-padding-top: 4rem;
}
```

- [ ] **Step 2: Verify final page.tsx has all sections**

`src/app/[locale]/page.tsx` should look like:

```tsx
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import Products from "@/components/Products";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <WhySection />
      <Products />
      <About />
      <Gallery />
      <Contact />
    </main>
  );
}
```

- [ ] **Step 3: Run production build**

```bash
npm run build
```

Expected: Build completes with no errors. Check for any TypeScript or next-intl issues.

- [ ] **Step 4: Test production build locally**

```bash
npm run start
```

Test all 3 locales (`/en`, `/hi`, `/te`), nav scrolling, WhatsApp links, call links, gallery lightbox, language toggle.

- [ ] **Step 5: Commit**

```bash
git add .
git commit -m "feat: complete SR Enterprises website with all sections"
```

---

### Task 13: GitHub Push & Vercel Deploy

**Files:** None (git/deploy operations only)

- [ ] **Step 1: Create GitHub repository**

```bash
gh repo create sr-enterprises --public --source=. --remote=origin
```

- [ ] **Step 2: Push to GitHub**

```bash
git push -u origin main
```

- [ ] **Step 3: Deploy to Vercel**

```bash
npx vercel --yes
```

Follow prompts to link the project. For production deploy:

```bash
npx vercel --prod
```

- [ ] **Step 4: Verify live site**

Open the Vercel URL. Test:
- All sections render
- Language toggle works (EN/HI/TE)
- WhatsApp buttons open correct chat
- Phone numbers are clickable
- Google Maps link works
- Gallery lightbox works
- Mobile responsive layout
- Floating WhatsApp button visible

- [ ] **Step 5: Commit any deploy config**

```bash
git add .
git commit -m "chore: add Vercel deployment config"
git push
```

