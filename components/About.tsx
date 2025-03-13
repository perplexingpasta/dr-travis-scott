// OLDER WORKING CODE BEFORE GSAP

// import Image from "next/image";

// const About = () => {
//   return (
//     <div id="about" className="items-center py-5 pt-10 md:py-16 lg:p-16">
//       <div className="flex max-w-screen-xl flex-col items-center lg:flex-row lg:items-start lg:justify-between">
//         <div className="h-auto lg:w-1/2">
//           <picture className="image-box ml-3 mr-0">
//             <source media="(max-width: 600px)" srcSet="/images/doctor.jpg" />
//             <source media="(min-width: 601px)" srcSet="/images/doctor.jpg" />
//             <Image
//               aria-hidden="true"
//               loading="lazy"
//               decoding="async"
//               src="/images/doctor.jpg"
//               alt=""
//               width="400"
//               height="662"
//               className="z-10"
//             />
//           </picture>
//         </div>
//         <div className="mt-10 h-auto w-full max-w-[90%] md:mt-16 lg:w-1/2">
//           <h1 className="subheading">Dr. Varun Agarwal</h1>
//           <h1 className="mb-4 text-lg text-slate-700 md:text-xl">
//             MBBS, MD, FCP
//           </h1>
//           <div className="opacity-80 md:text-xl">
//             <p>
//               Dr. Varun Agarwal is a renowned dermatologist in Delhi, with over
//               20 years of experience. He earned his medical degree from Stanford
//               University School of Medicine and completed his dermatology
//               residency at UCSF.
//             </p>
//             <br />
//             <p>
//               Dr. Agarwal specializes in treating a wide range of skin
//               conditions, including acne, eczema, psoriasis, and skin cancer,
//               using a personalized approach to patient care.
//             </p>
//             <br />
//             <p>
//               Outside of his professional life, Dr. Agarwal enjoys hiking,
//               cycling, and painting. Dr. Agarwal is also a dedicated advocate
//               for healthy living, often educating his patients on skincare and
//               overall wellness.{" "}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

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
          toggleActions: "play none none reset",
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
          trigger: ".image-gsap",
          start: "top 80%",
          toggleActions: "play none none reset",
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
          <h1 className="subheading">Dr. Varun Agarwal</h1>
          <h1 className="mb-4 text-lg text-slate-700 md:text-xl">
            MBBS, MD, FCP
          </h1>
          <div className="opacity-80 md:text-xl">
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
          </div>
          <a
            className="relative flex items-center justify-center mt-4 lg:justify-start lg:-mb-4 lg:mt-8 lg:w-full"
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
