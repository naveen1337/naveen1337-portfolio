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

---

### Color Palette — Full Reference

#### Light Mode

| Token | Value | Usage |
|---|---|---|
| `--color-page` | `#ffffff` | Page background |
| `--color-card` | `#f8fafc` | Card / section backgrounds |
| `--color-accent` | `#0165fd` | Blue — buttons, links, active states |
| `--color-secondary` | `#64748b` | Muted text, meta labels |
| `text-slate-900` / `#0f172a` | Primary body text, headings |
| `border-slate-200` / `#e2e8f0` | All borders (sharp, no rounding) |
| `bg-slate-50` / `#f8fafc` | Hover backgrounds |

#### Dark Mode (`html.dark` class on `<html>`)

| Token / Class | Dark Value | Notes |
|---|---|---|
| `--color-page` | `#0A0F1C` | Deepest background |
| `--color-card` | `#111827` | Card / section backgrounds |
| `--color-secondary` | `#B7C4D8` | Muted text |
| `bg-white` → | `#111827` | |
| `bg-slate-50` → | `#172033` | Hover states |
| `bg-slate-100` → | `#172033` | |
| `border-slate-100` → | `#1B263B` | Subtle dividers |
| `border-slate-200` → | `#24324A` | Standard borders |
| `text-slate-900/800` → | `#F3F7FF` | Primary text |
| `text-slate-700/600` → | `#B7C4D8` | Secondary text |
| `text-slate-500/400` → | `#6F819B` | Tertiary / placeholder |
| Code block `pre` bg | `#111827 !important` | Overrides Shiki inline style |
| Accent hover bg | `rgba(1,101,253,0.08)` | Active category button bg |

#### Implementation
- Tailwind v4 — tokens declared in `@theme {}` block in `src/styles/global.css`
- Dark mode activated via `html.dark` class (class-based, not `prefers-color-scheme`)
- Custom variant: `@custom-variant dark (&:where(.dark, .dark *));`
- Hardcoded Tailwind color overrides (e.g. `bg-slate-50`, `border-slate-200`) done via direct CSS rules in `global.css` — no Tailwind config needed
- Dark toggle JS lives in `Navbar.astro` — toggles `html.dark`, persists to `localStorage`

---

### Write-ups Content Catalogue

**Route:** `/write-ups` (list page) · `/write-ups/[slug]` (article page)
**Content dir:** `src/content/write-ups/` — MDX files
**Config:** `src/data/write-ups.config.json` — categories, tags, pagination

#### Articles

| Slug | Title | Category | Date | Read |
|---|---|---|---|---|
| `api-documentation-as-code` | API Documentation as a Code | Software Engineering | Oct 2025 | 6 min |
| `field-canvassing-app` | Field Canvassing and Survey Application | Personal Projects | Jan 2022 | 5 min |
| `food-delivery-app` | Multi Vendor Food Delivery Application | Personal Projects | May 2021 | 5 min |
| `content-recommender-system` | Content Recommender System | Personal Projects | May 2020 | 7 min |
| `the-big-short` | The Big Short — Book Notes | Reading List | Mar 2024 | 4 min |
| `the-checklist-manifesto` | The Checklist Manifesto — Book Notes | Reading List | Feb 2024 | 4 min |
| `the-unthinkable` | The Unthinkable — Book Notes | Reading List | Jan 2024 | 4 min |

#### Categories (in config order)
`Software Engineering` · `Personal Projects` · `Reading List` · `Finance` · `General` · `Entertainment`

#### Tags (config-registered, shown in sidebar)
`AI/ML` · `Economy` · `Database` · `Infrastructure`

#### MDX Frontmatter Schema
```yaml
title: string
subtitle: string          # shown below h1 on article page
excerpt: string           # shown on list page ArticleItem
category: string          # must match config.categories entry
date: "Mon YYYY"          # e.g. "Jan 2022"
readingTime: "N min read"
author:
  name: string
  initials: string        # 1-2 chars, shown in blue avatar square
tags: string[]
related: string[]         # slugs of related articles (sidebar)
toc:                      # optional — auto-generated from headings if omitted
  - id: string            # matches heading id
    label: string
    level: 2 | 3
```

---

### Write-ups Page — Full Spec

#### List Page (`/write-ups`)

**Layout:** sticky 260px sidebar (left) + flexible article feed (right) — `lg:flex-row`

**Sidebar contains:**
- Category filter — list of buttons with count badges; active item has left accent border + blue text + `bg-accent/5` bg
- Tag filter — pill buttons; multiple tags can be active simultaneously
- Mobile: hidden behind "Filter & Browse" toggle button (chevron rotates, `aria-expanded` toggled)

**Filter bar (above feed):**
- Sort dropdown — `Latest` / `Oldest` / `Reading Time` (DOM reorder, no reload)
- Live article count — updates on every filter change
- Search input — filters by `data-title` and `data-excerpt` attributes client-side

**Pagination:**
- Default page size: **10** (set in `config.pagination.pageSize`)
- Pagination controls hidden when all results fit one page
- "Newer" (prev) / "Older" (next) buttons; disabled states on first/last page

**URL pre-filtering:**
- `?category=Personal+Projects` → sidebar activates matching category on load
- Used by home page "VIEW ALL PROJECTS" (`/write-ups?category=Personal+Projects`) and "VIEW ALL" reading list (`/write-ups?category=Reading+List`)

**`ArticleItem.astro` data attributes (used by client JS):**
```html
data-article
data-category="Personal Projects"
data-tags="React Native,Python"
data-title="Field Canvassing..."
data-excerpt="A canvassing survey system..."
data-date="1641024000000"        <!-- ms timestamp for sort -->
data-reading-time="5"            <!-- numeric minutes for sort -->
```

#### Article Page (`/write-ups/[slug]`)

**Layout:** max-w-7xl · left article body (max-w-[760px]) + right sticky 296px sidebar

**Header contains:**
- Breadcrumb: Home → Write ups → Article title (title hidden on mobile)
- Category badge (accent border, uppercase)
- H1 title + subtitle paragraph
- Author row: blue initial avatar square · name · date · reading time
- Share row: Twitter (opens `twitter.com/intent/tweet?text=TITLE&url=URL`) · LinkedIn · Copy Link button (copies `window.location.href`, shows "Copied!" feedback)

**Right sidebar (xl+ only, sticky):**
- Table of Contents — auto-highlights active section via IntersectionObserver (`rootMargin: '-8% 0px -72% 0px'`)
- Tags — inline chips
- Share — same Twitter / LinkedIn / Copy Link actions
- Related Write-ups — resolved from `related` frontmatter slugs; shows title + category · reading time

**Prev/Next navigation** — below article body; resolved by sort order (newest-first); "Previous" = older post, "Next" = newer post

**Client JS features:**
- Copy button (`.copy-btn`) on code blocks — copies `<code>` text, shows "Copied" for 2s
- Copy URL buttons (`[data-copy-url]`) — copies page URL
- TOC scroll tracking — IntersectionObserver on `article h2[id], article h3[id]`
- Share links — built server-side in frontmatter using `Astro.url.href` + `encodeURIComponent`

**Prose styles:** `.prose-writeup` class — all styles hand-written in `global.css` (no Tailwind Typography plugin). Dark mode overrides via `html.dark .prose-writeup *` rules.