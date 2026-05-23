## Portfolio Component Spec

---

### Design Tokens (globals) — CURRENT

```
Background: #ffffff (page), #f8fafc (cards)
Accent: #0165fd (blue)
Text: #0f172a / slate-900 (primary), #64748b (secondary)
Border: slate-200 (light gray — all borders sharp, no rounding)
Font: Montserrat (400 / 600 / 700) via Google Fonts
```

> ~~Original dark theme: `#0a0e1f` page, `#0d1526` cards, `#3b82f6` accent, white text, DM Sans font~~

---

### Component Tree — CURRENT

```
<App>
  <Navbar />            ← N logo, nav links, Contact Me button — wide px-8 lg:px-14
  <HeroSection>
    <HeroLeft />        ← "Available for Work" badge, h1 "Hi, I'm Naveen !", two bio paras,
                           View Projects + Contact Me CTAs, social links (GitHub/LinkedIn/Twitter)
    ← HeroRight removed (InfoCard + StatsRow dropped)
  </HeroSection>
  ← TechStackBanner removed
  <BottomGrid>          ← grid-cols-[3fr_2fr] — projects ~60%, reading ~40%
    <ProjectsSection>   ← bordered card, briefcase icon in heading, separator line, one project per row
      <ProjectCard />   ← blue square icon box, title + inline date (blue, bordered), description, tech tags with brand icons
    </ProjectsSection>
    <ReadingListSection> ← bordered card, book-open icon in heading, separator line
      <BookCard />      ← cover image, title, author · year in accent, description
    </ReadingListSection>
  </BottomGrid>
  <Footer />
</App>
```

Unused / scaffolded components (not rendered): `HeroRight`, `InfoCard`, `StatsRow`, `TechStackBanner`

---

### Hero Copy

**Headline:** Hi, I'm Naveen !

**Para 1:** Full-stack web developer with 5 years of experience crafting scalable solutions, using Node.js, Python, React, and PostgreSQL Technologies

**Para 2:** Driven by a passion for transforming real-world challenges into effective, practical solutions that simplify and streamline complex business operations

---

### Projects Data

| Title | Date | Tags |
|---|---|---|
| Field Canvassing and Survey Application | January 2022 | React, Node.js, PostgreSQL, Maps API |
| Multi Vendor Food Delivery Application | May 2021 | React Native, iOS, Android, Node.js |
| Content Recommender System | May 2020 | Python, Machine Learning, PostgreSQL |
| API Documentation as a Code | October 2025 | TypeScript, OpenAPI, LSP, LLM |

---

### Layout Decisions

- **Width:** Full-width with `px-8 lg:px-14` padding — no max-width container
- **Borders:** All sharp (`rounded-none` / no rounding anywhere)
- **BottomGrid columns:** `grid-cols-[3fr_2fr]` — projects ~60%, reading list ~40%
- **ProjectsSection inner grid:** `grid-cols-1` — one project per row
- **Icon library:** `astro-icon` + `@iconify-json/lucide` + `@iconify-json/simple-icons` — tree-shaken SVG at build time, zero runtime JS
- **Tailwind version:** v4 — tokens live in `@theme {}` block in `global.css`, no `tailwind.config.js`
- **Font loading:** Google Fonts `<link>` in `Layout.astro` head

---

### TODO List — CURRENT STATUS

**Phase 1 — Foundation**
- [x] Set up Tailwind v4 with custom color palette via `@theme` in `global.css`
- [x] Global layout: white bg, wide padding, Montserrat font import
- [ ] Extract data to `src/constants/data.ts` (projects, books, nav links)

**Phase 2 — Navbar**
- [x] Logo mark (blue square "N", sharp)
- [x] Nav links (About / Projects / Reading)
- [x] "Contact Me" button with `lucide:inbox` icon
- [ ] Mobile hamburger menu (nav links hidden on small screens currently)

**Phase 3 — Hero**
- [x] `HeroLeft`: "Available for Work" badge, h1 with blue name, two bio paras, two CTAs, social links
- [x] CTAs: "View Projects" with `lucide:rocket`, "Contact Me" with `lucide:mail`
- [x] Social links: GitHub, LinkedIn, X — with `simple-icons` brand icons
- [x] HeroRight / InfoCard / StatsRow — removed per design decision

**Phase 4 — Tech Stack Banner**
- [x] Built initially, then removed per design decision

**Phase 5 — Projects Section**
- [x] Section bordered card with `lucide:briefcase` heading icon + separator line
- [x] "VIEW ALL PROJECTS" link with `lucide:arrow-right`
- [x] `ProjectCard`: blue square icon box (per-project lucide icon), title + inline date (blue text + border), description, tech tag chips with small brand icons (`simple-icons` / `lucide`)
- [x] Per-project icons: Field Canvassing → `clipboard-list`, Food Delivery → `utensils`, Recommender → `brain`, API Docs → `file-code-2`
- [x] 4 real projects mapped from inline data array
- [ ] Move project data to `constants/data.ts`

**Phase 6 — Reading List Section**
- [x] Section bordered card with `lucide:book-open` heading icon + separator line
- [x] "VIEW ALL" link with `lucide:arrow-right`
- [x] `BookCard`: cover image, title, author · year in accent, description
- [x] 3 books: The Checklist Manifesto (Gawande 2009), The Unthinkable (Ripley 2008), The Big Short (Lewis 2010)
- [ ] Move book data to `constants/data.ts`

**Phase 7 — Footer**
- [x] `© 2025 Naveen. All rights reserved.` — centered, top border separator

**Phase 8 — Polish**
- [ ] Hover states on cards (lift on hover — already on cards)
- [ ] Entrance animations (framer-motion or CSS)
- [ ] Responsive: mobile hamburger nav, single-column BottomGrid on small screens
- [ ] Keyboard accessibility (focus rings, semantic HTML)
- [ ] Real social link URLs
- [ ] "VIEW ALL" links wired to real pages or external URLs

---

### Mobile Responsive — DONE (May 2026)

**BottomGrid**
- Outer padding reduced from `px-8` → `px-3 sm:px-8` on mobile
- Both sections now `border-b` only on mobile, full `border` on `sm+`

**ProjectsSection & ReadingListSection headers**
- Always `flex-row items-center justify-between` (no stacking)
- Title scales: `text-sm` on mobile → `text-2xl` on `sm+`
- Icon scales: `size-4` on mobile → `size-5` on `sm+`
- "VIEW ALL PROJECTS" label hidden on mobile, shows "VIEW ALL" instead
- Arrow icon scales: `size-3` → `size-4`

**ProjectCard**
- Article stacks `flex-col` on mobile, `flex-row` on `sm+`
- Icon box: `size-10` (mobile) → `size-16` (desktop); inner icon `size-5` → `size-8`
- Title + date stacked vertically on mobile, side-by-side on `sm+`

**BookCard**
- Article stacks `flex-col` on mobile, `flex-row` on `sm+`
- Cover image: `w-14 h-20` (mobile) → `w-20 h-28` (desktop)
- Last card has `last:border-b-0` (no trailing border)
- `cursor-pointer` on both cards

**HeroLeft**
- "Driven by a passion…" paragraph hidden on mobile (`hidden sm:block`)
- CTA buttons: `px-4 py-2 text-xs` on mobile → `px-6 py-3 text-sm` on `sm+`
- Social links: `flex-wrap gap-2` to stay horizontal on narrow screens

**Navbar**
- Hamburger (`lucide:menu` / `lucide:x`) visible on mobile only
- Desktop "Contact me" CTA hidden on mobile (`hidden md:inline-flex`)
- Mobile dropdown (`#nav-menu`): vertical nav links only, no Contact button
- JS toggles menu open/close and auto-closes on link tap

**Misc**
- `.gitignore` added (node_modules, dist, .astro, .env, logs, OS/editor files)

---

### Key Implementation Notes

- Tailwind v4: all color/font tokens in `@theme {}` in `global.css` — generates `bg-accent`, `text-secondary`, `font-sans` etc. automatically
- No `tailwind.config.js` needed
- `border-slate-200` replaces the old `border-white/8` pattern from the dark theme
- All data (projects, books) currently inline in component files — move to `constants/data.ts` when ready to extend
- VS Code CSS validator disabled (`.vscode/settings.json`) to suppress false-positive `@theme` error

---

### All Articles Page — DONE (May 2026)

**Route:** `/articles` → `src/pages/articles.astro`

**New components:**
- `ArticleItem.astro` — editorial 3-column row: date+dot | title+excerpt | reading-time+badge. Mobile collapses to stacked layout with inline metadata row below excerpt.

**Page structure:**
- Hero: "Writing" eyebrow → `h1 All Articles` → supporting description (left-aligned, `border-b` separator)
- Main layout: `lg:flex-row` 2-column — `260px` sticky sidebar + flexible feed
- Sidebar: categories list (count badges, active left-border indicator) + tag chips. Collapsed behind toggle on mobile.
- Filter bar: sort dropdown + live article count + search input
- Feed: vertical `ArticleItem` list with empty state fallback

**Interactions (client JS):**
- Mobile sidebar toggle (chevron rotates, `aria-expanded` updated)
- Category filter — updates active-state classes + filters `[data-article]` elements
- Live search — filters by `data-title` and `data-excerpt` data attributes
- Article count updates dynamically on every filter change

**Navbar:** "Articles" link added to desktop nav list and mobile dropdown