import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage = "/og.png",
}: PageMeta): Metadata {
  const url = `${SITE_CONFIG.url}${path}`;
  const fullTitle =
    path === "/" ? `${SITE_CONFIG.name} — ${title}` : `${title} | ${SITE_CONFIG.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_CONFIG.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
