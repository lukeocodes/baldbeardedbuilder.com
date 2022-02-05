export interface BlogPostFrontmatter {
  description: string;
  canonicalUrl: string;
  excerpt: string;
  title: string;
  slug: string;
  cover_image: string;
  publishedAt: number;
  tags: Array<string>;
  body: string;
}
