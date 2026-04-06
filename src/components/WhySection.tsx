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
        {/* Heading */}
        <FadeIn className="max-w-2xl">
          <span className="section-eyebrow">Benefits</span>
          <h2 className="section-heading">{t("title")}</h2>
          <p className="section-desc">{t("subtitle")}</p>
          <div className="gold-line mt-6" />
        </FadeIn>

        {/* Benefit cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {benefits.map((b, i) => (
            <FadeIn key={b.key} delay={0.1 + i * 0.12}>
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
                <h3 className="font-display text-lg font-semibold text-[var(--navy)]">
                  {t(b.key)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {t(b.descKey)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Before → After comparison */}
        <FadeIn delay={0.2} className="mt-16">
          <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white">
            <div className="grid lg:grid-cols-[1fr_1fr_1.4fr]">
              {/* Without Cover */}
              <div className="relative min-h-[240px] lg:min-h-[280px] border-b lg:border-b-0 lg:border-r border-black/[0.06]">
                <Image
                  src="/images/unprotected-mango.jpg"
                  alt="Unprotected mango without cover"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 340px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/70 via-red-900/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white shadow">
                    ❌ {t("without")}
                  </span>
                </div>
                <p className="absolute bottom-4 left-4 right-4 text-xs text-red-200/90 font-medium">
                  {t("withoutDesc")}
                </p>
              </div>

              {/* With Cover */}
              <div className="relative min-h-[240px] lg:min-h-[280px] border-b lg:border-b-0 lg:border-r border-black/[0.06]">
                <Image
                  src="/images/protected-mango.jpg"
                  alt="Protected mango with fruit cover"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 340px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/70 via-emerald-900/20 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow">
                    ✅ {t("with")}
                  </span>
                </div>
                <p className="absolute bottom-4 left-4 right-4 text-xs text-emerald-200/90 font-medium">
                  {t("withDesc")}
                </p>
              </div>

              {/* Result image */}
              <div className="relative min-h-[240px] lg:min-h-[280px]">
                <Image
                  src="/images/mango-result.jpeg"
                  alt="Premium mangoes grown with fruit protection covers"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 font-display text-sm font-semibold text-white">
                  Premium Quality Result ✦
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
