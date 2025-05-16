"use client";
import Link from "next/link";
import {
  ArrowRight,
  Disc,
  Keyboard,
  Monitor,
  Users,
  Gamepad,
  HardDrive,
  Clock,
  Smartphone,
} from "lucide-react";

const coreBenefits = [
  {
    id: "core-benefit-1",
    icon: <Disc className="h-5 w-5 text-teal-600" aria-hidden="true" />,
    label: "Relive Retro Tech Memories",
  },
  {
    id: "core-benefit-2",
    icon: <Keyboard className="h-5 w-5 text-teal-600" aria-hidden="true" />,
    label: "Classic Hardware Features",
  },
  {
    id: "core-benefit-3",
    icon: <Users className="h-5 w-5 text-teal-600" aria-hidden="true" />,
    label: "Nostalgic Community",
  },
];

const features = [
  {
    id: "feature-1",
    icon: <Monitor className="h-6 w-6 text-teal-600" aria-hidden="true" />,
    bgColor: "bg-teal-100",
    title: "Vintage Computer Guides",
    description:
      "Explore the golden age of computing with our in-depth retro tech articles.",
  },
  {
    id: "feature-2",
    icon: <Gamepad className="h-6 w-6 text-teal-600" aria-hidden="true" />,
    bgColor: "bg-teal-100",
    title: "Classic Gaming Retrospectives",
    description:
      "Revisit the games and consoles that defined generations of gamers.",
  },
  {
    id: "feature-3",
    icon: <HardDrive className="h-6 w-6 text-teal-600" aria-hidden="true" />,
    bgColor: "bg-teal-100",
    title: "Tech Time Capsules",
    description:
      "Discover forgotten technologies that paved the way for today's devices.",
  },
];

const Hero = () => {
  return (
    <>
      <section
        aria-labelledby="hero-main-heading"
        className="relative overflow-hidden bg-teal-50 py-20 lg:py-28"
      >
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
          <Disc
            className="absolute text-teal-200 floating-animation"
            style={{
              width: "45px",
              height: "45px",
              top: "10%",
              left: "15%",
              animationDuration: "8s",
              animationDelay: "0s",
              transform: "rotate(15deg)",
            }}
            aria-hidden="true"
          />
          <Keyboard
            className="absolute text-teal-200 floating-animation-alt"
            style={{
              width: "35px",
              height: "35px",
              top: "30%",
              right: "10%",
              animationDuration: "10s",
              animationDelay: "1s",
            }}
            aria-hidden="true"
          />
          <Monitor
            className="absolute text-teal-200 floating-animation"
            style={{
              width: "55px",
              height: "55px",
              top: "55%",
              left: "5%",
              animationDuration: "7s",
              animationDelay: "2.5s",
              transform: "rotate(-25deg)",
            }}
            aria-hidden="true"
          />
          <Gamepad
            className="absolute text-teal-200 floating-animation-alt"
            style={{
              width: "30px",
              height: "30px",
              bottom: "15%",
              right: "20%",
              animationDuration: "9s",
              animationDelay: "4s",
            }}
            aria-hidden="true"
          />
          <Smartphone
            className="absolute text-teal-200 floating-animation"
            style={{
              width: "50px",
              height: "50px",
              bottom: "25%",
              left: "30%",
              animationDuration: "11s",
              animationDelay: "5.5s",
              transform: "rotate(5deg)",
            }}
            aria-hidden="true"
          />
          <HardDrive
            className="absolute text-teal-200 floating-animation-alt"
            style={{
              width: "25px",
              height: "25px",
              top: "75%",
              right: "8%",
              animationDuration: "6s",
              animationDelay: "1.5s",
              transform: "rotate(60deg) scaleX(-1)",
            }}
            aria-hidden="true"
          />
        </div>
        <div className="relative container mx-auto px-6 pt-12 pb-12 text-center z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-100 border border-teal-200 text-teal-800 mb-6 shadow-sm">
              <Clock
                className="h-4 w-4 text-teal-600 mr-2"
                aria-hidden="true"
              />
              <span className="text-sm font-medium">Tech Time Travel</span>
            </div>
            <h1
              id="hero-main-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Rediscovering the Digital Wonders of Yesterday
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
              Remember the whir of floppy disks, the glow of CRT monitors, and
              the satisfying click of mechanical keyboards? At Technostalgia,
              we're bringing back the tech that shaped a generation devices and
              gadgets that filled our childhoods with wonder before fading into
              the corners of memory.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                href="/blogs"
                className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-medium transition-colors duration-300 flex items-center shadow hover:shadow-md"
              >
                Explore Retro Tech
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
              <Link
                href="/about-us"
                className="px-8 py-3 border border-teal-600 text-teal-700 rounded-lg font-medium hover:bg-teal-100 transition-colors duration-300"
              >
                Our Nostalgic Mission
              </Link>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center gap-x-8 gap-y-4 text-gray-600">
              {coreBenefits.map((benefit) => (
                <div key={benefit.id} className="flex items-center gap-2">
                  {benefit.icon}
                  <span className="text-sm font-medium">{benefit.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="technostalgia-toolkit" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Your Technostalgia Toolkit
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Journey through technology's past with our curated collections and
              in-depth retrospectives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-8xl mx-auto">
            {features.map((feature) => (
              <article
                key={feature.id}
                className="p-6 bg-white rounded-xl border border-teal-200/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                aria-labelledby={`feature-title-${feature.id}`}
              >
                <div
                  className={`${feature.bgColor} p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4`}
                >
                  {feature.icon}
                </div>
                <h3
                  id={`feature-title-${feature.id}`}
                  className="text-xl font-semibold text-teal-700 mb-2"
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">
                  {feature.description}
                </p>
                <Link
                  href="/blogs"
                  className="inline-flex items-center text-gray-600 hover:text-teal-600 transition-colors mt-auto"
                  aria-label={`Explore ${feature.title}`}
                >
                  Explore Now
                  <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
