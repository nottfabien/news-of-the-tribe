import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Family Connection Blog | News of the Tribe",
  description:
    "Tips, ideas, and insights on keeping families connected across distances. Gift ideas for grandparents, family storytelling, combating loneliness, and more.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-800 to-green-900 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <Link href="/" className="text-green-200 hover:text-white text-sm mb-4 inline-block transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Family Connection Blog</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Tips, stories, and ideas for keeping families close — no matter the distance.
          </p>
        </div>
      </div>

      {/* Articles grid */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 hover:border-green-200 transition-all overflow-hidden flex flex-col"
            >
              <div className="bg-gradient-to-br from-green-50 to-amber-50 px-6 pt-6 pb-4">
                <span className="inline-block bg-green-800 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-green-800 transition-colors leading-snug">
                  {post.title}
                </h2>
              </div>
              <div className="px-6 py-4 flex flex-col flex-1">
                <p className="text-gray-600 leading-relaxed flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 text-sm text-gray-400">
                  <span>{new Date(post.date).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gradient-to-r from-green-800 to-green-900 text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-3">Ready to connect your family?</h2>
        <p className="text-green-100 mb-6">Start your first printed family newspaper today.</p>
        <Link
          href="/"
          className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-8 py-3 rounded-lg transition-colors inline-block"
        >
          Learn More →
        </Link>
      </div>
    </div>
  );
}