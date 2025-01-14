"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Compare } from "./ui/compare";

gsap.registerPlugin(ScrollTrigger);

const BeforeAfterSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".title-gsap",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".title-gsap",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      },
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".stagger-element-gsap",
      { x: -30, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.75,
        delay: 0.5,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".title-gsap",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      },
    );
  }, []);

  return (
    <>
      <div className="title-gsap text-center text-2xl font-semibold opacity-0 md:mb-10 md:ml-[5%] md:mt-0 md:text-left md:text-3xl">
        <p className="font-lexendDeca md:text-4xl">Before & After</p>
        <p className="mx-auto max-w-[80%] text-base font-light md:max-w-full md:text-xl">
          Incredible skin transformation of patients after our help.
        </p>
      </div>
      <div className="mx-auto flex max-w-[90%] flex-col justify-between lg:flex-row">
        <div className="stagger-element-gsap mt-6 opacity-0 lg:mt-0">
          <Compare
            firstImage="/before-after/1before.png"
            secondImage="/before-after/1after.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="mx-auto h-[250px] w-[250px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px]"
            slideMode="hover"
          />
          <p className="mt-1 text-center text-sm font-semibold md:mt-4 md:text-lg">
            Cellow Park Jung
          </p>
          <p className="text-center text-sm md:text-lg">
            Severe acne treated in 2 months
          </p>
        </div>
        <div className="stagger-element-gsap mt-6 opacity-0 lg:mt-0">
          <Compare
            firstImage="/before-after/2before.png"
            secondImage="/before-after/2after.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="mx-auto h-[250px] w-[250px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px]"
            slideMode="hover"
          />
          <p className="mt-1 text-center text-sm font-semibold md:mt-4 md:text-lg">
            Shea McFayden
          </p>
          <p className="text-center text-sm md:text-lg">
            Old age wrinkles treated in 3 months
          </p>
        </div>
        <div className="stagger-element-gsap mt-6 opacity-0 lg:mt-0">
          <Compare
            firstImage="/before-after/3before.png"
            secondImage="/before-after/3after.png"
            firstImageClassName="object-cover object-left-top"
            secondImageClassname="object-cover object-left-top"
            className="mx-auto h-[250px] w-[250px] md:h-[400px] md:w-[400px] lg:h-[450px] lg:w-[450px]"
            slideMode="hover"
          />
          <p className="mt-1 text-center text-sm font-semibold md:mt-4 md:text-lg">
            Olivia Jane
          </p>
          <p className="text-center text-sm md:text-lg">
            Extreme Face Pigmentation treated in 2 months
          </p>
        </div>
      </div>
    </>
  );
};

export default BeforeAfterSection;
