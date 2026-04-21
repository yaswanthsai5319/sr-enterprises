"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";

const products = [
  { key: "fruitCovers", image: "/images/gallery-3.jpeg" },
  { key: "lenoBags", image: "/images/leno-mesh-bags-vegetables.jpeg" },
  { key: "ppBags", image: "/images/pp-woven-bags-rice.jpeg" },
] as const;

const crops = [
  { key: "mango", emoji: "🥭" },
  { key: "grapes", emoji: "🍇" },
  { key: "pomegranate", emoji: "🍎" },
  { key: "dragonFruit", emoji: "🐉" },
  { key: "orange", emoji: "🍊" },
  { key: "guava", emoji: "🫒" },
] as const;

function whatsapp(name: string) {
  return `https://wa.me/919985636699?text=${encodeURIComponent(
    `Hi, I'm interested in ${name}`
  )}`;
}

export default function Products() {
  const t = useTranslations("products");
  const tc = useTranslations("crops");

  return (
    <section id="products" className="section-wrap bg-[var(--warm-gray)]">
      <div className="section-max">
        <FadeIn className="text-center mb-14">
          <span className="section-eyebrow">What We Make</span>
          <h2 className="section-heading">{t("title")}</h2>
          <div className="gold-line mx-auto mt-5" />
        </FadeIn>

        <div className="grid gap-7 md:grid-cols-3">
          {products.map((p, i) => {
            const name = t(`${p.key}.name`);
            return (
              <FadeIn key={p.key} delay={0.1 + i * 0.1}>
                <article className="card overflow-hidden group flex flex-col h-full">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={name}
                      fill
                      className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.08]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-0 inset-x-0 h-[3px] bg-[var(--forest-accent)] transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left" />
                  </div>

                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="font-display text-xl font-semibold text-[var(--forest-dark)]">
                      {name}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-muted)] flex-1">
                      {t(`${p.key}.description`)}
                    </p>

                    {/* Specs row */}
                    <p className="mt-3 text-[13px] font-medium text-[var(--forest-mid)]">
                      ✓ {t(`${p.key}.specs`)}
                    </p>

                    {/* Green pills */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {(["tag1", "tag2", "tag3"] as const).map((tag) => (
                        <span key={tag} className="pill pill-forest">
                          {t(`${p.key}.${tag}`)}
                        </span>
                      ))}
                    </div>

                    <a
                      href={whatsapp(name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp mt-5 w-full min-h-[48px]"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                        <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.78-1.48-1.76-1.65-2.06-.17-.29-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.49.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35m-5.42 7.41h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88M12.05 0C5.49 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.31-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89A11.82 11.82 0 0 0 12.05 0" />
                      </svg>
                      {t("enquire")}
                    </a>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        {/* Crop compatibility chart — under Fruit Covers */}
        <FadeIn delay={0.3} className="mt-14">
          <div className="rounded-2xl bg-white border border-black/[0.06] p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-xl">🥭</span>
              <h3 className="font-display text-lg font-semibold text-[var(--forest-dark)]">
                {t("cropTitle")} — {t("fruitCovers.name")}
              </h3>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
              {crops.map((c) => (
                <div
                  key={c.key}
                  className="flex items-center gap-2 rounded-full bg-[var(--forest-soft)] border border-[var(--forest-accent)]/30 px-3 py-2"
                >
                  <span className="text-lg" aria-hidden>
                    {c.emoji}
                  </span>
                  <span className="text-xs font-semibold text-[var(--forest-dark)] flex-1">
                    {tc(c.key)}
                  </span>
                  <span className="text-[var(--forest-mid)]" aria-hidden>
                    ✓
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
