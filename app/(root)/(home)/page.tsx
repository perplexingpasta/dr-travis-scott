// OLDER WORKING CODE BEFORE INTEGRATING WITH GSAP

// import React from "react";
// import dynamic from "next/dynamic";
// import HomeEmblaCarousel from "../../../components/ui/HomeEmbla";
// // import { Metadata } from "next";

// const DynamicAbout = dynamic(() => import("@/components/About"));
// const DynamicWhy = dynamic(() => import("@/components/ui/WhyChooseUsCards"));
// const DynamicGoogleReviews = dynamic(
//   () => import("@/components/ui/GoogleReviewsCarousel"),
// );
// const DynamicContact = dynamic(() => import("@/components/HomepageContact"), {
//   ssr: false,
// });

// // export const metadata: Metadata = {
// //   title: "Home - Dr. Travis Scott",
// //   description: "MD Dermatologist based in Chicago, IL",
// // };

// const page = () => {
//   return (
//     <>
//       <main className="relative mt-24 flex flex-col items-center justify-center overflow-clip">
//         {/* HERO */}
//         <section className="relative">
//           {/* <Image
//             src="/images/hero-skin1.jpg"
//             width={1280}
//             height={1920}
//             alt=""
//             className="brightness-75 filter"
//           /> */}
//           <HomeEmblaCarousel />
//           <div className="hero-overlay absolute inset-0 flex flex-col items-start justify-end p-3 pb-6 text-white md:p-4 lg:ml-10 lg:h-[60vh] lg:justify-center">
//             <p className="mb-1 text-lg font-semibold md:text-2xl lg:text-3xl">
//               Your Beautiful Self
//             </p>
//             <p className="md:text-xl lg:text-2xl">
//               Visit Dr. Varun Agarwal today to start your healthy skin journey!
//             </p>
//           </div>
//         </section>

//         {/* STATS */}
//         <section>
//           <div className="mx-auto my-5 grid max-w-[90%] grid-cols-3 gap-x-3 rounded-3xl border-4 px-3 py-5 md:my-16 md:max-w-[85%] md:gap-x-16">
//             <div className="flex flex-col items-center text-center">
//               <p className="text-xl font-semibold md:text-3xl">20+</p>
//               <h3 className="md:text-2xl">Years of Experience</h3>
//             </div>
//             <div className="flex flex-col items-center text-center">
//               <p className="text-xl font-semibold md:text-3xl">1,200+</p>
//               <h3 className="md:text-2xl">Procedures Done</h3>
//             </div>
//             <div className="flex flex-col items-center text-center">
//               <p className="text-xl font-semibold md:text-3xl">3,000+</p>
//               <h3 className="md:text-2xl">Happy Patients</h3>
//             </div>
//           </div>
//         </section>

//         {/* ABOUT THE DOCTOR */}
//         <section className="mx-auto max-w-[90%] rounded-3xl bg-gray-200 md:mb-12 md:max-w-[85%] lg:w-full">
//           <DynamicAbout />
//         </section>

//         {/* WHY CHOOSE US */}
//         <section className="mx-auto mb-12 mt-7 block max-w-[90%] rounded-3xl bg-red-500 py-6 pl-4 md:hidden">
//           <h1 className="text-2xl font-semibold md:text-3xl">Why Choose Us</h1>
//           <DynamicWhy />
//         </section>

//         {/* GOOGLE TESTIMONIALS */}
//         <section>
//           <DynamicGoogleReviews />
//         </section>

//         {/* CONTACT US */}
//         <section className="w-full max-w-[90%] md:max-w-[85%] lg:mt-10">
//           <DynamicContact />
//         </section>
//       </main>
//     </>
//   );
// };

// export default page;

"use client";
import React, { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import HomeEmblaCarousel from "../../../components/ui/HomeEmbla";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const DynamicAbout = dynamic(() => import("@/components/About"));
const DynamicWhy = dynamic(() => import("@/components/ui/WhyChooseUsCards"));
const DynamicGoogleReviews = dynamic(
  () => import("@/components/ui/GoogleReviewsCarousel"),
);
const DynamicContact = dynamic(() => import("@/components/HomepageContact"), {
  ssr: false,
});

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
        <section className="relative">
          <HomeEmblaCarousel />
          <div className="hero-overlay absolute inset-0 flex flex-col items-start justify-end p-3 pb-6 text-white md:p-4 lg:ml-10 lg:h-[60vh] lg:justify-center">
            <p className="mb-1 text-lg font-semibold md:text-2xl lg:text-3xl">
              Your Beautiful Self
            </p>
            <p className="md:text-xl lg:text-2xl">
              Visit Dr. Varun Agarwal today to start your healthy skin journey!
            </p>
          </div>
        </section>

        {/* STATS */}
        <section ref={statsRef}>
          <div className="mx-auto my-5 grid max-w-[90%] grid-cols-3 gap-x-3 rounded-3xl border-4 px-3 py-5 md:my-16 md:max-w-[85%] md:gap-x-16">
            <div className="first-stat-gsap flex flex-col items-center text-center opacity-0">
              <p className="text-xl font-semibold md:text-3xl">20+</p>
              <h3 className="md:text-2xl">Years of Experience</h3>
            </div>
            <div className="second-stat-gsap flex flex-col items-center text-center opacity-0">
              <p className="text-xl font-semibold md:text-3xl">1,200+</p>
              <h3 className="md:text-2xl">Procedures Done</h3>
            </div>
            <div className="third-stat-gsap flex flex-col items-center text-center opacity-0">
              <p className="text-xl font-semibold md:text-3xl">3,000+</p>
              <h3 className="md:text-2xl">Happy Patients</h3>
            </div>
          </div>
        </section>

        {/* ABOUT THE DOCTOR */}
        <section className="mx-auto max-w-[90%] rounded-3xl bg-gray-200 md:mb-12 md:max-w-[85%] lg:w-full">
          <DynamicAbout />
        </section>

        {/* WHY CHOOSE US */}
        <section className="mx-auto mb-12 mt-7 block max-w-[90%] rounded-3xl bg-red-500 py-6 pl-4 md:hidden">
          <h1 className="text-2xl font-semibold md:text-3xl">Why Choose Us</h1>
          <DynamicWhy />
        </section>

        {/* GOOGLE TESTIMONIALS */}
        <section>
          <DynamicGoogleReviews />
        </section>

        {/* CONTACT US */}
        <section className="w-full max-w-[90%] md:max-w-[85%] lg:mt-10">
          <DynamicContact />
        </section>
      </main>
    </>
  );
};

export default Home;
