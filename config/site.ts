export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Summer Twillight",
  description:
    ".",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About Us",
      href: "/about-us",
    },
    {
      title: "Services",
      href: "/services",
    },
    {
      title: "Packages",
      href: "/packages",
    },
    {
      title: "Portfolio",
      href: "/portfolio",
    },
    {
      title: "Contact Us",
      href: "/contact-us",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
