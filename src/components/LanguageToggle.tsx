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
    <div className="flex rounded-full border border-white/15 bg-white/[0.06] p-[2px]">
      {locales.map((item) => {
        const active = locale === item.code;
        return (
          <button
            key={item.code}
            type="button"
            onClick={() => switchLocale(item.code)}
            aria-pressed={active}
            className={`min-h-7 min-w-8 rounded-full px-2.5 text-[11px] font-bold transition-all duration-300 ${
              active
                ? "bg-[var(--amber)] text-[var(--forest-dark)] shadow-sm"
                : "text-white/70 hover:text-white hover:bg-white/10"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
