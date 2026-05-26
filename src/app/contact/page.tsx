"use client";

import { useState, FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const contactInfo = [
  {
    icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>),
    label: "Address", value: "123 Digital Ave, Tech City, CA 94102", href: null,
  },
  {
    icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>),
    label: "Email", value: "hello@higherwebsolution.com", href: "mailto:hello@higherwebsolution.com",
  },
  {
    icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>),
    label: "Phone", value: "+1 (415) 555-0123", href: "tel:+14155550123",
  },
  {
    icon: (<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>),
    label: "Business Hours", value: "Mon–Fri, 9am–6pm PST", href: null,
  },
];

const socials = [
  { label: "Twitter / X", href: "#", icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>) },
  { label: "LinkedIn", href: "#", icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>) },
  { label: "Instagram", href: "#", icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>) },
  { label: "Facebook", href: "#", icon: (<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>) },
];

const subjects = ["Web Development Project", "SEO Services", "Digital Marketing", "General Inquiry", "Partnership", "Other"];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden bg-surface-secondary bg-grid">
        <div className="glow-orb w-96 h-96 bg-brand/10 -top-20 left-1/3" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="tag-pill mb-6 inline-block">Get In Touch</span>
            <h1 className="font-syne font-extrabold text-5xl md:text-6xl text-ink mb-6 section-heading section-heading-center">
              Let&apos;s <span className="gradient-text">Start Something</span>
            </h1>
            <p className="text-ink-secondary text-lg md:text-xl font-inter leading-relaxed max-w-2xl mx-auto">
              Have a project in mind? We&apos;d love to hear about it. Send us a message and
              we&apos;ll get back to you within 24 hours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SPLIT LAYOUT ─────────────────────────────────────────────────── */}
      <section className="py-12 pb-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* LEFT: Contact Info */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <div className="glass-card bg-surface-secondary p-8 rounded-2xl h-full">
                  <h2 className="font-syne font-bold text-2xl text-ink mb-2">Contact Information</h2>
                  <p className="text-ink-muted text-sm font-inter mb-8">
                    Reach out through any of these channels and we&apos;ll respond promptly.
                  </p>

                  <div className="space-y-6 mb-10">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="service-icon-wrap w-10 h-10 rounded-lg flex items-center justify-center text-brand shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-ink-faint text-xs font-inter uppercase tracking-wider mb-1">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="text-ink text-sm font-inter hover:text-brand transition-colors">{item.value}</a>
                          ) : (
                            <p className="text-ink text-sm font-inter">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-border mb-8" />

                  <div>
                    <p className="text-ink-faint text-xs font-inter uppercase tracking-wider mb-4">Follow Us</p>
                    <div className="flex gap-2">
                      {socials.map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          aria-label={s.label}
                          className="w-9 h-9 rounded-lg border border-border bg-surface flex items-center justify-center text-ink-muted hover:text-brand hover:border-brand/40 hover:bg-brand-pale transition-all duration-250"
                        >
                          {s.icon}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-2 bg-green-50 border border-green-200 px-4 py-3 rounded-xl">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-green-700 text-sm font-inter font-medium">Currently accepting new projects</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT: Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <div className="glass-card bg-surface p-8 rounded-2xl">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-16 h-16 rounded-full bg-green-100 border border-green-300 flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-syne font-bold text-2xl text-ink mb-3">Message Sent!</h3>
                      <p className="text-ink-muted font-inter mb-6">
                        Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }}
                        className="btn-outline px-6 py-2 rounded-lg font-semibold font-inter"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-syne font-bold text-2xl text-ink mb-2">Send Us a Message</h2>
                      <p className="text-ink-muted text-sm font-inter mb-8">
                        Fill out the form below and we&apos;ll be in touch shortly.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="name" className="block text-ink-secondary text-sm font-inter mb-2">
                              Full Name <span className="text-brand">*</span>
                            </label>
                            <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="John Smith" className="form-input w-full px-4 py-3 rounded-xl text-sm font-inter" />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-ink-secondary text-sm font-inter mb-2">
                              Email Address <span className="text-brand">*</span>
                            </label>
                            <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="john@company.com" className="form-input w-full px-4 py-3 rounded-xl text-sm font-inter" />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="subject" className="block text-ink-secondary text-sm font-inter mb-2">
                            Subject <span className="text-brand">*</span>
                          </label>
                          <select id="subject" name="subject" required value={formData.subject} onChange={handleChange} className="form-input w-full px-4 py-3 rounded-xl text-sm font-inter appearance-none cursor-pointer">
                            <option value="" disabled>Select a subject…</option>
                            {subjects.map((s) => (
                              <option key={s} value={s} className="bg-white text-ink">{s}</option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-ink-secondary text-sm font-inter mb-2">
                            Message <span className="text-brand">*</span>
                          </label>
                          <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} placeholder="Tell us about your project, goals, and timeline…" className="form-input w-full px-4 py-3 rounded-xl text-sm font-inter resize-none" />
                        </div>

                        <button
                          type="submit"
                          disabled={loading}
                          className="btn-glow w-full py-4 rounded-xl font-semibold font-inter flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {loading ? (
                            <>
                              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              Sending…
                            </>
                          ) : (
                            <>
                              Send Message
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                              </svg>
                            </>
                          )}
                        </button>

                        <p className="text-ink-faint text-xs font-inter text-center">
                          By submitting this form, you agree to our Privacy Policy. We never share your data.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-surface-secondary border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-syne font-bold text-3xl text-ink mb-3">Frequently Asked Questions</h2>
            <p className="text-ink-muted font-inter">Quick answers to common questions.</p>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              { q: "How quickly can you start on my project?", a: "We typically onboard new clients within 1–2 weeks. For urgent projects, we can often accommodate faster timelines." },
              { q: "Do you work with startups or only established businesses?", a: "We work with businesses of all sizes — from early-stage startups to enterprise brands. Our solutions scale to fit your budget and goals." },
              { q: "What does your reporting look like?", a: "Every client gets a dedicated dashboard with real-time metrics, plus monthly strategy calls and detailed performance reports." },
              { q: "Do you offer ongoing support after launch?", a: "Absolutely. We offer flexible retainer packages for ongoing development, SEO, and marketing support." },
            ].map((faq, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 0.08}>
                <div className="glass-card bg-surface p-6 rounded-xl">
                  <h3 className="font-syne font-semibold text-ink mb-2">{faq.q}</h3>
                  <p className="text-ink-muted text-sm font-inter leading-relaxed">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
