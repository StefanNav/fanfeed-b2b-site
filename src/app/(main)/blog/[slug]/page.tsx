import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Section } from "@/components/ui/section";
import { CTASection } from "@/components/shared/cta-section";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/structured-data";
import { SITE_CONFIG } from "@/lib/constants";
import type { Metadata } from "next";

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  content: string;
};

const BLOG_POSTS: Record<string, BlogPost> = {
  "why-fan-intelligence-matters": {
    slug: "why-fan-intelligence-matters",
    title: "Why fan intelligence matters more than fan data",
    description:
      "Having data is not the same as having intelligence. Here's why the distinction matters for modern sports and entertainment organizations.",
    date: "2025-03-10",
    category: "Fan Intelligence",
    content: `Every sports organization, live entertainment venue, and hospitality brand has fan data. Ticketing records, email lists, purchase histories, attendance logs — the raw material is there. But having data is not the same as having intelligence.

Fan intelligence means turning fragmented signals into a coherent understanding of who your fans are, what they care about, how they engage, and what they're likely to do next. It's the difference between a spreadsheet of ticket purchases and a living profile that reveals behavioral patterns, emerging loyalty, and untapped opportunities.

Most organizations are still operating from the data side. They have the records but lack the system to connect, enrich, and activate them. That gap — between raw data and actionable understanding — is exactly where fan intelligence platforms like FanFeed OS sit.

The shift matters because the organizations that figure out fan intelligence first will be the ones that build stronger relationships, create better experiences, and capture more revenue per fan. The data was never the bottleneck. The system to make sense of it was.`,
  },
  "fragmented-fan-stack": {
    slug: "fragmented-fan-stack",
    title: "The fragmented fan stack: why most teams struggle to unify fan data",
    description:
      "Ticketing, merch, F&B, CRM, email — most organizations have plenty of data but no system to bring it together. A look at the structural problem.",
    date: "2025-02-24",
    category: "Data Strategy",
    content: `If you work in a front office, you already know the problem. Your ticketing data lives in one system. Merchandise sales sit in another. Food and beverage transactions are captured by a third. Email engagement lives in your ESP. CRM contacts are maintained separately. And your mobile app — if you have one — might not connect to any of them.

The result is a fragmented fan stack where the same fan can appear as five different records across five different platforms, none of which talk to each other cleanly.

This isn't a data problem. It's a system problem. And it creates downstream consequences: generic outreach because you don't know enough about any single fan, missed revenue opportunities because high-value behaviors go unnoticed, and a constant feeling that you're working from an incomplete picture.

The solution isn't adding another point solution on top of the pile. It's building a unification layer underneath — a system that resolves identities, connects signals, and creates a single profile that gets richer over time. That's the architectural approach FanFeed OS was designed around.`,
  },
  "beyond-transactional-profiles": {
    slug: "beyond-transactional-profiles",
    title: "Moving beyond transactional fan profiles",
    description:
      "Purchase history tells you what a fan bought. It doesn't tell you who they are. How behavioral and engagement signal changes the picture.",
    date: "2025-02-10",
    category: "Fan Profiles",
    content: `Most fan profiles today are essentially transactional records. They tell you what someone bought, when they attended, and maybe what emails they opened. That's useful — but it's a limited picture.

Transactional data tells you what happened. It doesn't tell you why. It doesn't reveal affinity, emerging loyalty, social influence, or the kind of deeper identity signals that separate a casual attendee from a superfan.

Behavioral and engagement signal fills that gap. When you know not just that a fan attended three games, but that they engaged with behind-the-scenes content, participated in polls, collected digital memorabilia, and shared content with friends — you're looking at a fundamentally different profile.

This is the value layer that the FanFeed App is designed to create. By giving fans a reason to engage directly, the app generates signal that traditional systems can't capture. And that signal flows back into FanFeed OS, enriching profiles and making every downstream action — from segmentation to outreach — more precise.

The organizations that invest in understanding fans beyond transactions will build the most durable competitive advantage.`,
  },
  "replacing-point-solutions": {
    slug: "replacing-point-solutions",
    title: "Why teams are replacing niche vendors with custom-built tools",
    description:
      "The economics and flexibility of building purpose-built systems versus renting expensive, rigid point solutions.",
    date: "2025-01-28",
    category: "Studio",
    content: `There's a growing frustration across sports and live entertainment: teams are paying too much for tools that do too little.

The typical vendor landscape is filled with narrow point solutions — expensive platforms that solve one specific problem, don't integrate well with anything else, and move slowly when you need changes. You end up with a patchwork of SaaS subscriptions that collectively cost more than they should and deliver less than they promise.

The alternative is building purpose-built tools around your actual workflows. Not from scratch — but with a team that understands the problem space and can ship quickly.

That's the idea behind FanFeed Studio. Instead of renting another rigid product, organizations work with Studio to identify the pain point, scope the right solution, and build something they own. Whether it's an outreach system, an internal dashboard, a chat tool, or an AI-powered workflow — the result is a tool that fits how the team actually works.

The economics tend to favor this approach too. A custom-built tool can often replace a vendor contract at lower total cost, with better flexibility and tighter integration into the broader fan intelligence stack.`,
  },
  "ai-fan-engagement": {
    slug: "ai-fan-engagement",
    title: "How AI is reshaping fan engagement operations",
    description:
      "From smarter segmentation to automated workflows, AI is changing what's possible for fan-facing teams. Here's what operators should know.",
    date: "2025-01-15",
    category: "AI & Technology",
    content: `AI isn't just a buzzword in sports and entertainment anymore — it's starting to reshape how fan-facing teams actually operate.

The most immediate applications are in segmentation and personalization. AI models can identify fan segments that manual analysis would miss, spot emerging high-value fans earlier, and help teams tailor outreach based on richer behavioral context.

Beyond segmentation, AI is enabling workflow automation. Repetitive tasks like email campaign setup, report generation, and data cleaning can be partially or fully automated. Internal copilots can help partnership teams prepare proposals, help marketing teams draft campaigns, or help operations teams surface anomalies in fan behavior.

The key is that these tools need to be grounded in good data. An AI model built on top of fragmented, incomplete fan records will produce fragmented, incomplete results. That's why the data unification layer matters so much — it's the foundation that makes AI useful rather than noisy.

FanFeed Studio helps teams build AI-powered tools that sit on top of the FanFeed OS data layer. Instead of bolting on generic AI features, organizations can create purpose-built automations and copilots designed around their specific workflows and data.

The organizations that start building these capabilities now will have a significant operational advantage within the next few years.`,
  },
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return Object.keys(BLOG_POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];
  if (!post) return {};

  return {
    title: `${post.title} | FanFeed Blog`,
    description: post.description,
    alternates: { canonical: `${SITE_CONFIG.url}/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${SITE_CONFIG.url}/blog/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS[slug];
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.title, href: `/blog/${slug}` },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          publisher: {
            "@type": "Organization",
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.url,
          },
          mainEntityOfPage: `${SITE_CONFIG.url}/blog/${slug}`,
        }}
      />

      <article>
        <header className="bg-gradient-to-b from-brand-muted/20 via-white to-white pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <Link
              href="/blog"
              className="mb-6 inline-flex items-center gap-1 text-sm font-medium text-muted hover:text-foreground"
            >
              <ArrowLeft className="h-3 w-3" aria-hidden="true" />
              Back to Insights
            </Link>
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
            <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {post.description}
            </p>
          </div>
        </header>

        <Section>
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg max-w-none">
              {post.content.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="mb-6 text-base leading-relaxed text-muted last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Section>
      </article>

      <CTASection
        headline="See what FanFeed could unlock for your organization"
        body="Learn how FanFeed OS unifies fan data into actionable intelligence."
        primaryCta={{ label: "Book a demo", href: "/contact" }}
        secondaryCta={{ label: "Explore the platform", href: "/" }}
      />
    </>
  );
}
