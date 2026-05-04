"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutMe from "./components/About";
import PortfolioSection from "./components/PortfolioSection";
import ContactCTA from "./components/ContactCTA";

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

        <AboutMe />
        <PortfolioSection />
        <ContactCTA />
      </main>
    </>
  );
}
