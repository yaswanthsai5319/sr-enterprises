"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import LanguageToggle from "./LanguageToggle";

const links = ["home", "products", "about", "gallery", "contact"] as const;

export default function Navbar() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--navy)]/95 backdrop-blur-xl shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <nav className="section-max flex min-h-[72px] items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <a href="#home" onClick={() => setOpen(false)} className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-white/15 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo.jpeg"
              alt="SR Enterprises"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-[15px] font-semibold text-white tracking-wide">
              SR Enterprises
            </p>
            <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--gold)]/80">
              Est. 2026
            </p>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="relative px-4 py-2 text-[13px] font-medium text-white/70 transition-colors hover:text-white after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 after:bg-[var(--gold)] after:transition-all after:duration-300 hover:after:w-5"
            >
              {t(item)}
            </a>
          ))}
          <div className="ml-4 pl-4 border-l border-white/10">
            <LanguageToggle />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-3 lg:hidden">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5"
          >
            <div className="flex flex-col gap-[5px] w-[18px]">
              <span className={`h-[1.5px] bg-white transition-all duration-300 ${open ? "translate-y-[3.25px] rotate-45" : ""}`} />
              <span className={`h-[1.5px] bg-white transition-all duration-300 ${open ? "-translate-y-[3.25px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/[0.06] bg-[var(--navy)]/98 backdrop-blur-xl px-5 pb-6 pt-3 sm:px-8">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className="block py-3 text-[15px] font-medium text-white/80 transition-colors hover:text-[var(--gold)]"
            >
              {t(item)}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
