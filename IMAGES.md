# Images Registry & Provenance

This document records all generated, optimized, and designed graphical assets used across the **UK Locksmith LTD** website.

In accordance with project guidelines, all photographic assets were generated using the built-in DeepMind Gemini Imagen subagent, inspected for anatomical and architectural fidelity (no human faces, no text, no logos, no distorted hands, muted green and stone tones, overcast daylight), and optimized to WebP with responsive `srcset` variants.

---

## Asset Inventory

| Slot | File / Key | Source Type | Aspect Ratio / Dimensions | File Size (Largest) | Status & Inspection |
|---|---|---|---|---|---|
| **Hero Image** | `src/assets/images/hero.webp` | AI-generated | 16:10 / 1600×1000 | 68.1 KB (Limit: 150 KB) | Verified: realistic hand turning solid brass key in cylinder rim lock, Georgian navy door, London brick, muted green plant, no faces, no text. |
| **About Section** | `src/assets/images/about.webp` | AI-generated | 4:3 / 1200×900 | 58.9 KB (Limit: 100 KB) | Verified: close-up of locksmith fitting brass euro cylinder with precision screwdriver into timber mortice pocket, no faces, no logos. |
| **Service 1: Emergency Lockout** | `src/assets/images/service-emergency-lockout.webp` | AI-generated | 1:1 / 800×800 | 35.4 KB (Limit: 100 KB) | Verified: delicate lock pick tool inserted cleanly into brass cylinder keyway on residential front door, shallow depth of field. |
| **Service 2: Lock Change & Repair** | `src/assets/images/service-lock-change-repair.webp` | AI-generated | 1:1 / 800×800 | 32.8 KB (Limit: 100 KB) | Verified: British Standard 5-lever mortice deadlock faceplate and solid brass deadbolt flush-mounted into oak door edge. |
| **Service 3: Snapped Key Extraction** | `src/assets/images/service-snapped-key-extraction.webp` | AI-generated | 1:1 / 800×800 | 36.0 KB (Limit: 100 KB) | Verified: spiral extraction tool cleanly pulling a snapped brass key blade out of a euro cylinder lock. |
| **Service 4: UPVC Door Locks** | `src/assets/images/service-upvc-door-locks.webp` | AI-generated | 1:1 / 800×800 | 36.2 KB (Limit: 100 KB) | Verified: multi-point locking mechanism strip with hooks, rollers, and gearbox on edge of open composite door. |
| **Service 5: Commercial Locks** | `src/assets/images/service-commercial-locks.webp` | AI-generated | 1:1 / 800×800 | 64.4 KB (Limit: 100 KB) | Verified: heavy-duty commercial shutter padlock and hardened steel security hasp locked on security gate, industrial masonry setting. |
| **Service 6: Burglary Repairs** | `src/assets/images/service-burglary-repairs.webp` | AI-generated | 1:1 / 800×800 | 64.5 KB (Limit: 100 KB) | Verified: reinforced steel strike plate and frame reinforcer securely screwed into timber doorframe, weathered brick background. |
| **Why Us Section** | `src/assets/images/why-us.webp` | AI-generated | 4:3 / 1200×900 | 95.9 KB (Limit: 100 KB) | Verified: overhead knolling arrangement of locksmith picks, calipers, brass keys, disassembled cylinder pins and springs on stone slab. |
| **CTA Background** | `src/assets/images/cta-bg.webp` | AI-generated | 16:9 / 1920×800 | 42.9 KB (Limit: 100 KB) | Verified: heavily out-of-focus bokeh background of London Georgian street with leafy trees, minimal detail, ideal for dark overlay. |
| **Favicon** | `public/favicon.svg` | SVG Design (Not AI) | 1:1 / 32×32 | 0.3 KB | Verified: coral key glyph (`#ff7a59`) centered on dark forest rounded background (`#12261f`). |
| **Open Graph Card** | `public/og-image.jpg` | SVG Graphic (Not AI) | 1.91:1 / 1200×630 | 52.8 KB | Verified: branded preview card with "UK Locksmith LTD", headline, coral call pill "07782 358 889", and 24/7 service highlights. |

---

## Detailed AI Generation Prompts

### 1. Hero (`hero.webp`)
- **Slot**: Home page hero right image column (`src/components/Hero.jsx`).
- **Aspect Ratio**: 16:10 / 16:9 (`1600x1000`).
- **Prompt**:
  > "Photorealistic architectural landscape photograph of a London residential front entrance under soft overcast daylight. A clean British Georgian front door painted deep muted dark green or navy. Prominently featured on the right side at a side-on angle is a polished brass rim cylinder lock with a single realistic adult hand turning a solid brass key inside the lock. Normal anatomically accurate five fingers. Left side of frame is calmer, showing weathered London stock brickwork and a softly blurred stone doorframe with muted green boxwood plant. Shallow depth of field, crisp focus on the brass lock and key. Natural British overcast daylight, muted greens and warm stone tones. Absolutely no human faces, no distorted hands, no text, no numbers, no logos."
- **Raw File**: `src/assets/images-raw/hero-raw.jpg`
- **Optimized Variants**: `hero-1600.webp` (68.1 KB), `hero-1200.webp` (48.4 KB), `hero-800.webp` (28.0 KB), `hero-400.webp` (11.1 KB).

### 2. About (`about.webp`)
- **Slot**: About block image container (`src/components/AboutBlock.jsx`).
- **Aspect Ratio**: 4:3 (`1200x900`).
- **Prompt**:
  > "Close-up macro photograph of a locksmith carefully installing a gleaming satin brass British Standard euro profile cylinder lock into a solid timber door mortice pocket. Precision screwdriver and cylinder mechanism visible. Realistic hands from side angle, absolutely no human faces, normal fingers, no distortion. Soft overcast natural daylight, natural colour grade with muted green and wood tones, shallow depth of field focusing on the lock mechanism and screws. No text, no logos."
- **Raw File**: `src/assets/images-raw/about-raw.jpg`
- **Optimized Variants**: `about-1200.webp` (58.9 KB), `about-800.webp` (34.8 KB), `about-600.webp` (23.8 KB).

### 3. Service: Emergency Lockout (`service-emergency-lockout.webp`)
- **Slot**: Primary service tile 1 (`src/components/ServicesBlock.jsx`).
- **Aspect Ratio**: 1:1 (`800x800`).
- **Prompt**:
  > "Macro photograph of a professional slim locksmith lock-pick tool cleanly inserted into the keyway of a brass rim cylinder lock on a London residential front door. Close-up side-on angle, shallow depth of field, crisp focus on the brass lock plug and pick tool. Natural overcast daylight, muted green and warm stone tones, soft blurred background of London brickwork. No hands, no faces, no text, no logos."
- **Raw File**: `src/assets/images-raw/service-emergency-lockout-raw.jpg`
- **Optimized Variants**: `service-emergency-lockout-800.webp` (35.4 KB), `service-emergency-lockout-400.webp` (13.5 KB).

### 4. Service: Lock Change & Repair (`service-lock-change-repair.webp`)
- **Slot**: Primary service tile 2 (`src/components/ServicesBlock.jsx`).
- **Aspect Ratio**: 1:1 (`800x800`).
- **Prompt**:
  > "Close-up photograph of a brand new high-security British Standard 5-lever mortice deadlock faceplate and solid brass bolt neatly fitted flush into the edge of a solid oak timber door. Clean woodwork, polished brass screws and faceplate, shallow depth of field. Soft overcast daylight, natural stone and wood tones. No faces, no text, no logos."
- **Raw File**: `src/assets/images-raw/service-lock-change-repair-raw.jpg`
- **Optimized Variants**: `service-lock-change-repair-800.webp` (32.8 KB), `service-lock-change-repair-400.webp` (11.2 KB).

### 5. Service: Snapped Key Extraction (`service-snapped-key-extraction.webp`)
- **Slot**: Secondary service tile (`src/components/ServicesBlock.jsx`).
- **Aspect Ratio**: 1:1 (`800x800`).
- **Prompt**:
  > "Close-up macro photograph of a specialized slender locksmith spiral key extractor tool precisely extracting a broken brass key blade out of a brass euro cylinder lock keyway. The serrated edges of the brass key blade emerging cleanly. Shallow depth of field, crisp focus on the extractor and cylinder plug. Soft overcast daylight, muted natural tones. No faces, no text, no logos."
- **Raw File**: `src/assets/images-raw/service-snapped-key-extraction-raw.jpg`
- **Optimized Variants**: `service-snapped-key-extraction-800.webp` (36.0 KB), `service-snapped-key-extraction-400.webp` (13.8 KB).

### 6. Service: UPVC Door & Window Locks (`service-upvc-door-locks.webp`)
- **Slot**: Secondary service tile (`src/components/ServicesBlock.jsx`).
- **Aspect Ratio**: 1:1 (`800x800`).
- **Prompt**:
  > "Detailed photograph of a multi-point locking mechanism strip with steel hooks, rollers, and central latch gearbox along the edge of an open modern residential composite door. Clean metallic steel hardware, precision engineered mechanism. Side-on angle, shallow depth of field, soft overcast daylight, muted greens visible in the soft background garden. No people, no text, no logos."
- **Raw File**: `src/assets/images-raw/service-upvc-door-locks-raw.jpg`
- **Optimized Variants**: `service-upvc-door-locks-800.webp` (36.2 KB), `service-upvc-door-locks-400.webp` (15.0 KB).

### 7. Service: Commercial & Shutter Locks (`service-commercial-locks.webp`)
- **Slot**: Secondary service tile (`src/components/ServicesBlock.jsx`).
- **Aspect Ratio**: 1:1 (`800x800`).
- **Prompt**:
  > "Close-up photograph of a heavy-duty commercial shutter padlock and hardened steel security hasp fitted to a commercial security gate or door. Robust brushed steel, industrial grade locking hardware. Natural overcast daylight, clean architectural stone and steel tones, shallow depth of field. No people, no text, no brand logos."
- **Raw File**: `src/assets/images-raw/service-commercial-locks-raw.jpg`
- **Optimized Variants**: `service-commercial-locks-800.webp` (64.4 KB), `service-commercial-locks-400.webp` (24.6 KB).

### 8. Service: Burglary Repairs & Boarding (`service-burglary-repairs.webp`)
- **Slot**: Secondary service tile (`src/components/ServicesBlock.jsx`).
- **Aspect Ratio**: 1:1 (`800x800`).
- **Prompt**:
  > "Close-up photograph of a reinforced heavy-duty steel strike plate and frame reinforcer securely screwed into a solid timber door frame, demonstrating high-security door reinforcement and repair. Clean carpentry, flush brass and steel hardware, shallow depth of field. Soft overcast daylight, warm wood and muted brick tones. No people, no text, no logos."
- **Raw File**: `src/assets/images-raw/service-burglary-repairs-raw.jpg`
- **Optimized Variants**: `service-burglary-repairs-800.webp` (64.5 KB), `service-burglary-repairs-400.webp` (21.1 KB).

### 9. Why Us (`why-us.webp`)
- **Slot**: Why Us section left column image (`src/components/WhyUs.jsx`).
- **Aspect Ratio**: 4:3 (`1200x900`).
- **Prompt**:
  > "Overhead 4:3 knolling photograph of professional locksmith tools neatly laid out on a weathered wooden workbench or London stone slab. Stainless steel lock picks, tension wrenches, a disassembled brass euro cylinder with pins and springs, three brass keys, and precision callipers. Organised layout, soft natural overcast daylight, muted green and stone tones, shallow depth of field. No faces, no text, no logos."
- **Raw File**: `src/assets/images-raw/why-us-raw.jpg`
- **Optimized Variants**: `why-us-1200.webp` (95.9 KB), `why-us-800.webp` (68.4 KB), `why-us-600.webp` (50.6 KB).

### 10. CTA Background (`cta-bg.webp`)
- **Slot**: Reusable CTA section background (`src/components/Cta.jsx`).
- **Aspect Ratio**: 16:9 (`1920x800`).
- **Prompt**:
  > "Extremely soft, out-of-focus bokeh landscape photograph of a classic quiet residential London street with Georgian brick townhouses and muted green leafy trees. Very low detail, dreamy heavy blur, abstract soft lighting under overcast daylight. Calm, muted forest green and warm dark stone tones, minimal contrast, perfect as an unobtrusive background. Absolutely no readable text, no recognizable faces, no sharp details."
- **Raw File**: `src/assets/images-raw/cta-bg-raw.jpg`
- **Optimized Variants**: `cta-bg-1920.webp` (42.9 KB), `cta-bg-1200.webp` (23.4 KB), `cta-bg-800.webp` (14.2 KB).

---

## Technical Integration Rules
1. **Responsive Delivery**: Every image uses `srcSet` and `sizes` to deliver appropriately scaled WebP images based on viewport width.
2. **Layout Shift Prevention**: Explicit `width` and `height` attributes are declared on all `<img>` elements matching their natural aspect ratio, avoiding layout reflows (CLS = 0).
3. **Loading Strategy**:
   - Above-the-fold hero image: `loading="eager" fetchPriority="high"`.
   - All below-the-fold images: `loading="lazy"`.
4. **Interactive Polish**: Service images feature `transition-transform duration-300 hover:scale-[1.03]` with subtle containment in `rounded-[16px]` overflow-hidden wrappers.
5. **Accessibility**: Every image includes a descriptive `alt` attribute representing the exact tradesperson hardware or London setting. No fake customer headshots are used; testimonials continue using initial avatars.

