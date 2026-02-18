'use client'

import WelcomeOfferWidget from './WelcomeOfferWidget';
import React, { useState } from 'react';
import { Menu, X, Download, Users, Newspaper, Mail, Heart, CheckCircle, Camera, MessageCircle, Star, Gift, Clock, Shield } from 'lucide-react';

type SeoIntro = {
  title: string;
  subtitle?: string;
  paragraph: string;
};

const NewsOfTheTribe = ({
  seoIntro,
}: {
  seoIntro?: SeoIntro;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      name: 'The Update',
      price: '19.99',
      pages: '12 pages',
      posts: '21 posts',
      photos: 'Up to 63 photos',
      description: 'Perfect for Monthly Family Updates',
      details: 'A beautifully designed 12-page family newspaper that keeps it simple and heartfelt. Each edition features a front page, key family highlights, your latest updates, and feature stories that grandparents will love to read and re-read.',
      ideal: 'Ideal for smaller families, first-time users, or monthly catch-ups. Easy to read, easy to love, and becomes a cherished keepsake.',
      features: [
        'Clear front page with family highlights',
        'Curated selection of your best moments',
        'Feature stories that capture special memories',
        'Lightweight format, focused on what matters most',
        'Perfect conversation starter for family calls'
      ]
    },
    {
      name: 'The Essential',
      price: '22.99',
      pages: '16 pages',
      posts: '29 posts',
      photos: 'Up to 87 photos',
      description: 'Your Complete Family Story Every Month',
      details: 'A comprehensive 16-page family newspaper with room for richer storytelling. More posts, more photos, more voices — ensuring grandparents feel truly included in the everyday moments, not just the big milestones.',
      ideal: 'Perfect for families with regular sharing, multiple households, or more frequent moments worth capturing and preserving.',
      features: [
        'Extended space for detailed family updates',
        'Better storytelling with more context and depth',
        'Additional columns for different family members',
        'Balanced mix of quick updates and deeper stories',
        'Creates stronger continuity across weeks'
      ],
      popular: true
    },
    {
      name: 'Family Journal',
      price: '24.99',
      pages: '20 pages',
      posts: '37 posts',
      photos: 'Up to 111 photos',
      description: 'The Complete Family Magazine Experience',
      details: 'Our premium 20-page family magazine — the most complete, magazine-style edition. Maximum capacity for updates, multiple feature stories, and a full set of recurring sections. Perfect for capturing every precious moment.',
      ideal: 'Designed for larger families, high sharing volume, or special editions celebrating holidays, birthdays, and major milestones.',
      features: [
        'Complete, professional magazine-style layout',
        'Maximum capacity for posts and photos',
        'Most immersive family reading experience',
        'Captures daily life, milestones, and small joys',
        'Strongest emotional impact — cherished for years',
        'Every family member included without limits'
      ]
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Download the Free App',
      description: 'Available on iOS and Android. Get started in minutes with our simple, user-friendly interface designed for all ages.',
      icon: <Download size={32} />
    },
    {
      step: 2,
      title: 'Create Your Family Tribe',
      description: 'Set up your private family group and choose who receives the printed newspaper — grandparents, parents, or any loved one.',
      icon: <Users size={32} />
    },
    {
      step: 3,
      title: 'Invite Family Members',
      description: 'Share your unique Tribe code with siblings, children, cousins — up to 300 family members can contribute to each newspaper.',
      icon: <Heart size={32} />
    },
    {
      step: 4,
      title: "Share Life's Moments",
      description: 'Post photos, stories, funny moments, and updates throughout the month. Everyone in your Tribe can contribute and comment.',
      icon: <Camera size={32} />
    },
    {
      step: 5,
      title: 'We Print & Deliver',
      description: "Every first Monday of the month, we professionally print and mail your personalized newspaper directly to your loved ones' doorstep.",
      icon: <Mail size={32} />
    }
  ];

  const benefits = [
    {
      icon: <Heart size={32} />,
      title: 'Bridge the Digital Divide',
      description: "Perfect for grandparents and elderly relatives who aren't on social media or struggle with technology. They get to see family photos and updates in a format they love — print."
    },
    {
      icon: <Clock size={32} />,
      title: 'Create Lasting Memories',
      description: 'Unlike digital posts that disappear in feeds, your printed newspapers become cherished keepsakes. Physical albums that families re-read for years.'
    },
    {
      icon: <Users size={32} />,
      title: 'Strengthen Family Bonds',
      description: 'Keep extended families connected across distances. Children grow up knowing their grandparents, cousins stay in touch, family history is preserved.'
    },
    {
      icon: <Shield size={32} />,
      title: 'Private & Ad-Free',
      description: 'Your family memories are yours alone. Completely private, no advertising, no data selling. Just your family, your stories, your newspaper.'
    },
    {
      icon: <Gift size={32} />,
      title: 'Perfect Conversation Starter',
      description: 'Every newspaper sparks phone calls, video chats, and deeper family connections. Grandparents have something to talk about with grandchildren.'
    },
    {
      icon: <MessageCircle size={32} />,
      title: 'Everyone Can Contribute',
      description: "All family members participate — from young children sharing drawings to adults posting updates. Everyone's voice matters in your family story."
    }
  ];

  const sections = [
    { name: 'The Edito', description: 'Monthly message from family leaders' },
    { name: "What's New?", description: 'Latest family updates and announcements' },
    { name: 'Remember…', description: 'Cherished memories and throwback moments' },
    { name: "That's a Good One!", description: 'Funny stories and family jokes' },
    { name: "Let's Play", description: 'Games, puzzles, and activities' },
    { name: 'When Will We See Each Other', description: 'Upcoming family events and gatherings' },
    { name: 'Birthdays', description: 'Monthly birthday celebrations' }
  ];

  const testimonials = [
    {
      quote: "My mother is 82 and doesn't use Facebook. This newspaper is the only way she sees photos of her great-grandchildren. She keeps every single edition in a special drawer.",
      author: "Sarah M.",
      role: "Daughter & Mother of 3",
      location: "Sydney, Australia"
    },
    {
      quote: "We have family spread across 4 countries. News of the Tribe keeps us all connected. Our kids are learning about their cousins, aunts, and uncles they rarely see in person.",
      author: "James & Linda K.",
      role: "Parents & Grandparents",
      location: "Melbourne, Australia"
    },
    {
      quote: "Dad doesn't do technology, but he reads every newspaper cover to cover. He calls us about the stories and asks questions. It's brought our family so much closer.",
      author: "Michael T.",
      role: "Son",
      location: "Brisbane, Australia"
    }
  ];

  const faqs = [
    {
      question: "How often do you print and deliver the newspaper?",
      answer: "We professionally print and mail your personalised newspaper every first Monday of the month.",
    },
    {
      question: "Can multiple family members contribute?",
      answer: "Yes. You can invite up to 300 family members to your Tribe, and everyone can post photos and stories throughout the month.",
    },
    {
      question: "Is it a subscription? Can I cancel anytime?",
      answer: "Yes, it's monthly and flexible — no contracts. You can change plans or cancel anytime.",
    },
    {
      question: "Do you deliver outside Australia?",
      answer: "Yes. We include worldwide delivery, so your loved ones can receive it anywhere.",
    },
    {
      question: "Is it private and ad-free?",
      answer: "Completely. Your Tribe is private, there are no ads, and we don't sell your data.",
    },
    {
      question: "Do we also get a digital copy?",
      answer: "Yes. All members get a digital PDF version in addition to the printed delivery.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b-2 border-amber-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <img
                src="/images/NOTT-Logo5gradient.png"
                alt="News of the Tribe - Print Family Photos into Monthly Newspapers for Grandparents"
                className="h-20 w-auto"
                width="80"
                height="80"
              />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-green-800 font-medium transition-colors">Home</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-green-800 font-medium transition-colors">How It Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-green-800 font-medium transition-colors">Pricing</a>
              <a href="#benefits" className="text-gray-700 hover:text-green-800 font-medium transition-colors">Benefits</a>
              <a href="#testimonials" className="text-gray-700 hover:text-green-800 font-medium transition-colors">Reviews</a>
              <a href="#download" className="bg-green-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-900 transition-colors shadow-md">
                Download App
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-green-800"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <a href="#home" className="block py-2 text-gray-700 hover:text-green-800">Home</a>
              <a href="#how-it-works" className="block py-2 text-gray-700 hover:text-green-800">How It Works</a>
              <a href="#pricing" className="block py-2 text-gray-700 hover:text-green-800">Pricing</a>
              <a href="#benefits" className="block py-2 text-gray-700 hover:text-green-800">Benefits</a>
              <a href="#testimonials" className="block py-2 text-gray-700 hover:text-green-800">Reviews</a>
              <a href="#download" className="block py-2 text-gray-700 hover:text-green-800">Download App</a>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-green-50 via-white to-amber-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {seoIntro?.title ?? "Turn Family Photos into Printed Newspapers for Grandparents"}
              </h1>
              {seoIntro?.subtitle ? (
                <p className="text-2xl text-green-800 font-semibold mb-4">
                  {seoIntro.subtitle}
                </p>
              ) : (
                <p className="text-2xl text-green-800 font-semibold mb-4">
                  Monthly Printed • Professionally Mailed • Cherished Forever
                </p>
              )}
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {seoIntro?.paragraph ??
                  "Share your family's best moments with loved ones who aren't on social media. We transform your photos and stories into beautiful printed newspapers, delivered monthly to grandparents, elderly relatives, and family members around the world."}
              </p>

              <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-100 mb-8">
                <h2 className="font-bold text-lg text-gray-900 mb-4">Getting Started is Simple:</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-800 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Download the free app</strong> on iOS or Android</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-800 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Create your family Tribe</strong> in under 2 minutes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-800 mt-1 flex-shrink-0" size={20} />
                    <span><strong>Share photos and stories</strong> throughout the month</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-800 mt-1 flex-shrink-0" size={20} />
                    <span><strong>We print and mail</strong> your personalized family newspaper</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-4 mb-6">
                <a href="#download" className="bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-900 transition-colors shadow-lg inline-flex items-center gap-2">
                  Start your First News Of The Tribe
                  <Download size={24} />
                </a>
                <a href="#how-it-works" className="border-2 border-green-800 text-green-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors">
                  See How It Works
                </a>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-800" size={16} />
                  <span>No contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-800" size={16} />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-800" size={16} />
                  <span>100% ad-free</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-green-800" size={16} />
                  <span>Private & secure</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/images/GrandadGreatkids.jpg"
                alt="Grandparents reading personalised family newspaper with grandchildren"
                className="rounded-2xl shadow-2xl"
                loading="eager"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-2 border-green-100">
                <div className="flex items-center gap-3">
                  <Newspaper className="text-green-800" size={32} />
                  <div>
                    <p className="font-bold text-2xl text-gray-900">Keep Aussie</p>
                    <p className="text-gray-600 text-sm">Families Connected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-800 to-green-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why Families Around the World Choose News of the Tribe
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-amber-300" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">For Elderly & Grandparents</h3>
              <p className="text-green-100 leading-relaxed">
                Perfect for those who don't use smartphones or social media. They receive physical newspapers they can hold, read, and treasure — just like the old days.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-amber-300" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">For Families Across Distances</h3>
              <p className="text-green-100 leading-relaxed">
                Whether you're across town or across continents, keep everyone connected. Children know their grandparents, cousins stay in touch, family bonds stay strong.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Newspaper className="text-amber-300" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Physical Memories That Last</h3>
              <p className="text-green-100 leading-relaxed">
                Unlike digital posts that get lost in feeds, these printed newspapers become family heirlooms — re-read, shared at gatherings, and preserved for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              More Than Just a Printed Newsletter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              News of the Tribe creates meaningful connections between generations, preserves family history, and brings joy to loved ones who matter most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-gradient-to-br from-green-50 to-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-green-100">
                <div className="bg-green-800 text-white w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How to Create a Personalised Family Newspaper for Grandparents</h2>
            <p className="text-xl text-gray-600">From your phone to their doorstep in 5 simple steps</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 mb-16">
            {howItWorks.map((step) => (
              <div key={step.step} className="text-center">
                <div className="bg-green-800 text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg">
                  {step.step}
                </div>
                <div className="bg-white p-6 rounded-xl h-full border-2 border-green-100 shadow-md">
                  <div className="text-green-800 mb-4 flex justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl border-2 border-green-200 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your Newspaper Includes These Sections:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {sections.map((section, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 hover:border-green-300 transition-colors">
                  <CheckCircle className="text-green-800 mb-2" size={20} />
                  <h4 className="font-bold text-gray-900 mb-1">{section.name}</h4>
                  <p className="text-sm text-gray-600">{section.description}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6 text-lg">
              <strong>Plus:</strong> Professional layout, high-quality printing on premium paper, and secure delivery to your loved one's mailbox.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Family Plan
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              All plans include professional printing and worldwide delivery
            </p>
            <p className="text-lg text-green-800 font-semibold">
              ✓ Flexible • ✓ No Contracts • ✓ Change Anytime • ✓ Cancel Anytime
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:scale-105 ${
                  plan.popular ? 'border-4 border-green-800 relative ring-4 ring-green-100' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-green-800 to-green-900 text-white text-center py-3 font-bold text-lg">
                    ⭐ MOST POPULAR CHOICE
                  </div>
                )}
                <div className="p-8">
                  <div className="mb-6 flex justify-center">
                    <img
                      src={`/images/Formula${idx + 1}.jpg`}
                      alt={`${plan.name} example`}
                      className="w-48 h-auto rounded-lg shadow-md border-2 border-green-100"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-green-800">${plan.price}</span>
                    <span className="text-gray-600 text-lg"> AUD/month</span>
                  </div>
                  <p className="text-gray-700 font-semibold italic mb-6 text-lg">{plan.description}</p>

                  <div className="bg-gradient-to-br from-green-50 to-amber-50 p-5 rounded-lg mb-6 border border-green-200">
                    <div className="flex items-center justify-between mb-3 pb-3 border-b border-green-200">
                      <span className="font-bold text-gray-900">{plan.pages}</span>
                      <Newspaper className="text-green-800" size={24} />
                    </div>
                    <div className="flex items-center justify-between mb-3 pb-3 border-b border-green-200">
                      <span className="font-bold text-gray-900">{plan.posts}</span>
                      <MessageCircle className="text-green-800" size={24} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-gray-900">{plan.photos}</span>
                      <Camera className="text-green-800" size={24} />
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed text-base">{plan.details}</p>
                  <p className="text-gray-600 mb-6 italic text-sm bg-amber-50 p-3 rounded border-l-4 border-amber-300">
                    <strong>Perfect for:</strong> {plan.ideal}
                  </p>

                  <div className="mb-6">
                    <p className="font-bold text-gray-900 mb-3">What's Included:</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="text-green-800 mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedPlan === plan.name ? (
                    <div className="w-full px-6 py-4 rounded-lg font-bold text-lg text-center bg-amber-50 border-2 border-amber-400 text-amber-800">
                      ✓ Selected — Download the app to subscribe!
                    </div>
                  ) : (
                    <button
                      onClick={() => setSelectedPlan(plan.name)}
                      className={`w-full px-6 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg ${
                        plan.popular
                          ? 'bg-green-800 text-white hover:bg-green-900'
                          : 'bg-gray-100 text-green-800 hover:bg-green-50 border-2 border-green-800'
                      }`}
                    >
                      {plan.popular ? '🎯 Start with This Plan' : `Choose ${plan.name}`}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-green-50 to-amber-50 p-8 rounded-2xl border-2 border-green-200 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Every Plan Includes:</h3>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div>
                <CheckCircle className="text-green-800 mx-auto mb-2" size={32} />
                <p className="font-semibold">Professional printing on premium paper</p>
              </div>
              <div>
                <CheckCircle className="text-green-800 mx-auto mb-2" size={32} />
                <p className="font-semibold">Worldwide delivery included</p>
              </div>
              <div>
                <CheckCircle className="text-green-800 mx-auto mb-2" size={32} />
                <p className="font-semibold">Up to 300 family members per Tribe</p>
              </div>
              <div>
                <CheckCircle className="text-green-800 mx-auto mb-2" size={32} />
                <p className="font-semibold">Digital PDF for all members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 bg-gradient-to-br from-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know before creating your first edition
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-800 hover:shadow-2xl transition-shadow"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-700 font-semibold">
              Still have questions?{" "}
              <a
                href="mailto:support@newsofthetribe.com"
                className="text-green-800 underline hover:text-green-900"
              >
                Email our support team
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real Families, Real Stories</h2>
            <p className="text-xl text-gray-600">See how News of the Tribe is bringing families closer together</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-800 hover:shadow-2xl transition-shadow">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} className="text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm mt-1">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-700 font-semibold">
              Join Aussie families creating lasting memories
            </p>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-20 px-4 bg-gradient-to-r from-green-800 to-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Connect Your Family?</h2>
          <p className="text-2xl text-green-100 mb-4 font-semibold">
            Start Your First News Of The Tribe Today
          </p>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Download the app in minutes. Create your first family newspaper. See the joy on your loved ones' faces when they receive it in the mail.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <a
              href="https://play.google.com/store/apps/details?id=com.newsofthetribe.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-800 px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors shadow-lg inline-flex items-center gap-3 min-w-[200px] justify-center"
            >
              <Download size={24} />
              Google Play
            </a>
            <a
              href="https://apps.apple.com/us/app/news-of-the-tribe/id6751501446"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-800 px-10 py-4 rounded-lg font-bold text-lg hover:bg-green-50 transition-colors shadow-lg inline-flex items-center gap-3 min-w-[200px] justify-center"
            >
              <Download size={24} />
              App Store
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-green-100 mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>Free to download</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>No contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>Worldwide delivery</span>
            </div>
          </div>

          <p className="text-2xl font-bold text-amber-300">
            Because some moments are too precious to stay digital
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img
                src="/images/NOTT-LogoWhite.png"
                alt="News of the Tribe Logo"
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming digital memories into printed treasures that bring families together across generations and distances.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing Plans</a></li>
                <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
                <li><a href="#download" className="hover:text-white transition-colors">Download App</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#testimonials" className="hover:text-white transition-colors">Customer Reviews</a></li>
                <li><a href="mailto:support@newsofthetribe.com" className="hover:text-white transition-colors">Contact Support</a></li>
                <li><a href="mailto:info@newsofthetribe.com" className="hover:text-white transition-colors">General Inquiries</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-lg">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p className="mb-2">&copy; 2024 News of the Tribe. All rights reserved.</p>
            <p className="italic">Reviving the art of connection, one printed newspaper at a time.</p>
          </div>
        </div>
      </footer>		 
	  
	  <WelcomeOfferWidget />
    </div>  
  );
};

export default NewsOfTheTribe;