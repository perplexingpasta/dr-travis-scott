import EmblaCarousel from "../../../components/ui/HeroEmbla";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import WannaKnowMore from "@/components/WannaKnowMore";

export const metadata: Metadata = {
  title: "About Us - Dr. Travis Scott",
  description: "MD Dermatologist based in Chicago, IL",
};

const page = () => {
  return (
    <>
      <header id="about" className="mt-32 md:mt-44">
        <h1 className="heading relative block">About Us</h1>
        <h2 className="relative items-center justify-center py-4 text-center text-lg font-light text-black-100 md:mb-16"></h2>
      </header>
      <main>
        {/* FOUNDER */}
        <section className="mb-10 flex w-full flex-col-reverse md:mb-20 lg:flex-row">
          <div className="mx-auto max-w-[85vw] lg:mx-20 lg:w-1/2 lg:max-w-[40vw]">
            <h1 className="subheading mt-10 lg:mb-3 lg:mt-0">
              Dr. Varun Agarwal
            </h1>
            <p className="md:text-lg lg:text-xl">
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
          <div className="flex justify-around lg:w-1/2">
            <Image
              src="/images/travis-sq.jpg"
              width={1000}
              height={1000}
              className="w-4/5 rounded-2xl"
              alt=""
            />
          </div>
        </section>

        <section className="relative mt-44 hidden md:block">
          <h1 className="subheading mb-12 mt-10 text-center lg:mt-0 lg:text-4xl">
            Meet Our Staff!
          </h1>
          <EmblaCarousel />
        </section>

        <section className="mb-12 md:mb-24">
          <WannaKnowMore />
        </section>
      </main>
    </>
  );
};

export default page;
