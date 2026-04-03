"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";

const benefits = [
  { key: "noInsects", descKey: "noInsectsDesc", icon: "🐛", bg: "bg-rose-50" },
  { key: "sunShield", descKey: "sunShieldDesc", icon: "☀️", bg: "bg-amber-50" },
  { key: "betterPrice", descKey: "betterPriceDesc", icon: "💰", bg: "bg-emerald-50" },
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
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${b.bg} text-2xl mb-5`}>
                  {b.icon}
                </div>
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
              {/* Without */}
              <div className="flex flex-col items-center justify-center p-8 text-center border-b lg:border-b-0 lg:border-r border-black/[0.06]">
                <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-xl mb-4">❌</div>
                <p className="font-display text-base font-bold text-red-700">{t("without")}</p>
                <p className="mt-2 text-sm text-red-600/70 max-w-[200px]">{t("withoutDesc")}</p>
              </div>

              {/* With */}
              <div className="flex flex-col items-center justify-center p-8 text-center border-b lg:border-b-0 lg:border-r border-black/[0.06] bg-emerald-50/40">
                <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-xl mb-4">✅</div>
                <p className="font-display text-base font-bold text-emerald-700">{t("with")}</p>
                <p className="mt-2 text-sm text-emerald-600/70 max-w-[200px]">{t("withDesc")}</p>
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
