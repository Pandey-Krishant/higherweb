"use client";

import { useState, FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const contactInfo = [
  { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z", label: "Address", value: "123 Digital Ave, Tech City, CA 94102", href: null },
  { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Email", value: "hello@higherwebsolution.com", href: "mailto:hello@higherwebsolution.com" },
  { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", label: "Phone", value: "+1 (415) 555-0123", href: "tel:+14155550123" },
  { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Business Hours", value: "Mon–Fri, 9am–6pm PST", href: null },
];

const subjects = ["Web Development Project","SEO Services","Digital Marketing","General Inquiry","Partnership","Other"];

const faqs = [
  { q: "How quickly can you start?", a: "We typically onboard new clients within 1–2 weeks. For urgent projects, we can often accommodate faster timelines." },
  { q: "Do you work with startups?", a: "Yes. We work with businesses of all sizes — from early-stage startups to enterprise brands. Our solutions scale to fit your budget." },
  { q: "What does your reporting look like?", a: "Every client gets a live dashboard with real-time metrics, plus monthly strategy calls and detailed performance reports." },
  { q: "Do you offer ongoing support?", a: "Absolutely. We offer flexible retainer packages for ongoing development, SEO, and marketing support." },
];

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

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-24 px-6 overflow-hidden bg-grid bg-bg">
        <div className="glow-orb w-96 h-96 bg-orange-DEFAULT/8 -top-20 left-1/3" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal>
            <span className="section-label mb-6 inline-flex">Get In Touch</span>
            <h1 className="font-syne font-extrabold text-5xl md:text-6xl text-slate-900 mb-6">
              Let&apos;s <span className="gradient-text">Start Something</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl font-inter leading-relaxed max-w-2xl mx-auto">
              Have a project in mind? Book a free strategy call and we&apos;ll show you exactly how to grow your business online.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* SPLIT LAYOUT */}
      <section className="py-12 pb-24 px-6 bg-bg2">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* LEFT */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="left">
                <div className="card p-8 rounded-2xl h-full">
                  <h2 className="font-syne font-bold text-2xl text-slate-900 mb-2">Contact Information</h2>
                  <p className="text-slate-500 text-sm font-inter mb-8">Reach out through any of these channels and we&apos;ll respond within 24 hours.</p>

                  <div className="space-y-6 mb-10">
                    {contactInfo.map(item => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-orange-DEFAULT/10 border border-orange-DEFAULT/20 flex items-center justify-center text-orange-DEFAULT shrink-0">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                          </svg>
                        </div>
                        <div>
                          <p className="text-slate-400 text-xs font-inter uppercase tracking-wider mb-1">{item.label}</p>
                          {item.href
                            ? <a href={item.href} className="text-slate-800 text-sm font-inter hover:text-orange-DEFAULT transition-colors">{item.value}</a>
                            : <p className="text-slate-800 text-sm font-inter">{item.value}</p>
                          }
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-slate-100 mb-8" />

                  <div className="flex items-center gap-2 bg-green-50 border border-green-200 px-4 py-3 rounded-xl">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-green-700 text-sm font-inter font-medium">Currently accepting new projects</span>
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-orange-DEFAULT/8 border border-orange-DEFAULT/15">
                    <p className="text-orange-DEFAULT text-sm font-semibold font-inter mb-1">🎁 Free Strategy Call</p>
                    <p className="text-slate-500 text-xs font-inter">Book a 30-min call and get a free audit of your current digital presence.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <div className="card p-8 rounded-2xl">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-16 h-16 rounded-full bg-green-100 border border-green-200 flex items-center justify-center mb-6">
                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="font-syne font-bold text-2xl text-slate-900 mb-3">Message Sent!</h3>
                      <p className="text-slate-500 font-inter mb-6">Thanks for reaching out. We&apos;ll get back to you within 24 hours.</p>
                      <button onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", subject: "", message: "" }); }} className="btn-secondary px-6 py-2 text-sm font-semibold font-inter">
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-syne font-bold text-2xl text-slate-900 mb-2">Send Us a Message</h2>
                      <p className="text-slate-500 text-sm font-inter mb-8">Fill out the form and we&apos;ll be in touch shortly.</p>
                      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="name" className="block text-slate-600 text-sm font-inter mb-2">Full Name <span className="text-orange-DEFAULT">*</span></label>
                            <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="John Smith" className="form-input w-full px-4 py-3 text-sm font-inter" />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-slate-600 text-sm font-inter mb-2">Email Address <span className="text-orange-DEFAULT">*</span></label>
                            <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="john@company.com" className="form-input w-full px-4 py-3 text-sm font-inter" />
                          </div>
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-slate-600 text-sm font-inter mb-2">Subject <span className="text-orange-DEFAULT">*</span></label>
                          <select id="subject" name="subject" required value={formData.subject} onChange={handleChange} className="form-input w-full px-4 py-3 text-sm font-inter appearance-none cursor-pointer">
                            <option value="" disabled>Select a subject…</option>
                            {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-slate-600 text-sm font-inter mb-2">Message <span className="text-orange-DEFAULT">*</span></label>
                          <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} placeholder="Tell us about your project, goals, and timeline…" className="form-input w-full px-4 py-3 text-sm font-inter resize-none" />
                        </div>
                        <button type="submit" disabled={loading} className="btn-primary w-full py-4 text-base font-semibold font-inter flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                          {loading ? (
                            <><svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Sending…</>
                          ) : (
                            <>Send Message <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg></>
                          )}
                        </button>
                        <p className="text-slate-400 text-xs font-inter text-center">By submitting, you agree to our Privacy Policy. We never share your data.</p>
                      </form>
                    </>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-bg border-t border-slate-100">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="text-center mb-12">
            <h2 className="font-syne font-bold text-3xl text-slate-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-500 font-inter">Quick answers to common questions.</p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="card p-2">
              {faqs.map((faq, i) => <FaqItem key={i} {...faq} />)}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
