"use client";

import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";

const WHATSAPP_URL =
  "https://wa.me/919985636699?text=Hi%2C%20I'm%20interested%20in%20your%20products";
const MAPS_URL =
  "https://www.google.com/maps/search/Burri+Venkateswara+Gardens+Pothavarappadu+Agiripalli+521212";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Dark background with decorative glow */}
      <div className="absolute inset-0 bg-[var(--navy)]" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--gold)]/[0.06] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative section-wrap">
        <div className="section-max">
          {/* Heading */}
          <FadeIn className="text-center mb-14">
            <span className="section-eyebrow">Get In Touch</span>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-3 text-white/50">{t("subtitle")}</p>
            <div className="gold-line mx-auto mt-5" />
          </FadeIn>

          <div className="grid gap-6 lg:grid-cols-5">
            {/* Left — actions (3 cols) */}
            <FadeIn direction="left" className="lg:col-span-3">
              <div className="glass rounded-2xl p-7 space-y-3.5">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full min-h-[56px] text-[15px]"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.78-1.48-1.76-1.65-2.06-.17-.29-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.49.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35m-5.42 7.41h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88M12.05 0C5.49 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.31-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89A11.82 11.82 0 0 0 12.05 0" />
                  </svg>
                  {t("whatsapp")}
                </a>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="tel:+919985636699"
                    className="btn w-full min-h-[52px] bg-blue-600 text-white hover:bg-blue-500"
                  >
                    📞 {t("call")}: 998 563 6699
                  </a>
                  <a
                    href="tel:+919505636699"
                    className="btn w-full min-h-[52px] bg-white/[0.08] border border-white/15 text-white hover:bg-white/[0.14]"
                  >
                    📞 {t("call")}: 950 563 6699
                  </a>
                </div>
                <a
                  href="mailto:srenterprises.mfg24@gmail.com"
                  className="btn w-full min-h-[48px] bg-white/[0.06] border border-white/10 text-white/80 hover:bg-white/[0.1] hover:text-white text-sm"
                >
                  📧 srenterprises.mfg24@gmail.com
                </a>
              </div>
            </FadeIn>

            {/* Right — address (2 cols) */}
            <FadeIn direction="right" className="lg:col-span-2">
              <div className="glass rounded-2xl p-7 h-full flex flex-col">
                <div className="flex-1">
                  <p className="text-[var(--gold)] font-bold text-sm flex items-center gap-2">
                    📍 {t("address")}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/65">
                    {t("addressText")}
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold mt-5 min-h-[44px] text-sm"
                  >
                    📍 {t("openMaps")}
                  </a>
                </div>

                {/* Social placeholders */}
                <div className="mt-8 pt-5 border-t border-white/[0.08]">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-3">Follow Us</p>
                  <div className="flex gap-2">
                    {["Fb", "Ig", "Yt"].map((s) => (
                      <div
                        key={s}
                        className="h-9 w-9 rounded-full bg-white/[0.07] border border-white/10 flex items-center justify-center text-[11px] font-bold text-white/40 hover:bg-white/[0.14] hover:text-white/70 transition-all cursor-pointer"
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Copyright */}
          <FadeIn>
            <div className="mt-14 pt-6 border-t border-white/[0.06] text-center">
              <p className="text-xs text-white/25">{t("copyright")}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
