"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

// ── Data ──────────────────────────────────────────────────────────────────────

const webDevFeatures = [
  { icon: "⚡", title: "Lightning Performance", desc: "Core Web Vitals optimized. Sub-second load times guaranteed." },
  { icon: "📱", title: "Mobile-First", desc: "Pixel-perfect on every device, from phone to 4K display." },
  { icon: "🔒", title: "Secure by Default", desc: "SSL, HTTPS, security headers, and best practices baked in." },
  { icon: "♿", title: "Accessible", desc: "WCAG 2.1 AA compliant so everyone can use your site." },
];

const webDevStack = [
  "Next.js / React", "TypeScript", "Node.js", "PostgreSQL",
  "Tailwind CSS", "Headless CMS", "REST & GraphQL APIs", "AWS / Vercel",
];

const seoFeatures = [
  { icon: "🔍", title: "Technical SEO Audit", desc: "Deep crawl to uncover and fix every technical issue hurting your rankings." },
  { icon: "📝", title: "Content Optimization", desc: "Keyword research, on-page optimization, and content gap analysis." },
  { icon: "🔗", title: "Link Building", desc: "High-authority backlinks that build domain authority and trust." },
  { icon: "📊", title: "Rank Tracking", desc: "Real-time dashboards showing your keyword positions and traffic trends." },
];

const seoProcess = [
  { step: "01", title: "Audit & Research", desc: "Comprehensive site audit + competitor and keyword research." },
  { step: "02", title: "Strategy", desc: "Custom SEO roadmap aligned with your business goals." },
  { step: "03", title: "Implementation", desc: "On-page, technical, and off-page optimizations executed." },
  { step: "04", title: "Monitor & Iterate", desc: "Monthly reporting and continuous optimization." },
];

const marketingServices = [
  {
    icon: "💰",
    title: "PPC & Paid Ads",
    desc: "Google Ads, Meta Ads, and LinkedIn campaigns engineered for maximum ROI.",
    features: ["Search & Display", "Retargeting", "Shopping Ads", "Bid Optimization"],
  },
  {
    icon: "📣",
    title: "Social Media Marketing",
    desc: "Build community, drive engagement, and convert followers into customers.",
    features: ["Content Calendar", "Community Management", "Influencer Outreach", "Analytics"],
  },
  {
    icon: "📧",
    title: "Email Marketing",
    desc: "Automated sequences and campaigns that nurture leads and drive repeat sales.",
    features: ["Drip Campaigns", "Segmentation", "A/B Testing", "Deliverability"],
  },
  {
    icon: "🎯",
    title: "Conversion Rate Optimization",
    desc: "Turn more of your existing traffic into paying customers.",
    features: ["Heatmap Analysis", "A/B Testing", "Landing Pages", "Funnel Optimization"],
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden bg-grid">
        <div className="glow-orb w-96 h-96 bg-blue-electric/15 top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="tag-pill mb-6 inline-block">What We Offer</span>
            <h1 className="font-syne font-extrabold text-5xl md:text-6xl text-white mb-6 section-heading section-heading-center">
              Services Built for <span className="gradient-text">Growth</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-inter leading-relaxed max-w-2xl mx-auto">
              Three core disciplines. One unified strategy. Measurable results that compound over time.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WEB DEVELOPMENT ──────────────────────────────────────────────── */}
      <section id="web-development" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <ScrollReveal direction="left">
              <span className="tag-pill mb-4 inline-block">01 — Web Development</span>
              <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-6 section-heading">
                Websites That Work as Hard as You Do
              </h2>
              <p className="text-white/60 font-inter leading-relaxed mb-6">
                We build custom websites and web applications that are fast, secure, and designed
                to convert. From simple landing pages to complex SaaS platforms, we deliver
                production-ready code that scales.
              </p>
              <p className="text-white/60 font-inter leading-relaxed mb-8">
                Every project starts with a deep discovery phase to understand your users,
                business goals, and technical requirements — then we build with precision.
              </p>
              <Link href="/contact" className="btn-glow px-7 py-3 rounded-xl font-semibold text-white font-inter inline-block">
                Start Your Project →
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {webDevFeatures.map((f) => (
                  <div key={f.title} className="glass-card glass-card-hover p-5">
                    <div className="text-2xl mb-3">{f.icon}</div>
                    <h3 className="font-syne font-bold text-white text-base mb-2">{f.title}</h3>
                    <p className="text-white/50 text-sm font-inter">{f.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Tech stack */}
          <ScrollReveal>
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="font-syne font-bold text-white text-xl mb-6 text-center">Our Tech Stack</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {webDevStack.map((tech) => (
                  <span key={tech} className="tag-pill">{tech}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-white/5 mx-6" />

      {/* ── SEO ──────────────────────────────────────────────────────────── */}
      <section id="seo" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="tag-pill mb-4 inline-block">02 — SEO Optimization</span>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4 section-heading section-heading-center">
              Rank Higher. Get Found. Grow Faster.
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto font-inter">
              Our data-driven SEO strategies are built for long-term, sustainable growth —
              not quick wins that disappear with the next algorithm update.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {seoFeatures.map((f, i) => (
              <ScrollReveal key={f.title} direction="up" delay={i * 0.1}>
                <div className="glass-card glass-card-hover p-6 h-full">
                  <div className="service-icon-wrap w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4">
                    {f.icon}
                  </div>
                  <h3 className="font-syne font-bold text-white text-base mb-2">{f.title}</h3>
                  <p className="text-white/50 text-sm font-inter leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Process */}
          <ScrollReveal>
            <h3 className="font-syne font-bold text-white text-2xl text-center mb-10">Our SEO Process</h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seoProcess.map((p, i) => (
              <ScrollReveal key={p.step} direction="up" delay={i * 0.1}>
                <div className="glass-card p-6 relative overflow-hidden">
                  <span className="absolute top-4 right-4 font-syne font-extrabold text-5xl text-blue-electric/10">
                    {p.step}
                  </span>
                  <div className="relative z-10">
                    <span className="tag-pill mb-3 inline-block">{p.step}</span>
                    <h4 className="font-syne font-bold text-white text-lg mb-2">{p.title}</h4>
                    <p className="text-white/50 text-sm font-inter">{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-white/5 mx-6" />

      {/* ── DIGITAL MARKETING ────────────────────────────────────────────── */}
      <section id="digital-marketing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="tag-pill mb-4 inline-block">03 — Digital Marketing</span>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4 section-heading section-heading-center">
              Full-Funnel Marketing That Converts
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto font-inter">
              From awareness to purchase and beyond — we build marketing systems that
              attract, engage, and retain your ideal customers.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marketingServices.map((svc, i) => (
              <ScrollReveal key={svc.title} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.1}>
                <div className="glass-card glass-card-hover p-7 h-full">
                  <div className="flex items-start gap-5">
                    <div className="service-icon-wrap w-14 h-14 rounded-xl flex items-center justify-center text-2xl shrink-0">
                      {svc.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-syne font-bold text-white text-xl mb-2">{svc.title}</h3>
                      <p className="text-white/50 text-sm font-inter leading-relaxed mb-4">{svc.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {svc.features.map((f) => (
                          <span key={f} className="tag-pill">{f}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="glass-card gradient-border rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="glow-orb w-64 h-64 bg-blue-electric/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10">
                <h2 className="font-syne font-extrabold text-3xl md:text-4xl text-white mb-4">
                  Not Sure Where to Start?
                </h2>
                <p className="text-white/50 mb-8 font-inter">
                  Book a free 30-minute strategy call and we&apos;ll map out the best path forward for your business.
                </p>
                <Link href="/contact" className="btn-glow px-8 py-4 rounded-xl font-semibold text-white font-inter inline-block">
                  Book a Free Strategy Call →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
