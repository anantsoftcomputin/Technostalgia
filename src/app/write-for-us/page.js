export const metadata = {
  title: "Write for Us - Guest Post Guidelines | Techsnostalgia.com",
  description:
    "Interested in writing for Techsnostalgia? Explore our guest post guidelines to submit high-quality, tech-focused content and become a valued contributor.",
  
    openGraph: {
    title: "Write for Us - Guest Post Guidelines | Techsnostalgia.com",
    description:
      "Interested in writing for Techsnostalgia? Explore our guest post guidelines to submit high-quality, tech-focused content and become a valued contributor.",
    url: "https://techsnostalgia.com/write-for-us",
    images: [
      {
        url: "https://techsnostalgia.com/techsnostalgia.png",
        width: 800,
        height: 600,
        alt: "Techsnostalgia Logo",
      },
    ],
    siteName: "Techsnostalgia",
    locale: "en_US",
    type: "website",
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Write for Us - Guest Post Guidelines | Techsnostalgia.com",
    description:
      "Learn how to contribute to Techsnostalgia by following our guest post submission guidelines. Share your knowledge and grow your author profile.",
    images: [
      {
        url: "https://techsnostalgia.com/techsnostalgia.png",
        width: 800,
        height: 600,
        alt: "Techsnostalgia Logo",
      },
    ],
  },
};

import WriteForUs from "@/components/WriteForUs/WriteForUs";

export default function writeForUsPage() {
  return <WriteForUs />;
}
