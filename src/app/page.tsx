"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const HeroCanvas = dynamic(() => import("@/components/HeroCanvas"), {
  ssr: false,
});

// ── Data ──────────────────────────────────────────────────────────────────────

const stats = [
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 12, suffix: "+", label: "Years Experience" },
  { value: 40, suffix: "+", label: "Team Members" },
];

const services = [
  {
    icon: "🌐",
    title: "Web Development",
    desc: "Blazing-fast, pixel-perfect websites and web apps built with modern frameworks.",
    features: ["Next.js / React", "Custom CMS", "E-commerce", "API Integration"],
  },
  {
    icon: "📈",
    title: "SEO Optimization",
    desc: "Data-driven SEO strategies that push your brand to the top of search results.",
    features: ["Technical SEO", "Content Strategy", "Link Building", "Analytics"],
  },
  {
    icon: "🚀",
    title: "Digital Marketing",
    desc: "Full-funnel campaigns that convert visitors into loyal, high-value customers.",
    features: ["PPC / Paid Ads", "Social Media", "Email Marketing", "CRO"],
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    desc: "Intuitive, beautiful interfaces that delight users and drive engagement.",
    features: ["Wireframing", "Prototyping", "Design Systems", "User Testing"],
  },
  {
    icon: "📊",
    title: "Analytics & Insights",
    desc: "Turn raw data into actionable intelligence that fuels smarter decisions.",
    features: ["GA4 Setup", "Custom Dashboards", "Heatmaps", "A/B Testing"],
  },
  {
    icon: "✍️",
    title: "Content Strategy",
    desc: "Compelling content that ranks, resonates, and converts across every channel.",
    features: ["Blog Writing", "Copywriting", "Video Scripts", "Social Content"],
  },
];

const logos = [
  "TechCorp", "NovaBrand", "Apex Digital", "Stellar Inc", "FutureLabs", "Orbit Co",
];

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechCorp",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
    text: "HigherWebSolution transformed our online presence completely. Our organic traffic tripled in just 6 months. The team is exceptional.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Founder, NovaBrand",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    text: "The website they built for us is stunning and lightning fast. Our conversion rate went up by 40%. Couldn't be happier.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Marketing Director, Apex Digital",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
    text: "Their digital marketing campaigns are data-driven and results-focused. ROI has been incredible. Highly recommend.",
    rating: 5,
  },
];

// ── Stat Counter Component ────────────────────────────────────────────────────

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from({ val: 0 }, {
        val: value,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate: function () {
          if (el) el.textContent = Math.round(this.targets()[0].val).toString();
        },
      });
    });

    return () => ctx.revert();
  }, [value]);

  return (
    <div className="text-center">
      <div className="stat-number text-5xl md:text-6xl mb-2">
        <span ref={numRef}>0</span>
        <span>{suffix}</span>
      </div>
      <p className="text-white/50 text-sm font-inter">{label}</p>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from(".hero-badge", { opacity: 0, y: 30, duration: 0.7, delay: 0.3, ease: "power3.out" });
      gsap.from(".hero-headline", { opacity: 0, y: 50, duration: 0.9, delay: 0.5, ease: "power3.out" });
      gsap.from(".hero-sub", { opacity: 0, y: 30, duration: 0.7, delay: 0.8, ease: "power3.out" });
      gsap.from(".hero-ctas", { opacity: 0, y: 30, duration: 0.7, delay: 1.0, ease: "power3.out" });
      gsap.from(".hero-scroll", { opacity: 0, duration: 0.7, delay: 1.4, ease: "power3.out" });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
      >
        {/* 3D Canvas */}
        <HeroCanvas />

        {/* Glow orbs */}
        <div className="glow-orb w-96 h-96 bg-blue-electric/20 top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" />
        <div className="glow-orb w-64 h-64 bg-blue-glow/15 bottom-1/4 right-1/4" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-transparent to-navy pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="hero-badge inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-electric animate-pulse" />
            <span className="text-blue-light text-sm font-medium font-inter">
              Premium Digital Agency
            </span>
          </div>

          <h1
            ref={headlineRef}
            className="hero-headline font-syne font-extrabold text-5xl md:text-7xl lg:text-8xl leading-tight mb-6"
          >
            We Build{" "}
            <span className="gradient-text">Digital</span>
            <br />
            Experiences That{" "}
            <span className="gradient-text">Convert</span>
          </h1>

          <p className="hero-sub text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-inter leading-relaxed">
            HigherWebSolution crafts high-performance websites, data-driven SEO strategies,
            and full-funnel digital marketing campaigns that grow your business.
          </p>

          <div className="hero-ctas flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-glow px-8 py-4 rounded-xl text-base font-semibold text-white font-inter"
            >
              Start Your Project →
            </Link>
            <Link
              href="/portfolio"
              className="btn-outline px-8 py-4 rounded-xl text-base font-semibold font-inter"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/30 text-xs font-inter tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-blue-electric to-transparent" />
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────── */}
      <section className="py-20 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s) => (
              <StatCounter key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="tag-pill mb-4 inline-block">What We Do</span>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4 section-heading section-heading-center">
              Services That Drive Results
            </h2>
            <p className="text-white/50 max-w-xl mx-auto font-inter">
              From strategy to execution, we cover every aspect of your digital growth.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <ScrollReveal
                key={svc.title}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 0.08}
              >
                <div className="glass-card glass-card-hover p-7 h-full">
                  <div className="service-icon-wrap w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5">
                    {svc.icon}
                  </div>
                  <h3 className="font-syne font-bold text-xl text-white mb-3">{svc.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5 font-inter">{svc.desc}</p>
                  <ul className="space-y-2">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/60 font-inter">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-electric shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Link href="/services" className="btn-outline px-8 py-3 rounded-xl font-semibold font-inter inline-block">
              Explore All Services →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CLIENT LOGOS ─────────────────────────────────────────────────── */}
      <section className="py-16 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-center text-white/30 text-sm font-inter uppercase tracking-widest mb-10">
              Trusted by leading brands
            </p>
          </ScrollReveal>
          <div className="flex items-center justify-center flex-wrap gap-8 md:gap-16">
            {logos.map((logo, i) => (
              <ScrollReveal key={logo} delay={i * 0.1}>
                <div className="glass-card px-6 py-3 rounded-xl">
                  <span className="font-syne font-bold text-white/30 text-lg hover:text-white/60 transition-colors cursor-default">
                    {logo}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="tag-pill mb-4 inline-block">Testimonials</span>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4 section-heading section-heading-center">
              What Our Clients Say
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} direction="up" delay={i * 0.15}>
                <div className="glass-card glass-card-hover p-7 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed font-inter flex-1 mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={44}
                      height={44}
                      className="rounded-full object-cover border-2 border-blue-electric/30"
                    />
                    <div>
                      <p className="font-syne font-semibold text-white text-sm">{t.name}</p>
                      <p className="text-white/40 text-xs font-inter">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="relative glass-card gradient-border rounded-2xl p-12 text-center overflow-hidden">
              {/* Background glow */}
              <div className="glow-orb w-80 h-80 bg-blue-electric/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

              <div className="relative z-10">
                <span className="tag-pill mb-6 inline-block">Ready to Grow?</span>
                <h2 className="font-syne font-extrabold text-4xl md:text-5xl text-white mb-5">
                  Let&apos;s Build Something{" "}
                  <span className="gradient-text">Extraordinary</span>
                </h2>
                <p className="text-white/50 text-lg mb-8 font-inter max-w-xl mx-auto">
                  Join 250+ businesses that trust HigherWebSolution to power their digital growth.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact" className="btn-glow px-8 py-4 rounded-xl text-base font-semibold text-white font-inter">
                    Get a Free Consultation
                  </Link>
                  <Link href="/about" className="btn-outline px-8 py-4 rounded-xl text-base font-semibold font-inter">
                    Learn About Us
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
