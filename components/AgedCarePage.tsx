// app/aged-care/page.tsx
import type { Metadata } from "next";
import AgedCarePage from "@/components/AgedCarePage";

export const metadata: Metadata = {
  title: "Family Connection for Aged Care Residents | News of the Tribe",
  description:
    "Help residents feel seen, loved and connected with a printed monthly family newspaper. Delivered directly to your facility. Free first edition for every resident family.",
  alternates: { canonical: "/aged-care" },
  openGraph: {
    title: "Printed Family Newspaper for Aged Care Residents",
    description:
      "Reduce resident loneliness and support family wellbeing with a monthly printed newspaper. No screens, no passwords — just warmth delivered to the door.",
    images: [{ url: "/images/aged-care-og.jpg", width: 1200, height: 630 }],
  },
};

export default function AgedCarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "News of the Tribe – Aged Care Partner Program",
    provider: { "@type": "Organization", name: "News of the Tribe" },
    description:
      "Monthly printed family newspaper delivered to aged care residents. Reduces loneliness, supports wellbeing, and keeps families connected.",
    areaServed: "Australia",
    url: "https://www.newsofthetribe.com/aged-care",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AgedCarePage />
    </>
  );
}

// ─────────────────────────────────────────────
// components/AgedCarePage.tsx
// ─────────────────────────────────────────────
"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Heart, Users, BookOpen, CheckCircle, Mail,
  ArrowRight, Star, Phone, MessageCircle
} from "lucide-react";

export default function AgedCarePage() {
  const [formData, setFormData] = useState({
    name: "", facility: "", role: "", email: "", phone: "", residents: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    // Wire to your existing email/CRM handler
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── NAV ── */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <img src="/images/NOTT-Logo5gradient.png" alt="News of the Tribe" className="h-10 w-auto" />
          </Link>
          <a href="#partner-form"
            className="bg-green-800 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-green-900 transition-colors">
            Get Free First Edition
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-green-800 to-green-950 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-amber-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              For Aged Care Facilities
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Help your residents feel loved — every single month
            </h1>
            <p className="text-lg text-green-100 leading-relaxed mb-8">
              News of the Tribe delivers a beautifully printed monthly family newspaper directly
              to your residents. No screens, no passwords — just warm family stories they can
              hold in their hands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#partner-form"
                className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-bold px-8 py-4 rounded-lg transition-colors text-center inline-flex items-center justify-center gap-2">
                Offer Families a Free First Edition <ArrowRight size={18} />
              </a>
              <a href="#how-it-works"
                className="border-2 border-white text-white hover:bg-white hover:text-green-900 font-bold px-8 py-4 rounded-lg transition-colors text-center">
                See How It Works
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="/images/GrandadGreatkids.jpg"
              alt="Aged care resident reading family newspaper"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-amber-50 border-y border-amber-100 py-5 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-sm text-gray-700 font-medium">
          {["No cost to your facility", "Zero admin for your staff", "First newspaper free for every family",
            "Delivered straight to your address", "Private & ad-free"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <CheckCircle className="text-green-700" size={16} /> {t}
            </div>
          ))}
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Loneliness is one of the biggest challenges in aged care today
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            According to Relationships Australia, <strong>feeling informed about the lives of close family
            members</strong> is one of the key factors that distinguishes older adults who feel connected
            from those who feel isolated — even when physical visits are infrequent.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Digital tools help families who are already connected. They do nothing for the
            resident who doesn't own a smartphone, can't remember a password, or simply prefers
            something they can hold. <strong>That resident is who we built this for.</strong>
          </p>
        </div>
      </section>

      {/* ── 3 OUTCOMES ── */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Three outcomes your residents — and families — will feel
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart size={32} />,
                title: "Reduces Loneliness",
                body: "Regular family news helps residents feel seen, loved, and part of everyday life — not just a visitor during scheduled hours.",
              },
              {
                icon: <BookOpen size={32} />,
                title: "Supports Wellbeing & Cognition",
                body: "Familiar faces and family stories stimulate memory, mood, and meaningful conversation between residents and carers.",
              },
              {
                icon: <Users size={32} />,
                title: "Eases Family Guilt",
                body: "Families who can't visit often feel closer and more engaged, improving relationships with both their loved one and your staff.",
              },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-8 shadow-md border border-green-100 text-center">
                <div className="bg-green-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5">
                  {c.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{c.title}</h3>
                <p className="text-gray-600 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Simple for your facility. Meaningful for your residents.
          </h2>
          <p className="text-center text-gray-500 mb-12">Zero admin required from your team.</p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "1", title: "You share one contact", body: "Give us one family member's email and the resident's name, address & date of birth. That's it." },
              { n: "2", title: "Family joins for free", body: "They download the app, create the Tribe, and invite other family members. No cost, no commitment." },
              { n: "3", title: "Family shares all month", body: "Photos, stories, milestones and updates are collected automatically throughout the month." },
              { n: "4", title: "We print & deliver", body: "Every first Monday, a personalised newspaper lands at your facility addressed to the resident." },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <div className="bg-amber-400 text-gray-900 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                  {s.n}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="py-16 px-4 bg-green-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-4 gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-amber-400 fill-amber-400" />)}
          </div>
          <blockquote className="text-2xl font-medium leading-relaxed mb-6 italic">
            "Mum received the booklet today and really loved it! She thinks it's a great idea and
            wishes you all the best with the app 👍"
          </blockquote>
          <p className="text-green-200 font-semibold">— A family member, January 2026</p>
        </div>
      </section>

      {/* ── FOR FACILITY MANAGERS ── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Designed around your team's reality
            </h2>
            <div className="space-y-5">
              {[
                { title: "No admin burden", body: "We handle everything after the initial referral. No ongoing coordination needed from your staff." },
                { title: "No cost to your facility", body: "Families subscribe independently. You simply pass on the offer. No budget line required." },
                { title: "Complements your existing programs", body: "Sits alongside activities and visits — it's not a replacement, it's a daily touchpoint between those moments." },
                { title: "Improves family satisfaction", body: "Families who receive the newspaper report feeling more connected — which reflects positively on your facility." },
              ].map((p) => (
                <div key={p.title} className="flex gap-4">
                  <CheckCircle className="text-green-700 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-bold text-gray-900">{p.title}</p>
                    <p className="text-gray-600 text-sm">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Partnership enquiry</h3>
            <p className="text-gray-500 text-sm mb-6">
              Interested in rolling this out across your facility? We'd love to talk.
            </p>
            <div className="space-y-3 text-sm">
              <a href="mailto:info@newsofthetribe.com"
                className="flex items-center gap-3 text-green-800 font-semibold hover:underline">
                <Mail size={18} /> info@newsofthetribe.com
              </a>
              <a href="https://www.newsofthetribe.com"
                className="flex items-center gap-3 text-green-800 font-semibold hover:underline">
                <MessageCircle size={18} /> Chat via our website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM ── */}
      <section id="partner-form" className="py-20 px-4 bg-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-amber-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              Free offer
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Offer your residents' families a free first newspaper
            </h2>
            <p className="text-gray-600">
              Fill in the form below and we'll contact you within one business day to get started.
              No commitment required.
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
              <CheckCircle className="text-green-700 mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold text-green-900 mb-2">Thank you!</h3>
              <p className="text-gray-600">We'll be in touch within one business day to get the first editions rolling.</p>
            </div>
          ) : (
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 space-y-5">
              {[
                { label: "Your name", key: "name", type: "text", placeholder: "Jane Smith" },
                { label: "Facility name", key: "facility", type: "text", placeholder: "Sunnydale Aged Care" },
                { label: "Your role", key: "role", type: "text", placeholder: "Care Manager / Activities Coordinator / CEO" },
                { label: "Email address", key: "email", type: "email", placeholder: "jane@facility.com.au" },
                { label: "Phone (optional)", key: "phone", type: "tel", placeholder: "0400 000 000" },
                { label: "Number of residents", key: "residents", type: "number", placeholder: "e.g. 80" },
              ].map((f) => (
                <div key={f.key}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={(formData as any)[f.key]}
                    onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                  />
                </div>
              ))}
              <button
                onClick={handleSubmit}
                className="w-full bg-green-800 hover:bg-green-900 text-white font-bold py-4 rounded-lg transition-colors text-lg mt-2">
                Send My Request
              </button>
              <p className="text-xs text-gray-400 text-center">
                No cost, no contracts. We'll reach out to get started. View our{" "}
                <Link href="/privacy" className="underline">Privacy Policy</Link>.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 text-center text-sm">
        <img src="/images/NOTT-LogoWhite.png" alt="News of the Tribe" className="h-10 w-auto mx-auto mb-4 brightness-0 invert" />
        <p>© 2025 News of the Tribe. All rights reserved.</p>
        <p className="mt-1 italic">Reviving the art of connection, one printed newspaper at a time.</p>
        <div className="mt-3 flex justify-center gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link href="/" className="hover:text-white transition-colors">Back to Home</Link>
        </div>
      </footer>

    </div>
  );
}