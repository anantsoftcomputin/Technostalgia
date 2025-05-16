export const metadata = {
  title: "Techsnostalgia Blog | Reliving the Glory of Classic Tech",
  description:
    "Explore the Techsnostalgia blog for deep dives into retro gadgets, vintage electronics, and the nostalgic allure of outdated technology.",
  openGraph: {
    title: "Techsnostalgia Blog | Reliving the Glory of Classic Tech",
    description:
      "Explore the Techsnostalgia blog for deep dives into retro gadgets, vintage electronics, and the nostalgic allure of outdated technology.",
    images: [
      {
        url: "https://techsnostalgia.com/techsnostalgia.png",
        alt: "Techsnostalgia Logo",
        width: 800,
        height: 600,
      },
    ],
    siteName: "Techsnostalgia",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techsnostalgia Blog | Reliving the Glory of Classic Tech",
    description:
      "Explore the Techsnostalgia blog for deep dives into retro gadgets, vintage electronics, and the nostalgic allure of outdated technology.",
    images: [
      {
        url: "https://techsnostalgia.com/techsnostalgia.png",
        alt: "Techsnostalgia Logo",
        width: 800,
        height: 600,
      },
    ],
  },
};

import Blog from "@/components/Blogs/Blog";

export default function Blogs() {
  return <Blog />;
}
