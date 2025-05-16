"use client";
import React, { useState, useEffect } from "react";
import {
  Target,
  Gamepad,
  Computer,
  Clock,
  Users,
  Globe,
  HardDrive,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    id: "stat-users",
    number: "10K+",
    label: "Retro Tech Enthusiasts",
    icon: <Users className="h-6 w-6 text-teal-600" aria-hidden="true" />,
    bgColor: "bg-teal-100",
  },
  {
    id: "stat-reviews",
    number: "500+",
    label: "Vintage Device Reviews",
    icon: <Computer className="h-6 w-6 text-teal-600" aria-hidden="true" />,
    bgColor: "bg-teal-100",
  },
  {
    id: "stat-articles",
    number: "50+",
    label: "Classic Gaming Articles",
    icon: <Gamepad className="h-6 w-6 text-teal-600" aria-hidden="true" />,
    bgColor: "bg-teal-100",
  },
  {
    id: "stat-capsules",
    number: "15+",
    label: "Tech Time Capsules",
    icon: <HardDrive className="h-6 w-6 text-teal-600" aria-hidden="true" />,
    bgColor: "bg-teal-100",
  },
];

const resources = [
  {
    id: "res-guides",
    IconComponent: Computer,
    title: "Vintage Computer Guides",
    description:
      "In-depth explorations of classic computers that shaped the digital age.",
  },
  {
    id: "res-retrospectives",
    IconComponent: Gamepad,
    title: "Retro Gaming Retrospectives",
    description:
      "Nostalgic looks at the games and consoles that defined generations.",
  },
  {
    id: "res-timelines",
    IconComponent: Clock,
    title: "Tech Evolution Timelines",
    description:
      "Journey through the milestones of computing and gadget history.",
  },
];

const values = [
  {
    id: "val-history",
    IconComponent: Target,
    title: "Preserving Tech History",
    description:
      "We document and celebrate the groundbreaking technologies that paved the way for today's digital world.",
  },
  {
    id: "val-connection",
    IconComponent: Globe,
    title: "Nostalgic Connection",
    description:
      "Creating a space where tech enthusiasts can reconnect with the devices of their past.",
  },
  {
    id: "val-community",
    IconComponent: MessageCircle,
    title: "Community of Collectors",
    description:
      "Bringing together vintage tech lovers to share knowledge, stories, and collections.",
  },
];

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="pt-12 min-h-screen bg-gray-50">
      <section
        aria-labelledby="about-hero-heading"
        className="relative py-20 bg-teal-100"
      >
        <div
          className="absolute inset-0 bg-grid-white/[0.05]"
          aria-hidden="true"
        />
        <div className="relative container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1
              id="about-hero-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              Welcome to Techsnostalgia
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Your portal to the golden age of technology. We celebrate the
              devices and innovations that shaped our digital world, preserving
              their stories for future generations.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="stats-heading" className="py-16 bg-white">
        <h2 id="stats-heading" className="sr-only">
          Our Impact in Numbers
        </h2>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`text-center p-6 bg-teal-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={`mx-auto mb-4 w-16 h-16 ${stat.bgColor} rounded-full flex items-center justify-center`}
                  aria-hidden="true"
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-teal-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-800 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="mission-heading" className="py-20 bg-teal-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
            >
              <h2
                id="mission-heading"
                className="text-3xl md:text-4xl font-bold text-teal-800 mb-6"
              >
                Our Mission & Values
              </h2>
              <p className="text-gray-800 text-lg mb-8">
                At Techsnostalgia, we're passionate about preserving the legacy
                of groundbreaking technologies. From the first personal
                computers to iconic gaming consoles, we document the innovations
                that changed how we live, work, and play.
              </p>
              <div className="space-y-6">
                {values.map(
                  ({ id, IconComponent, title, description }, index) => (
                    <div key={id} className="flex gap-4 items-start">
                      <div className="flex-shrink-0">
                        <div
                          className="w-12 h-12 rounded-lg bg-teal-200 flex items-center justify-center"
                          aria-hidden="true"
                        >
                          <IconComponent className="h-6 w-6 text-teal-700" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-teal-700 mb-2">
                          {title}
                        </h3>
                        <p className="text-gray-600">{description}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div
              className={`relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=800"
                  alt="Vintage Computer Collection"
                  className="w-full h-auto rounded-2xl object-cover transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent opacity-60"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-teal-200 rounded-2xl -z-10 opacity-50 blur-lg"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-200 rounded-full -z-10 opacity-50 blur-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="offerings-heading" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2
            id="offerings-heading"
            className="text-center text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            What We Offer
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our collection of retro tech content and resources
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map(
              ({ id, IconComponent, title, description }, index) => (
                <div
                  key={id}
                  className={`bg-teal-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-teal-100 flex flex-col ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  <div
                    className="w-14 h-14 rounded-lg bg-teal-100 flex items-center justify-center mb-5"
                    aria-hidden="true"
                  >
                    <IconComponent className="h-7 w-7 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-teal-600 mb-3">
                    {title}
                  </h3>
                  <p className="text-gray-600 mb-5 flex-grow">{description}</p>
                  <Link
                    href="/blogs"
                    className="inline-flex items-center text-gray-700 hover:text-teal-600 font-medium transition-colors mt-auto group"
                    aria-label={`Explore more about ${title}`}
                  >
                    Explore more
                    <ArrowRight
                      className="w-5 h-5 ml-1 transition-transform transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section aria-labelledby="cta-heading" className="py-20 bg-teal-50">
        <div className="container mx-auto px-6 text-center">
          <h2
            id="cta-heading"
            className="text-3xl font-bold text-teal-800 mb-6"
          >
            Join Our Tech Time Machine
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Become part of a community that celebrates the technology of
            yesterday and its impact on today's digital world.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-semibold transition-colors duration-300"
          >
            Start Exploring
          </Link>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
