import EmblaCarousel from "../../../components/ui/HeroEmbla";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

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
            <h1 className="mb-3 mt-10 text-2xl font-semibold md:text-3xl lg:mt-0">
              Dr. Travis Scott
            </h1>
            <p className="font-lexendDeca md:text-lg">
              Dr. Travis Scott is a distinguished figure in the Indian
              Construction Industry with over 38 years of extensive experience
              in handling the Construction & Development of Highways, Bridges,
              Railways, Mega Buildings & Townships.
              <br />
              <br />
              He has been at the helm of numerous iconic projects across the
              country, including vast townships spread over acres in Hyderabad,
              Vijayawada & Nagpur and is associated with various BoT / EPC
              Highway Projects & has produced more than 5000 lane kilometres
              since 1999. He is a member of the 1986 batch & earned a bachelor’s
              degree in civil engineering from the Manipal Institute of
              Technology.
              <br />
              <br />
              Sanjay posseses niche experience in the Infrastructure Sector in
              India & SE Asia & has acclaimed many accolades during his
              illustrious journey with IRCON & IJM Group of Companies.
              <br />
              <br />
              In April 2024, he relinquished the executive life from IJM &
              Company retained him as Director & Advisor to mentor future
              leaders & share rich expertise. Being at the helm of operations,
              he had the opportunity to network with top Industry Leaders around
              the globe & authorities alike & now he is available to share his
              rich experiences with Industry mates & Companies who need niche
              advice & networking services as a NEW phase of professional
              journey with continued focus building platforms together that
              create broad opportunities.
              <br />
              <br />
              His strong belief: “Ethics are paramount & Essence of Success”
              always preaches that teamwork is able to fill in leadership gaps &
              eventually leads to effective communication & produces
              collaborators with whom people want to work, thus creating
              Effective Leaders.
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
        {/* SERVICES */}
        {/* <section className="lg:max-w-[40vw] max-w-[85vw] mx-auto lg:mx-20 mb-20">
          <h1 className="font-semibold text-2xl md:text-3xl mb-3">
            Our Services
          </h1>
          <ul className="md:text-lg space-y-3">
            <li>✦ Advisory</li>
            <li>✦ Industry Networking</li>
            <li>✦ Mentoring</li>
            <li>✦ Liasoning Office</li>
            <li>✦ Product Promotion</li>
            <li>✦ Investment</li>
          </ul>
        </section> */}

        <section className="relative mt-44 hidden md:block">
          {/* <div className="mx-auto max-w-[85vw] lg:mx-20 lg:w-1/2 lg:max-w-[40vw]"> */}
          <h1 className="mb-12 mt-10 text-center text-2xl font-semibold md:text-3xl lg:mt-0">
            Meet Our Staff!
          </h1>
          {/* </div> */}
          <EmblaCarousel />
        </section>
      </main>
    </>
  );
};

export default page;
