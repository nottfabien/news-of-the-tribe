"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { posts, type Post } from "./posts";

// ── CATEGORY CONFIG ───────────────────────────────────────────────────────────
const CATEGORIES: Record<string, { color: string; icon: string }> = {
  "All":              { color: "bg-stone-800 text-white",         icon: "📚" },
  "Family Connection":{ color: "bg-green-100 text-green-800",     icon: "👨‍👩‍👧‍👦" },
  "Wellbeing":        { color: "bg-teal-100 text-teal-800",       icon: "🧘" },
  "Family Life":      { color: "bg-blue-100 text-blue-800",       icon: "🏡" },
  "Health & Outdoors":{ color: "bg-lime-100 text-lime-800",       icon: "🌿" },
  "Seasonal":         { color: "bg-orange-100 text-orange-800",   icon: "🌸" },
  "Rituals":          { color: "bg-rose-100 text-rose-800",       icon: "🕯️" },
  "Health":           { color: "bg-purple-100 text-purple-800",   icon: "💊" },
  "Connection":       { color: "bg-sky-100 text-sky-800",         icon: "✉️" },
  "Gift Ideas":       { color: "bg-amber-100 text-amber-800",     icon: "🎁" },
};

function catCls(cat: string) {
  return CATEGORIES[cat]?.color ?? "bg-stone-100 text-stone-700";
}
function catIcon(cat: string) {
  return CATEGORIES[cat]?.icon ?? "📄";
}

// ── AUTO-PUBLISH: Sydney time gate ────────────────────────────────────────────
function getSydneyDateStr(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Australia/Sydney" });
}
function isPublished(dateStr: string, sydneyNow: string): boolean {
  return dateStr <= sydneyNow;
}
// Countdown to next unpublished article
function getCountdown(dateStr: string): string | null {
  const now = Date.now();
  // Find UTC ms for midnight Sydney on this date
  const sampleLocal = new Date(`${dateStr}T12:00:00`);
  const sydneyStr = sampleLocal.toLocaleString("en-US", { timeZone: "Australia/Sydney" });
  const sydneyDate = new Date(sydneyStr);
  const offsetMs = sampleLocal.getTime() - sydneyDate.getTime();
  const publishMs = new Date(`${dateStr}T00:00:00`).getTime() - offsetMs;
  const diff = publishMs - now;
  if (diff <= 0) return null;
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  if (d > 0) return `${d}d ${h}h`;
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m`;
}

// Group posts by "Month YYYY"
function groupByMonth(items: Post[]) {
  const map = new Map<string, Post[]>();
  for (const p of items) {
    const d = new Date(p.date + "T12:00:00");
    const key = d.toLocaleDateString("en-AU", { month: "long", year: "numeric" });
    if (!map.has(key)) map.set(key, []);
    map.get(key)!.push(p);
  }
  return map;
}

export default function BlogPage() {
  // Tick every 60s to re-evaluate publish gates without hammering the CPU
  const [sydneyNow, setSydneyNow] = useState(getSydneyDateStr());
  useEffect(() => {
    const id = setInterval(() => setSydneyNow(getSydneyDateStr()), 60_000);
    return () => clearInterval(id);
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");
  const [view, setView] = useState<"timeline" | "category">("timeline");

  // Split into published / upcoming based on Sydney clock
  const published = useMemo(
    () => posts.filter(p => isPublished(p.date, sydneyNow))
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [sydneyNow]
  );
  const upcoming = useMemo(
    () => posts.filter(p => !isPublished(p.date, sydneyNow))
              .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
    [sydneyNow]
  );
  const nextUp = upcoming[0] ?? null;

  // Apply category filter to published posts only
  const filtered = useMemo(
    () => activeCategory === "All"
      ? published
      : published.filter(p => p.category === activeCategory),
    [published, activeCategory]
  );

  const grouped = useMemo(() => groupByMonth(filtered), [filtered]);
  const months  = [...grouped.keys()];

  // All categories present in published posts
  const availableCategories = useMemo(() => {
    const cats = new Set(published.map(p => p.category));
    return ["All", ...Object.keys(CATEGORIES).filter(c => c !== "All" && cats.has(c))];
  }, [published]);

  // Group by category for category view
  const byCategory = useMemo(() => {
    const map = new Map<string, Post[]>();
    for (const p of filtered) {
      if (!map.has(p.category)) map.set(p.category, []);
      map.get(p.category)!.push(p);
    }
    return map;
  }, [filtered]);

  return (
    <div className="min-h-screen bg-stone-50">

      {/* ── HEADER ── */}
      <div className="bg-gradient-to-r from-green-800 to-green-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-green-200 hover:text-white text-sm mb-6 inline-block transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Family Connection Blog</h1>
          <p className="text-xl text-green-100 max-w-2xl mb-6">
            Tips, stories, and ideas for keeping families close — no matter the distance.
          </p>
          {/* Stats */}
          <div className="flex flex-wrap gap-5 text-sm text-green-200">
            <span>📄 <strong className="text-white">{published.length}</strong> published</span>
            <span>⏳ <strong className="text-white">{upcoming.length}</strong> upcoming</span>
            <span>🗂️ <strong className="text-white">{availableCategories.length - 1}</strong> topics</span>
          </div>
          {/* Next article banner */}
          {nextUp && (
            <div className="mt-6 bg-white/10 border border-white/20 rounded-xl px-4 py-3 flex flex-wrap items-center gap-3">
              <span className="text-yellow-300 text-lg">⏱</span>
              <div className="flex-1">
                <p className="text-xs text-emerald-200 font-semibold uppercase tracking-wide">Next article dropping</p>
                <p className="text-sm font-bold text-white">{nextUp.title}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-green-200">
                  {new Date(nextUp.date + "T12:00:00").toLocaleDateString("en-AU", { day: "numeric", month: "long" })} · midnight Sydney
                </p>
                <p className="font-mono text-yellow-300 font-bold text-sm">{getCountdown(nextUp.date) ?? "Publishing now…"}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── CONTROLS BAR ── */}
      <div className="bg-white border-b border-stone-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-3 flex flex-col gap-3">

          {/* View toggle */}
          <div className="flex items-center justify-between">
            <div className="flex rounded-lg overflow-hidden border border-stone-200 text-xs font-semibold">
              <button
                onClick={() => setView("timeline")}
                className={`px-4 py-2 transition-colors ${view === "timeline" ? "bg-green-800 text-white" : "bg-white text-stone-600 hover:bg-stone-50"}`}
              >
                📅 Timeline
              </button>
              <button
                onClick={() => setView("category")}
                className={`px-4 py-2 transition-colors ${view === "category" ? "bg-green-800 text-white" : "bg-white text-stone-600 hover:bg-stone-50"}`}
              >
                🗂️ By Category
              </button>
            </div>
            <span className="text-xs text-stone-400">{filtered.length} article{filtered.length !== 1 ? "s" : ""}</span>
          </div>

          {/* Category filter chips */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {availableCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all ${
                  activeCategory === cat
                    ? "bg-green-800 text-white border-green-800 shadow-sm"
                    : `${catCls(cat)} border-transparent hover:border-current`
                }`}
              >
                <span>{catIcon(cat)}</span>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTENT AREA ── */}
      <div className="max-w-4xl mx-auto px-4 py-10">

        {filtered.length === 0 && (
          <div className="text-center py-20 text-stone-400">
            <p className="text-4xl mb-3">📭</p>
            <p>No published articles in this category yet.</p>
          </div>
        )}

        {/* ── TIMELINE VIEW ── */}
        {view === "timeline" && filtered.length > 0 && (
          <div>
            {months.map(month => {
              const monthPosts = grouped.get(month)!;
              return (
                <div key={month} className="mb-14">
                  {/* Month label */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-green-800 text-white text-sm font-bold px-5 py-2 rounded-full shadow-md whitespace-nowrap">
                      {month}
                    </div>
                    <div className="flex-1 h-px bg-stone-300" />
                    <span className="text-xs text-stone-400 font-medium whitespace-nowrap">
                      {monthPosts.length} article{monthPosts.length > 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* Posts */}
                  <div className="relative pl-6 border-l-2 border-stone-200 space-y-5">
                    {monthPosts.map(post => (
                      <div key={post.slug} className="relative">
                        {/* Dot */}
                        <div className="absolute -left-[1.45rem] top-5 w-4 h-4 rounded-full bg-green-800 border-2 border-white shadow" />

                        <Link
                          href={`/blog/${post.slug}`}
                          className="group block bg-white border border-stone-200 hover:border-green-400 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
                        >
                          <div className="flex flex-col sm:flex-row">
                            {/* Date column */}
                            <div className="sm:w-28 flex-shrink-0 bg-gradient-to-br from-green-50 to-stone-50 flex flex-col items-center justify-center py-5 px-3 border-b sm:border-b-0 sm:border-r border-stone-100">
                              <span className="text-3xl font-extrabold text-green-800 leading-none">
                                {new Date(post.date + "T12:00:00").getDate()}
                              </span>
                              <span className="text-xs text-stone-500 mt-1 uppercase tracking-wide font-medium">
                                {new Date(post.date + "T12:00:00").toLocaleDateString("en-AU", { month: "short" })}
                              </span>
                              <span className="text-xs text-stone-400">
                                {new Date(post.date + "T12:00:00").getFullYear()}
                              </span>
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-5">
                              <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className={`text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 ${catCls(post.category)}`}>
                                  {catIcon(post.category)} {post.category}
                                </span>
                                <span className="text-xs text-stone-400">{post.readTime}</span>
                                {post.tag && (
                                  <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                                    {post.tag}
                                  </span>
                                )}
                              </div>
                              <h2 className="text-base font-bold text-stone-900 group-hover:text-green-800 transition-colors leading-snug mb-2">
                                {post.title}
                              </h2>
                              <p className="text-sm text-stone-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
                              <p className="text-green-700 text-sm font-semibold mt-3 group-hover:underline">Read article →</p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── CATEGORY VIEW ── */}
        {view === "category" && filtered.length > 0 && (
          <div className="space-y-12">
            {[...byCategory.entries()].map(([cat, catPosts]) => (
              <div key={cat}>
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <span className={`flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full ${catCls(cat)}`}>
                    {catIcon(cat)} {cat}
                  </span>
                  <div className="flex-1 h-px bg-stone-200" />
                  <span className="text-xs text-stone-400">{catPosts.length} article{catPosts.length > 1 ? "s" : ""}</span>
                </div>

                {/* Grid of cards */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {catPosts.map(post => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="group bg-white border border-stone-200 hover:border-green-400 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col"
                    >
                      <div className="flex items-center gap-2 mb-2 text-xs text-stone-400">
                        <span>{new Date(post.date + "T12:00:00").toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })}</span>
                        <span>·</span>
                        <span>{post.readTime}</span>
                        {post.tag && (
                          <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">{post.tag}</span>
                        )}
                      </div>
                      <h3 className="text-sm font-bold text-stone-900 group-hover:text-green-800 transition-colors leading-snug flex-1 mb-3">
                        {post.title}
                      </h3>
                      <p className="text-xs text-stone-500 leading-relaxed line-clamp-2 mb-3">{post.excerpt}</p>
                      <p className="text-green-700 text-xs font-semibold group-hover:underline">Read article →</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── UPCOMING (always shown at bottom) ── */}
        {upcoming.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-stone-400 text-white text-sm font-bold px-5 py-2 rounded-full">
                ⏳ Coming Soon
              </div>
              <div className="flex-1 h-px bg-stone-200" />
              <span className="text-xs text-stone-400">{upcoming.length} article{upcoming.length > 1 ? "s" : ""} scheduled</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcoming.map(post => {
                const cd = getCountdown(post.date);
                return (
                  <div key={post.slug} className="bg-white border border-dashed border-stone-300 rounded-2xl p-5 opacity-70">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full inline-flex items-center gap-1 mb-3 ${catCls(post.category)}`}>
                      {catIcon(post.category)} {post.category}
                    </span>
                    <h3 className="text-sm font-semibold text-stone-600 leading-snug mb-3">{post.title}</h3>
                    <p className="text-xs text-stone-400">
                      {new Date(post.date + "T12:00:00").toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })} · midnight Sydney
                    </p>
                    {cd && <p className="font-mono text-xs text-amber-600 font-semibold mt-1">⏱ {cd}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* ── CTA ── */}
      <div className="bg-gradient-to-r from-green-800 to-green-900 text-white py-14 px-4 text-center mt-8">
        <h2 className="text-2xl font-bold mb-3">Ready to connect your family?</h2>
        <p className="text-green-100 mb-6">Start your first printed family newspaper today.</p>
        <Link href="/" className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-8 py-3 rounded-lg transition-colors inline-block">
          Learn More →
        </Link>
      </div>
    </div>
  );
}