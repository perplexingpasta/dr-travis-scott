"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import { Metadata } from "next";
import Image from "next/image";
import EmblaCarousel from "../../../components/ui/AboutEmbla";
import dynamic from "next/dynamic";

const DynamicWannaKnowMore = dynamic(
  () => import("@/components/WannaKnowMore"),
);
gsap.registerPlugin(ScrollTrigger);
// export const metadata: Metadata = {
//   title: "About Us - Dr. Travis Scott",
//   description: "MD Dermatologist based in Chicago, IL",
// };

const About = () => {
  const heroRef = useRef(null);
  const wannaKnowMoreRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.set(heroRef.current, { opacity: 0 });

      tl.to(heroRef.current, {
        opacity: 1,
        ease: "power3.out",
      })
        .fromTo(
          ".right-div-gsap",
          { x: "10%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 1, ease: "power3.out" },
        )
        .fromTo(
          ".left-div-gsap",
          { x: "-30%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.5", // Overlaps
        );

      // .fromTo(
      //   ".cta-btn-gsap",
      //   { y: "-50%", opacity: 0 },
      //   { y: "0%", opacity: 1, duration: 1, ease: "power3.out" },
      // );
    }, heroRef);

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wannaKnowMoreRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: wannaKnowMoreRef.current,
            start: "top 70%",
            toggleActions: "play none none reset",
          },
        },
      );
    }, wannaKnowMoreRef);

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);

  return (
    <>
      <header id="about" className="mt-32 md:mt-44">
        <h1 className="heading relative block">About Us</h1>
        <h2 className="relative items-center justify-center py-4 text-center text-lg font-light text-black-100 md:mb-16"></h2>
      </header>
      <main className="mx-auto max-w-[90%]">
        {/* FOUNDER */}
        <section
          ref={heroRef}
          className="mb-10 flex w-full flex-col-reverse md:mb-16 lg:flex-row"
        >
          <div className="left-div-gsap mx-auto max-w-[90%] opacity-0 lg:mx-20 lg:w-1/2 lg:max-w-[40vw]">
            <h1 className="subheading mb-1 mt-10 lg:mb-3 lg:mt-0">
              Dr. Varun Agarwal
            </h1>
            <p className="opacity-80 md:text-lg lg:text-xl">
              Dr. Varun Agarwal is a renowned dermatologist in Delhi with over
              12 years of experience in treating a wide range of skin problems.
              Known as one of the best dermatologists in Delhi, he offers
              personalized, effective treatments for conditions like acne, hair
              loss, hair fall, and wrinkles.
              <br />
              His clinic is a trusted destination for those seeking expert care
              and solutions for their skin concerns. <br />
              <br />
              With an MD in Dermatology, Dr. Agarwal has treated over 25,000
              satisfied patients, making him a go-to skin doctor in Delhi. He
              specializes in both medical and cosmetic dermatology, using the
              latest technology and advanced techniques to deliver the best
              results. As a celebrity dermatologist, his expertise is sought
              after by individuals from all walks of life, but his compassionate
              approach ensures that every patient receives individualized care.{" "}
              <br />
              <br />
              Dr. Agarwal is known as a leading skincare specialist in Delhi,
              combining his vast experience with cutting-edge treatments to
              restore and enhance skin health. Whether you&apos;re struggling
              with acne, experiencing hair loss, or concerned about signs of
              aging, his clinic provides comprehensive care tailored to your
              needs. When searching for a dermatologist near me, Dr. Varun
              Agarwal&apos;s name stands out for his proven track record and
              dedication to achieving visible, lasting results.
            </p>
          </div>
          <div className="right-div-gsap flex justify-around opacity-0 lg:w-1/2">
            <Image
              src="/images/doctor.jpg"
              width={1000}
              height={1000}
              className="w-4/5 aspect-square object-cover rounded-2xl"
              alt=""
            />
          </div>
        </section>

        {/* ASSOCIATIONS & MEMBERSHIPS */}
        <section className="mx-auto mb-12 rounded-3xl bg-gray-200 p-4 md:mb-0 md:max-w-[85%] md:p-8">
          <h1 className="subheading mb-4 text-center md:mb-0">
            Associations & Memberships
          </h1>
          <div className="flex flex-col items-center justify-center md:flex-row md:gap-x-7 lg:gap-x-32">
            <Image
              src="/association-brand/kia.svg"
              width={1080}
              height={1080}
              className="w-1/3 md:w-1/5 lg:max-w-44"
              alt=""
            />
            <Image
              src="/association-brand/jaguar.svg"
              width={1080}
              height={1080}
              className="w-1/3 md:w-1/5 lg:max-w-44"
              alt=""
            />
            <Image
              src="/association-brand/ford.svg"
              width={1080}
              height={1080}
              className="w-1/3 md:w-1/5 lg:max-w-44"
              alt=""
            />
            <Image
              src="/association-brand/hummer.svg"
              width={1080}
              height={1080}
              className="w-1/3 md:w-1/5 lg:max-w-44"
              alt=""
            />
          </div>
        </section>

        {/* MEET OUR STAFF */}
        <section className="relative mt-24 hidden md:block">
          <h1 className="subheading mb-12 mt-10 text-center lg:mt-0 lg:text-4xl">
            Meet Our Staff!
          </h1>
          <EmblaCarousel />
        </section>

        {/* WANNA KNOW MORE */}
        <section ref={wannaKnowMoreRef} className="mb-12 md:mb-24">
          <DynamicWannaKnowMore />
        </section>
      </main>
    </>
  );
};

export default About;
