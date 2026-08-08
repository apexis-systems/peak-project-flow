import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Clock, FileQuestion, List, Loader2 } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { AnimatedSection } from "@/components/landing/AnimatedSection";
import { SignupModal } from "@/components/landing/SignupModal";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/common/SEO";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogFaqs } from "@/components/blog/BlogFaqs";
import { BlogShare } from "@/components/blog/BlogShare";
import { BlogEmptyState } from "@/components/blog/BlogEmptyState";
import { getBlogById, getBlogs } from "@/services/blogService";
import { formatBlogDate, normalizeBlog, stripHtml } from "@/lib/blog";

const SITE_URL = "https://apexis.in";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [signupOpen, setSignupOpen] = useState(false);

  const { data: rawBlog, isLoading, isError } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id as string),
    enabled: !!id,
  });

  const { data: allRaw } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  const blog = useMemo(
    () => (rawBlog && rawBlog.status === "Published" ? normalizeBlog(rawBlog) : undefined),
    [rawBlog],
  );

  const tocItems = useMemo(
    () =>
      blog?.contentBlocks
        .filter((b) => b.type === "heading")
        .map((b) => ({ id: b.id, label: stripHtml(b.html) })) ?? [],
    [blog],
  );

  const relatedBlogs = useMemo(
    () =>
      blog
        ? (allRaw ?? [])
            .filter((b) => b.status === "Published" && b.id !== blog.id)
            .slice(0, 3)
            .map(normalizeBlog)
        : [],
    [allRaw, blog],
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <ScrollProgress />
        <Navbar onOpenSignup={() => setSignupOpen(true)} />
        <div className="flex min-h-[70vh] items-center justify-center px-4 pt-16">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
        <Footer />
        <SignupModal open={signupOpen} onOpenChange={setSignupOpen} />
      </div>
    );
  }

  if (isError || !blog) {
    return (
      <div className="min-h-screen bg-background">
        <ScrollProgress />
        <Navbar onOpenSignup={() => setSignupOpen(true)} />
        <div className="container mx-auto px-4 py-24 lg:px-8 lg:py-32">
          <AnimatedSection>
            <BlogEmptyState
              icon={FileQuestion}
              title="Post Not Found"
              description="This blog post may have been removed, unpublished, or the link might be incorrect."
              actionLabel="Browse All Posts"
              onAction={() => navigate("/blogs")}
              secondaryLabel="Back to Home"
              secondaryHref="/"
            />
          </AnimatedSection>
        </div>
        <Footer />
        <SignupModal open={signupOpen} onOpenChange={setSignupOpen} />
      </div>
    );
  }

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.excerpt,
    image: blog.coverImage,
    datePublished: blog.publishedAt,
    author: {
      "@type": "Organization",
      name: blog.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "Apexis",
      url: SITE_URL,
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={blog.metaTitle || blog.title}
        description={blog.metaDescription || blog.excerpt}
        canonicalUrl={`/blogs/${blog.id}`}
        ogType="article"
        ogImage={blog.coverImage}
        jsonLd={blogSchema}
      />
      <ScrollProgress />
      <Navbar onOpenSignup={() => setSignupOpen(true)} />

      <article className="pt-28 pb-20 lg:pt-32">
        <div className="container mx-auto max-w-5xl px-4 lg:px-8">
          <AnimatedSection>
            <Link
              to="/blogs"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span
                className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold"
                style={{ borderColor: "rgba(249, 116, 21, 0.3)", color: "#f97415" }}
              >
                {blog.category}
              </span>
              <span className="text-xs text-muted-foreground">{formatBlogDate(blog.publishedAt)}</span>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {blog.readTime}
              </span>
            </div>

            <h1 className="mb-5 font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
              {blog.title}
            </h1>
            <p className="mb-8 max-w-3xl text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
              {blog.excerpt}
            </p>

            <div className="flex flex-wrap items-center justify-between gap-4 border-y border-border/60 py-5">
              <div className="flex items-center gap-3">
                <img
                  src={blog.authorAvatar}
                  alt={blog.authorName}
                  className="h-11 w-11 rounded-full object-cover ring-1 ring-border"
                />
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">{blog.authorName}</p>
                  <p className="text-xs text-muted-foreground">{blog.authorRole}</p>
                </div>
              </div>
              <BlogShare title={blog.title} url={`${SITE_URL}/blogs/${blog.id}`} />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-border/60 bg-card">
              <img
                src={blog.coverImage}
                alt={blog.title}
                className="h-auto w-full max-h-[480px] object-cover"
              />
            </div>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_260px]">
            <AnimatedSection delay={0.1}>
              <div className="blog-prose">
                {blog.contentBlocks.map((block) => (
                  <div
                    key={block.id}
                    id={block.type === "heading" ? block.id : undefined}
                    dangerouslySetInnerHTML={{ __html: block.html }}
                  />
                ))}
              </div>

              {blog.tags.length > 0 && (
                <div className="mt-10 flex flex-wrap gap-2 border-t border-border/60 pt-8">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              <BlogFaqs faqs={blog.faqs} />
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="sticky top-24 flex flex-col gap-6">
                {tocItems.length > 0 && (
                  <div className="rounded-xl border border-border/60 bg-card p-6">
                    <div className="mb-4 flex items-center gap-2">
                      <List className="h-4 w-4" style={{ color: "#f97415" }} />
                      <h3 className="font-display text-sm font-semibold tracking-wide">
                        Table of Contents
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {tocItems.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="text-sm font-light leading-snug text-muted-foreground transition-colors hover:text-[#f97415]"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="rounded-xl border border-border/60 bg-foreground/[0.03] p-6">
                  <h3 className="mb-1 font-display text-base font-bold text-foreground">
                    See APEXISpro in Action
                  </h3>
                  <p className="mb-5 text-sm font-light leading-relaxed text-muted-foreground">
                    Book a free walkthrough and see how structured reporting fits your site workflow.
                  </p>
                  <Button variant="hero" className="w-full" onClick={() => setSignupOpen(true)}>
                    Book a Demo
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </article>

      {relatedBlogs.length > 0 && (
        <section className="border-t border-border/40 bg-card/30 py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection className="mb-10 text-center">
              <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                More from the <span className="text-gradient-gold">Blog</span>
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedBlogs.map((b, i) => (
                <AnimatedSection key={b.id} delay={0.05 * (i + 1)}>
                  <BlogCard blog={b} />
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <SignupModal open={signupOpen} onOpenChange={setSignupOpen} />
    </div>
  );
};

export default BlogDetail;
