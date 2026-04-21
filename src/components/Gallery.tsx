"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import FadeIn from "./FadeIn";

const images = [
  { src: "/images/fruit-covers-product.jpeg", alt: "Fruit protection covers" },
  { src: "/images/protected-mango.jpg", alt: "Protected mango – with cover" },
  { src: "/images/cover-1.jpeg", alt: "SR Enterprises branded fruit covers — bundled stacks" },
  { src: "/images/gallery-2.jpeg", alt: "SR Enterprises branded fruit cover close-up" },
  { src: "/images/gallery-3.jpeg", alt: "SR Enterprises fruit cover fresh off the machine" },
  { src: "/images/leno-mesh-bags-vegetables.jpeg", alt: "Leno mesh bags with vegetables" },
  { src: "/images/leno-mesh-rolls.jpeg", alt: "Leno mesh rolls" },
  { src: "/images/pp-woven-bags-rice.jpeg", alt: "PP woven bags for rice" },
  { src: "/images/pp-woven-bags-fertilizer.jpeg", alt: "PP woven fertilizer bags" },
  { src: "/images/mango-result.jpeg", alt: "Premium mangoes" },
  { src: "/images/machine-leno.jpeg", alt: "Leno mesh machinery" },
  { src: "/images/machine-paper-bag.jpeg", alt: "Bag manufacturing machine" },
  { src: "/images/printer-for-pp-woven.jpg", alt: "Printer for PP woven bags" },
];

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

  useEffect(() => {
    if (lb === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLb(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lb, prev, next]);

  return (
    <section
      id="gallery"
      className="section-wrap bg-[var(--warm-gray)] overflow-hidden"
    >
      <div className="section-max mb-12">
        <FadeIn className="text-center">
          <span className="section-eyebrow">Our Work</span>
          <h2 className="section-heading">{t("title")}</h2>
          <p className="section-desc mx-auto">{t("subtitle")}</p>
          <div className="gold-line mx-auto mt-5" />
        </FadeIn>
      </div>

      {/* Uniform aligned grid */}
      <div className="section-max">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {images.map((img, i) => (
            <FadeIn key={img.src} delay={Math.min(i, 8) * 0.04}>
              <button
                type="button"
                onClick={() => setLb(i)}
                className="group relative block aspect-square w-full overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-[var(--forest-dark)]/60 via-transparent to-transparent" />
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lb !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
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
              <button
                type="button"
                onClick={() => setLb(null)}
                aria-label="Close"
                className="absolute -top-3 -right-3 h-10 w-10 rounded-full bg-white text-[var(--forest-dark)] shadow-xl flex items-center justify-center font-bold hover:scale-110 transition-transform"
              >
                ✕
              </button>
              <p className="mt-4 text-center text-sm text-white/70 italic">
                {images[lb].alt}
              </p>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous"
                className="absolute left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/15 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/25 transition-colors"
              >
                ←
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next"
                className="absolute right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/15 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white/25 transition-colors"
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
