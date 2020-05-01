---
title: Always with the Frontmatter issues
type: article
date: 2020-04-29
author: Allen
meta:
  - description: First real post on this blog ranting about frontmatter.
  - keywords: Opinion VueJS Vuepress Markdown Frontmatter
---

## Some notes to go by - I hate frontmatter

To begin with, for the first three hours of using frontmatter I thought that it was *FONTmatter* because that would make sense. But, anyways.

When making these posts I need to make sure that the `frontmatter` is following the correct format:

``` markdown
---
title: <some title>
type: <some type> # from me
date: <YYY-MM-DD>
author: <author>
sidebar: <0-1-2> # probably don't even need at this point
meta:
  - name: <name of property>
    content: <content to go along with that prop>
  - name: ...
    content: ...
---
```

The `meta` variable was tripping me up. From the vue docs:

``` markdown
meta

    Type: array
    Default: undefined

Specify extra meta tags to be injected:

---
meta:
  - name: description
    content: hello
  - name: keywords
    content: super duper SEO
---
```

They don't say that there is really a specific format, but if it doesn't follow the format that is shown vuejs fails at runtime.

(end)
