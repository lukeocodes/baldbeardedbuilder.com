import { client } from '../lib/sanityClient.js';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

export async function getSanityContent({ query, variables = {} }) {
  const { data } = await fetch(
    `https://${import.meta.env.PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/graphql/${import.meta.env.PUBLIC_SANITY_DATASET}/default`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.PUBLIC_SANITY_READ_TOKEN}`
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    },
  ).then((response) => response.json())

  return data;
}

export function getSanityImageUrl(source) {
  return builder.image(source);
}
