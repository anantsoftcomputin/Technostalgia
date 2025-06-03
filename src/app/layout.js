import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Techsnostalgia: Celebrating the Classics of Outdated Technology",
  description:
    "Join us at Techsnostalgia as we revisit the nostalgic world of vintage tech. Relive the golden era of outdated gadgets and explore the stories behind them.",
  icons: {
    icon: [
      { url: "/techsnostalgia.png" },
      { url: "/techsnostalgia.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/techsnostalgia.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    title: "Techsnostalgia: Celebrating the Classics of Outdated Technology",
    description:
      "Join us at Techsnostalgia as we revisit the nostalgic world of vintage tech. Relive the golden era of outdated gadgets and explore the stories behind them.",
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
    title: "Techsnostalgia: Celebrating the Classics of Outdated Technology",
    description:
      "Join us at Techsnostalgia as we revisit the nostalgic world of vintage tech. Relive the golden era of outdated gadgets and explore the stories behind them.",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L4GRLBC0WF"
        ></Script>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag('js', new Date());
              gtag('config', 'G-L4GRLBC0WF');
            `,
          }}
        ></Script>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2283636579212292"
          crossorigin="anonymous"
        ></Script>
        <meta
          name="google-site-verification"
          content="G_BEBwfPy8ovKni0OryMWcBcjp8VJkzpyYHnIXOtkco"
        ></meta>
        <meta
          name="google-adsense-account"
          content="ca-pub-2283636579212292"
        ></meta>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
