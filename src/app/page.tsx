"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);
const HeroCanvas = dynamic(() => import("@/components/HeroCanvas"), { ssr: false });

// ── Data ──────────────────────────────────────────────────────────────────────
const stats = [
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 98,  suffix: "%", label: "Client Satisfaction" },
  { value: 12,  suffix: "+", label: "Years Experience" },
  { value: 40,  suffix: "+", label: "Team Members" },
];

const logos = ["TechCorp","NovaBrand","Apex Digital","Stellar Inc","FutureLabs","Orbit Co","GrowthHQ","MediaPulse"];

const serviceTabs = [
  {
    id: "web",
    label: "Web Development",
    icon: "🌐",
    headline: "Websites That Work as Hard as You Do",
    desc: "We build blazing-fast, pixel-perfect websites and web apps that convert visitors into customers. From landing pages to full SaaS platforms — built to scale.",
    features: ["Next.js / React", "Custom CMS Integration", "E-commerce Solutions", "API Development", "Performance Optimized", "Mobile-First Design"],
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
  },
  {
    id: "seo",
    label: "SEO",
    icon: "📈",
    headline: "Rank Higher. Get Found. Grow Faster.",
    desc: "Data-driven SEO strategies built for long-term, sustainable growth. We fix what's broken, build what's missing, and track everything that matters.",
    features: ["Technical SEO Audit", "Keyword Research", "On-Page Optimization", "Link Building", "Local SEO", "Monthly Reporting"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    id: "marketing",
    label: "Digital Marketing",
    icon: "🚀",
    headline: "Full-Funnel Campaigns That Convert",
    desc: "From awareness to purchase — we build marketing systems that attract, engage, and retain your ideal customers across every channel.",
    features: ["Google & Meta Ads", "Social Media Marketing", "Email Automation", "Content Strategy", "CRO", "Analytics & Attribution"],
    img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop",
  },
];

const whyUs = [
  { icon: "🎯", title: "Results, Not Promises", desc: "We set clear KPIs upfront and report against them every month. No vanity metrics — only numbers that move your business." },
  { icon: "🔬", title: "Data-Driven Strategy", desc: "Every decision is backed by analytics, A/B tests, and real market data. We let numbers guide the strategy." },
  { icon: "⚡", title: "Fast Execution", desc: "Agile sprints mean you see results faster. We move quickly without cutting corners on quality." },
  { icon: "🤝", title: "True Partnership", desc: "We embed ourselves in your team. Your goals become our goals — we're invested in your long-term success." },
  { icon: "📊", title: "Full Transparency", desc: "You always know where your budget goes. Live dashboards, weekly updates, and honest conversations." },
  { icon: "💎", title: "Senior-Level Talent", desc: "No juniors on your account. Every project is handled by experienced specialists who've done it before." },
];

const process = [
  { step: "01", title: "Discovery Call", desc: "We learn your business, goals, and current challenges in a free 30-min strategy session." },
  { step: "02", title: "Custom Strategy", desc: "Our team builds a tailored roadmap with clear KPIs, timelines, and deliverables." },
  { step: "03", title: "Execution", desc: "We launch campaigns, build assets, and implement strategies with precision and speed." },
  { step: "04", title: "Measure & Scale", desc: "We track every metric, report transparently, and double down on what's working." },
];

const testimonials = [
  { name: "Sarah Mitchell", role: "CEO, TechCorp", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face", text: "HigherWebSolution transformed our online presence completely. Our organic traffic tripled in just 6 months. The team is exceptional — they actually care about results.", rating: 5 },
  { name: "James Rodriguez", role: "Founder, NovaBrand", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face", text: "The website they built is stunning and lightning fast. Conversion rate went up 40%. They delivered exactly what they promised, on time and on budget.", rating: 5 },
  { name: "Emily Chen", role: "Marketing Director, Apex Digital", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face", text: "Their digital marketing campaigns are data-driven and results-focused. ROI has been incredible. I've worked with 3 agencies before — these guys are different.", rating: 5 },
  { name: "Rahul Sharma", role: "Founder, FutureLabs", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face", text: "SEO results were visible within 60 days. We went from page 3 to position 1 for our main keywords. The transparency and communication is top-notch.", rating: 5 },
];

const faqs = [
  { q: "How quickly will I see results?", a: "SEO typically shows measurable movement in 60–90 days. Paid ads can generate leads within the first week. Web projects are delivered in 4–8 weeks depending on scope." },
  { q: "What industries do you work with?", a: "We've worked with e-commerce, SaaS, real estate, healthcare, education, and professional services. Our strategies are tailored to your specific industry and audience." },
  { q: "Do you work with startups or only established businesses?", a: "Both. We have scalable packages for early-stage startups and full-service retainers for established brands. We'll recommend what makes sense for your stage." },
  { q: "What does your reporting look like?", a: "Every client gets a live dashboard with real-time metrics, plus monthly strategy calls and detailed performance reports with clear next steps." },
  { q: "How do you measure success?", a: "We agree on KPIs before we start — leads, revenue, rankings, ROAS, or traffic. Everything we do is measured against those goals." },
  { q: "Do you offer ongoing support after launch?", a: "Yes. We offer flexible retainer packages for ongoing development, SEO, and marketing. Most clients stay with us long-term." },
];

// ── Stat Counter ──────────────────────────────────────────────────────────────
function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const numRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = numRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.from({ val: 0 }, {
        val: value, duration: 2, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
        onUpdate: function () { if (el) el.textContent = Math.round(this.targets()[0].val).toString(); },
      });
    });
    return () => ctx.revert();
  }, [value]);
  return (
    <div className="text-center">
      <div className="stat-number text-5xl md:text-6xl mb-2">
        <span ref={numRef}>0</span><span>{suffix}</span>
      </div>
      <p className="text-slate-500 text-sm font-inter">{label}</p>
    </div>
  );
}

// ── FAQ Item ──────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item py-5">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 text-left group">
        <span className={`font-syne font-semibold text-base transition-colors ${open ? "text-orange-DEFAULT" : "text-slate-800 group-hover:text-slate-600"}`}>{q}</span>
        <span className={`w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${open ? "bg-orange-DEFAULT border-orange-DEFAULT rotate-45" : "border-slate-200 group-hover:border-slate-300"}`}>
          <svg className={`w-3.5 h-3.5 ${open ? "text-white" : "text-slate-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      {open && <p className="text-slate-500 text-sm font-inter leading-relaxed mt-3 pr-10">{a}</p>}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState("web");

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-badge",    { opacity: 0, y: 20, duration: 0.6, delay: 0.3, ease: "power3.out" });
      gsap.from(".hero-headline", { opacity: 0, y: 40, duration: 0.8, delay: 0.5, ease: "power3.out" });
      gsap.from(".hero-sub",      { opacity: 0, y: 20, duration: 0.6, delay: 0.8, ease: "power3.out" });
      gsap.from(".hero-ctas",     { opacity: 0, y: 20, duration: 0.6, delay: 1.0, ease: "power3.out" });
      gsap.from(".hero-trust",    { opacity: 0, y: 20, duration: 0.6, delay: 1.2, ease: "power3.out" });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  const activeService = serviceTabs.find(t => t.id === activeTab)!;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="hero-section relative flex items-center justify-center overflow-hidden bg-grid bg-bg">
        <div className="hero-canvas-wrap absolute inset-0"><HeroCanvas /></div>
        <div className="glow-orb w-72 h-72 sm:w-96 sm:h-96 bg-orange-DEFAULT/8 -top-20 -left-20 sm:-top-40 sm:-left-40" />
        <div className="glow-orb w-64 h-64 sm:w-96 sm:h-96 bg-blue-DEFAULT/6 -bottom-10 -right-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-transparent to-bg pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center pt-24 pb-20">
          <div className="hero-badge section-label mb-6 sm:mb-8 mx-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-DEFAULT animate-pulse flex-shrink-0" />
            Results-Driven Digital Agency
          </div>

          <h1 className="hero-headline font-syne font-extrabold text-slate-900 mb-5 sm:mb-6"
            style={{ fontSize: "clamp(1.9rem, 7.5vw, 5.125rem)", lineHeight: 1.06 }}>
            Struggling to Grow<br />
            <span className="gradient-text">Your Business Online?</span>
          </h1>

          <p className="hero-sub text-slate-500 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 font-inter leading-relaxed px-2">
            HigherWebSolution delivers measurable results through high-performance websites,
            data-driven SEO, and full-funnel digital marketing campaigns.
          </p>

          <div className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-4 sm:px-0">
            <Link href="/contact" className="btn-primary w-full sm:w-auto px-7 py-4 text-base font-semibold font-inter">
              Get Free Strategy Call →
            </Link>
            <Link href="/portfolio" className="btn-secondary w-full sm:w-auto px-7 py-4 text-base font-semibold font-inter">
              View Our Work
            </Link>
          </div>

          <div className="hero-trust flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-slate-400 text-sm font-inter">
            {["✓ No long-term contracts", "✓ Results in 60 days", "✓ 250+ happy clients"].map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-slate-400 text-xs font-inter tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 sm:h-10 bg-gradient-to-b from-orange-DEFAULT/50 to-transparent" />
        </div>
      </section>

      {/* ── LOGO MARQUEE ─────────────────────────────────────────────────── */}
      <section className="py-8 sm:py-10 border-y border-slate-100 bg-bg2">
        <p className="text-center text-slate-400 text-xs font-inter uppercase tracking-widest mb-6 sm:mb-8 px-4">Trusted by growing businesses</p>
        <div className="marquee-wrap">
          <div className="marquee-track">
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="mx-4 sm:mx-8 px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl bg-white border border-slate-200 flex-shrink-0">
                <span className="font-syne font-bold text-slate-400 text-sm whitespace-nowrap">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10">
            {stats.map(s => <StatCounter key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      {/* ── SERVICES TABS ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-bg2">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-10 sm:mb-12">
            <span className="section-label mb-4 inline-flex">Our Services</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 mb-4">
              Everything You Need to <span className="gradient-text">Dominate Online</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto font-inter text-sm sm:text-base">Three core disciplines. One unified strategy. Measurable results.</p>
          </ScrollReveal>

          <div className="service-tabs-wrap border-b border-slate-200 mb-8 sm:mb-10">
            <div className="flex min-w-max">
              {serviceTabs.map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                  className={`service-tab ${activeTab === tab.id ? "active" : ""}`}>
                  <span className="mr-1.5">{tab.icon}</span>{tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <ScrollReveal direction="left">
              <h3 className="font-syne font-bold text-2xl sm:text-3xl text-slate-900 mb-4">{activeService.headline}</h3>
              <p className="text-slate-500 font-inter leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">{activeService.desc}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                {activeService.features.map(f => (
                  <div key={f} className="flex items-center gap-2 text-sm text-slate-600 font-inter">
                    <span className="w-5 h-5 rounded-full bg-orange-DEFAULT/15 border border-orange-DEFAULT/25 flex items-center justify-center flex-shrink-0">
                      <svg className="w-2.5 h-2.5 text-orange-DEFAULT" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {f}
                  </div>
                ))}
              </div>
              <Link href="/services" className="btn-primary px-7 py-3 text-sm font-semibold font-inter inline-flex">
                Learn More →
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden border border-slate-200 mt-6 lg:mt-0">
                <Image src={activeService.img} alt={activeService.label} width={600} height={400} className="w-full object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-bg">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-12 sm:mb-16">
            <span className="section-label mb-4 inline-flex">Why Choose Us</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 mb-4">
              We Don&apos;t Just Promise — <span className="gradient-text">We Deliver</span>
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto font-inter text-sm sm:text-base">70% of agencies overpromise and underdeliver. We&apos;re the other 30%.</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {whyUs.map((w, i) => (
              <ScrollReveal key={w.title} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.07}>
                <div className="card card-orange p-6 sm:p-7 h-full">
                  <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{w.icon}</div>
                  <h3 className="font-syne font-bold text-slate-900 text-base sm:text-lg mb-2">{w.title}</h3>
                  <p className="text-slate-500 text-sm font-inter leading-relaxed">{w.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-bg2">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-12 sm:mb-16">
            <span className="section-label mb-4 inline-flex">How It Works</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 mb-4">
              From Strategy to <span className="gradient-text">Results</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {process.map((p, i) => (
              <ScrollReveal key={p.step} direction="up" delay={i * 0.1}>
                <div className="relative text-center p-5 sm:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-orange-DEFAULT/10 border border-orange-DEFAULT/20 flex items-center justify-center mx-auto mb-4 sm:mb-5">
                    <span className="font-syne font-extrabold text-orange-DEFAULT text-lg sm:text-xl">{p.step}</span>
                  </div>
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-9 left-[calc(50%+32px)] right-[calc(-50%+32px)] h-px bg-gradient-to-r from-orange-DEFAULT/30 to-transparent" />
                  )}
                  <h3 className="font-syne font-bold text-slate-900 text-base sm:text-lg mb-2">{p.title}</h3>
                  <p className="text-slate-500 text-sm font-inter leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-bg">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-12 sm:mb-16">
            <span className="section-label mb-4 inline-flex">Client Reviews</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 mb-4">
              What Our Clients <span className="gradient-text">Say About Us</span>
            </h2>
            <div className="flex items-center justify-center gap-1.5 mt-4">
              {[1,2,3,4,5].map(s => <svg key={s} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
              <span className="text-slate-400 text-sm font-inter ml-2">5.0 · 93 Reviews</span>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} direction="up" delay={i * 0.1}>
                <div className="testimonial-card p-5 sm:p-6 h-full flex flex-col">
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed font-inter flex-1 mb-4 sm:mb-5">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <Image src={t.avatar} alt={t.name} width={40} height={40} className="rounded-full object-cover border-2 border-orange-DEFAULT/20 flex-shrink-0" />
                    <div>
                      <p className="font-syne font-semibold text-slate-900 text-sm">{t.name}</p>
                      <p className="text-slate-400 text-xs font-inter">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-bg2">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-10 sm:mb-12">
            <span className="section-label mb-4 inline-flex">FAQ</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500 font-inter text-sm sm:text-base">Everything you need to know before getting started.</p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="card p-2 sm:p-3">
              {faqs.map((faq, i) => <FaqItem key={i} {...faq} />)}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-bg">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden p-8 sm:p-12 text-center bg-slate-900" style={{ border: "1px solid rgba(249,115,22,0.2)" }}>
              <div className="glow-orb w-64 h-64 sm:w-80 sm:h-80 bg-orange-DEFAULT/15 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10">
                <span className="section-label mb-5 sm:mb-6 inline-flex">Ready to Grow?</span>
                <h2 className="font-syne font-extrabold text-white mb-4 sm:mb-5"
                  style={{ fontSize: "clamp(1.6rem, 5vw, 3rem)", lineHeight: 1.15 }}>
                  Stop Losing Customers to<br />
                  <span className="gradient-text">Your Competitors</span>
                </h2>
                <p className="text-white/60 text-base sm:text-lg mb-7 sm:mb-8 font-inter max-w-xl mx-auto">
                  Book a free 30-minute strategy call. We&apos;ll audit your current digital presence and show you exactly where the growth opportunities are.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                  <Link href="/contact" className="btn-primary w-full sm:w-auto px-7 py-4 text-base font-semibold font-inter">
                    Book Free Strategy Call →
                  </Link>
                  <Link href="/about" className="btn-secondary w-full sm:w-auto px-7 py-4 text-base font-semibold font-inter" style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)" }}>
                    Learn About Us
                  </Link>
                </div>
                <p className="text-white/30 text-xs font-inter mt-5 sm:mt-6">No commitment. No credit card. Just a conversation.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
