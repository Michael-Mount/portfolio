"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-card",
        {
          opacity: 0,
          y: 40,
          scale: 0.97,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contact-card",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.fromTo(
        ".contact-item",
        {
          opacity: 0,
          y: 18,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-card",
            start: "top 82%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0d0d0d] px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="mx-auto max-w-5xl">
        <div className="contact-card relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 sm:p-12 lg:p-14">
          <div className="absolute right-0 top-0 h-40 w-40 translate-x-16 -translate-y-16 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
            <div>
              <p className="contact-item mb-4 text-sm uppercase tracking-[0.3em] text-white/50">
                Let’s Connect
              </p>

              <h4 className="contact-item text-4xl font-semibold tracking-tight sm:text-5xl">
                Interested in working together?
              </h4>

              <p className="contact-item mt-5 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
                I’m always open to talking about front-end development roles,
                creative web projects, or opportunities where design and
                problem-solving meet.
              </p>
            </div>

            <div className="contact-item flex flex-col gap-4 lg:items-end">
              <a
                href="mailto:mmount.resume@gmail.com?subject=Portfolio%20Inquiry"
                className="group inline-flex w-fit items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition duration-300 hover:scale-105 hover:bg-white/90"
              >
                Email Me
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="mailto:mmount.resume@gmail.com"
                className="text-sm text-white/50 transition hover:text-white"
              >
                mmount.dev@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
