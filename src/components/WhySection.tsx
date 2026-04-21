"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";

const benefits = [
  { key: "noInsects", descKey: "noInsectsDesc", icon: "🐛", bg: "bg-rose-50", image: "/images/no-insects.jpg" },
  { key: "sunShield", descKey: "sunShieldDesc", icon: "☀️", bg: "bg-amber-50", image: "/images/sun-and-rain-shield.jpg" },
  { key: "betterPrice", descKey: "betterPriceDesc", icon: "💰", bg: "bg-emerald-50", image: null },
] as const;

export default function WhySection() {
  const t = useTranslations("why");

  return (
    <section className="section-wrap bg-[var(--cream)]">
      <div className="section-max">
        <FadeIn className="max-w-2xl">
          <span className="section-eyebrow">Benefits</span>
          <h2 className="section-heading">{t("title")}</h2>
          <p className="section-desc">{t("subtitle")}</p>
          <div className="gold-line mt-6" />
        </FadeIn>

        {/* Benefit cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {benefits.map((b, i) => (
            <FadeIn key={b.key} delay={0.1 + i * 0.1}>
              <div className="card p-7 h-full">
                {b.image ? (
                  <div className={`relative h-20 -mx-7 rounded-xl ${b.bg} mb-5 overflow-hidden`}>
                    <Image src={b.image} alt={t(b.key)} fill className="object-contain p-2" sizes="(max-width: 640px) 100vw, 33vw" />
                  </div>
                ) : (
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${b.bg} text-2xl mb-5`}>
                    {b.icon}
                  </div>
                )}
                <h3 className="font-display text-lg font-semibold text-[var(--forest-dark)]">
                  {t(b.key)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)]">
                  {t(b.descKey)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Before / After — static side-by-side */}
        <FadeIn delay={0.2} className="mt-16">
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Without Cover */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/unprotected-mango.jpg"
                alt={t("without")}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 via-red-900/10 to-transparent" />
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-red-600 text-white px-3 py-1 text-xs font-semibold shadow">
                ❌ {t("without")}
              </span>
              <p className="absolute bottom-4 left-4 right-4 text-xs font-medium text-red-50">
                {t("withoutDesc")}
              </p>
            </div>

            {/* With Cover */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/images/protected-mango.jpg"
                alt={t("with")}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--forest-dark)]/70 via-[var(--forest-dark)]/10 to-transparent" />
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-[var(--forest-mid)] text-white px-3 py-1 text-xs font-semibold shadow">
                ✅ {t("with")}
              </span>
              <p className="absolute bottom-4 left-4 right-4 text-xs font-medium text-emerald-50">
                {t("withDesc")}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
