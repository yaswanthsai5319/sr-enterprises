"use client";

import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";

const steps = [
  { key: "step1", descKey: "step1Desc", icon: "🧵" },
  { key: "step2", descKey: "step2Desc", icon: "🏭" },
  { key: "step3", descKey: "step3Desc", icon: "🔍" },
  { key: "step4", descKey: "step4Desc", icon: "🚚" },
] as const;

export default function Process() {
  const t = useTranslations("process");

  return (
    <section className="section-wrap bg-[var(--cream)]">
      <div className="section-max">
        <FadeIn className="text-center mb-14">
          <span className="section-eyebrow">{t("eyebrow")}</span>
          <h2 className="section-heading">{t("title")}</h2>
          <div className="gold-line mx-auto mt-5" />
        </FadeIn>

        <div className="relative">
          {/* Desktop connector line */}
          <div
            className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-[2px]"
            style={{
              background:
                "repeating-linear-gradient(to right, var(--forest-accent) 0 8px, transparent 8px 16px)",
            }}
            aria-hidden
          />

          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((s, i) => (
              <FadeIn key={s.key} delay={0.1 + i * 0.1}>
                <div className="relative text-center">
                  <div className="relative z-10 mx-auto h-20 w-20 rounded-full bg-white border-2 border-[var(--forest-accent)] flex items-center justify-center text-3xl shadow-md">
                    {s.icon}
                  </div>
                  <div className="mt-2 inline-flex items-center justify-center h-6 w-6 rounded-full bg-[var(--forest-mid)] text-white text-xs font-bold">
                    {i + 1}
                  </div>
                  <h3 className="mt-3 font-display text-base font-semibold text-[var(--ink)]">
                    {t(s.key)}
                  </h3>
                  <p className="mt-1 text-xs text-[var(--ink-muted)] leading-relaxed max-w-[180px] mx-auto">
                    {t(s.descKey)}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
