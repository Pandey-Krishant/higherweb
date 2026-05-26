import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "HigherWebSolution – Digital Marketing, SEO & Web Development",
  description:
    "HigherWebSolution is a premium digital agency specializing in Digital Marketing, SEO, and Web Development. We craft digital experiences that drive growth.",
  keywords: "digital marketing, SEO, web development, digital agency",
  openGraph: {
    title: "HigherWebSolution",
    description: "Premium Digital Agency – Marketing, SEO & Web Development",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface-secondary text-ink font-inter antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
