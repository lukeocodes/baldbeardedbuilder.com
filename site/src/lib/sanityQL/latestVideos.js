export default allPosts = `{
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