export default allPosts = `
query PostQuery($slug: String!) {
  allPost(where: {slug: {current: {eq: $slug}}}) {
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
    tags {
      title
    }
    excerpt
    body
  }  
}`;