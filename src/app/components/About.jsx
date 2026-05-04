"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import headshot from "../../../public/MountHeadshot.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -60,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(contentRef.current, {
        opacity: 0,
        x: 60,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about-me"
      ref={sectionRef}
      className="scroll-mt-24 bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Image */}
        <div ref={imageRef} className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
            <Image
              src={headshot}
              alt="Portrait of Michael Mount"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Copy */}
        <div ref={contentRef}>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-gray-400">
            About Me
          </p>

          <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
            Front-end developer building clean, modern web experiences.
          </h2>

          <div className="space-y-5 text-base leading-8 text-gray-300 md:text-lg">
            <p>
              With 3+ years of experience creating responsive, engaging
              websites. My background is a little different from the traditional
              developer path — I studied theatre and have always loved being
              around the arts. That creative foundation has become a big part of
              how I approach coding, problem-solving, and building digital
              experiences.
            </p>

            <p>
              I see development as a mix of logic and creativity. Whether I’m
              designing a layout, debugging a tricky issue, or learning a new
              framework, I enjoy finding thoughtful solutions that feel both
              functional and polished.
            </p>

            <p>
              Outside of web development, I spend my time reading, practicing
              photography, playing bass, and drawing. I also enjoy exploring
              software development beyond the front end, including building
              Discord bots and Twitch bots with Python.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
              Next.js
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
              React
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
              Tailwind CSS
            </span>
            <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-300">
              GSAP
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
