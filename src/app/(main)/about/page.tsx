import { CTASection } from "@/components/shared/cta-section";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/structured-data";
import { generatePageMetadata } from "@/lib/metadata";
import { AboutHero } from "@/components/marketing/about-hero";
import { WhyThisMomentMatters } from "@/components/marketing/why-this-moment";
import { WhyFanFeed } from "@/components/marketing/why-fanfeed";

export const metadata = generatePageMetadata({
  title: "About — Built for the future of fan intelligence",
  description:
    "FanFeed sits at the intersection of fan engagement, data infrastructure, and product execution — helping modern sports and live entertainment organizations better understand and activate their audiences.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ])}
      />

      {/* Section 1 & 2 — Hero & Mission */}
      <AboutHero />

      {/* Section 3 + 4 — Why now + Team (combined) */}
      <WhyThisMomentMatters />

      {/* Section 5 — What makes FanFeed different */}
      <WhyFanFeed />

      {/* Section 7 — Final CTA */}
      <CTASection
        headline="Want to see what we're building?"
        primaryCta={{ label: "Talk to the team", href: "/contact" }}
      />
    </>
  );
}
