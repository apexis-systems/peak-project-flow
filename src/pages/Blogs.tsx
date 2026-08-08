import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ScrollProgress } from "@/components/landing/ScrollProgress";
import { AnimatedSection } from "@/components/landing/AnimatedSection";
import { SignupModal } from "@/components/landing/SignupModal";
import { SEO } from "@/components/common/SEO";
import { BlogCard } from "@/components/blog/BlogCard";
import { BlogEmptyState } from "@/components/blog/BlogEmptyState";
import { getBlogs } from "@/services/blogService";
import { normalizeBlog } from "@/lib/blog";

const blogsSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "APEXISpro Blog",
  url: "https://apexis.in/blogs",
  publisher: {
    "@type": "Organization",
    name: "Apexis",
    url: "https://apexis.in",
  },
};

const Blogs = () => {
  const [signupOpen, setSignupOpen] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });

  const blogs = useMemo(
    () =>
      (data ?? [])
        .filter((b) => b.status === "Published")
        .map(normalizeBlog)
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()),
    [data],
  );

  const latestBlogs = blogs.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog"
        description="Insights on construction site reporting, structured documentation, and the product philosophy behind APEXISpro — written for architects, contractors, and project owners."
        canonicalUrl="/blogs"
        jsonLd={blogsSchema}
      />
      <ScrollProgress />
      <Navbar onOpenSignup={() => setSignupOpen(true)} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(249,116,21,0.12), transparent)" }}
        />
        <div className="container relative mx-auto px-4 lg:px-8">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-wide"
              style={{ borderColor: "rgba(249, 116, 21, 0.3)", color: "#f97415" }}
            >
              Curated by APEXIS
            </span>
            <h1 className="mb-5 font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              The Apexis <span className="text-gradient-gold">Blog</span>
            </h1>
            <p className="mx-auto max-w-xl text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
              Field-tested notes on construction site reporting, structured documentation, and how modern project teams build trust with the people they answer to.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {isLoading ? (
        <section className="py-24 lg:py-32">
          <div className="flex items-center justify-center text-muted-foreground">
            <Loader2 className="h-6 w-6 animate-spin" />
          </div>
        </section>
      ) : blogs.length === 0 ? (
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <AnimatedSection>
              <BlogEmptyState
                title="New Stories Are on the Way"
                description="We're putting together field notes on construction site reporting and structured documentation. Check back soon, or book a walkthrough and we'll keep you posted."
                actionLabel="Book a Demo"
                onAction={() => setSignupOpen(true)}
                secondaryLabel="Back to Home"
                secondaryHref="/"
              />
            </AnimatedSection>
          </div>
        </section>
      ) : (
        <>
          {/* Latest posts */}
          <section className="py-16 lg:py-20">
            <div className="container mx-auto px-4 lg:px-8">
              <AnimatedSection className="mb-10 flex items-end justify-between">
                <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  Latest <span className="text-gradient-gold">Posts</span>
                </h2>
              </AnimatedSection>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {latestBlogs.map((blog, i) => (
                  <AnimatedSection key={blog.id} delay={0.05 * (i + 1)}>
                    <BlogCard blog={blog} />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* All posts */}
          <section className="border-t border-border/40 bg-card/30 py-16 lg:py-20">
            <div className="container mx-auto px-4 lg:px-8">
              <AnimatedSection className="mb-10">
                <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  All <span className="text-gradient-gold">Blogs</span>
                </h2>
              </AnimatedSection>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog, i) => (
                  <AnimatedSection key={blog.id} delay={0.05 * (i + 1)}>
                    <BlogCard blog={blog} />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
      <SignupModal open={signupOpen} onOpenChange={setSignupOpen} />
    </div>
  );
};

export default Blogs;
