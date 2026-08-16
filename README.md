# personal-website

My personal website, built with [Astro](https://astro.build).

## Project structure

```
src/
├── components/       Reusable pieces (header, footer, post cards)
├── content/
│   └── blog/         Blog posts written in Markdown
├── layouts/          Page layouts (Layout.astro)
├── lib/              Small helper functions
├── pages/            Page routes (/, /blog, /blog/[post], /rss.xml)
├── styles/           Global CSS
└── content.config.ts Defines the blog collection and its schema
```

## Commands

All commands are run from the root of the project:

| Command         | Action                                       |
| :-------------- | :------------------------------------------- |
| `npm install`   | Installs dependencies                        |
| `npm run dev`   | Starts the local dev server                  |
| `npm run build` | Builds the production site into `./dist/`    |
| `npm run preview` | Preview the built site locally             |

## Writing a blog post

Create a new Markdown file in `src/content/blog/` with this frontmatter:

```md
---
title: 'My post title'
description: 'One or two sentences shown on the blog listing.'
pubDate: 2026-08-16
tags: ['mathematics', 'notes']
---

Your content in Markdown here. LaTeX works inline ($x^2$) or displayed:

$$
\int_{-\infty}^{\infty} e^{-x^2} \, dx = \sqrt{\pi}
$$
```

## LaTeX support

The site uses `remark-math` + `rehype-katex` (via Astro's Unified markdown processor). KaTeX styles are loaded only on blog post pages.
