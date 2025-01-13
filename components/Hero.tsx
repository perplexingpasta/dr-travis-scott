import React from "react";
import EmblaCarousel from "./ui/AboutEmbla";

export default function Hero() {
  return (
    <main>
      <section className="relative hidden md:block">
        <EmblaCarousel />
        {/* <h1 className="absolute left-5 top-24 font-bold">Hello</h1> */}
      </section>
    </main>
  );
}
