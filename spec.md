# Drew McPolstra — Personal Website Spec

## Overview

A static personal website with no database backend, hosted on GitHub Pages, replacing the current Squarespace site at drew.polstra.com.

**Primary domain:** drew.mcpolstra.com  
**Redirects to primary:** drew.polstra.com, dibujaron.com, ddpolstra.com

---

## Tech Stack

- **Framework:** React (SPA)
- **Routing:** Hash-based (`#/projects`, `#/blog/post-title`, etc.) for deep-linkability without server config
- **Hosting:** GitHub Pages (static build output)
- **Animation:** TBD — candidates include Framer Motion, react-spring, or a physics library like matter.js
- **No backend, no database**

---

## Landing Page — The Name Machine

The entire landing page is just the text **"Drew McPolstra"** displayed large, centered on a very clean gray-white background. That's all that's visible at rest.

### Interaction Model

Mousing over certain letters reveals they are menus. Each interactive letter has a unique, physics-inspired animation that "opens" to reveal navigation items. Animations are springy/bouncy — not flat CSS transitions. Each animation reverses cleanly on mouse-out.

Each letter animation should feel distinct. One example: the **P** in "McPolstra" could have its vertical shaft extend downward in a telescoping motion, with the word "Projects" and its sub-links sliding out from the side or descending with the shaft. Other letters get their own idioms.

Letters that have sub-menus are slightly visually distinguished at rest — e.g., slightly brighter or a different color weight — so the page isn't completely inert-looking. The color palette for the letters and revealed menus is bright and energetic, contrasted against the minimal background.

Approximately 5 letters will have active sub-menus. Not every letter needs one; inactive letters are just decorative.

### Letter-to-Page Mapping

"Drew McPolstra" gives us the letters: D, r, e, w, M, c, P, o, l, s, t, r, a

The pages on the current site do not map cleanly to these letters, so the mapping will need to be creatively massaged. Aim for ~5 letters with menus. To be decided as content is determined.

---

## Mobile Layout

On mobile, **"Drew McPolstra"** is laid out vertically (one word per line, or one letter per line — TBD). Letter animations open to the **right** rather than downward. Animations will likely need significant adaptation for touch (tap to open/close instead of hover, or long-press).

---

## Page Types / Primitives

### Index Page
Used for sections like **Projects**. Contains:
- A list of links to sub-pages or external projects
- Optional: thumbnail images or brief descriptions per item

### Blog Page
Used for sections like **Writing** or **Blog**. Contains:
- A list of posts
- Each post is a sub-page rendered from a Markdown file
- No CMS — posts are just `.md` files in the repo
- Deep-linkable via hash routing (e.g., `#/blog/post-slug`)

---

## Content / Pages

To be finalized, but will include at minimum:

- **Projects** — portfolio / notable work
- **Writing / Blog** — posts migrated from drew.polstra.com (a couple of blog-like pieces exist there)
- Additional pages TBD, mapped creatively to available letters in "Drew McPolstra"

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
