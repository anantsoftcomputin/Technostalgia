export const metadata = {
  title: "Explore Classic Tech Categories | Techsnostalgia",
  description:
    "Dive into the world of vintage gadgets, retro gaming, and nostalgic tech. Explore different categories that celebrate the golden age of technology at Techsnostalgia.",
  openGraph: {
    title: "Explore Classic Tech Categories | Techsnostalgia",
    description:
      "Dive into the world of vintage gadgets, retro gaming, and nostalgic tech. Explore different categories that celebrate the golden age of technology at Techsnostalgia.",
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
    title: "Explore Classic Tech Categories | Techsnostalgia",
    description:
      "Dive into the world of vintage gadgets, retro gaming, and nostalgic tech. Explore different categories that celebrate the golden age of technology at Techsnostalgia.",
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

import Categories from "@/components/Categories/Categories";

export default function Category() {
  return <Categories />;
}
