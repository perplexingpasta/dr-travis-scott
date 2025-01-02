"use client";
import React from "react";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./InfiniteCards";
import Image from "next/image";

const GoogleReviewsCarousel = () => {
  return (
    <>
      <div className="flex w-full flex-col md:flex-row">
        <div className="flex justify-center md:my-auto md:w-1/6">
          <Image
            src="/images/google-reviews.png"
            width={750}
            height={500}
            className="hidden w-[80%] md:block md:w-full"
            alt=""
          />
        </div>
        <div className="relative mb-12 flex flex-col items-center justify-center overflow-hidden rounded-md antialiased md:mb-0 md:h-[30rem] md:w-5/6">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </>
  );
};

export default GoogleReviewsCarousel;
