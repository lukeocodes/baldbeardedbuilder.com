import dotenv from 'dotenv';
import fs from 'fs';
import { mkdir, writeFile } from 'fs/promises';
import fetch from 'node-fetch';

dotenv.config();

const postDirectory = 'src/pages/posts';
const videoDirectory = 'src/pages/videos';

async function main() {

  await restorePosts();
  await restoreVideos();

}

async function restorePosts() {
  const response = await getSanityContent({ query: allPosts });
  const allBlogPosts = response.allPost;

  if (!fs.existsSync(postDirectory)) {
    await mkdir(postDirectory);
  }

  for (const post of allBlogPosts) {

    const markdown = `---
slug: ${post.slug.current}
title: ${post.title}
publishedAt: ${post.publishedAt}
description: ${post.description}
canonicalUrl: ${post.canonicalUrl}
excerpt: ${post.excerpt}
cover_image: ${post.coverImage.asset.url}
tags: [${post.tags.map((tag) => tag.title).join(",")}]
---

${post.body}
    
    `
    await writeFile(`${postDirectory}/${post.slug.current}.md`, markdown);
  }

}


async function restoreVideos() {
  const response = await getSanityContent({ query: latestVideos });
  const allVideos = response.allVideo;

  if (!fs.existsSync(videoDirectory)) {
    await mkdir(videoDirectory);
  }

  for (const video of allVideos) {

    const markdown = `---
slug: ${video.slug.current}
title: ${video.title}
publishedAt: ${video.publishedAt}
url: ${video.description}
cover_image: ${video.coverImage.asset.url}
tags: [${video.tags.map((tag) => tag.title).join(",")}]
---
    
    `
    await writeFile(`${videoDirectory}/${video.slug.current}.md`, markdown);
  }

}

const client = {
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.PUBLIC_SANITY_DATASET,
  token: process.env.PUBLIC_SANITY_READ_TOKEN,
  useCdn: true,
};

async function getSanityContent({ query, variables = {} }) {
  const { data } = await fetch(
    `https://${client.projectId}.api.sanity.io/v1/graphql/${client.dataset}/default`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${client.token}`
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    },
  ).then((response) => response.json())

  return data;
}

const allPosts = `{
  allPost(sort: [ { publishedAt: DESC } ]) {
    slug {
      current
    }
    canonicalUrl
    title
  	publishedAt
    coverImage {
      asset {
        url
      }
    }
    tags {
      title
    }
    excerpt
    description
    body
  }
}`;

const latestVideos = `{
  allVideo(limit: 3, sort: [ { publishedAt: DESC } ]) {
    title
  	publishedAt
    url
    coverImage {
      asset {
        url
      }
    }
    tags {
      title
    }
  }
}`;

main();

