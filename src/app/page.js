import Hero from "@/components/Hero/Hero";
import TrendingBlogs from "@/components/TrendingBlogs/TrendingBlogs";
import LatestBlogs from "@/components/LatestBlogs/LatestBlogs";
import NewsLetter from "@/components/NewsLetter/NewsLetter";

export default function Home() {
  const homePageSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Techsnostalgia",
    url: "https://techsnostalgia.com",
    logo: "https://techsnostalgia.com/techsnostalgia.png",
    sameAs: [
      "https://www.facebook.com/techsnostalgia",
      "https://www.instagram.com/techsnostalgia",
      "https://x.com/techsnostalgia",
    ],
    description:
      "Join us at Techsnostalgia as we revisit the nostalgic world of vintage tech. Relive the golden era of outdated gadgets and explore the stories behind them.",
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }}
      />
      <div className="blob-container">
        <Hero />
        <TrendingBlogs />
        <LatestBlogs />
        <NewsLetter />
      </div>
    </>
  );
}
