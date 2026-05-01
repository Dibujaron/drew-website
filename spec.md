# Drew McPolstra — Personal Website Spec

## Overview

A static personal website with no database backend, hosted on GitHub Pages, replacing the current Squarespace site at drew.polstra.com.

**Primary domain:** drew.mcpolstra.com  
**Redirects to primary:** drew.polstra.com, dibujaron.com, ddpolstra.com

---

## Tech Stack

- **Framework:** React (SPA)
- **Routing:** Hash-based (e.g. `#/projects`, `#/words/quotes`) for deep-linkability without server config
- **Hosting:** GitHub Pages (static build output)
- **Animation:** Framer Motion (spring physics model, React-native API)
- **No backend, no database**

---

## Landing Page — The Name Machine

The entire landing page is just the text **"Drew McPolstra"** displayed large, centered on a very clean gray-white background. That's all that's visible at rest.

### Interaction Model

Mousing over certain letters reveals they are menus. Each interactive letter has a unique, physics-inspired animation that "opens" to reveal navigation items. Animations are springy/bouncy — not flat CSS transitions. Each animation reverses cleanly on mouse-out.

Each letter animation should feel distinct. One example: the **P** in "McPolstra" could have its vertical shaft extend downward in a telescoping motion, with "Projects" and its links sliding out from the side or descending with the shaft. Other letters get their own idioms.

Letters with sub-menus are slightly visually distinguished at rest — e.g., subtly brighter or a different color weight — so the page isn't completely inert-looking. The color palette for letters and revealed menus is bright and energetic, contrasted against the minimal background.

Inactive letters (D, e, M, o, l, and the second r) are purely decorative. 'D' is left open for now.

### Letter-to-Page Mapping

```
D  r  e  w  M  c  P  o  l  s  t  r  a
   ✓     ✓     ✓  ✓        ✓  ✓     ✓
```

| Letter | Page | Type |
|--------|------|------|
| r (in Drew) | Resume | Single page |
| w | Words | Collection → Quotes, Short Stories |
| c | Courtship | Article list |
| P | Projects | Collection |
| s | StarQuest | Article list (Minecraft server project) |
| t | Tesselations + TripleSeq | Two simultaneous animations branching in different directions; each leads to its own page |
| a | Apartment (tentative) | Gallery / documentation of the apartment |

---

## Mobile Layout

On mobile, **"Drew McPolstra"** is laid out vertically (one word per line, or one letter per line — TBD). Letter animations open to the **right** rather than downward. Animations will likely need significant adaptation for touch (tap to open/close instead of hover).

---

## Page Primitives

### Collection Page
A titled list of items with links — used for Projects, Words, and as sub-pages within Words. Each item may have an optional image and short description.

### Article List Page
A list of posts, each rendered from a Markdown file stored in the repo. Sub-pages are deep-linkable via hash routing. No CMS; content is flat files. Used for Courtship and Short Stories.

---

## Content Notes

- **Resume:** Standard resume page; content TBD.
- **Words:** Top-level collection linking to Quotes and Short Stories.
  - *Quotes:* Running list of notable quotes from Drew's reading. To be more prominently featured than in the previous site.
  - *Short Stories:* A small number of original short stories; article-list format.
- **Courtship:** Blog-like narrative of Drew and Holly's relationship up to their engagement. Article-list format, migrated from drew.polstra.com.
- **Projects:** Portfolio-style collection of notable work, to be refreshed. Serves as the canonical index of serious work — includes TripleSeq, Tesselations, StarQuest, and the game projects (OpenTTD, Cities Skylines, Minecraft's Create Mod) as entries. The individual letters 't' and 's' are direct-access shortcuts into those same pages, not separate content.
- **StarQuest:** Drew's high school Minecraft server project. Article-list format, migrated from drew.polstra.com. Also listed under Projects.
- **Tesselations:** An art project. Dedicated page, likely gallery-oriented. Also listed under Projects.
- **TripleSeq:** A TypeScript library. Dedicated page. Shares the 't' letter with Tesselations via a dual-animation: both branch open simultaneously in slightly different directions from the same letter. Also listed under Projects.
- **Apartment** *(tentative, 'a'):* Documentation and gallery of Drew and Holly's Civil-War-era loft apartment — notable for being a great space, obtained affordably, and well-decorated.

---

## Visual Design

- **Background:** Very clean, near-white or light gray
- **Letters at rest:** Large, typographically prominent; active letters subtly tinted
- **Revealed menus:** Bright, energetic color palette — specific colors TBD
- **Overall feel:** Playful and interactive, but not cluttered

---

## Out of Scope

- Server-side rendering
- User accounts or authentication
- Any database or persistent backend
- CMS (content is managed via flat files in the repo)
