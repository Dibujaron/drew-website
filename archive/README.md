# drew.polstra.com — Content Archive

Snapshot of the public content of https://drew.polstra.com (Squarespace), captured 2026-07-14, for rebuilding the site on another platform.

## Structure

- `pages/` — one Markdown file per page (82 pages). Each file has YAML frontmatter (`url`, `title`, `http_status`), the page's text content (headings/lists/blockquotes preserved as Markdown), and a list of the image URLs that appeared on that page. Nested URLs use `__` as the path separator (e.g. `courtship__the-hike.md` = `/courtship/the-hike`).
- `images/` — all 167 unique images referenced across the site, downloaded at original resolution from the Squarespace CDN (~186 MB).
  - `_image-urls.txt` — the deduplicated list of source URLs.
  - `_manifest.tsv` — maps each local filename to its source URL.

## Site structure notes (for the rebuild)

- Top-level nav: home, portfolio, fun, contact, resume.
- `/portfolio` and `/fun` are Squarespace "index" pages; their sections are separate sub-pages (listed at the bottom of `portfolio.md` and `fun.md`).
- `/courtship` (13 posts), `/mandalas` (17 posts), and `/sqblog` (10 posts) are blogs; each post is archived as its own file.
- `/resume` is empty on the live site (no content, only header/footer).
- The `/memes`, `/guns-of-icarus`, and similar gallery pages store their images in gallery blocks; their images are in the "full scan" lists in each page file.
- Pages found in the sitemap but not in the nav: `/landing`, `/frog_picture`, `/quotes-ai-generated`, `/short-stories`, `/short-writings`, `/the-loudest-alarm`, `/tesselations`, `/404`.
- Blog posts' "featured images" (`featured__*` files, from the JSON `assetUrl`) are Squarespace's default 300×300 gray placeholder — no post has a real featured image set. All real blog images appear in post bodies and are archived. Courtship posts are text-only.
- Blog item counts per Squarespace JSON: courtship 15 (13 published), mandalas 19 (17 published), sqblog 10 (10 published) — the gaps are unpublished drafts, not accessible publicly.
- Site was password-protected at capture time (site-wide Squarespace password gate).
- Footer contact: (864) 561-6481 | contact@ddpolstra.com
