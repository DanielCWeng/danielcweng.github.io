# Publications

This is my writing site for macroeconomic and geopolitical analysis.  
I built it with Astro so I can publish quickly from Markdown and keep everything versioned in Git.

## Why I made this

I wanted one place to publish long-form pieces, update them over time, and keep a clear review trail when my views change.

## How publishing works

1. Write a piece in Markdown.
2. Add front matter (template below).
3. Save it in `src/content/pieces/`.
4. Optional: add a PDF in `public/papers/`.
5. Commit and push to `main`.
6. GitHub Actions builds and deploys the site to Pages.

## Front matter template

```yaml
---
title: "Your Title Here"
date: 2026-01-01
tags: [macro, oil, geopolitics]
status: active        # or "closed" once thesis has resolved
threat_level: 6.5     # optional numeric rating
summary: "One-paragraph summary of the core thesis."
pdf: "/Publications/papers/your-paper.pdf"  # optional
tex: "/Publications/papers/your-paper.tex"  # optional
---
```

## Updating an existing piece

Open the piece in `src/content/pieces/` and add a new `### Review: [date]` section under `## Review Log`, then push your change.

## Run locally

```bash
npm install
npm run dev
```

## Stack

- [Astro](https://astro.build)
- KaTeX
- Shiki
- GitHub Actions + GitHub Pages
