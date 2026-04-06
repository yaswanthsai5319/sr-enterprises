"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";

const products = [
  {
    key: "fruitCovers",
    image: "/images/fruit-covers-product.jpeg",
    tag: "bg-emerald-50 text-emerald-700 border-emerald-200",
    accent: "bg-emerald-500",
  },
  {
    key: "lenoBags",
    image: "/images/leno-mesh-bags-vegetables.jpeg",
    tag: "bg-amber-50 text-amber-700 border-amber-200",
    accent: "bg-amber-500",
  },
  {
    key: "ppBags",
    image: "/images/pp-woven-bags-rice.jpeg",
    tag: "bg-blue-50 text-blue-700 border-blue-200",
    accent: "bg-blue-500",
  },
] as const;

function whatsapp(name: string) {
  return `https://wa.me/919985636699?text=${encodeURIComponent(`Hi, I'm interested in ${name}`)}`;
}

export default function Products() {
  const t = useTranslations("products");

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
              <FadeIn key={p.key} delay={0.1 + i * 0.12}>
                <article className="card overflow-hidden group flex flex-col h-full">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={name}
                      fill
                      className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.08]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className={`absolute bottom-0 inset-x-0 h-[3px] ${p.accent} transition-all duration-500 scale-x-0 group-hover:scale-x-100 origin-left`} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <h3 className="font-display text-xl font-bold text-[var(--navy)]">{name}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[var(--muted)] flex-1">
                      {t(`${p.key}.description`)}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {(["tag1", "tag2", "tag3"] as const).map((tag) => (
                        <span key={tag} className={`pill ${p.tag}`}>
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
      </div>
    </section>
  );
}
