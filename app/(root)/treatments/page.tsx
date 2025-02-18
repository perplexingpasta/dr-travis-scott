// OLDER WORKING CODE BEFORE GSAP

// import React from "react";
// import Service3dCard from "../../../components/ui/Service3dCard";
// import {
//   servicesAAT,
//   servicesHRT,
//   servicesSLR,
//   servicesSCT,
//   servicesPST,
// } from "@/data";
// import dynamic from "next/dynamic";
// const DynamicWannaKnowMore = dynamic(
//   () => import("@/components/WannaKnowMore"),
// );

// type Service = {
//   imgSrc: string;
//   imgAlt: string;
//   title: string;
//   description: string;
// };

// const page = () => {
//   return (
//     <>
//       <header id="treatments" className="mt-32 md:mt-44">
//         <h1 className="heading relative block">Our Treatments</h1>
//         <div className="relative mx-auto mb-7 max-w-[70%] items-center justify-center py-2 text-center font-light text-black-100 md:mb-16 md:max-w-full md:py-4 md:text-lg" />
//       </header>
//       <main className="mx-auto mb-12 max-w-[90%] md:-mt-10">
//         <section className="container mx-auto mb-10 rounded-3xl bg-gray-200 px-4 pt-10 md:px-8 md:pt-7 lg:px-12">
//           <h1 className="subheading mb-24 text-center md:py-3 lg:mb-28 lg:mt-0 lg:text-left">
//             Aesthetic & Anti-Aging Treatments
//           </h1>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
//             {servicesAAT.map((service, index) => (
//               <Service3dCard
//                 key={index}
//                 imgSrc={service.imgSrc}
//                 imgAlt={service.imgAlt}
//                 title={service.title}
//                 description={service.description}
//               />
//             ))}
//           </div>
//         </section>

//         <section className="container mx-auto mb-10 rounded-3xl bg-gray-200 px-4 pt-10 md:px-8 md:pt-7 lg:px-12">
//           <h1 className="subheading mb-24 text-center md:py-3 lg:mb-28 lg:mt-0 lg:text-left">
//             Hair Restoration & Treatment
//           </h1>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
//             {servicesHRT.map((service, index) => (
//               <Service3dCard
//                 key={index}
//                 imgSrc={service.imgSrc}
//                 imgAlt={service.imgAlt}
//                 title={service.title}
//                 description={service.description}
//               />
//             ))}
//           </div>
//         </section>

//         <section className="container mx-auto mb-10 rounded-3xl bg-gray-200 px-4 pt-10 md:px-8 md:pt-7 lg:px-12">
//           <h1 className="subheading mb-24 text-center md:py-3 lg:mb-28 lg:mt-0 lg:text-left">
//             Skin Lesion Removal
//           </h1>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
//             {servicesSLR.map((service, index) => (
//               <Service3dCard
//                 key={index}
//                 imgSrc={service.imgSrc}
//                 imgAlt={service.imgAlt}
//                 title={service.title}
//                 description={service.description}
//               />
//             ))}
//           </div>
//         </section>

//         <section className="container mx-auto mb-10 rounded-3xl bg-gray-200 px-4 pt-10 md:px-8 md:pt-7 lg:px-12">
//           <h1 className="subheading mb-24 text-center md:py-3 lg:mb-28 lg:mt-0 lg:text-left">
//             Pigmentation & Scar Treatment
//           </h1>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
//             {servicesPST.map((service, index) => (
//               <Service3dCard
//                 key={index}
//                 imgSrc={service.imgSrc}
//                 imgAlt={service.imgAlt}
//                 title={service.title}
//                 description={service.description}
//               />
//             ))}
//           </div>
//         </section>

//         <section className="container mx-auto mb-10 rounded-3xl bg-gray-200 px-4 pt-10 md:px-8 md:pt-7 lg:px-12">
//           <h1 className="subheading mb-24 text-center md:py-3 lg:mb-28 lg:mt-0 lg:text-left">
//             Skin Cancer Treatment
//           </h1>
//           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
//             {servicesSCT.map((service, index) => (
//               <Service3dCard
//                 key={index}
//                 imgSrc={service.imgSrc}
//                 imgAlt={service.imgAlt}
//                 title={service.title}
//                 description={service.description}
//               />
//             ))}
//           </div>
//         </section>

//         <section>
//           <DynamicWannaKnowMore />
//         </section>
//       </main>
//     </>
//   );
// };

// export default page;

// BEFORE GOING ALL REDUNDANT

"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Service3dCard from "../../../components/ui/Service3dCard";
import {
  servicesAAT,
  servicesHRT,
  servicesSLR,
  servicesSCT,
  servicesPST,
} from "@/data";
import dynamic from "next/dynamic";
const DynamicWannaKnowMore = dynamic(
  () => import("@/components/WannaKnowMore"),
);

type Service = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
};

const Treatments = () => {
  // FOR SECTION 1 ANIMATION
  useEffect(() => {
    gsap.fromTo(
      ".title1-gsap",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".title1-gsap",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      },
    );
  }, []);
  // FOR SECTION 1 ANIMATION
  useEffect(() => {
    gsap.fromTo(
      ".stagger-element1-gsap",
      { x: "-10%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        stagger: 0.5,
        delay: 0.25,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".title1-gsap",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      },
    );
  }, []);

  // FOR SECTION 2 ANIMATION
  useEffect(() => {
    gsap.fromTo(
      ".title2-gsap",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".title2-gsap",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      },
    );
  }, []);
  // FOR SECTION 2 ANIMATION
  useEffect(() => {
    gsap.fromTo(
      ".stagger-element2-gsap",
      { x: "-10%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        stagger: 0.5,
        delay: 0.25,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".title2-gsap",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      },
    );
  }, []);

  // FOR SECTION 3 ANIMATION
  useEffect(() => {
    gsap.fromTo(
      ".title3-gsap",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".title3-gsap",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      },
    );
  }, []);
  // FOR SECTION 3 ANIMATION
  useEffect(() => {
    gsap.fromTo(
      ".stagger-element3-gsap",
      { x: "-10%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        stagger: 0.5,
        delay: 0.25,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".title3-gsap",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      },
    );
  }, []);

  // FOR SECTION 4 ANIMATION
  useEffect(() => {
    gsap.fromTo(
      ".title4-gsap",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".title4-gsap",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      },
    );
  }, []);
  // FOR SECTION 4 ANIMATION
  useEffect(() => {
    gsap.fromTo(
      ".stagger-element4-gsap",
      { x: "-10%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        stagger: 0.5,
        delay: 0.25,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".title4-gsap",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      },
    );
  }, []);

  // FOR SECTION 5 ANIMATION
  useEffect(() => {
    gsap.fromTo(
      ".title5-gsap",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".title5-gsap",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      },
    );
  }, []);
  // FOR SECTION 5 ANIMATION
  useEffect(() => {
    gsap.fromTo(
      ".stagger-element5-gsap",
      { x: "-10%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        stagger: 0.5,
        delay: 0.25,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".title5-gsap",
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      },
    );
  }, []);

  return (
    <>
      <header id="treatments" className="mt-32 md:mt-44">
        <h1 className="heading relative block">Our Treatments</h1>
        <div className="relative mx-auto mb-7 max-w-[70%] items-center justify-center py-2 text-center font-light text-black-100 md:mb-16 md:max-w-full md:py-4 md:text-lg" />
      </header>
      <main className="mx-auto mb-12 max-w-[90%] md:-mt-10">
        <section className="container mx-auto mb-10 rounded-3xl bg-gray-200 px-4 pt-10 md:px-8 md:pt-7 lg:px-12">
          <h1 className="subheading title1-gsap mb-24 text-center opacity-0 md:py-3 lg:mb-28 lg:mt-0 lg:text-left">
            Aesthetic & Anti-Aging Treatments
          </h1>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
            {servicesAAT.map((service, index) => (
              <Service3dCard
                key={index}
                imgSrc={service.imgSrc}
                imgAlt={service.imgAlt}
                title={service.title}
                description={service.description}
                className="stagger-element1-gsap opacity-0"
              />
            ))}
          </div>
        </section>

        <section className="container mx-auto mb-10 rounded-3xl bg-gray-200 px-4 pt-10 md:px-8 md:pt-7 lg:px-12">
          <h1 className="subheading title2-gsap mb-24 text-center opacity-0 md:py-3 lg:mb-28 lg:mt-0 lg:text-left">
            Hair Restoration & Treatment
          </h1>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
            {servicesHRT.map((service, index) => (
              <Service3dCard
                key={index}
                imgSrc={service.imgSrc}
                imgAlt={service.imgAlt}
                title={service.title}
                description={service.description}
                className="stagger-element2-gsap opacity-0"
              />
            ))}
          </div>
        </section>

        <section className="container mx-auto mb-10 rounded-3xl bg-gray-200 px-4 pt-10 md:px-8 md:pt-7 lg:px-12">
          <h1 className="subheading title3-gsap mb-24 text-center opacity-0 md:py-3 lg:mb-28 lg:mt-0 lg:text-left">
            Skin Lesion Removal
          </h1>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
            {servicesSLR.map((service, index) => (
              <Service3dCard
                key={index}
                imgSrc={service.imgSrc}
                imgAlt={service.imgAlt}
                title={service.title}
                description={service.description}
                className="stagger-element3-gsap opacity-0"
              />
            ))}
          </div>
        </section>

        <section className="container mx-auto mb-10 rounded-3xl bg-gray-200 px-4 pt-10 md:px-8 md:pt-7 lg:px-12">
          <h1 className="subheading title4-gsap mb-24 text-center opacity-0 md:py-3 lg:mb-28 lg:mt-0 lg:text-left">
            Pigmentation & Scar Treatment
          </h1>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
            {servicesPST.map((service, index) => (
              <Service3dCard
                key={index}
                imgSrc={service.imgSrc}
                imgAlt={service.imgAlt}
                title={service.title}
                description={service.description}
                className="stagger-element4-gsap opacity-0"
              />
            ))}
          </div>
        </section>

        <section className="container mx-auto mb-10 rounded-3xl bg-gray-200 px-4 pt-10 md:px-8 md:pt-7 lg:px-12">
          <h1 className="subheading title5-gsap mb-24 text-center opacity-0 md:py-3 lg:mb-28 lg:mt-0 lg:text-left">
            Skin Cancer Treatment
          </h1>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
            {servicesSCT.map((service, index) => (
              <Service3dCard
                key={index}
                imgSrc={service.imgSrc}
                imgAlt={service.imgAlt}
                title={service.title}
                description={service.description}
                className="stagger-element5-gsap opacity-0"
              />
            ))}
          </div>
        </section>

        <section>
          <DynamicWannaKnowMore />
        </section>
      </main>
    </>
  );
};

export default Treatments;
