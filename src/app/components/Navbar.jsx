"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import logo from "../../../public/logo.png";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [
  {
    label: "About Me",
    href: "#about-me",
    sectionId: "about-me",
  },
  {
    label: "Projects",
    href: "#projects",
    sectionId: "projects",
  },
  {
    label: "Contact",
    href: "#contact",
    sectionId: "contact",
  },
  {
    label: "GitHub",
    href: "https://github.com/mmount98",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mmount98/",
    external: true,
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Navbar fade/slide on page load
      gsap.from(navRef.current, {
        y: -24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      });

      // Track current section
      const sections = ["home", "about-me", "projects", "contact"];

      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (!section) return;

        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveSection(sectionId),
          onEnterBack: () => setActiveSection(sectionId),
        });
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  const handleAnchorClick = (event, href) => {
    event.preventDefault();

    const target = document.querySelector(href);

    if (!target) return;

    setMenuOpen(false);

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <header
      ref={navRef}
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={(event) => handleAnchorClick(event, "#home")}
          className="flex items-center gap-3"
          aria-label="Go to home section"
        >
          <Image
            src={logo}
            alt="Michael Mount logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
          <span className="text-lg font-semibold tracking-wide text-white">
            Michael Mount
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.sectionId;

            if (link.external) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-sm font-medium text-gray-300 transition hover:text-white"
                >
                  {link.label}
                </a>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(event) => handleAnchorClick(event, link.href)}
                className="relative text-sm font-medium text-gray-300 transition hover:text-white"
              >
                {link.label}

                <span
                  className={`absolute -bottom-2 left-0 h-0.5 bg-white transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="h-0.5 w-6 bg-white"></span>
          <span className="h-0.5 w-6 bg-white"></span>
          <span className="h-0.5 w-6 bg-white"></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;

              if (link.external) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(event) => handleAnchorClick(event, link.href)}
                  className={`w-fit border-b transition ${
                    isActive
                      ? "border-white text-white"
                      : "border-transparent text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
