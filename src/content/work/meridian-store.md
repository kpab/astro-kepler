---
title: 'Meridian Store'
description: 'A headless storefront tuned for speed, with sub-second navigation on every page.'
category: 'Website'
tech: ['Astro', 'Tailwind', 'Stripe', 'Cloudflare']
year: 2025
role: 'Frontend'
client: 'Meridian'
url: 'https://example.com'
order: 3
---

## Overview

Meridian sells a small, considered catalog and wanted a storefront that felt as
crafted as the products. Speed was the brief, and speed was the deliverable.

## The challenge

Their previous platform shipped megabytes of JavaScript to render a product grid.
Pages felt sluggish on exactly the mobile connections their customers used.

## Approach

- Rebuilt on Astro with static product pages and a tiny cart island
- Deferred all non-critical scripts; the catalog is pure HTML and CSS
- Moved checkout to a hosted Stripe flow to keep the bundle lean

## Outcome

Median page weight fell by 80%, and the store now scores in the high 90s on
Lighthouse across the board.
