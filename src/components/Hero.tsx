"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState, useCallback } from "react";

const WHATSAPP_URL =
  "https://wa.me/919985636699?text=Hi%2C%20I'm%20interested%20in%20your%20products";

const slides = [
  { src: "/images/fruit-covers-product.jpeg", alt: "Fruit protection covers" },
  { src: "/images/leno-mesh-bags-vegetables.jpeg", alt: "Leno mesh bags" },
  { src: "/images/pp-woven-bags-rice.jpeg", alt: "PP woven bags" },
  { src: "/images/mango-result.jpeg", alt: "Premium mangoes" },
  { src: "/images/leno-mesh-rolls.jpeg", alt: "Leno mesh rolls" },
];

export default function Hero() {
  const t = useTranslations("hero");
  const [idx, setIdx] = useState(0);

  const next = useCallback(() => setIdx((i) => (i + 1) % slides.length), []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative min-h-dvh overflow-hidden bg-[var(--navy)]">
      {/* ── Background slideshow ── */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={idx}
          initial={{ opacity: 0, scale: 1.15 }}
          animate={{ opacity: 1, scale: 1.04 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slides[idx].src}
            alt={slides[idx].alt}
            fill
            className="object-cover"
            priority={idx < 2}
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Cinematic overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)] via-[var(--navy)]/90 to-[var(--navy)]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/30 to-[var(--navy)]/50" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--cream)] to-transparent" />

      {/* ── Content ── */}
      <div className="relative section-max px-5 sm:px-8 flex flex-col justify-end min-h-dvh pb-28 pt-32 lg:pb-36 lg:pt-40">
        <div className="max-w-xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="section-eyebrow border border-[var(--gold)]/30 rounded-full px-4 py-1.5 bg-[var(--gold)]/10">
              {t("subtitle")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl xl:text-7xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg max-w-md drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]"
          >
            {t("description")}
          </motion.p>

          {/* Product chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-7 flex flex-wrap gap-2"
          >
            {(["fruitCovers", "lenoBags", "ppBags"] as const).map((key) => (
              <a
                key={key}
                href="#products"
                className="glass rounded-full px-4 py-2 text-[13px] font-medium text-white/90 transition-all hover:bg-white/15 hover:text-white"
              >
                {t(key)}
              </a>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp min-h-[52px] text-base"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.78-1.48-1.76-1.65-2.06-.17-.29-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.49.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35m-5.42 7.41h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88M12.05 0C5.49 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.31-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89A11.82 11.82 0 0 0 12.05 0" />
              </svg>
              {t("whatsapp")}
            </a>
            <a href="tel:+919985636699" className="btn btn-outline min-h-[52px] text-base">
              📞 {t("call")}
            </a>
          </motion.div>
        </div>

        {/* ── Slide dots ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-32 right-8 hidden lg:flex flex-col gap-2.5"
        >
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i + 1}`}
              className={`rounded-full transition-all duration-500 ${
                i === idx
                  ? "h-8 w-2 bg-[var(--gold)]"
                  : "h-2 w-2 bg-white/25 hover:bg-white/50"
              }`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
