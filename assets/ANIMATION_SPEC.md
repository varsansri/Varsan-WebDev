# Varsan-WebDev — Animation / Layout Reference (the "Jack" 3D Creator build)

This is the motion + layout blueprint to adapt for Varsan-WebDev. Stack: React + TypeScript + Tailwind CSS + Framer Motion + Lucide React. Dark theme `#0C0C0C`, font **Kanit** (Google Fonts, weights 300–900). Title: "Jack — 3D Creator".

> ADAPT: swap Jack's identity/copy → Varsan / S. Srivarsan, swap theme → Pumpkin `#fe7f2d` + Charcoal `#233d4d`, reuse the animation system + section architecture verbatim.

## Global styles
- Background `#0C0C0C` on html, body, #root, main wrapper.
- Font `'Kanit', sans-serif`. Reset: box-sizing border-box, margin 0, padding 0.
- `.hero-heading`: gradient text — `linear-gradient(180deg, #646973 0%, #BBCCD7 100%)`, `-webkit-background-clip:text`, `-webkit-text-fill-color:transparent`.
- Main wrapper `overflowX: clip`.

## Section order
HeroSection → MarqueeSection → AboutSection → ServicesSection → ProjectsSection

## 1. Hero
- Full viewport `h-screen`, flex column, `overflowX: clip`.
- **Navbar:** 4 links "About / Price / Projects / Contact", `justify-between`, color `#D7E2EA`, font-medium uppercase tracking-wider. `text-sm md:text-lg lg:text-[1.4rem]`. Padding `px-6 md:px-10 pt-6 md:pt-8`. Hover opacity 70% / 200ms.
- **Hero heading:** massive h1 "Hi, i'm jack" (lowercase i, curly apostrophe). `.hero-heading`, font-black uppercase tracking-tight leading-none whitespace-nowrap w-full. Sizes `text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]`. `mt-6 sm:mt-4 md:-mt-5`. In `overflow-hidden` container.
- **Bottom bar:** `justify-between items-end pb-7 sm:pb-8 md:pb-10`.
  - Left: "a 3d creator driven by crafting striking and unforgettable projects", `#D7E2EA`, font-light uppercase tracking-wide leading-snug, `clamp(0.75rem,1.4vw,1.5rem)`, `max-w-[160px] sm:max-w-[220px] md:max-w-[260px]`.
  - Right: **ContactButton**.
- **Hero portrait:** centered absolute, wrapped in **Magnet** (padding 150, strength 3, active "transform 0.3s ease-out", inactive "transform 0.6s ease-in-out"). Image: `https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png`. `absolute left-1/2 -translate-x-1/2 z-10`, `w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]`. Mobile `top-1/2 -translate-y-1/2`; sm+ `sm:top-auto sm:translate-y-0 sm:bottom-0`.
- **FadeIn timings:** navbar delay 0 y-20 · heading delay 0.15 y40 · left text delay 0.35 y20 · contact btn delay 0.5 y20 · portrait delay 0.6 y30.

## 2. Marquee
- Two image rows scrolling horizontally on page scroll. Bg `#0C0C0C`. Padding `pt-24 sm:pt-32 md:pt-40 pb-10`.
- **21 GIFs** from motionsites.ai (replace later with Varsan demo previews):
```
hero-space-voyage, hero-codenest, hero-vex-ventures, hero-stellar-ai-v2, hero-asme,
hero-transform-data, hero-vitara, hero-terra, hero-skyelite, hero-aethera, hero-designpro,
hero-stellar-ai, hero-xportfolio, hero-orbit-web3, hero-nexora, hero-evr-ventures,
hero-planet-orbit, hero-new-era, hero-wealth, hero-luminex, hero-celestia
```
(full URLs: `https://motionsites.ai/assets/<name>-preview-<hash>.gif`)
- Row 1: first 11 tripled, moves RIGHT `translateX(offset-200)`. Row 2: remaining 10 tripled, moves LEFT `translateX(-(offset-200))`.
- Offset = `(window.scrollY - sectionTop + window.innerHeight) * 0.3`.
- Tile 420×270px, rounded-2xl, object-cover, lazy. `gap-3`. `willChange:'transform'`, passive scroll listener.

## 3. About
- `min-h-screen` centered, `px-5 sm:px-8 md:px-10 py-20`.
- **4 corner 3D images** (figma.site URLs): TL moon `top-[4%] left-[1/2/4%]` w120/160/210 (FadeIn d0.1 x-80) · BL p59 object `bottom-[8%] left-[3/6/10%]` w100/140/180 (d0.25 x-80) · TR lego `top-[4%] right-[1/2/4%]` w120/160/210 (d0.15 x80) · BR Group_134 `bottom-[8%] right-[3/6/10%]` w130/170/220 (d0.3 x80). All duration 0.9.
  - moon `.../moon_icon.11395d36.png`, p59 `.../p59_1.4659672e.png`, lego `.../lego_icon-1.703bb594.png`, group `.../Group_134-1.2e04f3ce.png` (base `https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/`).
- **Heading:** "About me" `.hero-heading`, font-black uppercase leading-none tracking-tight centered, `clamp(3rem,12vw,160px)`. FadeIn d0 y40.
- **Animated paragraph (char-by-char):** "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!" — `#D7E2EA`, font-medium centered leading-relaxed `max-w-[560px]`, `clamp(1rem,2vw,1.35rem)`. Each char opacity 0.2→1 on scroll, offset `['start 0.8','end 0.2']`.
- ContactButton below. Gaps: heading/text `gap-10 sm:gap-14 md:gap-16`; text/button `gap-16 sm:gap-20 md:gap-24`.

## 4. Services
- White bg `#FFFFFF`, `rounded-t-[40/50/60px]`. Padding `px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32`.
- Heading "Services" `#0C0C0C` font-black uppercase centered `clamp(3rem,12vw,160px)`, `mb-16 sm:mb-20 md:mb-28`.
- **5 list items** (`max-w-5xl` centered), number left + name/desc right:
  - 01 3D Modeling — "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."
  - 02 Rendering — "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."
  - 03 Motion Design — "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."
  - 04 Branding — "Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence."
  - 05 Web Design — "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
- Number: font-black `clamp(3rem,10vw,140px)` `#0C0C0C`. Name: font-medium uppercase `clamp(1rem,2.2vw,2.1rem)`. Desc: font-light leading-relaxed `max-w-2xl` `clamp(0.85rem,1.6vw,1.25rem)` opacity 0.6. 1px borders `rgba(12,12,12,0.15)`. `py-8 sm:py-10 md:py-12`. Stagger FadeIn `i*0.1`.

## 5. Projects
- Dark `#0C0C0C`, `rounded-t-[40/50/60px]`, pulled up `-mt-10 sm:-mt-12 md:-mt-14`, z-10.
- Heading "Project" `.hero-heading`.
- **3 sticky-stacking cards** scaling down on scroll (Framer `useScroll`+`useTransform`). Sticky `top-24 md:top-32` inside `h-[85vh]`. `targetScale = 1 - (total-1-index)*0.03`, offset `top: index*28px`.
- Card: `rounded-[40/50/60px]`, `border-2 border-[#D7E2EA]`, bg `#0C0C0C`, `p-4 sm:p-6 md:p-8`.
  - Top row: huge number + category label + project name + **LiveProjectButton**.
  - Bottom: 2-col image grid — left 40% (2 stacked, top `clamp(130px,16vw,230px)`, bottom `clamp(160px,22vw,340px)`), right 60% (1 tall). All `rounded-[40/50/60px]`.
- Projects (images via images.higgs.ai CloudFront — replace with Varsan demos):
  - 01 "Nextlevel Studio" (Client)
  - 02 "Aura Brand Identity" (Personal)
  - 03 "Solaris Digital" (Client)
  - (full higgs.ai URLs stored — 3 imgs each; swap for our 8 demo screenshots.)

## Reusable components
- **ContactButton:** rounded-full, bg `linear-gradient(123deg,#18011F 7%,#B600A8 37%,#7621B0 72%,#BE4C00 100%)`, inner shadow `0px 4px 4px rgba(181,1,167,.25), 4px 4px 12px #7721B1 inset`, white 2px outline -3px offset. White font-medium uppercase tracking-widest. `px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4`, `text-xs sm:text-sm md:text-base`. Label "Contact Me". → RE-THEME to Pumpkin gradient.
- **LiveProjectButton:** ghost pill, rounded-full border-2 `#D7E2EA`, text `#D7E2EA` font-medium uppercase tracking-widest. `px-8 py-3 sm:px-10 sm:py-3.5`, `text-sm sm:text-base`. Hover `bg-[#D7E2EA]/10`. Label "Live Project".
- **FadeIn:** Framer `whileInView`, `viewport={{once:true,margin:"50px",amount:0}}`. Props delay, duration(0.7), x(0), y(30). Easing `[0.25,0.1,0.25,1]`. `motion.create()` for dynamic tags.
- **Magnet:** mouse-following magnetic hover; translate3d ÷ strength; activates within padding of edge; in 0.3s ease-out / out 0.6s ease-in-out; `willChange:'transform'`.
- **AnimatedText:** per-char scroll reveal opacity 0.2→1; Framer `useScroll` offset `['start 0.8','end 0.2']`; invisible placeholder + absolute animated span.

## Dependencies
react/react-dom ^18.3.1 · framer-motion ^12.38.0 · lucide-react ^0.344.0 · tailwindcss ^3.4.1 · vite · typescript. Default Tailwind breakpoints (sm640/md768/lg1024), mobile-first, heavy `clamp()`.
