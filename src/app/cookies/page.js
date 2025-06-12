import Link from "next/link";

export const metadata = {
  title: "How Techsnostalgia Uses Cookies on This Site | Cookie Policy",
  description:
    "Learn how Techsnostalgia uses cookies to enhance your Browse experience, analyze site traffic, and personalize content on this website. Understand your choices regarding cookie usage.",
  openGraph: {
    title: "How Techsnostalgia Uses Cookies on This Site | Cookie Policy",
    description:
      "Learn how Techsnostalgia uses cookies to enhance your Browse experience, analyze site traffic, and personalize content on this website. Understand your choices regarding cookie usage.",
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
    title: "How Techsnostalgia Uses Cookies on This Site | Cookie Policy",
    description:
      "Learn how Techsnostalgia uses cookies to enhance your Browse experience, analyze site traffic, and personalize content on this website. Understand your choices regarding cookie usage.",
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

export default function CookiesPolicy() {
  return (
    <main className="py-12 min-h-screen px-4 sm:px-6 lg:px-12">
      <section
        className="relative py-16 sm:py-20"
        aria-labelledby="cookie-policy-heading"
      >
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1
              id="cookie-policy-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
            >
              Cookie Policy
            </h1>
          </div>
          <div className="space-y-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  1. Introduction
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  techsnostalgia.com (hereinafter referred to as "the Site,"
                  "we," "us," or "our") uses cookies and similar technologies to
                  enhance your Browse experience on our website. This Cookie
                  Policy explains what cookies are, how we use them to improve
                  your interaction with techsnostalgia.com, and your choices
                  regarding these cookies.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  2. What Are Cookies?
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  Cookies are small text files that are placed on your computer
                  or mobile device when you visit a website like
                  techsnostalgia.com. They are widely used to make websites work
                  more efficiently, as well as to provide information to the
                  website owners about site usage and performance.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  3. How We Use Cookies
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">
                    Essential Cookies:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      These cookies are necessary for the fundamental operation
                      of our Site. They enable you to navigate
                      techsnostalgia.com and use its essential features. Without
                      these, the Site cannot function properly.
                    </li>
                  </ul>

                  <h3 className="font-semibold text-gray-900 mt-4">
                    Analytics Cookies:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      We use analytics cookies, such as those provided by Google
                      Analytics, to collect information about how visitors use
                      our Site. This helps us analyze website traffic and
                      improve our Site's performance and user experience. These
                      cookies collect information in an anonymous form,
                      including the number of visitors to techsnostalgia.com,
                      where visitors have come to the Site from, and the pages
                      they visited.
                    </li>
                  </ul>

                  <h3 className="font-semibold text-gray-900 mt-4">
                    Functionality Cookies:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      These cookies allow our Site to remember choices you make
                      (such as your language preference or region) and provide
                      enhanced, more personal features during your visit to
                      techsnostalgia.com.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mt-4">
                    Third-Party Cookies:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      We may also use third-party cookies, such as those from
                      social media platforms (e.g., Facebook, Twitter) or
                      advertising networks, to provide certain features or to
                      display targeted advertisements relevant to your
                      interests.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 ">
                  4. Types of Cookies We Use
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 ">
                    Session Cookies:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      These are temporary cookies that are stored in your
                      browser's memory and are deleted when you close your
                      browser after visiting techsnostalgia.com. They are used
                      for essential site functions like managing your current
                      session.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mt-4">
                    Persistent Cookies:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      These cookies remain on your device for a longer period as
                      specified in the cookie, or until you manually delete
                      them. They help us recognize you as a returning visitor to
                      techsnostalgia.com and remember your preferences.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 ">
                  5. Your Cookie Choices and How to Manage Them
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 ">
                    Browser Settings:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      You can control and manage cookies through your web
                      browser settings. Most browsers allow you to view, block,
                      or delete cookies. However, please note that blocking
                      essential cookies may affect your ability to use certain
                      features of our Site, techsnostalgia.com.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mt-4">
                    Opt-Out Tools for Third-Party Cookies:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      Some third-party services provide specific opt-out tools
                      that allow you to disable their cookies. For example, you
                      can opt-out of Google Analytics by installing the Google
                      Analytics Opt-out Browser Add-on. We encourage you to
                      check the privacy policies of these third-party services
                      for more information.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mt-4">
                    Cookie Consent Banner
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      Upon your first visit to our Site, techsnostalgia.com, you
                      will be presented with a cookie consent banner. This
                      banner allows you to accept or deny the use of
                      non-essential cookies, giving you direct control over your
                      preferences.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  6. Third-Party Cookies and Their Policies
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 ">
                  We may use third-party services that set cookies on our Site,
                  techsnostalgia.com. We do not have direct control over these
                  cookies or the data they collect. We encourage you to review
                  the respective cookie and privacy policies of these third
                  parties to understand their practices.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  7. Changes to This Cookie Policy
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  We may update this Cookie Policy from time to time to reflect
                  changes in our practices or for other operational, legal, or
                  regulatory reasons. We will notify you of any significant
                  changes by posting the new Cookie Policy on this page of
                  techsnostalgia.com. You are advised to review this Cookie
                  Policy periodically for any changes. Changes to this Cookie
                  Policy are effective when they are posted on this page.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  8. Contact Us
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  If you have any questions or concerns about this Cookie Policy
                  or our use of cookies at techsnostalgia.com, please contact
                  us:
                </p>
                <address className="mt-2 text-gray-600 not-italic">
                  Email:{" "}
                  <a
                    href="mailto:support@techsnostalgia.com"
                    className="text-teal-600 hover:text-teal-700hover:underline"
                  >
                    support@techsnostalgia.com
                  </a>
                  <br />
                  Contact: Available on{" "}
                  <Link
                    href="/contact-us"
                    className="text-teal-600 hover:text-teal-700hover:underline"
                  >
                    techsnostalgia.com
                  </Link>
                  <br />
                  Address: Alkapuri, Vadodara, Gujarat, India 390007.
                </address>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  9. Governing Law
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  This Cookie Policy shall be governed by and construed in
                  accordance with the laws of Vadodara, Gujarat, India, without
                  regard to its conflict of law provisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
