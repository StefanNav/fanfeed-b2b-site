export const SITE_CONFIG = {
  name: "FanFeed",
  tagline: "The operating system for modern fan intelligence",
  url: "https://fanfeed.ai",
  description:
    "FanFeed OS unifies fragmented fan data across sports, live events, and hospitality to create a richer, more actionable view of every fan.",
  email: "hello@fanfeed.ai",
  social: {
    twitter: "https://x.com/fanfeedhq",
    instagram: "https://www.instagram.com/fanfeed.ai/",
    linkedin: "https://www.linkedin.com/in/cole-rubin-57a65547",
  },
} as const;

export const NAV_ITEMS = [
  { label: "Platform", href: "/" },
  // { label: "App", href: "/app" },
  // { label: "Studio", href: "/studio" }, // Hidden for now
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOOTER_LINKS = {
  platform: [
    { label: "Platform", href: "/" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;
