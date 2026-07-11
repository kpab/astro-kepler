---
title: 'Shipping Fast Static Sites'
description: 'Why Kepler ships almost no JavaScript, and how Astro keeps pages fast by default.'
pubDate: 2026-07-01
tags: ['Performance', 'Astro']
author: 'Kepler Team'
---

Speed is a feature. A theme that looks great but loads slowly still loses. Kepler
leans on Astro's architecture to stay fast without any tuning on your part.

## Zero JavaScript by default

Astro renders components to HTML at build time and ships **no client-side
JavaScript** unless you explicitly ask for it. Kepler's interactions — the FAQ
accordion, the pricing toggle — are a few lines of vanilla `<script>`, not a
framework runtime.

## What that buys you

- Faster first paint, because there is no hydration to wait on
- Smaller bundles, because there is no framework to download
- Better Core Web Vitals, more or less for free

## Measure, do not guess

When you do add interactivity, add it island by island and measure the cost.
The best-performing script is the one you never shipped.
