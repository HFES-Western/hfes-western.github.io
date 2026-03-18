- pi_name: Dr. Jane Smith
  department: Kinesiology
  lab_name: Human Performance Lab
  url: https://example.com
```
Your labs page loops over this to build the table automatically.

---

## `_includes/`

These are **reusable HTML snippets**. The problem they solve: you don't want to copy/paste your navbar into every single page. Instead you write it once here, and pull it in anywhere with `{% include nav.html %}`.

**`_includes/header.html`** — the top of every page. Contains your site title, Western logo, and the purple bar. Just HTML.

**`_includes/nav.html`** — the navigation bar. Contains the `<nav>` element and loops over `_data/navigation.yml` to build the links.

**`_includes/footer.html`** — the bottom of every page. Contact info, links, copyright. Just HTML.

Nothing in `_includes/` is a full page on its own. These are **chunks** that get embedded into layouts.

---

## `_layouts/`

These are **full page templates** — the HTML shell that wraps around your content. Every page on your site picks a layout in its front matter.

**`_layouts/default.html`** — the base shell that every page uses. It contains `<!DOCTYPE html>`, `<head>`, `<body>`, pulls in your includes, and has `{{ content }}` where the page's actual content gets injected:
```
default.html
├── <head> with CSS links
├── {% include header.html %}
├── {% include nav.html %}
├── {{ content }}          ← your page's markdown renders here
└── {% include footer.html %}
```

**`_layouts/page.html`** — an optional second layout that *extends* default. You'd use this for content pages that need something extra (like a sidebar, or a breadcrumb). It starts with:
```
---
layout: default
title: Research Labs
permalink: /labs/
---