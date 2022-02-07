const client = {
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.PUBLIC_SANITY_DATASET,
  token: process.env.PUBLIC_SANITY_READ_TOKEN,
  useCdn: true,
};

export default function useSanity(query, variables) {
  const { data } = await useFetch(
    `https://${client.projectId}.api.sanity.io/v1/graphql/${client.dataset}/default`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${client.token}`
      },
      body: JSON.stringify({
        query,
        variables
      })
    }
  )
  return data;
}
