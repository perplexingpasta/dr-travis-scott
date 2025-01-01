"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { emblaImages } from "@/data";
import Image from "next/image";

const EmblaCarousel = () => {
  const autoplayOptions = {
    delay: 7000, //delay timer in milliseconds, actually does work
  };
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  const HeroEmblaCard = ({ src }) => {
    return (
      <>
        <div className="embla__slide">
          <Image
            width={1920}
            height={720}
            src={src}
            alt=""
            className="max-h-[50rem] w-full bg-black-100 object-cover"
          />
        </div>
      </>
    );
  };

  return (
    <>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {emblaImages.map((embla) => (
            <HeroEmblaCard src={embla.img} key={embla.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;