export default allPosts = `{
  allPost(sort: [ { publishedAt: DESC } ]) {
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