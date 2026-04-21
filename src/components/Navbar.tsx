"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import LanguageToggle from "./LanguageToggle";

const links = ["home", "products", "about", "gallery", "contact"] as const;

const WHATSAPP_URL =
  "https://wa.me/919985636699?text=Hi%2C%20I'm%20interested%20in%20your%20products";

export default function Navbar() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy via IntersectionObserver
  useEffect(() => {
    const sections = links
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--forest-dark)]/95 backdrop-blur-xl shadow-lg shadow-black/10"
            : "bg-[var(--forest-dark)]/70 backdrop-blur-md"
        }`}
      >
        {/* Main nav */}
        <nav className="section-max flex min-h-[64px] items-center justify-between gap-3 px-5 sm:px-8">
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 group"
          >
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
              <p className="text-[10px] uppercase tracking-[0.15em] text-[var(--amber)]">
                Est. 2026
              </p>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {links.map((item) => {
              const isActive = active === item;
              return (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`relative px-3 py-2 text-[13px] font-medium transition-colors after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-[var(--amber)] after:transition-all after:duration-300 ${
                    isActive
                      ? "text-white after:w-6"
                      : "text-white/70 hover:text-white after:w-0 hover:after:w-4"
                  }`}
                >
                  {t(item)}
                </a>
              );
            })}
          </div>

          {/* Right cluster — phone + language + Get Quote (desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919985636699"
              className="text-[12px] text-white/80 hover:text-white transition-colors whitespace-nowrap"
            >
              📞 998 563 6699
            </a>
            <LanguageToggle />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-amber min-h-[38px] px-4 py-2 text-xs"
            >
              {t("getQuote")}
            </a>
          </div>

          {/* Mobile cluster */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-amber min-h-[34px] px-3 py-1.5 text-[11px]"
            >
              {t("getQuote")}
            </a>
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
      </header>

      {/* Mobile slide-in drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        <aside
          onClick={(e) => e.stopPropagation()}
          className={`absolute right-0 top-0 h-full w-72 max-w-[80%] bg-[var(--forest-dark)] shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="pt-28 px-6 pb-8">
            {links.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className={`block py-3.5 text-[15px] font-medium border-b border-white/10 transition-colors ${
                  active === item ? "text-[var(--amber)]" : "text-white/80 hover:text-white"
                }`}
              >
                {t(item)}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn btn-amber mt-6 w-full min-h-[48px]"
            >
              {t("getQuote")}
            </a>
          </div>
        </aside>
      </div>

      {/* Mobile bottom navigation */}
      <nav className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-[var(--forest-dark)] border-t border-white/10 backdrop-blur-xl">
        <div className="grid grid-cols-4">
          {([
            ["home", "🏠"],
            ["products", "📦"],
            ["gallery", "🖼️"],
            ["contact", "📞"],
          ] as const).map(([id, icon]) => {
            const isActive = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`flex flex-col items-center justify-center gap-0.5 py-2.5 text-[10px] font-medium transition-colors ${
                  isActive ? "text-[var(--amber)]" : "text-white/70"
                }`}
              >
                <span className="text-lg leading-none">{icon}</span>
                <span>{t(id)}</span>
              </a>
            );
          })}
        </div>
      </nav>
    </>
  );
}
