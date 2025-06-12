import Link from "next/link";

export const metadata = {
  title: "Important Disclaimer Notice | Techsnostalgia",
  description:
    "Read Techsnostalgia's Disclaimer to understand the limitations of our content, liability, and how users should interpret information on this site.",
  openGraph: {
    title: "Important Disclaimer Notice | Techsnostalgia",
    description:
      "Read Techsnostalgia's Disclaimer to understand the limitations of our content, liability, and how users should interpret information on this site.",
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
    title: "Important Disclaimer Notice | Techsnostalgia",
    description:
      "Read Techsnostalgia's Disclaimer to understand the limitations of our content, liability, and how users should interpret information on this site.",
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

export default function Disclaimer() {
  return (
    <main className="py-12 min-h-screen px-4 sm:px-6 lg:px-12">
      <section
        className="relative py-16 sm:py-20"
        aria-labelledby="disclaimer-heading"
      >
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1
              id="disclaimer-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
            >
              Disclaimer
            </h1>
          </div>
          <div className="space-y-6">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  1. General Information
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  The information provided on techsnostalgia.com (hereinafter
                  referred to as "the Site," "we," "us," or "our") is for
                  general informational and educational purposes only. It is not
                  intended as a substitute for professional advice, including
                  but not limited to medical, psychological, financial, legal,
                  or technological advice. Always seek the advice of qualified
                  professionals for any specific concerns.
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  2. Digital Detox and Well-being Information
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">
                    Individual Results May Vary with Digital Detox:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      The strategies, tips, and recommendations related to
                      digital detox and well-being presented on this Site are
                      based on general knowledge and experience. Individual
                      results from applying these techniques may vary
                      significantly, and what works for one person may not work
                      for another.
                    </li>
                  </ul>

                  <h3 className="font-semibold text-gray-900 mt-4">
                    Content is Not Medical Advice:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      The content on this Site concerning digital well-being
                      should not be considered medical advice. If you have
                      concerns about your mental or physical health, including
                      any impact of digital device usage, please consult with a
                      qualified healthcare professional without delay.
                    </li>
                  </ul>

                  <h3 className="font-semibold text-gray-900 mt-4">
                    Personal Responsibility for Well-being Choices:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      You are solely responsible for your decisions and actions
                      taken based on information related to digital detox and
                      well-being found on techsnostalgia.com. We are not liable
                      for any consequences, positive or negative, resulting from
                      your use of the information on this Site.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  3. Technology and Internet Use Guidance
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">
                    No Guarantee of Accuracy for Tech Information:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      While we strive to provide accurate and up-to-date
                      information about technology and internet use on
                      techsnostalgia.com, we make no representations or
                      warranties about the absolute accuracy, completeness, or
                      reliability of all content. Technology evolves rapidly.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mt-4">
                    Third-Party Products and Services :
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      Any mention of third-party products or services on this
                      Site does not constitute an endorsement or recommendation
                      by techsnostalgia.com. We are not responsible for the
                      performance, reliability, or safety of these external
                      products or services. Conduct your own due diligence.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mt-4">
                    Inherent Internet Risks:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      Internet use involves inherent risks, including but not
                      limited to exposure to malware, viruses, phishing scams,
                      and data breaches. We are not responsible for any damages
                      or losses resulting from your use of the internet or
                      interaction with online content.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  4. Limitation of Liability
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">
                    Content Provided "As-Is":
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      This Site, techsnostalgia.com, and its content are
                      provided on an "as-is" and "as-available" basis. We
                      disclaim all warranties, express or implied, including but
                      not limited to warranties of merchantability, fitness for
                      a particular purpose, and non-infringement.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mt-4">
                    No Liability for Damages:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      To the fullest extent permitted by applicable law,
                      techsnostalgia.com and its affiliates, officers,
                      directors, employees, and agents shall not be liable for
                      any direct, indirect, incidental, special, consequential,
                      or punitive damages arising out of or related to your use
                      of, or inability to use, this Site or its content.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  5. External Links
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">
                    Links to Third-Party Websites:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      This Site, techsnostalgia.com, may contain links to
                      third-party websites or services that are not owned or
                      controlled by us. We are not responsible for the content,
                      privacy practices, or accuracy of information on these
                      external websites.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mt-4">
                    No Endorsement Implied by External Links:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      The inclusion of any external links on techsnostalgia.com
                      does not imply endorsement, approval, or recommendation by
                      us. You access such third-party websites at your own risk.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  6. Changes and Updates to This Disclaimer
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">
                    Right to Modify Disclaimer:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      We reserve the right to modify or replace this Disclaimer
                      at any time in our sole discretion. We will notify you of
                      any material changes by posting the new Disclaimer on this
                      page of techsnostalgia.com.
                    </li>
                  </ul>
                  <h3 className="font-semibold text-gray-900 mt-4">
                    Periodic Review Recommended:
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 space-y-2">
                    <li>
                      You are advised to review this Disclaimer periodically for
                      any changes. Your continued use of this Site,
                      techsnostalgia.com, after any such changes are posted
                      constitutes your acceptance of the new terms of the
                      Disclaimer.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  7. Governing Law
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  This Disclaimer, and any dispute arising out of it, shall be
                  governed by and construed in accordance with the laws of
                  Vadodara, Gujarat, India, without regard to its conflict of
                  law principles.
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
                  If you have any questions or concerns about this Disclaimer
                  for techsnostalgia.com, please contact us:
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
          </div>
        </div>
      </section>
    </main>
  );
}
