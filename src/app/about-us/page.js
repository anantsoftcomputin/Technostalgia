export const metadata = {
  title: "About Techsnostalgia: A Journey Through the Tech of Yesteryear",
  description:
    "At Techsnostalgia, we celebrate the past by reminiscing about the technology that once shaped our world. Discover how we honor vintage tech and its enduring legacy.",
  openGraph: {
    title: "About Techsnostalgia: A Journey Through the Tech of Yesteryear",
    description:
      "At Techsnostalgia, we celebrate the past by reminiscing about the technology that once shaped our world. Discover how we honor vintage tech and its enduring legacy.",
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
    title: "About Techsnostalgia: A Journey Through the Tech of Yesteryear",
    description:
      "At Techsnostalgia, we celebrate the past by reminiscing about the technology that once shaped our world. Discover how we honor vintage tech and its enduring legacy.",
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

import AboutUs from "@/components/AboutUs/AboutUs";

export default function AboutPage() {
  return <AboutUs />;
}
