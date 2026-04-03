"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import FadeIn from "./FadeIn";

const images = [
  { src: "/images/fruit-covers-product.jpeg", alt: "Fruit protection covers" },
  { src: "/images/leno-mesh-bags-vegetables.jpeg", alt: "Leno mesh bags with vegetables" },
  { src: "/images/leno-mesh-rolls.jpeg", alt: "Leno mesh rolls" },
  { src: "/images/pp-woven-bags-rice.jpeg", alt: "PP woven bags for rice" },
  { src: "/images/pp-woven-bags-fertilizer.jpeg", alt: "PP woven fertilizer bags" },
  { src: "/images/mango-result.jpeg", alt: "Premium mangoes" },
  { src: "/images/machine-leno.jpeg", alt: "Leno mesh machinery" },
  { src: "/images/machine-paper-bag.jpeg", alt: "Bag manufacturing machine" },
];

// Double for infinite marquee
const marquee = [...images, ...images];

export default function Gallery() {
  const t = useTranslations("gallery");
  const [lb, setLb] = useState<number | null>(null);

  const prev = useCallback(
    () => setLb((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    []
  );
  const next = useCallback(
    () => setLb((i) => (i === null ? null : (i + 1) % images.length)),
    []
  );

  return (
    <section id="gallery" className="section-wrap bg-[var(--warm-gray)] overflow-hidden">
      {/* Heading */}
      <div className="section-max mb-14">
        <FadeIn className="text-center">
          <span className="section-eyebrow">Our Work</span>
          <h2 className="section-heading">{t("title")}</h2>
          <p className="section-desc mx-auto">{t("subtitle")}</p>
          <div className="gold-line mx-auto mt-5" />
        </FadeIn>
      </div>

      {/* ── Infinite horizontal marquee ── */}
      <FadeIn>
        <div className="fade-edges mb-14">
          <div className="flex animate-marquee w-max gap-4">
            {marquee.map((img, i) => (
              <button
                key={`${img.src}-${i}`}
                type="button"
                onClick={() => setLb(i % images.length)}
                className="group relative h-48 w-72 flex-shrink-0 overflow-hidden rounded-xl sm:h-56 sm:w-80"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="320px"
                />
                <div className="absolute inset-0 bg-black/0 transition-all duration-500 group-hover:bg-black/25" />
                <div className="absolute bottom-0 inset-x-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <p className="text-[13px] font-medium text-white">{img.alt}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* ── Grid ── */}
      <div className="section-max">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {images.map((img, i) => (
            <FadeIn key={img.src} delay={i * 0.04}>
              <button
                type="button"
                onClick={() => setLb(i)}
                className="group relative aspect-square w-full overflow-hidden rounded-xl shadow-sm transition-shadow hover:shadow-lg"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-[var(--navy)]/50 to-transparent" />
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lb !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setLb(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="relative max-h-[85vh] w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[lb].src}
                alt={images[lb].alt}
                width={1400}
                height={900}
                className="max-h-[85vh] w-full rounded-2xl object-contain"
                priority
              />
              {/* Close */}
              <button
                type="button"
                onClick={() => setLb(null)}
                className="absolute -top-3 -right-3 h-10 w-10 rounded-full bg-white text-[var(--navy)] shadow-xl flex items-center justify-center font-bold hover:scale-110 transition-transform"
                aria-label="Close"
              >
                ✕
              </button>
              {/* Caption */}
              <p className="mt-4 text-center text-sm text-white/60 font-display italic">
                {images[lb].alt}
              </p>
              {/* Nav */}
              <button
                type="button"
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Previous"
              >
                ←
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/10 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Next"
              >
                →
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
