"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    // Prevent body scroll when menu open — iOS Safari compatible
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "navbar-scrolled py-3" : "py-4 md:py-5"
        }`}
        style={{ paddingLeft: "env(safe-area-inset-left)", paddingRight: "env(safe-area-inset-right)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Higher Web Solutions"
              width={160}
              height={52}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary px-4 py-2.5 text-sm font-semibold font-inter"
            >
              Free Consultation
            </Link>
          </nav>

          {/* Hamburger — using divs for Safari compatibility */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-50 relative rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            style={{ WebkitTapHighlightColor: "transparent" }}
          >
            <div
              className="w-5 h-0.5 bg-slate-800 rounded-full transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? "rotate(45deg) translate(2px, 3px)" : "none" }}
            />
            <div
              className="w-5 h-0.5 bg-slate-800 rounded-full transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? "scaleX(0)" : "scaleX(1)" }}
            />
            <div
              className="w-5 h-0.5 bg-slate-800 rounded-full transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? "rotate(-45deg) translate(2px, -3px)" : "none" }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Menu */}
      <div
        className={`fixed inset-0 z-40 mobile-menu flex flex-col items-center justify-center transition-opacity duration-400 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col items-center gap-6 sm:gap-8 px-6 w-full max-w-sm">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-syne font-bold text-2xl sm:text-3xl transition-all duration-300 ${
                pathname === link.href ? "text-orange-DEFAULT" : "text-slate-500"
              }`}
              style={{
                transitionDelay: menuOpen ? `${i * 60}ms` : "0ms",
                transform: menuOpen ? "translateY(0)" : "translateY(16px)",
                opacity: menuOpen ? 1 : 0,
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary w-full text-center px-8 py-4 text-base font-semibold font-inter mt-2"
            style={{
              transitionDelay: menuOpen ? `${navLinks.length * 60}ms` : "0ms",
              transform: menuOpen ? "translateY(0)" : "translateY(16px)",
              opacity: menuOpen ? 1 : 0,
              transition: "transform 0.3s ease, opacity 0.3s ease",
            }}
          >
            Get Free Consultation
          </Link>
        </nav>
      </div>
    </>
  );
}
