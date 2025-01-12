"use client";
import React from "react";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./InfiniteCards";
import Image from "next/image";

const GoogleReviewsCarousel = () => {
  return (
    <>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="flex justify-center lg:my-auto lg:w-1/6">
          <Image
            src="/images/google-reviews.png"
            width={1500}
            height={1000}
            className="hidden w-[80%] lg:block lg:w-full"
            alt=""
          />
        </div>
        <div className="relative mb-12 flex flex-col items-center justify-center overflow-hidden rounded-md antialiased lg:mb-0 lg:h-[30rem] lg:w-5/6">
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
