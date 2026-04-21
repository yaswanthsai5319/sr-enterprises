"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import FadeIn from "./FadeIn";

const WHATSAPP_URL =
  "https://wa.me/919985636699?text=Hi%2C%20I'm%20interested%20in%20your%20products";

const MAP_EMBED =
  "https://www.google.com/maps?q=SR+Enterprises+Pothavarappadu+Agiripalli+Mandal+Eluru+District+521212+Andhra+Pradesh&output=embed";

export default function Contact() {
  const t = useTranslations("contact");
  const tp = useTranslations("products");
  const [product, setProduct] = useState("fruitCovers");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const productName = tp(`${product}.name`);
    const text = [
      `Hi, I'd like to enquire about: ${productName}`,
      quantity ? `Quantity: ${quantity}` : null,
      message ? `Message: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/919985636699?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[var(--forest-dark)]" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[var(--forest-accent)]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--amber)]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative section-wrap">
        <div className="section-max">
          <FadeIn className="text-center mb-14">
            <span
              className="section-eyebrow"
              style={{ color: "#B7E4C7" }}
            >
              Get In Touch
            </span>
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-3 text-white/60">{t("subtitle")}</p>
            <div className="gold-line mx-auto mt-5" />
          </FadeIn>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Left — Bulk enquiry form */}
            <FadeIn direction="left">
              <div className="glass rounded-2xl p-7">
                <h3 className="font-display text-xl font-semibold text-white">
                  {t("formTitle")}
                </h3>
                <p className="mt-1 text-sm text-white/60">{t("formSubtitle")}</p>

                <form onSubmit={submit} className="mt-5 space-y-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.1em] font-semibold text-[var(--amber)] mb-1.5">
                      {t("productLabel")}
                    </label>
                    <select
                      value={product}
                      onChange={(e) => setProduct(e.target.value)}
                      className="w-full rounded-xl bg-white/10 border border-white/15 text-white px-4 py-3 text-sm focus:outline-none focus:border-[var(--amber)] focus:bg-white/15 transition"
                    >
                      <option value="fruitCovers" className="text-black">
                        {tp("fruitCovers.name")}
                      </option>
                      <option value="lenoBags" className="text-black">
                        {tp("lenoBags.name")}
                      </option>
                      <option value="ppBags" className="text-black">
                        {tp("ppBags.name")}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.1em] font-semibold text-[var(--amber)] mb-1.5">
                      {t("quantityLabel")}
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder={t("quantityPlaceholder")}
                      className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 px-4 py-3 text-sm focus:outline-none focus:border-[var(--amber)] focus:bg-white/15 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.1em] font-semibold text-[var(--amber)] mb-1.5">
                      {t("messageLabel")}
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={t("messagePlaceholder")}
                      className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/40 px-4 py-3 text-sm focus:outline-none focus:border-[var(--amber)] focus:bg-white/15 transition resize-none"
                    />
                  </div>

                  <button type="submit" className="btn btn-amber w-full min-h-[52px]">
                    💬 {t("submit")}
                  </button>
                </form>
              </div>
            </FadeIn>

            {/* Right — contact actions + address + map */}
            <FadeIn direction="right">
              <div className="glass rounded-2xl p-7 space-y-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp w-full min-h-[52px]"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.78-1.48-1.76-1.65-2.06-.17-.29-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.49.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.09 3.2 5.07 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35m-5.42 7.41h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88M12.05 0C5.49 0 .16 5.33.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.31-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89A11.82 11.82 0 0 0 12.05 0" />
                  </svg>
                  {t("whatsapp")}
                </a>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="tel:+919985636699"
                    className="btn w-full min-h-[48px] bg-white/10 border border-white/15 text-white hover:bg-white/15 text-xs"
                  >
                    📞 998 563 6699
                  </a>
                  <a
                    href="tel:+919505636699"
                    className="btn w-full min-h-[48px] bg-white/10 border border-white/15 text-white hover:bg-white/15 text-xs"
                  >
                    📞 950 563 6699
                  </a>
                </div>

                <a
                  href="mailto:srenterprises.mfg24@gmail.com"
                  className="btn w-full min-h-[44px] bg-white/5 border border-white/10 text-white/80 hover:bg-white/10 hover:text-white text-xs"
                >
                  📧 srenterprises.mfg24@gmail.com
                </a>

                <div className="pt-2">
                  <p className="text-[var(--amber)] font-semibold text-sm flex items-center gap-2 mb-2">
                    📍 {t("address")}
                  </p>
                  <p className="text-xs leading-relaxed text-white/70 mb-3">
                    {t("addressText")}
                  </p>

                  <div
                    className="overflow-hidden"
                    style={{
                      borderRadius: "12px",
                      border: "2px solid rgba(82,183,136,0.35)",
                    }}
                  >
                    <iframe
                      src={MAP_EMBED}
                      width="100%"
                      height="220"
                      style={{ border: 0, display: "block" }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="SR Enterprises location"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="mt-14 pt-6 border-t border-white/[0.08] text-center">
              <p className="text-xs text-white/30">{t("copyright")}</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
