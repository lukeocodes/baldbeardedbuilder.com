
export default function useSanity(query, variables) {
  return useFetch(
    `https://${import.meta.env.VITE_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v1/graphql/${import.meta.env.VITE_PUBLIC_SANITY_DATASET}/default`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_PUBLIC_SANITY_READ_TOKEN}`
      },
      body: {
        query,
        variables
      }
    }
  )
}
