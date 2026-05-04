"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Sabal House",
    type: "Client Website",
    description:
      "A responsive hotel website focused on clean layouts, strong visual hierarchy, and easy navigation for guests exploring rooms, dining, and local experiences.",
    tools: ["Next.js", "JavaScript", "Tailwind CSS", "GSAP"],
    href: "https://sabal-house.vercel.app/",
  },
  {
    title: "Greystone Proposal Site",
    type: "React Project",
    description:
      "A proposal-style React build designed to present property concepts, content sections, and interactive layouts in a polished client-facing experience.",
    tools: ["React", "JavaScript", "CSS", "Component Architecture"],
    href: "https://greystonedemo.netlify.app/",
  },
  {
    title: "Jacob Paulson Portfolio",
    type: "Music Portfolio",
    description:
      "An interactive portfolio site built with Next.js, Tailwind, GSAP, and the Spotify API, featuring an iTunes-style Cover Flow experience that lets users explore and listen to a producer’s music.",
    tools: ["Next.js", "JavaScript", "Tailwind CSS", "GSAP", "APIs"],
    href: "https://jacobpaulson.music/",
  },
  {
    title: "Discord Community Bot",
    type: "Python Bot",
    description:
      "A custom Discord bot built to support a Twitch community with moderation features, commands, and playful interaction for viewers.",
    tools: ["Python", "discord.py", "APIs", "Automation"],
    href: "https://github.com/Michael-Mount/MMaid_bot",
  },
];

export default function PortfolioSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".portfolio-heading",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".portfolio-heading",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".project-card",
        {
          opacity: 0,
          y: 70,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0d0d0d] px-6 py-24 text-white sm:px-10 lg:px-16"
    >
      {/* Background texture elements */}
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <div className="portfolio-heading max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/50">
            Selected Work
          </p>

          <h3 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Projects built with design, logic, and a little creative chaos.
          </h3>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/60 sm:text-lg">
            A collection of websites, front-end builds, and software experiments
            that reflect how I approach development: visually, practically, and
            with a focus on solving real problems.
          </p>
        </div>

        <div className="projects-grid mt-16 grid gap-6 lg:grid-cols-12">
          {projects.map((project, index) => {
            const isLarge = index === 0 || index === 3;

            return (
              <Link
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`project-card group relative min-h-[340px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.06] sm:p-8 ${
                  isLarge ? "lg:col-span-7" : "lg:col-span-5"
                }`}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                </div>

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <div className="mb-8 flex items-center justify-between gap-4">
                      <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/50">
                        {project.type}
                      </span>

                      <span className="text-sm text-white/35">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="max-w-xl text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-10">
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span
                          key={tool}
                          className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <div className="mt-8 flex items-center gap-3 text-sm font-medium text-white">
                      <span>View Project</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-2">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
