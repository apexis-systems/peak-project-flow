export interface BlogContentBlock {
  id: string;
  html: string;
  type: string;
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface BlogAuthor {
  id: number;
  name: string;
  email: string;
}

/** Raw shape returned by the blog detail API (GET /blogs/:id). */
export interface BlogApiResponse {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  content_blocks: BlogContentBlock[];
  contentBlocks: BlogContentBlock[];
  faqs: BlogFaq[];
  category: string;
  meta_title: string;
  metaTitle: string;
  meta_description: string;
  metaDescription: string;
  author_name: string;
  authorName: string;
  author_role: string;
  authorRole: string;
  author_avatar: string;
  authorAvatar: string;
  cover_image: string;
  coverImage: string;
  tags: string[];
  primary_keywords: string[];
  primaryKeywords: string[];
  secondary_keywords: string[];
  secondaryKeywords: string[];
  read_time: string;
  readTime: string;
  published_at: string;
  publishedAt: string;
  status: string;
  created_by: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  author: BlogAuthor;
}

/** Normalized blog shape used throughout the UI. */
export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  contentBlocks: BlogContentBlock[];
  faqs: BlogFaq[];
  category: string;
  metaTitle: string;
  metaDescription: string;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  coverImage: string;
  tags: string[];
  primaryKeywords: string[];
  secondaryKeywords: string[];
  readTime: string;
  publishedAt: string;
}
