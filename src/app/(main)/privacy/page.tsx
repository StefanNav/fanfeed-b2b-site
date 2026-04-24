import { Section } from "@/components/ui/section";
import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/structured-data";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Privacy Policy",
  description:
    "FanFeed privacy policy. Learn how we collect, use, and protect your information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Privacy Policy", href: "/privacy" },
        ])}
      />

      <section className="bg-gradient-to-b from-brand-muted/10 via-white to-white pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-muted">
            Last updated: March 2025
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl space-y-8">
          <div>
            <h2 className="text-xl font-semibold">1. Information We Collect</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We collect information you provide directly to us, such as when
              you fill out a contact form, request a demo, or communicate with
              us. This may include your name, email address, organization name,
              website, and any message content you submit.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">2. How We Use Your Information</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We use the information we collect to respond to your inquiries,
              provide information about our products and services, improve our
              website and offerings, and communicate with you about updates and
              relevant opportunities.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">3. Information Sharing</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We do not sell, trade, or rent your personal information to third
              parties. We may share information with trusted service providers
              who assist us in operating our website and conducting our business,
              provided those parties agree to keep this information
              confidential.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">4. Data Security</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We implement appropriate technical and organizational measures to
              protect the personal information we collect and process. However,
              no method of electronic transmission or storage is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">5. Cookies and Analytics</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Our website may use cookies and similar tracking technologies to
              enhance your browsing experience and collect usage analytics. You
              can control cookie preferences through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">6. Your Rights</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              You have the right to access, update, or delete your personal
              information. You may also opt out of marketing communications at
              any time. To exercise any of these rights, please contact us at
              privacy@fanfeed.ai.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">7. Changes to This Policy</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the &quot;Last updated&quot; date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">8. Contact Us</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              If you have questions about this Privacy Policy, please contact us
              at privacy@fanfeed.ai or through our contact page.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
