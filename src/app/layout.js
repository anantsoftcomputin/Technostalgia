import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Script from "next/script";

export const metadata = {
  icons: {
    icon: [
      { url: "/techsnostalgia.png" },
      { url: "/techsnostalgia.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/ techsnostalgia.png", sizes: "180x180", type: "image/png" },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-T02TC97Y4Y"
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
              gtag('config', 'G-T02TC97Y4Y');
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
          content="-vEQwCv3N-7CYJlks9qASX9zmgZ-7sbhBPfH4JKkxT4"
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
