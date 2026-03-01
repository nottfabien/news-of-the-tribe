import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Newspaper, Heart, Users, Mail, Star, Phone } from "lucide-react";

// ── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Keeping Families Connected in Aged Care | News of the Tribe Australia",
  description:
    "Help aged care residents feel included in family life every month. A personalised printed family newspaper — delivered to their room, no technology required. Used by families across Australia.",
  alternates: { canonical: "/aged-care-family-connection" },
  keywords: [
    "aged care family connection",
    "keeping families connected aged care",
    "activities for aged care residents Australia",
    "gift for aged care resident",
    "family connection aged care home",
    "printed newspaper for elderly",
    "dementia family connection",
    "aged care wellbeing activity",
    "family newspaper aged care",
    "reduce loneliness aged care residents",
  ],
  openGraph: {
    title: "Keeping Families Connected in Aged Care | News of the Tribe",
    description:
      "A monthly printed family newspaper delivered directly to aged care residents. No technology required. Families set it up in minutes.",
    url: "/aged-care-family-connection",
    type: "website",
  },
};

// ── Structured Data ───────────────────────────────────────────────────────────
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "News of the Tribe — Family Connection for Aged Care Residents",
  description:
    "A monthly personalised printed family newspaper delivered to aged care residents across Australia. Keeps residents connected to family life without requiring any technology on their end.",
  provider: {
    "@type": "Organization",
    name: "News of the Tribe",
    url: "https://www.newsofthetribe.com",
    logo: "https://www.newsofthetribe.com/images/NOTT-Logo5gradient.png",
    areaServed: "Australia",
  },
  serviceType: "Family Connection Service",
  audience: {
    "@type": "Audience",
    audienceType: "Aged Care Residents and their Families",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "AUD",
    lowPrice: "19.99",
    highPrice: "24.99",
    offerCount: "3",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does the aged care resident need any technology to receive the newspaper?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. The resident receives a physical printed newspaper in the post — no smartphone, tablet, or internet connection required. Family members set everything up on the app, and the newspaper is mailed directly to the resident's room.",
      },
    },
    {
      "@type": "Question",
      name: "Can News of the Tribe be delivered directly to an aged care facility?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The newspaper is mailed to any address in Australia, including directly to aged care facilities and nursing homes. Simply use the facility's address and the resident's room or unit number.",
      },
    },
    {
      "@type": "Question",
      name: "Is it suitable for residents with dementia or Alzheimer's?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Research from Alzheimer's Research UK and Dementia Australia confirms that tangible printed materials with familiar photos and faces are among the most effective tools for emotional connection in residents with dementia. Even when verbal memory fades, recognition of loved ones through photos often persists.",
      },
    },
    {
      "@type": "Question",
      name: "Can multiple family members contribute to the newspaper?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Up to 300 family members can be invited to contribute photos, stories, and updates throughout the month. Adult children, grandchildren, and extended family can all participate — even from overseas.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost per month?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Plans start from $19.99 AUD per month. There are no contracts and families can cancel anytime. Worldwide delivery is included in all plans.",
      },
    },
    {
      "@type": "Question",
      name: "Can aged care facilities offer this as a service to resident families?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Aged care providers interested in offering News of the Tribe as a value-added family engagement service are welcome to contact us at info@newsofthetribe.com to discuss partnership options.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.newsofthetribe.com" },
    { "@type": "ListItem", position: 2, name: "Aged Care Family Connection", item: "https://www.newsofthetribe.com/aged-care-family-connection" },
  ],
};

// ── Component ─────────────────────────────────────────────────────────────────
export default function AgedCarePage() {
  const testimonials = [
    {
      quote: "Mum can't use an iPad but she reads her newspaper cover to cover every month. She tells every nurse about the grandkids.",
      author: "Sarah K.",
      role: "Daughter",
      location: "Sydney, NSW",
    },
    {
      quote: "Dad has Alzheimer's and can't always place people by name — but when the newspaper arrives, he recognises the photos and lights up. It's everything.",
      author: "James T.",
      role: "Son",
      location: "Melbourne, VIC",
    },
    {
      quote: "Staff at Mum's facility told us she keeps her newspaper on her bedside table and reads bits of it every day. It gave us so much peace of mind.",
      author: "Linda M.",
      role: "Daughter",
      location: "Brisbane, QLD",
    },
  ];

  const howItWorks = [
    { step: "1", title: "Download the app", desc: "One family member sets up the account in minutes and invites the whole family to join." },
    { step: "2", title: "Everyone contributes", desc: "Family members post photos and short stories throughout the month — from anywhere in the world." },
    { step: "3", title: "We design & print", desc: "Our team lays out a beautiful personalised newspaper from your family's content every month." },
    { step: "4", title: "Delivered to their room", desc: "The printed newspaper is mailed directly to the aged care facility — their resident's name and room on the envelope." },
  ];

  const benefits = [
    {
      icon: <Newspaper className="text-white" size={28} />,
      title: "No technology required",
      desc: "The resident receives a physical newspaper in the post. No smartphone, no tablet, no passwords — just a familiar format they already know how to enjoy.",
    },
    {
      icon: <Heart className="text-white" size={28} />,
      title: "Clinically meaningful for dementia",
      desc: "Alzheimer's Research UK confirms tangible printed materials with familiar faces are among the most effective tools for emotional connection when verbal memory fades.",
    },
    {
      icon: <Users className="text-white" size={28} />,
      title: "The whole family contributes",
      desc: "Up to 300 family members — including children and grandchildren — can add photos and stories each month, however far away they live.",
    },
    {
      icon: <Mail className="text-white" size={28} />,
      title: "Delivered to their door",
      desc: "Mailed directly to any address in Australia, including aged care facilities. Just provide the facility address and room number.",
    },
    {
      icon: <Star className="text-white" size={28} />,
      title: "Something to show and share",
      desc: "Residents share their newspaper with staff, other residents, and visiting family. It becomes a source of pride and conversation starter every month.",
    },
    {
      icon: <CheckCircle className="text-white" size={28} />,
      title: "Reduces family guilt",
      desc: "Knowing a tangible piece of family life arrives every month — even between visits — gives families meaningful peace of mind.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ── Nav ── */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/">
            <img
              src="/images/NOTT-Logo5gradient.png"
              alt="News of the Tribe — Printed Family Newspaper for Grandparents"
              className="h-10 w-auto"
              width="40"
              height="40"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-green-800 transition-colors">Home</Link>
            <Link href="/#pricing" className="hover:text-green-800 transition-colors">Pricing</Link>
            <Link href="/blog" className="hover:text-green-800 transition-colors">Blog</Link>
            <Link href="/gift-for-grandparents" className="hover:text-green-800 transition-colors">Gift Ideas</Link>
          </nav>
          <Link
            href="/#download"
            className="bg-green-800 text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-green-900 transition-colors"
          >
            Get Started →
          </Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-green-50 via-white to-amber-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-xs text-gray-400 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-green-800">Home</Link>
            <span>/</span>
            <span className="text-gray-600">Aged Care Family Connection</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full mb-5 uppercase tracking-wide">
                For Families of Aged Care Residents
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Keep Your Loved One Connected to Family Life — Every Single Month
              </h1>
              <p className="text-xl text-green-800 font-semibold mb-4">
                No technology required on their end. Just a beautiful printed newspaper in their letterbox.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                A monthly personalised family newspaper, mailed directly to aged care residents across Australia. Filled with family photos, stories, and updates — in a format they already know how to love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/#download"
                  className="bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-900 transition-colors shadow-lg text-center"
                >
                  Start Your First Newspaper
                </Link>
                <Link
                  href="/#pricing"
                  className="border-2 border-green-800 text-green-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors text-center"
                >
                  See Pricing
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5"><CheckCircle size={15} className="text-green-700" /> From $19.99/month</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={15} className="text-green-700" /> No contracts</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={15} className="text-green-700" /> Worldwide delivery</span>
                <span className="flex items-center gap-1.5"><CheckCircle size={15} className="text-green-700" /> Cancel anytime</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl border border-green-100 p-8">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">What residents receive every month</p>
              {[
                "Family photos from the past month",
                "Stories and updates from every family member",
                "Children's drawings and messages",
                "Birthdays, milestones and celebrations",
                "A front page with their name on it",
                "Professionally printed on premium paper",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 py-3 border-b border-gray-50 last:border-0">
                  <CheckCircle className="text-green-800 flex-shrink-0" size={18} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats / Social Proof Bar ── */}
      <section className="bg-green-800 text-white py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { stat: "1 in 4", label: "Australians over 65 experience problematic loneliness" },
            { stat: "Monthly", label: "Delivery directly to the resident's room" },
            { stat: "300+", label: "Family members can contribute each month" },
            { stat: "0", label: "Technology required by the resident" },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-3xl font-bold text-amber-300 mb-1">{item.stat}</p>
              <p className="text-green-100 text-sm leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── The Problem ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Visits are precious — but they can't happen every week
          </h2>
          <div className="grid md:grid-cols-2 gap-10 text-gray-600 text-lg leading-relaxed">
            <div>
              <p className="mb-5">
                When a parent or grandparent moves into aged care, the gap between visits can feel enormous — for them and for you. Phone calls help, but many residents struggle with hearing or technology. Video calls can be confusing or distressing.
              </p>
              <p className="mb-5">
                Meanwhile, family life keeps moving. Grandchildren grow. Milestones pass. And for a resident without access to social media or digital updates, the world can begin to feel very far away.
              </p>
              <p>
                The <strong>Australian Institute of Health and Welfare</strong> reports that approximately one in four Australians aged 65 and over experience problematic loneliness — and the rates are significantly higher among aged care residents who rely on visits as their primary family contact.
              </p>
            </div>
            <div className="bg-amber-50 rounded-2xl p-8 border-l-4 border-amber-400">
              <p className="text-2xl font-bold text-gray-900 mb-3 leading-snug">
                "She keeps her newspaper on her bedside table and reads bits of it every single day."
              </p>
              <p className="text-gray-500 text-base">— Family of a resident at an aged care facility in Brisbane</p>
              <div className="mt-6 pt-6 border-t border-amber-200">
                <p className="text-gray-700">
                  A printed newspaper changes the dynamic. It doesn't replace visits — it fills the space between them with something warm, familiar, and entirely theirs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why families of aged care residents choose News of the Tribe
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Designed for residents who aren't on social media — and families who want to do more.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 border border-green-100 hover:shadow-lg transition-shadow">
                <div className="bg-green-800 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dementia / Alzheimer's callout ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-800 to-green-900 rounded-2xl p-10 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Especially meaningful for residents with dementia
          </h2>
          <p className="text-green-100 text-lg leading-relaxed mb-6">
            Research from <strong className="text-white">Alzheimer's Research UK</strong> and <strong className="text-white">Dementia Australia</strong> confirms that tangible printed materials featuring familiar faces are among the most effective tools for emotional connection when verbal memory fades.
          </p>
          <p className="text-green-100 text-lg leading-relaxed mb-6">
            Even when a resident can no longer recall names or recent events, <strong className="text-white">recognition of familiar faces in photographs</strong> often persists. A printed newspaper filled with family photos gives residents with dementia a consistent, gentle anchor to the people who love them — something they can hold, revisit, and show to staff and other residents.
          </p>
          <p className="text-green-100 italic">
            "Even when Dad couldn't place who we were verbally, he'd see the photos in the newspaper and his face would completely change. That was everything to us." — Daughter of a dementia resident, Melbourne
          </p>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How it works</h2>
            <p className="text-xl text-gray-500">Set up in minutes. Runs automatically every month.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {howItWorks.map((step) => (
              <div key={step.step} className="text-center">
                <div className="bg-green-800 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-md">
                  {step.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-14">
            What families say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gradient-to-br from-green-50 to-white rounded-xl p-7 border border-green-100 shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic leading-relaxed mb-6">"{t.quote}"</p>
                <div className="border-t border-green-100 pt-4">
                  <p className="font-bold text-gray-900">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.role} — {t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Simple, flexible pricing</h2>
          <p className="text-xl text-gray-500 mb-12">No contracts. Cancel anytime. Worldwide delivery included.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { name: "The Update", price: "19.99", pages: "12 pages", photos: "Up to 63 photos", popular: false },
              { name: "The Essential", price: "22.99", pages: "16 pages", photos: "Up to 87 photos", popular: true },
              { name: "Family Journal", price: "24.99", pages: "20 pages", photos: "Up to 111 photos", popular: false },
            ].map((plan, i) => (
              <div key={i} className={`bg-white rounded-2xl p-7 shadow-lg border-2 ${plan.popular ? "border-green-800 relative" : "border-gray-100"}`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green-800 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-3xl font-bold text-green-800 mb-1">${plan.price}<span className="text-base font-normal text-gray-400">/mo</span></p>
                <p className="text-sm text-gray-500 mb-4">{plan.pages} · {plan.photos}</p>
                <Link
                  href="/#download"
                  className={`block w-full py-3 rounded-lg font-bold text-center transition-colors ${plan.popular ? "bg-green-800 text-white hover:bg-green-900" : "border-2 border-green-800 text-green-800 hover:bg-green-50"}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm">
            All plans include professional printing, premium paper, and delivery to any address in Australia.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl p-6 hover:border-green-200 transition-colors">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.name}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Aged care partnership CTA ── */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-800 to-green-900 text-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Are you an aged care provider?</h2>
            <p className="text-green-100 text-lg leading-relaxed mb-4">
              News of the Tribe is used by families of residents at aged care facilities across Australia. If you're interested in offering this as a recommended family engagement service to your residents' families, we'd love to hear from you.
            </p>
            <p className="text-green-100 leading-relaxed">
              Facilities that recommend News of the Tribe report higher family satisfaction scores and residents who are visibly more engaged and settled.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="mailto:info@newsofthetribe.com?subject=Aged Care Partnership Enquiry"
              className="flex items-center justify-center gap-3 bg-amber-400 hover:bg-amber-500 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-lg"
            >
              <Mail size={22} />
              Contact Us About Partnerships
            </a>
            <Link
              href="/#download"
              className="flex items-center justify-center gap-3 border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-900 transition-colors"
            >
              Start for a Resident Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── Related reading ── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-8">Further reading</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { href: "/blog/staying-connected-with-alzheimers", category: "Wellbeing", title: "Staying Connected with Loved Ones with Alzheimer's" },
              { href: "/blog/sharing-travel-memories-elderly", category: "Family Connection", title: "The Power of Sharing Travel Memories with Elderly Loved Ones" },
              { href: "/blog/loneliness-and-staying-connected-with-family", category: "Wellbeing", title: "Why Loneliness Grows With Age — and How Regular Family News Can Help" },
            ].map((post, i) => (
              <Link key={i} href={post.href}
                className="group border border-gray-100 hover:border-green-200 rounded-xl p-5 transition-all hover:shadow-md"
              >
                <span className="text-xs font-bold text-green-800 uppercase tracking-wide">{post.category}</span>
                <h3 className="font-bold text-gray-900 mt-1 group-hover:text-green-800 transition-colors leading-snug text-sm">{post.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-white py-10 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-3">
            <img src="/images/NOTT-Logo5gradient.png" alt="News of the Tribe" className="h-8 w-auto" width="32" height="32" />
            <span>© 2025 News of the Tribe. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/gift-for-grandparents" className="hover:text-white transition-colors">Gift Ideas</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <a href="mailto:info@newsofthetribe.com" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}