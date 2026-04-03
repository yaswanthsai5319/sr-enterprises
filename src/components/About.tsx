"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";

const highlights = [
  { key: "machinery", descKey: "machineryDesc", icon: "🏭" },
  { key: "location", descKey: "locationDesc", icon: "📍" },
  { key: "delivery", descKey: "deliveryDesc", icon: "🚚" },
  { key: "quality", descKey: "qualityDesc", icon: "✅" },
] as const;

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="section-wrap bg-[var(--cream)] overflow-hidden">
      <div className="section-max">
        <div className="grid gap-14 lg:grid-cols-2 items-center">
          {/* Left — staggered images */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="grid grid-cols-5 gap-3">
                <div className="col-span-3 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/machine-leno.jpeg"
                    alt="Leno mesh manufacturing machine"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 60vw, 30vw"
                  />
                </div>
                <div className="col-span-2 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl mt-12">
                  <Image
                    src="/images/machine-paper-bag.jpeg"
                    alt="Bag making machine"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 40vw, 20vw"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-6 rounded-xl bg-[var(--navy)] text-white px-5 py-3 shadow-xl">
                <p className="font-display text-2xl font-bold text-[var(--gold)]">Est. 2025</p>
                <p className="text-[11px] text-white/60 uppercase tracking-wider">Andhra Pradesh</p>
              </div>
            </div>
          </FadeIn>

          {/* Right — content */}
          <FadeIn direction="right">
            <span className="section-eyebrow">Who We Are</span>
            <h2 className="section-heading">{t("title")}</h2>
            <div className="gold-line mt-4" />
            <p className="mt-5 text-[15px] leading-relaxed text-[var(--muted)]">
              SR Enterprises is a modern manufacturing facility located on the
              Vijayawada–Nuzvid Road in Andhra Pradesh. We produce high-quality
              fruit protection covers, leno mesh bags, and PP woven bags —
              serving farmers and businesses across India with reliable products
              and dependable service.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <FadeIn key={item.key} delay={0.1 + i * 0.08} direction="up">
                  <div className="flex gap-3 items-start rounded-xl bg-[var(--warm-gray)] p-4 border border-black/[0.04]">
                    <span className="text-xl flex-shrink-0 mt-0.5">{item.icon}</span>
                    <div>
                      <p className="text-sm font-bold text-[var(--navy)]">{t(item.key)}</p>
                      <p className="text-xs text-[var(--muted)] mt-0.5 leading-relaxed">
                        {t(item.descKey)}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
