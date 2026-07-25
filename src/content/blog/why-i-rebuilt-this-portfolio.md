---
title: Why I Rebuilt This Portfolio With Astro
summary: Notes on moving off a page builder and into a static site I actually control — and why the blog lives right next to the work.
type: post
date: 2026-07-25
tags: [Astro, Portfolio]
featured: true
draft: false
---

Most portfolio templates optimize for one thing: making a handful of projects look impressive. That's fine until you want to write something — a fix you found, a pattern you keep reaching for, a snippet worth saving for the next time you need it. Then you're bolting on a separate blog platform, a separate design system, a separate deploy.

I wanted one site. Work on one side, everything I learn building it on the other, both pulled from the same set of markdown files and the same design tokens, so nothing drifts out of sync.

**Why this split**

The blog isn't just long-form writing. It's three kinds of content I actually produce:

- **Posts** — the occasional write-up, like this one
- **Snippets** — small, reusable pieces of code I don't want to look up twice
- **Solutions** — specific problems I hit and how I fixed them, closer to a changelog than an essay

Keeping them in one collection with a `type` field, instead of three separate systems, means one listing page, one template, and one place to add new content without deciding where it "belongs" first.

This post is the placeholder proving the format works. The real content — the stuff worth reading — comes next.