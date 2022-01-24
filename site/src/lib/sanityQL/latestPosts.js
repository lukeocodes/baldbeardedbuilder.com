export default allPosts = `{
  allPost(limit: 6, sort: [ { publishedAt: DESC } ]) {
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