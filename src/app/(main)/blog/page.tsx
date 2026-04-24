import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/structured-data";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Blog — Insights on fan intelligence, data, and modern sports tech",
  description:
    "Insights, perspectives, and updates from the FanFeed team on fan intelligence, fan data strategy, sports technology, and building modern tools for live events.",
  path: "/blog",
});

const BLOG_POSTS = [
  {
    slug: "why-fan-intelligence-matters",
    title: "Why fan intelligence matters more than fan data",
    description:
      "Having data is not the same as having intelligence. Here's why the distinction matters for modern sports and entertainment organizations.",
    date: "2025-03-10",
    category: "Fan Intelligence",
  },
  {
    slug: "fragmented-fan-stack",
    title: "The fragmented fan stack: why most teams struggle to unify fan data",
    description:
      "Ticketing, merch, F&B, CRM, email — most organizations have plenty of data but no system to bring it together. A look at the structural problem.",
    date: "2025-02-24",
    category: "Data Strategy",
  },
  {
    slug: "beyond-transactional-profiles",
    title: "Moving beyond transactional fan profiles",
    description:
      "Purchase history tells you what a fan bought. It doesn't tell you who they are. How behavioral and engagement signal changes the picture.",
    date: "2025-02-10",
    category: "Fan Profiles",
  },
  {
    slug: "replacing-point-solutions",
    title: "Why teams are replacing niche vendors with custom-built tools",
    description:
      "The economics and flexibility of building purpose-built systems versus renting expensive, rigid point solutions.",
    date: "2025-01-28",
    category: "Studio",
  },
  {
    slug: "ai-fan-engagement",
    title: "How AI is reshaping fan engagement operations",
    description:
      "From smarter segmentation to automated workflows, AI is changing what's possible for fan-facing teams. Here's what operators should know.",
    date: "2025-01-15",
    category: "AI & Technology",
  },
];

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
        ])}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-brand-muted/20 via-white to-white pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Insights
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Perspectives on fan intelligence, data strategy, and building
              modern tools for sports and live entertainment.
            </p>
          </div>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="divide-y divide-border">
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="py-8 first:pt-0 last:pb-0">
                <div className="flex items-center gap-3 text-sm text-muted">
                  <span className="rounded-full bg-brand-muted px-2.5 py-0.5 text-xs font-medium text-brand">
                    {post.category}
                  </span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="mt-3 text-xl font-semibold">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors hover:text-brand"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {post.description}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand hover:text-brand-dark"
                >
                  Read more
                  <ArrowRight className="h-3 w-3" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
