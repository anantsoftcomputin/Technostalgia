"use client";
import {
  BookOpen,
  PenSquare,
  Check,
  X,
  FileText,
  Mail,
  CalendarDays,
} from "lucide-react";

const WriteForUs = () => {
  return (
    <main className="py-12 min-h-screen px-4 sm:px-6 lg:px-12">
      <section
        className="relative py-16 sm:py-20"
        aria-labelledby="privacy-main-heading"
      >
        <div
          className="absolute inset-0 bg-grid-white/[0.05]"
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Write for Us – Guest Post Guidelines
            </h1>
            <p className="text-lg text-gray-700 mx-auto">
              Share Your TechNostalgia With Our Community
            </p>
          </div>
          <div className="space-y-6" role="list">
            <div
              className="bg-white shadow-md rounded-lg overflow-hidden"
              role="listitem"
              aria-labelledby="policy-introduction-heading"
            >
              <div className="p-6">
                <p className="text-gray-600">
                  At TechsNostalgia.com, we celebrate the gadgets, games, and
                  tech innovations that shaped our digital past. If you’re
                  passionate about nostalgia, retro technology, vintage tech, or
                  history, we invite you to contribute a guest post!
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 flex items-center">
                  <BookOpen className="h-6 w-6 text-teal-600 mr-3" />
                  Content Submission Guidelines
                </h2>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  1. Original & Unpublished Work
                </h2>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Submit only original content – no repurposed blog posts or
                      AI-generated articles.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      We run plagiarism checks. If it’s been published
                      elsewhere, we won’t accept it.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  2. Relevant & Nostalgic Topics
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-3">
                  We’re looking for deep dives into:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Digital detox strategies (personal stories or
                      research-backed).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Retro tech (classic computers, vintage consoles, forgotten
                      gadgets).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Gaming history (NES, Sega, PlayStation, PC classics).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Tech nostalgia (memories of dial-up, floppy disks, early
                      internet).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Restoration/modding (fixing old hardware, Raspberry Pi
                      retro projects).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Obsolete tech (VHS, pagers, PDAs – why we miss them).
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  3. Quality & Structure
                </h2>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Fluency: Well-written, error-free English.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Depth: 1,000+ words with rich details.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Engaging: Use subheadings, images, and
                      nostalgia-triggering anecdotes.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  4. No Spam or Self-Promotion
                </h2>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>No affiliate links or promotional content.</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>One contextual backlink allowed.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  5. Media & SEO Requirements
                </h2>
              </div>
              <div className="p-6">
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Featured image: At least 1 high-quality retro tech image
                      with a descriptive alt tag.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      Metadata: Provide: Meta title (≤60 chars), Meta
                      description (1–2 sentences, ≤160 chars), 2–3 tags (e.g.,
                      “retro gaming,” “vintage computers”).
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  6. Restricted Topics
                </h2>
              </div>
              <div className="p-6">
                <p className="font-medium text-gray-800">We do not cover:</p>
                <ul className="mt-2 space-y-1 text-gray-600">
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span> Modern tech reviews.</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Cryptocurrency/NFTs.</span>
                  </li>
                  <li className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Gambling/Porn.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  7. Social Sharing
                </h2>
              </div>
              <div className="p-6">
                <p className="text-gray-600">
                  If published, share your post on your social channels (we love
                  #ThrowbackTech vibes!).
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900">
                  How to Submit
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-6 text-gray-600">
                  <div>
                    <p className="mb-4">
                      Email your draft or pitch to{" "}
                      <a
                        href="mailto:techsnostalgia@gmail.com"
                        className="text-teal-600 hover:underline font-medium"
                      >
                        techsnostalgia@gmail.com
                      </a>{" "}
                      with:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Mail className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Subject line:</strong> "Guest Post: [Your
                          Topic]"
                        </span>
                      </li>
                      <li className="flex items-start">
                        <FileText className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Proposed headline + 2–3 key points.</span>
                      </li>
                      <li className="flex items-start">
                        <PenSquare className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Writing samples (if available).</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-teal-50 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                      <CalendarDays className="h-5 w-5 text-teal-600 mr-2" />
                      Editorial Process:
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Manual review (2–3 days).</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Edits for clarity/SEO may be made.</span>
                      </li>
                      <li className="flex items-start">
                        <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>
                          No follow-ups – we’ll respond if it’s a fit.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600">
                      <strong>Note:</strong> We reserve the right to reject
                      submissions without explanation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WriteForUs;
