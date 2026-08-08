import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import type { Blog } from "@/types/blog";
import { formatBlogDate } from "@/lib/blog";

interface BlogCardProps {
  blog: Blog;
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link
      to={`/blogs/${blog.id}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-all duration-500 hover:shadow-lg hover:shadow-foreground/[0.03] hover:-translate-y-1"
    >
      <div className="overflow-hidden aspect-[16/10]">
        <img
          src={blog.coverImage}
          alt={blog.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center gap-3">
          <span
            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
            style={{ borderColor: "rgba(249, 116, 21, 0.3)", color: "#f97415" }}
          >
            {blog.category}
          </span>
          <span className="text-xs text-muted-foreground">{formatBlogDate(blog.publishedAt)}</span>
        </div>

        <h3 className="mb-2 font-display text-lg font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-[#f97415]">
          {blog.title}
        </h3>

        <p className="flex-1 line-clamp-2 text-sm font-light text-muted-foreground">{blog.excerpt}</p>

        <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4">
          <div className="flex items-center gap-2">
            <img
              src={blog.authorAvatar}
              alt={blog.authorName}
              className="h-6 w-6 rounded-full object-cover ring-1 ring-border"
            />
            <span className="text-xs font-medium text-foreground/80">{blog.authorName}</span>
          </div>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            {blog.readTime}
          </span>
        </div>
      </div>

      <ArrowUpRight className="absolute right-5 top-5 h-4 w-4 -translate-y-1 translate-x-1 text-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100" />
    </Link>
  );
}
