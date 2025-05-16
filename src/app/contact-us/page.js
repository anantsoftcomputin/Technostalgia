export const metadata = {
  title: "Contact Techsnostalgia: Get in Touch with Us",
  description:
    "Want to share your favorite tech memories or ask a question? Contact Techsnos Talgia today and let’s chat about the technology that defined an era.",
  openGraph: {
    title: "Contact Techsnostalgia: Get in Touch with Us",
    description:
      "Want to share your favorite tech memories or ask a question? Contact Techsnos Talgia today and let’s chat about the technology that defined an era.",
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
    title: "Contact Techsnostalgia: Get in Touch with Us",
    description:
      "Want to share your favorite tech memories or ask a question? Contact Techsnos Talgia today and let’s chat about the technology that defined an era.",
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

import ContactUs from "@/components/ContactUs/ContactUs";

export default function contactUs() {
  return <ContactUs />;
}
