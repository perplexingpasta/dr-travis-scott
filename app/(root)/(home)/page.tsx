"use client"
import EmblaCarousel from "../../../components/ui/HeroEmbla"

export default function Home() {
  return (
    <main>
      <section className="hidden relative md:block">
        <EmblaCarousel />
        <h1 className="font-bold absolute top-24 left-5">Hello</h1>
      </section>
    </main>
  );
}
