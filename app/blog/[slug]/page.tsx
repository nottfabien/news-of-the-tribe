import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../posts";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();

    if (!line) { i++; continue; }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-gray-800 mt-6 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc pl-6 space-y-2 my-4 text-gray-700">
          {items.map((item, idx) => {
            const parts = item.split(/(\*\*[^*]+\*\*)/g).map((p, j) =>
              p.startsWith("**") ? <strong key={j}>{p.replace(/\*\*/g, "")}</strong> : p
            );
            return <li key={idx}>{parts}</li>;
          })}
        </ul>
      );
      continue;
    } else if (line.startsWith("---")) {
      elements.push(<hr key={i} className="my-8 border-gray-200" />);
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={i} className="border-l-4 border-amber-400 pl-5 py-2 my-6 bg-amber-50 rounded-r-lg italic text-gray-700">
          {line.replace("> ", "")}
        </blockquote>
      );
    } else {
      const parts = line.split(/(\*\*[^*]+\*\*|\[.*?\]\(.*?\))/g).map((part, idx) => {
        if (part.startsWith("**")) return <strong key={idx}>{part.replace(/\*\*/g, "")}</strong>;
        const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
        if (linkMatch) return <a key={idx} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-green-800 underline hover:text-green-600">{linkMatch[1]}</a>;
        return part;
      });
      elements.push(
        <p key={i} className="text-gray-700 leading-relaxed mb-4">{parts}</p>
      );
    }
    i++;
  }
  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: { "@type": "Organization", name: "News of the Tribe" },
    publisher: {
      "@type": "Organization",
      name: "News of the Tribe",
      logo: { "@type": "ImageObject", url: "https://www.newsofthetribe.com/images/NOTT-Logo5gradient.png" },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="bg-gradient-to-r from-green-800 to-green-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-green-200 hover:text-white text-sm mb-6 inline-block transition-colors">
            ← Back to Blog
          </Link>
          <span className="inline-block bg-amber-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">{post.title}</h1>
          <div className="flex gap-4 text-green-200 text-sm">
            <span>{new Date(post.date).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-4 py-12">
        <p className="text-xl text-gray-600 leading-relaxed mb-8 font-medium border-l-4 border-green-800 pl-5">
          {post.excerpt}
        </p>
        {renderContent(post.content)}
      </article>

      {/* CTA */}
      <div className="bg-gradient-to-br from-green-50 to-amber-50 border-t-2 border-green-100 py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Start connecting your family today</h2>
          <p className="text-gray-600 mb-6">Your first 2 months for just $7 AUD. No contracts, cancel anytime.</p>
          <Link href="/" className="bg-green-800 hover:bg-green-900 text-white font-bold px-8 py-3 rounded-lg transition-colors inline-block">
            Learn About News of the Tribe →
          </Link>
        </div>
      </div>

      {/* Related posts */}
      {others.length > 0 && (
        <div className="max-w-3xl mx-auto px-4 py-12">
          <h2 className="text-xl font-bold text-gray-900 mb-6">More Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`}
                className="group bg-white border border-gray-200 hover:border-green-300 rounded-xl p-5 transition-all hover:shadow-md"
              >
                <span className="text-xs font-bold text-green-800 uppercase tracking-wide">{p.category}</span>
                <h3 className="font-bold text-gray-900 mt-1 group-hover:text-green-800 transition-colors leading-snug">{p.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{p.readTime}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}