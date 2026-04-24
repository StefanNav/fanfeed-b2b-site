import { Section } from "@/components/ui/section";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/structured-data";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Terms of Service",
  description:
    "FanFeed terms of service. Please read these terms carefully before using our website and services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Terms of Service", href: "/terms" },
        ])}
      />

      <section className="bg-gradient-to-b from-brand-muted/10 via-white to-white pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-sm text-muted">
            Last updated: March 2025
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-8">
          <div>
            <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              By accessing or using the FanFeed website and services, you agree
              to be bound by these Terms of Service. If you do not agree to
              these terms, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">2. Description of Services</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              FanFeed provides a fan intelligence platform, consumer
              application, and custom solutions studio for sports teams, live
              entertainment venues, and hospitality organizations. Service
              details, features, and availability may change as we continue to
              develop and improve our offerings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">3. Use of Website</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              You agree to use our website and services only for lawful purposes
              and in accordance with these Terms. You agree not to use the
              website in any way that could damage, disable, or impair the
              website or interfere with any other party&apos;s use of the
              website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">4. Intellectual Property</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              All content, features, and functionality on the FanFeed website —
              including text, graphics, logos, icons, and software — are owned
              by or licensed to FanFeed and are protected by copyright,
              trademark, and other intellectual property laws.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">5. Limitation of Liability</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              FanFeed shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages resulting from your use of or
              inability to use the website or services. Our total liability for
              any claim arising from these terms shall not exceed the amount you
              paid to us in the twelve months preceding the claim.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">6. Modifications</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We reserve the right to modify these Terms at any time. Changes
              will be posted on this page with an updated effective date. Your
              continued use of the website after changes are posted constitutes
              your acceptance of the modified Terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">7. Governing Law</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              These Terms shall be governed by and construed in accordance with
              the laws of the United States, without regard to conflict of law
              provisions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">8. Contact</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              For questions about these Terms, please contact us at
              legal@fanfeed.ai or through our contact page.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
