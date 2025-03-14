"use client";
import React, { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import HomeEmblaCarousel from "../../../components/ui/HomeEmbla";
// import Script from "next/script";
import { MdAccessTimeFilled } from "react-icons/md";
import { GiHealthNormal } from "react-icons/gi";
import { BiSolidHappyHeartEyes } from "react-icons/bi";
import Herov3 from "@/components/Herov3";
import GetApptCTA from "@/components/GetApptCTA";

const DynamicAbout = dynamic(() => import("@/components/About"));
const DynamicWhy = dynamic(() => import("@/components/ui/WhyChooseUsCards"));
const DynamicWhyMd = dynamic(() => import("@/components/WhyChooseUsMd"));
const DynamicCTA = dynamic(() => import("@/components/GetApptCTA"));
const DynamicFAQ = dynamic(() => import("@/components/HomeFAQ"));
const DynamicGoogleReviews = dynamic(
  () => import("@/components/ui/GoogleReviewsCarousel"),
);
const DynamicContact = dynamic(() => import("@/components/HomepageContact"));

// export const metadata: Metadata = {
//   title: "Home - Dr. Travis Scott",
//   description: "MD Dermatologist based in Chicago, IL",
// };
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const statsRef = useRef(null);

  // gsap for stats
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      gsap.set(statsRef.current, { opacity: 0 });
      tl.to(statsRef.current, {
        opacity: 1,
        ease: "power3.out",
      })
        .fromTo(
          ".first-stat-gsap",
          { y: "-25%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.75, ease: "power4.out" },
        )
        .fromTo(
          ".second-stat-gsap",
          { y: "-25%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.75, ease: "power4.out" },
          "-=0.25",
        )
        .fromTo(
          ".third-stat-gsap",
          { y: "-25%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 0.75, ease: "power4.out" },
          "-=0.25",
        );
    }, statsRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <main className="relative mt-24 flex flex-col items-center justify-center overflow-clip">
        {/* HERO */}
        <section className="relative h-[12rem] bg-red-400 bg-opacity-75 lg:h-[40rem] lg:w-full">
          <Herov3 />
        </section>

        {/* STATS */}
        <section ref={statsRef} className="mt-6 md:mt-60 lg:mt-0">
          <div className="mx-auto my-5 grid max-w-[90%] grid-cols-3 gap-x-3 rounded-3xl border-4 border-red-200 px-3 py-5 md:my-16 md:max-w-[85%] md:gap-x-16">
            <div className="first-stat-gsap flex flex-row items-center text-center opacity-0">
              <MdAccessTimeFilled className="-mr-2 hidden text-7xl opacity-75 md:block lg:-mr-6" />
              <div className="flex flex-col">
                <p className="text-2xl font-semibold opacity-75 md:text-4xl">
                  22+
                </p>
                <h3 className="text-sm opacity-50 md:text-xl md:font-semibold">
                  Years of Experience
                </h3>
              </div>
            </div>
            <div className="second-stat-gsap flex flex-row items-center text-center opacity-0">
              <GiHealthNormal className="mr-2 hidden text-7xl opacity-75 md:block lg:mr-0" />
              <div className="flex flex-col">
                <p className="text-2xl font-semibold opacity-75 md:text-4xl">
                  1200+
                </p>
                <h3 className="text-sm opacity-50 md:text-xl md:font-semibold">
                  Procedures Done
                </h3>
              </div>
            </div>
            <div className="third-stat-gsap flex flex-row items-center text-center opacity-0">
              <BiSolidHappyHeartEyes className="hidden text-7xl opacity-75 md:block lg:-mr-2" />
              <div className="flex flex-col">
                <p className="text-2xl font-semibold opacity-75 md:text-4xl">
                  3000+
                </p>
                <h3 className="text-sm opacity-50 md:text-xl md:font-semibold">
                  Happy Patients
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT THE DOCTOR */}
        <section className="mx-auto max-w-[90%] rounded-3xl bg-gray-200 bg-opacity-50 md:mb-12 md:max-w-[85%] lg:w-full">
          <DynamicAbout />
        </section>

        {/* WHY CHOOSE US */}
        <section className="mx-auto mb-12 mt-7 block max-w-[90%] rounded-3xl bg-red-200 py-6 pl-4 md:hidden">
          <h1 className="text-2xl font-semibold md:text-3xl">Why Choose Us?</h1>
          <DynamicWhy />
        </section>

        <section className="mx-auto mb-16 mt-8 hidden w-full max-w-[90%] md:block md:max-w-[75%] lg:mb-20 lg:mt-12 lg:max-w-[60%]">
          <DynamicWhyMd />
        </section>

        {/* GOOGLE TESTIMONIALS */}
        <section>
          <DynamicGoogleReviews />
        </section>

        {/* CONTACT US */}
        <section className="w-full max-w-[90%] md:max-w-[85%] lg:mt-10">
          <DynamicContact />
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="mx-auto mb-12 max-w-[90%] rounded-3xl bg-red-200 p-4 md:w-[85%] md:p-6 lg:mb-16 lg:w-[70%] lg:p-10">
          <h1 className="subheading mb-4 py-1 text-center lg:pb-3">
            Frequently Asked Questions
          </h1>
          <DynamicFAQ />
        </section>

        <section className="mx-auto mb-12 lg:mb-20 lg:w-[60%] lg:px-10">
          <GetApptCTA />
        </section>
      </main>
      {/* GHL CHATBOX */}
      {/* <aside>
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="67cef3d5f601a64e2508759f"
        ></Script>
      </aside> */}
    </>
  );
};

export default Home;
