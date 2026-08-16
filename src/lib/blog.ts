import type { Blog, BlogApiResponse } from "@/types/blog";

/** The API returns both snake_case and camelCase for most fields — this resolves to one clean shape. */
export function normalizeBlog(raw: BlogApiResponse): Blog {
  return {
    id: raw.id,
    title: raw.title,
    excerpt: raw.excerpt,
    slug: raw.slug,
    contentBlocks: raw.contentBlocks ?? raw.content_blocks ?? [],
    faqs: raw.faqs ?? [],
    category: raw.category,
    metaTitle: raw.metaTitle ?? raw.meta_title,
    metaDescription: raw.metaDescription ?? raw.meta_description,
    authorName: raw.authorName ?? raw.author_name ?? raw.author?.name,
    authorRole: raw.authorRole ?? raw.author_role,
    authorAvatar: raw.authorAvatar ?? raw.author_avatar,
    coverImage: raw.coverImage ?? raw.cover_image,
    tags: raw.tags ?? [],
    primaryKeywords: raw.primaryKeywords ?? raw.primary_keywords ?? [],
    secondaryKeywords: raw.secondaryKeywords ?? raw.secondary_keywords ?? [],
    readTime: raw.readTime ?? raw.read_time,
    publishedAt: raw.publishedAt ?? raw.published_at,
  };
}

/** Primary keywords first (highest SEO priority), then secondary — deduped, comma-joined for a <meta name="keywords"> tag. */
export function blogKeywords(blog: Pick<Blog, "primaryKeywords" | "secondaryKeywords">): string | undefined {
  const combined = [...(blog.primaryKeywords ?? []), ...(blog.secondaryKeywords ?? [])];
  const deduped = Array.from(new Set(combined.map((k) => k.trim()).filter(Boolean)));
  return deduped.length > 0 ? deduped.join(", ") : undefined;
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function formatBlogDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
