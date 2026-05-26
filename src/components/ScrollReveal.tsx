"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 50,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = {
      opacity: 0,
      duration,
      delay,
      ease: "power3.out",
    };

    if (direction === "up") fromVars.y = distance;
    else if (direction === "down") fromVars.y = -distance;
    else if (direction === "left") fromVars.x = distance;
    else if (direction === "right") fromVars.x = -distance;

    const ctx = gsap.context(() => {
      gsap.from(el, {
        ...fromVars,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          end: "bottom 20%",
          toggleActions: once
            ? "play none none none"
            : "play reverse play reverse",
        },
      });
    });

    return () => ctx.revert();
  }, [direction, delay, duration, distance, once]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
