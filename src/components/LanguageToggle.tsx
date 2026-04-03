"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

const locales = [
  { code: "en", label: "EN" },
  { code: "hi", label: "हिं" },
  { code: "te", label: "తె" },
] as const;

export default function LanguageToggle() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  function switchLocale(next: string) {
    const parts = pathname.split("/");
    parts[1] = next;
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.replace(`${parts.join("/") || `/${next}`}${hash}`);
  }

  return (
    <div className="flex rounded-full border border-white/15 bg-white/[0.04] p-[3px]">
      {locales.map((item) => {
        const active = locale === item.code;
        return (
          <button
            key={item.code}
            type="button"
            onClick={() => switchLocale(item.code)}
            aria-pressed={active}
            className={`min-h-8 min-w-9 rounded-full px-2.5 text-xs font-bold transition-all duration-300 ${
              active
                ? "bg-[var(--gold)] text-[var(--navy)] shadow-sm shadow-amber-400/20"
                : "text-white/60 hover:text-white hover:bg-white/10"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
