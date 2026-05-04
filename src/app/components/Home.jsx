"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".scroll-section").forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 48,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />

      <main className="bg-black text-white">
        <section
          id="home"
          className="scroll-section flex min-h-screen items-center px-6 pt-24"
        >
          <div className="mx-auto max-w-7xl">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-gray-400">
              Front-End Developer
            </p>

            <h1 className="max-w-4xl text-5xl font-bold md:text-7xl">
              Building clean, modern, animated web experiences.
            </h1>
          </div>
        </section>

        <section
          id="about-me"
          className="scroll-section min-h-screen scroll-mt-24 px-6 py-24"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold">About Me</h2>

            <p className="text-lg leading-8 text-gray-300">
              I’m a front-end developer focused on building responsive,
              polished, and interactive websites using Next.js, React,
              JavaScript, Tailwind, and GSAP.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-section min-h-screen scroll-mt-24 px-6 py-24"
        >
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-4xl font-bold">Contact</h2>

            <p className="text-lg text-gray-300">
              Want to work together? Reach out and let’s build something.
            </p>

            <a
              href="mailto:MichaelJosephMount@gmail.com"
              className="mt-8 inline-block rounded-full border border-white/20 px-6 py-3 text-white transition hover:bg-white hover:text-black"
            >
              Email Me
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
