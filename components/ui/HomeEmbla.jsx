"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { emblaImages } from "@/data";
import Image from "next/image";

const HomeEmblaCarousel = () => {
  const autoplayOptions = {
    delay: 4000, //delay timer in milliseconds, actually does work
  };
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  const HeroEmblaCard = ({ src }) => {
    return (
      <>
        <div className="embla__slide lg:max-h-[60vh]">
          <Image
            width={2160}
            height={2160}
            src={src}
            alt=""
            className="mx-auto aspect-square object-cover brightness-50 filter md:aspect-video"
          />
        </div>
        {/* <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, black 0%, transparent 20%)",
          }}
        /> */}
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

export default HomeEmblaCarousel;
