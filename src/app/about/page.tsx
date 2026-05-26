"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

// ── Data ──────────────────────────────────────────────────────────────────────

const milestones = [
  {
    year: "2012",
    title: "Founded",
    desc: "Started as a two-person web studio with a passion for clean code and bold design.",
  },
  {
    year: "2015",
    title: "First 50 Clients",
    desc: "Expanded our team and hit our first major milestone — 50 happy clients across 10 industries.",
  },
  {
    year: "2017",
    title: "SEO Division Launched",
    desc: "Launched a dedicated SEO practice, helping clients dominate search rankings.",
  },
  {
    year: "2019",
    title: "Digital Marketing Suite",
    desc: "Added full-service digital marketing: PPC, social media, email, and CRO.",
  },
  {
    year: "2021",
    title: "40+ Team Members",
    desc: "Grew to a 40-person team of designers, developers, and marketers.",
  },
  {
    year: "2024",
    title: "250+ Projects Delivered",
    desc: "Crossed 250 successful projects and expanded to serve clients globally.",
  },
];

const team = [
  {
    name: "Alex Carter",
    role: "CEO & Founder",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    bio: "15+ years in digital strategy. Passionate about building brands that last.",
  },
  {
    name: "Priya Sharma",
    role: "Head of SEO",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    bio: "SEO expert with a track record of 10x organic growth for enterprise clients.",
  },
  {
    name: "Marcus Lee",
    role: "Lead Developer",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    bio: "Full-stack engineer specializing in Next.js, performance, and scalable architecture.",
  },
  {
    name: "Sofia Reyes",
    role: "Creative Director",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "Award-winning designer who turns complex ideas into beautiful, intuitive interfaces.",
  },
];

const values = [
  { icon: "🎯", title: "Results First", desc: "Every decision is driven by measurable outcomes and client ROI." },
  { icon: "🔬", title: "Data-Driven", desc: "We let data guide strategy, not guesswork or gut feelings." },
  { icon: "🤝", title: "True Partnership", desc: "We embed ourselves in your team and treat your goals as our own." },
  { icon: "⚡", title: "Move Fast", desc: "Agile workflows mean faster delivery without sacrificing quality." },
  { icon: "🌱", title: "Always Learning", desc: "Digital evolves daily — so do we. Continuous growth is non-negotiable." },
  { icon: "💎", title: "Premium Quality", desc: "We never ship anything we wouldn't be proud to put our name on." },
];

// ── Timeline Component ────────────────────────────────────────────────────────

function Timeline() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Vertical line */}
      <div
        ref={lineRef}
        className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-electric via-blue-electric/50 to-transparent -translate-x-1/2"
      />

      <div className="space-y-12">
        {milestones.map((m, i) => (
          <ScrollReveal
            key={m.year}
            direction={i % 2 === 0 ? "left" : "right"}
            delay={0.1}
          >
            <div
              className={`flex items-center gap-6 ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Card */}
              <div className="flex-1">
                <div className={`glass-card p-6 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <span className="tag-pill mb-3 inline-block">{m.year}</span>
                  <h3 className="font-syne font-bold text-xl text-white mb-2">{m.title}</h3>
                  <p className="text-white/50 text-sm font-inter leading-relaxed">{m.desc}</p>
                </div>
              </div>

              {/* Center dot */}
              <div className="relative z-10 shrink-0">
                <div className="w-4 h-4 rounded-full bg-blue-electric border-2 border-navy shadow-[0_0_12px_rgba(37,99,235,0.8)]" />
              </div>

              {/* Spacer */}
              <div className="flex-1" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden bg-grid">
        <div className="glow-orb w-96 h-96 bg-blue-electric/15 top-0 right-0" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="tag-pill mb-6 inline-block">Our Story</span>
            <h1 className="font-syne font-extrabold text-5xl md:text-6xl text-white mb-6 section-heading section-heading-center">
              We Are <span className="gradient-text">HigherWebSolution</span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl font-inter leading-relaxed max-w-2xl mx-auto">
              Born from a belief that every business deserves a powerful digital presence,
              we&apos;ve spent over a decade helping brands grow online with strategy, creativity,
              and relentless execution.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&fit=crop"
                    alt="Our team at work"
                    width={700}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 glass-card p-5 rounded-xl">
                  <p className="font-syne font-bold text-3xl text-white">12+</p>
                  <p className="text-white/50 text-sm font-inter">Years of Excellence</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <span className="tag-pill mb-4 inline-block">Who We Are</span>
              <h2 className="font-syne font-bold text-4xl text-white mb-6 section-heading">
                A Team Obsessed With Your Growth
              </h2>
              <div className="space-y-4 text-white/60 font-inter leading-relaxed">
                <p>
                  HigherWebSolution was founded in 2012 with a simple mission: help businesses
                  thrive in the digital world. What started as a small web studio has grown into
                  a full-service digital agency with 40+ specialists across development, SEO,
                  design, and marketing.
                </p>
                <p>
                  We don&apos;t believe in cookie-cutter solutions. Every client gets a custom
                  strategy built around their unique goals, audience, and competitive landscape.
                  Our process is transparent, collaborative, and relentlessly focused on results.
                </p>
                <p>
                  From startups to enterprise brands, we&apos;ve delivered 250+ projects that
                  have generated millions in revenue for our clients.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-glow px-7 py-3 rounded-xl font-semibold text-white font-inter inline-block">
                  Work With Us →
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="tag-pill mb-4 inline-block">Our Journey</span>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4 section-heading section-heading-center">
              Milestones That Define Us
            </h2>
          </ScrollReveal>
          <Timeline />
        </div>
      </section>

      {/* ── TEAM ─────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="tag-pill mb-4 inline-block">The Team</span>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4 section-heading section-heading-center">
              Meet the Experts
            </h2>
            <p className="text-white/50 max-w-xl mx-auto font-inter">
              Talented, passionate, and dedicated to your success.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} direction="up" delay={i * 0.1}>
                <div className="team-card glass-card glass-card-hover overflow-hidden group">
                  <div className="overflow-hidden h-56">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="team-card-img w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-syne font-bold text-white text-lg">{member.name}</h3>
                    <p className="text-blue-light text-sm font-inter mb-3">{member.role}</p>
                    <p className="text-white/50 text-sm font-inter leading-relaxed">{member.bio}</p>
                    {/* Social icons */}
                    <div className="flex gap-2 mt-4">
                      {["in", "tw"].map((s) => (
                        <a
                          key={s}
                          href="#"
                          className="w-7 h-7 rounded-md glass-card flex items-center justify-center text-white/40 hover:text-blue-light transition-colors text-xs font-bold"
                        >
                          {s}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16">
            <span className="tag-pill mb-4 inline-block">Core Values</span>
            <h2 className="font-syne font-bold text-4xl md:text-5xl text-white mb-4 section-heading section-heading-center">
              What We Stand For
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.08}>
                <div className="glass-card glass-card-hover p-7 flex gap-5">
                  <div className="value-icon shrink-0">{v.icon}</div>
                  <div>
                    <h3 className="font-syne font-bold text-white text-lg mb-2">{v.title}</h3>
                    <p className="text-white/50 text-sm font-inter leading-relaxed">{v.desc}</p>
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
                  Ready to Join Our Success Stories?
                </h2>
                <p className="text-white/50 mb-8 font-inter">
                  Let&apos;s talk about how we can help your business grow.
                </p>
                <Link href="/contact" className="btn-glow px-8 py-4 rounded-xl font-semibold text-white font-inter inline-block">
                  Start a Conversation →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
