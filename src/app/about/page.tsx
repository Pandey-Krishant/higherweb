"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "@/components/ScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "2019", title: "Founded", desc: "Started as a small web studio with a passion for clean code and bold design." },
  { year: "2020", title: "First 20 Clients", desc: "Expanded our team and hit our first major milestone — 20 happy clients across multiple industries." },
  { year: "2021", title: "SEO Division Launched", desc: "Launched a dedicated SEO practice, helping clients dominate search rankings." },
  { year: "2022", title: "Digital Marketing Suite", desc: "Added full-service digital marketing: PPC, social media, email, and CRO." },
  { year: "2023", title: "15+ Team Members", desc: "Grew to a 15-person team of designers, developers, and marketers." },
  { year: "2024", title: "200+ Projects Delivered", desc: "Crossed 200 successful projects and expanded to serve clients globally." },
];

const team = [
  { name: "Alex Carter", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face,top", bio: "15+ years in digital strategy. Passionate about building brands that last." },
  { name: "Priya Sharma", role: "Head of SEO", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face,top", bio: "SEO expert with a track record of 10x organic growth for enterprise clients." },
  { name: "Marcus Lee", role: "Lead Developer", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face,top", bio: "Full-stack engineer specializing in Next.js, performance, and scalable architecture." },
  { name: "Sofia Reyes", role: "Creative Director", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face,top", bio: "Award-winning designer who turns complex ideas into beautiful, intuitive interfaces." },
];

const values = [
  { icon: "🎯", title: "Results First", desc: "Every decision is driven by measurable outcomes and client ROI." },
  { icon: "🔬", title: "Data-Driven", desc: "We let data guide strategy, not guesswork or gut feelings." },
  { icon: "🤝", title: "True Partnership", desc: "We embed ourselves in your team and treat your goals as our own." },
  { icon: "⚡", title: "Move Fast", desc: "Agile workflows mean faster delivery without sacrificing quality." },
  { icon: "🌱", title: "Always Learning", desc: "Digital evolves daily — so do we. Continuous growth is non-negotiable." },
  { icon: "💎", title: "Premium Quality", desc: "We never ship anything we wouldn't be proud to put our name on." },
];

function Timeline() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative max-w-2xl mx-auto px-4">
      {/* The vertical line — using inline style so it always renders */}
      <div
        ref={lineRef}
        style={{
          position: "absolute",
          left: "50%",
          top: 0,
          bottom: 0,
          width: "2px",
          background: "linear-gradient(to bottom, #F97316, rgba(249,115,22,0.3), transparent)",
          transform: "translateX(-50%)",
        }}
      />

      <div className="space-y-10">
        {milestones.map((m, i) => {
          const isLeft = i % 2 === 0;
          return (
            <ScrollReveal key={m.year} direction={isLeft ? "left" : "right"} delay={0.05}>
              <div className="flex items-center gap-0">
                {/* Left side */}
                <div className={`flex-1 ${isLeft ? "pr-8 text-right" : "pl-8 opacity-0 pointer-events-none"}`}>
                  {isLeft && (
                    <div className="card p-4 sm:p-5 inline-block text-right w-full">
                      <span className="section-label mb-2 inline-flex ml-auto">{m.year}</span>
                      <h3 className="font-syne font-bold text-base sm:text-lg text-slate-900 mb-1">{m.title}</h3>
                      <p className="text-slate-500 text-xs sm:text-sm font-inter leading-relaxed">{m.desc}</p>
                    </div>
                  )}
                </div>

                {/* Center dot */}
                <div className="relative z-10 shrink-0 flex items-center justify-center w-5">
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: "50%",
                      background: "#F97316",
                      border: "2px solid #fff",
                      boxShadow: "0 0 0 3px rgba(249,115,22,0.25)",
                      flexShrink: 0,
                    }}
                  />
                </div>

                {/* Right side */}
                <div className={`flex-1 ${!isLeft ? "pl-8 text-left" : "pr-8 opacity-0 pointer-events-none"}`}>
                  {!isLeft && (
                    <div className="card p-4 sm:p-5 inline-block text-left w-full">
                      <span className="section-label mb-2 inline-flex">{m.year}</span>
                      <h3 className="font-syne font-bold text-base sm:text-lg text-slate-900 mb-1">{m.title}</h3>
                      <p className="text-slate-500 text-xs sm:text-sm font-inter leading-relaxed">{m.desc}</p>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden bg-white" style={{ backgroundImage: "linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }}>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="section-label mb-5 inline-flex">Our Story</span>
            <h1 className="font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl text-slate-900 mb-5 leading-tight">
              We Are <span className="gradient-text">Higher Web Solutions</span>
            </h1>
            <p className="text-slate-500 text-base sm:text-lg font-inter leading-relaxed max-w-2xl mx-auto">
              Born from a belief that every business deserves a powerful digital presence — helping brands grow online with strategy, creativity, and relentless execution.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* STORY */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                  <Image
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=480&fit=crop"
                    alt="Our team"
                    width={700}
                    height={480}
                    className="w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-3 sm:-right-5 card p-4 rounded-xl shadow-md">
                  <p className="font-syne font-bold text-2xl text-slate-900">6+</p>
                  <p className="text-slate-500 text-xs font-inter">Years of Excellence</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <span className="section-label mb-4 inline-flex">Who We Are</span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-slate-900 mb-5">A Team Obsessed With Your Growth</h2>
              <div className="space-y-3 text-slate-500 font-inter leading-relaxed text-sm sm:text-base">
                <p>Higher Web Solutions was founded with a simple mission: help businesses thrive in the digital world. What started as a small web studio has grown into a full-service digital agency with 15+ specialists.</p>
                <p>We don&apos;t believe in cookie-cutter solutions. Every client gets a custom strategy built around their unique goals, audience, and competitive landscape.</p>
                <p>From startups to established brands, we&apos;ve delivered 200+ projects that have generated real, measurable results for our clients.</p>
              </div>
              <div className="mt-7">
                <Link href="/contact" className="btn-primary px-6 py-3 text-sm font-semibold font-inter inline-flex">Work With Us →</Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-12 sm:mb-16">
            <span className="section-label mb-4 inline-flex">Our Journey</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 mb-3">Milestones That Define Us</h2>
            <p className="text-slate-400 font-inter text-sm">From a small studio to a full-service agency.</p>
          </ScrollReveal>
          <Timeline />
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-10 sm:mb-14">
            <span className="section-label mb-4 inline-flex">The Team</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 mb-3">Meet the Experts</h2>
            <p className="text-slate-500 max-w-md mx-auto font-inter text-sm sm:text-base">Talented, passionate, and dedicated to your success.</p>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {team.map((member, i) => (
              <ScrollReveal key={member.name} direction="up" delay={i * 0.1}>
                <div className="card card-orange overflow-hidden group flex flex-col">
                  {/* Square image container — face always visible */}
                  <div className="relative w-full" style={{ paddingBottom: "100%" }}>
                    <Image
                      src={member.img}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    />
                  </div>
                  <div className="p-4 sm:p-5 flex flex-col flex-1">
                    <h3 className="font-syne font-bold text-slate-900 text-sm sm:text-base leading-tight">{member.name}</h3>
                    <p className="text-orange-DEFAULT text-xs sm:text-sm font-inter mt-0.5 mb-2">{member.role}</p>
                    <p className="text-slate-500 text-xs font-inter leading-relaxed hidden sm:block">{member.bio}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="text-center mb-10 sm:mb-14">
            <span className="section-label mb-4 inline-flex">Core Values</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 mb-3">What We Stand For</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.08}>
                <div className="card card-orange p-5 sm:p-6 flex gap-4">
                  <div className="text-2xl sm:text-3xl shrink-0 mt-0.5">{v.icon}</div>
                  <div>
                    <h3 className="font-syne font-bold text-slate-900 text-base sm:text-lg mb-1.5">{v.title}</h3>
                    <p className="text-slate-500 text-xs sm:text-sm font-inter leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-slate-50">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="relative rounded-2xl p-8 sm:p-12 text-center overflow-hidden bg-slate-900" style={{ border: "1px solid rgba(249,115,22,0.2)" }}>
              <div
                style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%,-50%)",
                  width: 280, height: 280,
                  borderRadius: "50%",
                  background: "rgba(249,115,22,0.12)",
                  filter: "blur(60px)",
                  pointerEvents: "none",
                }}
              />
              <div className="relative z-10">
                <h2 className="font-syne font-extrabold text-2xl sm:text-3xl md:text-4xl text-white mb-3">Ready to Join Our Success Stories?</h2>
                <p className="text-white/60 mb-7 font-inter text-sm sm:text-base">Let&apos;s talk about how we can help your business grow.</p>
                <Link href="/contact" className="btn-primary px-7 py-3.5 text-sm font-semibold font-inter inline-flex">Start a Conversation →</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
