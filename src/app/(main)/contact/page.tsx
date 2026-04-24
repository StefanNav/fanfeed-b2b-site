import { JsonLd } from "@/components/shared/json-ld";
import { breadcrumbSchema } from "@/lib/structured-data";
import { generatePageMetadata } from "@/lib/metadata";
import { ContactContent } from "./contact-content";

export const metadata = generatePageMetadata({
  title: "Contact — Let's talk about your fan stack",
  description:
    "Get in touch with the FanFeed team. Whether you're exploring FanFeed OS, looking to enrich fan data, or interested in replacing a workflow or vendor, we'd love to learn more.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />
      <ContactContent />
    </>
  );
}
