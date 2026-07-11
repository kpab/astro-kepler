---
title: 'Writing Markdown That Scales'
description: 'Frontmatter conventions, tagging, and structure that keep a growing blog maintainable.'
pubDate: 2026-07-05
tags: ['Content', 'Tutorial']
author: 'Kepler Team'
---

A blog with five posts is easy. A blog with five hundred needs conventions. Here
are the ones baked into Kepler.

## Keep frontmatter minimal but strict

Every post needs a `title`, a `description`, and a `pubDate`. The description is
not optional busywork — it powers both the card excerpt and the meta description
that search engines read.

```yaml
---
title: 'A Clear, Specific Title'
description: 'One sentence that would make you click.'
pubDate: 2026-07-05
tags: ['Content']
---
```

## Tag with intent

Tags are navigation, not decoration. Pick a small, reusable vocabulary and stick
to it. Five well-used tags beat fifty one-off ones. Kepler slugifies tags for
you, so `Web Performance` and `web-performance` resolve to the same page.

## Let drafts breathe

Set `draft: true` and a post stays visible while you write locally but disappears
from the production build. No branches, no half-finished pages going live.
