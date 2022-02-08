<template>
  <article class="page">
    <header>
      <img src="{post.coverImage.asset.url}" alt="{post.title}" />
    </header>
    <main>
      <aside>
        <!-- <TableOfContents :toc="{ toc }" levels="{levels}"  /> -->
      </aside>
      <section class="content">
        <PageTopper :title="post.title" />
        <CanonicalNotice :canonicalUrl="post.canonicalUrl" />
      </section>
    </main>
  </article>
</template>
<script setup>
const currentPost = `query PostBySlug($slug: String) {
  allPost(where: {slug: {current:{eq: $slug}}}) {
    slug {
      current
    }
    title
    publishedAt
    coverImage {
     asset {
      url
     }
    }
    excerpt
  }
}`
const variables = { slug: $route.params.slug }
const { data, pending } = await useSanity(latestPosts, JSON.stringify(variables))
</script>
