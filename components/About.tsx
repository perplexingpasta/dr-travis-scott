"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      ".image-gsap",
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".image-gsap",
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      },
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".description-gsap",
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          // trigger: ".image-gsap",
          trigger: ".description-gsap",
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      },
    );
  }, []);

  return (
    <div id="about" className="items-center py-5 pt-10 md:py-16 lg:p-16">
      <div className="flex max-w-screen-xl flex-col items-center lg:flex-row lg:items-start lg:justify-between">
        <div className="image-gsap h-auto lg:w-1/2">
          <picture className="image-box ml-3 mr-0">
            <source media="(max-width: 600px)" srcSet="/images/doctor.jpg" />
            <source media="(min-width: 601px)" srcSet="/images/doctor.jpg" />
            <Image
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              src="/images/doctor.jpg"
              alt=""
              width="400"
              height="662"
              className="z-10"
            />
          </picture>
        </div>
        <div className="description-gsap mt-10 h-auto w-full max-w-[90%] md:mt-16 lg:w-1/2">
          <h1 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Dr. Varun Agarwal
          </h1>
          <h1 className="mb-4 text-lg text-slate-700 md:text-xl lg:text-2xl">
            MBBS, MD, FCP
          </h1>
          <div className="max-w-[60%] border-b border-black opacity-25 md:max-w-xs lg:max-w-sm" />
          <br />
          {/* <div className="opacity-80 md:text-xl">
            <p>
              Dr. Varun Agarwal is a renowned dermatologist in Delhi, with over
              20 years of experience. He earned his medical degree from Stanford
              University School of Medicine and completed his dermatology
              residency at UCSF.
            </p>
            <br />
            <p>
              Dr. Agarwal specializes in treating a wide range of skin
              conditions, including acne, eczema, psoriasis, and skin cancer,
              using a personalized approach to patient care.
            </p>
            <br />
            <p>
              Outside of his professional life, Dr. Agarwal enjoys hiking,
              cycling, and painting. Dr. Agarwal is also a dedicated advocate
              for healthy living, often educating his patients on skincare and
              overall wellness.{" "}
            </p>
          </div> */}
          <div className="opacity-80 md:text-xl lg:text-lg">
            <p>
              Welcome to Le Dermique®, led by board-certified dermatologist Dr.
              Varun Agarwal. With over 22 years of experience, Dr. Agarwal is
              committed to providing exceptional care for your skin health.
            </p>
            <br />
            <p>
              Dr. Agarwal earned his medical degree (MBBS) at Kasturba Medical
              College, Manipal and completed his masters (MD) in Dermatology
              from Mumbai. Post his residency, he worked with various renowned
              dermatologists in Delhi, and then pursued Fellowship in Aesthetic
              Medicine (FAM) from Bangalore. He stays at the forefront of the
              field through continuous learning and professional involvement,
              ensuring you receive the latest treatments.
            </p>
            <br />
            <p>
              At Le Dermique®, Dr. Agarwal takes a personalized approach,
              listening to your concerns and creating tailored treatment plans.
              His warm and compassionate demeanor will make you feel at ease
              throughout your skincare & wellness journey.
            </p>
            <br />
            <p>
              Experience the exceptional care of Dr. Varun Agarwal and schedule
              a consultation at Le Dermique® today.
            </p>
          </div>
          <a
            className="relative mt-4 flex items-center justify-center lg:-mb-4 lg:mt-8 lg:w-full lg:justify-start"
            href="tel:01274222811"
            // target="_blank"
          >
            <button className="rounded-lg bg-red-300 p-3 text-base transition-all duration-300 hover:scale-110 hover:bg-red-400 hover:text-white hover:drop-shadow-xl active:bg-red-600 active:text-white md:p-3 md:px-6 md:text-xl">
              <span className="flex items-center gap-x-2">
                Book An Appointment
                {/* <BiSolidPhoneCall className="md:text-2xl" /> */}
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
