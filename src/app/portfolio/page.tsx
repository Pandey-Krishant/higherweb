"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

type Category = "All" | "Web Dev" | "SEO" | "Marketing" | "Design";
interface Project { id: number; title: string; category: Exclude<Category,"All">; tags: string[]; img: string; desc: string; result: string; }

const projects: Project[] = [
  { id: 1, title: "NovaBrand E-Commerce", category: "Web Dev", tags: ["Next.js","Shopify","TypeScript"], img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop", desc: "Full-stack e-commerce platform with custom checkout.", result: "↑ 65% conversion rate" },
  { id: 2, title: "TechCorp SEO Campaign", category: "SEO", tags: ["Technical SEO","Content","Link Building"], img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", desc: "3x organic traffic growth in 6 months.", result: "↑ 3x organic traffic" },
  { id: 3, title: "Apex Digital Rebrand", category: "Design", tags: ["Branding","UI/UX","Figma"], img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop", desc: "Complete brand identity for a fintech startup.", result: "↑ 40% brand recall" },
  { id: 4, title: "Stellar PPC Campaign", category: "Marketing", tags: ["Google Ads","Meta Ads","CRO"], img: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&h=400&fit=crop", desc: "450% ROAS on paid campaigns for a DTC brand.", result: "450% ROAS" },
  { id: 5, title: "FutureLabs SaaS Platform", category: "Web Dev", tags: ["React","Node.js","AWS"], img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop", desc: "Scalable SaaS dashboard for 10,000+ daily users.", result: "10K+ daily users" },
  { id: 6, title: "Orbit Co Social Media", category: "Marketing", tags: ["Social Media","Content","Analytics"], img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop", desc: "200% follower growth in 3 months.", result: "↑ 200% followers" },
  { id: 7, title: "MedTech Local SEO", category: "SEO", tags: ["Local SEO","GMB","Citations"], img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop", desc: "#1 in local search for 50+ keywords.", result: "#1 local rankings" },
  { id: 8, title: "Luxe Brand Website", category: "Design", tags: ["Web Design","Animation","GSAP"], img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop", desc: "Award-winning luxury brand website.", result: "↑ 80% engagement" },
  { id: 9, title: "GrowthHQ Email Funnel", category: "Marketing", tags: ["Email Marketing","Automation","Klaviyo"], img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop", desc: "Email sequences generating $2M+ annual revenue.", result: "$2M+ revenue" },
];

const categories: Category[] = ["All","Web Dev","SEO","Marketing","Design"];

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>("All");
  const filtered = active === "All" ? projects : projects.filter(p => p.category === active);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden bg-grid bg-bg">
        <div className="glow-orb w-96 h-96 bg-orange-DEFAULT/8 -top-20 right-1/4" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="section-label mb-6 inline-flex">Our Work</span>
            <h1 className="font-syne font-extrabold text-5xl md:text-6xl text-white mb-6">
              Projects We&apos;re <span className="gradient-text">Proud Of</span>
            </h1>
            <p className="text-white/55 text-lg md:text-xl font-inter leading-relaxed max-w-2xl mx-auto">
              Real results for real businesses. Every project here has a measurable outcome attached to it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="py-12 px-6 pb-24 bg-bg2">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold font-inter transition-all duration-280 ${active === cat ? "btn-primary" : "border border-white/10 bg-white/4 text-white/50 hover:text-white hover:border-white/20"}`}>
                {cat}
              </button>
            ))}
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.id} direction="up" delay={i * 0.07}>
                <div className="portfolio-card card overflow-hidden group cursor-pointer">
                  <div className="relative h-52 overflow-hidden">
                    <Image src={project.img} alt={project.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    <div className="portfolio-overlay absolute inset-0 flex flex-col items-center justify-center gap-4 p-6">
                      <p className="text-white/90 text-sm font-inter text-center">{project.desc}</p>
                      <Link href="/contact" className="btn-primary px-5 py-2 text-sm font-semibold font-inter" onClick={e => e.stopPropagation()}>View Project →</Link>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-syne font-bold text-white text-lg leading-tight">{project.title}</h3>
                      <span className="tag shrink-0 text-xs">{project.category}</span>
                    </div>
                    <p className="text-orange-DEFAULT text-sm font-semibold font-inter mb-3">{project.result}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => <span key={tag} className="text-xs text-white/35 font-inter bg-white/4 border border-white/8 px-2 py-1 rounded-md">{tag}</span>)}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-bg">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="relative rounded-2xl p-12 text-center overflow-hidden" style={{ background: "linear-gradient(135deg, #1a0f05, #0B0F1A)", border: "1px solid rgba(249,115,22,0.2)" }}>
              <div className="glow-orb w-64 h-64 bg-orange-DEFAULT/12 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10">
                <h2 className="font-syne font-extrabold text-3xl md:text-4xl text-white mb-4">Want to Be Our Next Success Story?</h2>
                <p className="text-white/45 mb-8 font-inter">Let&apos;s discuss your project and create something remarkable together.</p>
                <Link href="/contact" className="btn-primary px-8 py-4 text-base font-semibold font-inter inline-block">Start a Project →</Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
