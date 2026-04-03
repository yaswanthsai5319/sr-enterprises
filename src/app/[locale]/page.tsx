import About from "@/components/About";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WhySection from "@/components/WhySection";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  if (routing.locales.includes(locale as (typeof routing.locales)[number])) {
    setRequestLocale(locale);
  }

  return (
    <main>
      <Hero />
      <WhySection />
      <Products />
      <About />
      <Gallery />
      <Contact />
    </main>
  );
}
