---
title: 'Orbit Analytics'
description: 'A real-time analytics dashboard that makes product metrics legible at a glance.'
category: 'Web App'
tech: ['Astro', 'TypeScript', 'D3', 'Cloudflare']
year: 2026
role: 'Design & Frontend'
client: 'Orbit Inc.'
url: 'https://example.com'
featured: true
order: 1
---

## Overview

Orbit Analytics turns a firehose of product events into a calm, readable
dashboard. The goal was a tool a founder could open every morning and understand
in ten seconds.

## The challenge

The existing dashboard buried the two numbers that mattered under thirty that did
not. Every chart competed for attention, and nothing told a story.

## Approach

- Established a strict visual hierarchy: one hero metric per view
- Replaced busy gridlines with sparse, labeled reference points
- Built the whole surface on a static Astro shell with hydrated islands only
  where interactivity earned its cost

## Outcome

Time-to-insight dropped from minutes to seconds in user testing, and the first
paint stayed under 400ms even on mid-range phones.
