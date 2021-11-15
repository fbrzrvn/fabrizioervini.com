---
date: 'Nov 10, 2021'
title: 'Static Generation vs Server-side Rendering'
tags: ['#test', '#ssr', '#ssg']
thumbnail: 'https://miro.medium.com/max/700/0*wmXQfUuyN2IhVDg3'
---

## Two Forms of Pre-rendering

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side
Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at
  **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML
  on **each request**.

Importantly, Next.js lets you **choose** which pre-rendering form to use for
each page. You can create a "hybrid" Next.js app by using Static Generation for
most pages and using Server-side Rendering for others.

## When to Use Static Generation or Server-side Rendering

Next recommend using **Static Generation** (with and without data) whenever
possible because your page can be built once and served by CDN, which makes it
much faster than having a server render the page on every request.

You can use Static Generation for many types of pages, including:

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

You should ask yourself: "Can I pre-render this page **ahead** of a user's
request?" If the answer is yes, then you should choose Static Generation.

On the other hand, Static Generation is **not** a good idea if you cannot
pre-render a page ahead of a user's request. Maybe your page shows frequently
updated data, and the page content changes on every request.

In that case, you can use **Server-Side Rendering**. It will be slower, but the
pre-rendered page will always be up-to-date. Or you can skip pre-rendering and
use client-side JavaScript to populate data.

### Static Generation with and without Data

Static Generation can be done with and without data.

So far, all the pages we’ve created do not require fetching external data. Those
pages will automatically be statically generated when the app is built for
production.

However, for some pages, you might not be able to render the HTML without first
fetching some external data. Maybe you need to access the file system, fetch
external API, or query your database at build time. Next.js supports this case —
Static Generation **with data** — out of the box.

### Static Generation with Data using getStaticProps

How does it work? Well, in Next.js, when you export a page component, you can
also export an `` `async`  `` function called `` `getStaticProps` ``. If you do
this, then:

- `` `getStaticProps` `` runs at build time in production, and…
- Inside the function, you can fetch external data and send it as props to the
  page.

```ts
export default function Home(props) { ... }

export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const data = ...

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: ...
  }
}
```

Essentially, `` `getStaticProps` `` allows you to tell Next.js: “Hey, this page
has some data dependencies — so when you pre-render this page at build time,
make sure to resolve them first!”

> **Note**: In development mode, `` `getStaticProps` `` runs on each request
> instead.
