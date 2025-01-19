// WORKING CODE BEFORE ADDING IN GSAP
// import { Metadata } from "next";
// import dynamic from "next/dynamic";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { FaArrowRight } from "react-icons/fa";

// const DynamicWannaKnowMore = dynamic(
//   () => import("@/components/WannaKnowMore"),
// );
// const DynamicFAQs = dynamic(() => import("@/components/PricingFAQ"));

// export const metadata: Metadata = {
//   title: "Visit Us - Dr. Travis Scott",
//   description: "MD Dermatologist based in Chicago, IL",
// };

// const page = () => {
//   return (
//     <>
//       <header id="visit" className="mt-32 md:mt-44">
//         <h1 className="heading relative block">Visit Us</h1>
//         <div className="relative mx-auto mb-7 max-w-[70%] items-center justify-center py-2 text-center font-light text-black-100 md:mb-16 md:max-w-full md:py-4 md:text-lg" />
//       </header>

//       <main>
//         {/* CLINIC */}
//         <section className="mb-20 flex w-full flex-col lg:flex-row">
//           <div className="flex items-center justify-center align-middle lg:w-1/2">
//             {/* <div className="h-[500px] pb-10 md:h-[650px] lg:h-[600px]"> */}
//             <div className="h-[50vh] w-full pb-10 md:h-[65vh] md:w-10/12 lg:h-[60vh]">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22582.143987612282!2d-122.1565248820646!3d37.42647615735572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbae5f33774b5%3A0x6dd7ef2d054587e3!2sTerun%20Pizza!5e0!3m2!1sen!2sin!4v1735704949104!5m2!1sen!2sin"
//                 width="100%"
//                 height="100%"
//                 className="border-0 rounded-3xl"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//           </div>

//           <div className="relative mx-auto max-w-[90vw] text-lg tracking-wide md:ml-16 md:text-2xl lg:ml-0 lg:w-1/2 lg:max-w-[100vw] lg:self-center">
//             {/* LOCATION */}
//             <div className="mb-5 flex items-start md:mb-9 md:tracking-wide">
//               <Image
//                 src="/images/location-black.svg"
//                 width={40}
//                 height={40}
//                 alt=""
//                 className="inline-block w-8 md:w-[40px]"
//               />
//               <Link
//                 href="https://maps.app.goo.gl/mtL9tD6hisQqbAGq6"
//                 target="_blank"
//               >
//                 <div className="ml-4 hover:text-red-400 md:space-y-1">
//                   {/* <p> */}
//                   <span className="font-bold">Dr. Agarwal&apos;s Skincare</span>
//                   , <br /> 36 Old No 9, 5th Avenue, <br /> 11th Main Rd, 4th T
//                   Block East, <br /> Janakpuri, Delhi <br />
//                   {/* </p> */}
//                 </div>
//               </Link>
//             </div>

//             {/* CALL */}
//             <div className="mb-5 flex items-start md:mb-9">
//               <Image
//                 src="/images/call-black.svg"
//                 width={35}
//                 height={35}
//                 alt=""
//                 className="inline-block w-8 md:w-[35px]"
//               />
//               <div className="ml-4 space-y-2">
//                 <Link
//                   href="tel:+914069044164"
//                   target="_blank"
//                   className="hover:text-red-400"
//                 >
//                   <p>+91 98138-44164</p>
//                 </Link>
//                 {/* <Link
//                 href="tel:+919848038238"
//                 target="_blank"
//                 className="hover:text-red-400"
//               >
//                 <p>+91 98480 38238</p>
//               </Link> */}
//               </div>
//             </div>

//             {/* WHATSAPP */}
//             <div className="mb-5 flex items-start md:mb-9">
//               <Image
//                 src="/images/whatsapp-black.svg"
//                 width={35}
//                 height={35}
//                 alt=""
//                 className="inline-block w-8 md:w-[35px]"
//               />
//               <div className="ml-4 space-y-2">
//                 <Link
//                   href="https://wa.me/919603328484"
//                   target="_blank"
//                   className="hover:text-red-400"
//                 >
//                   <p>+91 96033-12391</p>
//                 </Link>
//               </div>
//             </div>

//             {/* EMAIL */}
//             <div className="mb-5 flex items-start md:mb-9">
//               <Image
//                 src="/images/email-black.svg"
//                 width={35}
//                 height={35}
//                 alt=""
//                 className="inline-block w-8 md:w-[35px]"
//               />
//               <div className="ml-4 space-y-2 hover:text-red-400">
//                 <Link href="mailto:sanjay@sassociate.in" target="_blank">
//                   travis@cactusjack.com
//                 </Link>
//               </div>
//             </div>

//             {/* CLINIC HOURS */}
//             <div className="flex items-start">
//               <Image
//                 src="/images/time.svg"
//                 width={35}
//                 height={35}
//                 alt=""
//                 className="inline-block w-8 md:w-[35px]"
//               />
//               <div className="ml-4">
//                 Clinic Hours
//                 <div className="opacity-75">
//                   <p>Monday to Friday: 9:00 AM - 5:00 PM</p>
//                   <p>Saturday: 10:00 AM - 2:00 PM</p>
//                   <p>Sunday: Closed</p>
//                 </div>
//               </div>
//             </div>

//             {/* WEBSITE */}
//             {/* <div className="relative mb-5 md:mb-9 text-2xl tracking-wide flex items-start">
//             <Image
//               src="/images/globe-black.svg"
//               width={32}
//               height={32}
//               alt=""
//               className="inline-block  w-7 md:w-[32px]"
//             />
//             <div className="ml-4 space-y-2 hover:text-red-400">
//               <Link href="https://youtube.com/" target="_blank">
//                 drtravisscott.com
//               </Link>
//             </div>
//           </div> */}

//             {/* GSTIN */}
//             {/* <div className="relative mb-5 md:mb-9 text-2xl tracking-wide flex items-start">
//             <Image
//               src="/images/document-black.svg"
//               width={35}
//               height={35}
//               alt=""
//               className="inline-block  w-7 md:w-[35px]"
//             />
//             <div className="ml-4 space-y-2">
//               GSTIN: 36ADAPA54572A2Z8
//             </div>
//           </div> */}

//             <div className="mt-6">
//               {/* OLD DAISYUI BUTTON */}
//               {/* <Link
//                 className="btn ml-12 mt-10 bg-red-300"
//                 // href="tel:555-779-4407"
//                 href="https://maps.google.com/maps/dir//Terun+Pizza+448+California+Ave+Palo+Alto,+CA+94306+United+States/@37.4259205,-122.1454743,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x808fbae5f33774b5:0x6dd7ef2d054587e3"
//                 target="_blank"
//                 rel="noopener"
//               >
//                 Get Directions
//               </Link> */}

//               <Link
//                 className="ml-12"
//                 href="https://maps.google.com/maps/dir//Terun+Pizza+448+California+Ave+Palo+Alto,+CA+94306+United+States/@37.4259205,-122.1454743,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x808fbae5f33774b5:0x6dd7ef2d054587e3"
//                 target="_blank"
//                 rel="noopener"
//               >
//                 {/* OLDER BUTTON W GRADIENT */}
//                 {/* <button className="relative p-[3px]">
//                   <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-300 to-red-400" />
//                   <div className="group relative rounded-md bg-transparent px-8 py-2 text-lg text-white transition duration-200 hover:bg-white hover:text-black active:bg-red-400 active:text-white">
//                     Get Directions
//                   </div>
//                 </button> */}

//                 <button className="rounded-xl bg-red-300 p-3 text-base transition-all duration-300 hover:scale-110 hover:bg-red-400 hover:text-white hover:drop-shadow-xl active:bg-red-600 active:text-white md:p-3 md:px-6 md:text-xl">
//                   <span className="flex items-center gap-x-2">
//                     Get Directions
//                     <FaArrowRight className="md:text-2xl" />
//                   </span>
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </section>

//         {/* HOSPITALS */}
//         <section className="mx-auto flex w-full max-w-[95%] flex-col md:mt-32 lg:flex-row">
//           {/* HOSPITAL 1 */}
//           <div className="mb-20 flex flex-col lg:w-1/2 lg:flex-row">
//             <div className="flex items-center justify-center align-middle lg:w-1/2">
//               <div className="h-[50vh] w-full pb-10 md:h-[65vh] md:w-10/12 lg:h-[50vh]">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22582.143987612282!2d-122.1565248820646!3d37.42647615735572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbae5f33774b5%3A0x6dd7ef2d054587e3!2sTerun%20Pizza!5e0!3m2!1sen!2sin!4v1735704949104!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   className="border-0 rounded-3xl"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>
//             </div>

//             <div className="mx-auto max-w-[90vw] md:ml-16 lg:ml-0 lg:w-1/2 lg:max-w-[100vw]">
//               {/* LOCATION */}
//               <div className="relative mb-5 flex items-start text-2xl md:mb-9 md:tracking-wide">
//                 <Image
//                   src="/images/location-black.svg"
//                   width={40}
//                   height={40}
//                   alt=""
//                   className="inline-block w-8 md:w-[35px]"
//                 />
//                 <Link
//                   href="https://maps.app.goo.gl/mtL9tD6hisQqbAGq6"
//                   target="_blank"
//                 >
//                   <div className="ml-4 text-lg hover:text-red-400 md:space-y-1 md:text-xl">
//                     <span className="font-bold">
//                       Dr. Agarwal&apos;s Skincare
//                     </span>
//                     , <br /> 36 Old No 9, 5th Avenue, <br /> 11th Main Rd, 4th T
//                     Block East, <br /> Janakpuri, Delhi <br />
//                   </div>
//                 </Link>
//               </div>

//               {/* CALL */}
//               <div className="relative mb-5 flex items-start text-2xl tracking-wide md:mb-9">
//                 <Image
//                   src="/images/call-black.svg"
//                   width={35}
//                   height={35}
//                   alt=""
//                   className="inline-block w-8 md:w-[32px]"
//                 />
//                 <div className="ml-4 space-y-2 text-lg md:text-xl">
//                   <Link
//                     href="tel:+914069044164"
//                     target="_blank"
//                     className="hover:text-red-400"
//                   >
//                     <p>+91 98138-44164</p>
//                   </Link>
//                 </div>
//               </div>

//               {/* CLINIC HOURS */}
//               <div className="relative flex items-start text-2xl tracking-wide">
//                 <Image
//                   src="/images/time.svg"
//                   width={35}
//                   height={35}
//                   alt=""
//                   className="inline-block w-8 md:w-[32px]"
//                 />
//                 <div className="ml-4 text-lg md:text-xl">
//                   Available Hours
//                   <div className="text-base text-slate-700 md:text-lg">
//                     <p>Monday to Friday: 9:00 AM - 5:00 PM</p>
//                     <p>Saturday: 10:00 AM - 2:00 PM</p>
//                     <p>Sunday: Closed</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <Link
//                   className="ml-12"
//                   href="https://maps.google.com/maps/dir//Terun+Pizza+448+California+Ave+Palo+Alto,+CA+94306+United+States/@37.4259205,-122.1454743,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x808fbae5f33774b5:0x6dd7ef2d054587e3"
//                   target="_blank"
//                   rel="noopener"
//                 >
//                   <button className="rounded-xl bg-red-300 p-3 transition-all duration-300 hover:scale-110 hover:bg-red-400 hover:text-white hover:drop-shadow-xl active:bg-red-600 active:text-white md:mt-2 md:p-3 md:px-5 md:text-lg">
//                     <span className="flex items-center gap-x-2">
//                       Get Directions
//                       <FaArrowRight className="md:text-xl" />
//                     </span>
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* HOSPITAL 2 */}
//           <div className="mb-20 flex flex-col lg:w-1/2 lg:flex-row">
//             <div className="flex items-center justify-center align-middle lg:w-1/2">
//               <div className="h-[50vh] w-full pb-10 md:h-[65vh] md:w-10/12 lg:h-[50vh]">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22582.143987612282!2d-122.1565248820646!3d37.42647615735572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbae5f33774b5%3A0x6dd7ef2d054587e3!2sTerun%20Pizza!5e0!3m2!1sen!2sin!4v1735704949104!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   className="border-0 rounded-3xl"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>
//             </div>

//             <div className="mx-auto max-w-[90vw] md:ml-16 lg:ml-0 lg:w-1/2 lg:max-w-[100vw]">
//               {/* LOCATION */}
//               <div className="relative mb-5 flex items-start text-2xl md:mb-9 md:tracking-wide">
//                 <Image
//                   src="/images/location-black.svg"
//                   width={40}
//                   height={40}
//                   alt=""
//                   className="inline-block w-8 md:w-[35px]"
//                 />
//                 <Link
//                   href="https://maps.app.goo.gl/mtL9tD6hisQqbAGq6"
//                   target="_blank"
//                 >
//                   <div className="ml-4 text-lg hover:text-red-400 md:space-y-1 md:text-xl">
//                     <span className="font-bold">
//                       Dr. Agarwal&apos;s Skincare
//                     </span>
//                     , <br /> 36 Old No 9, 5th Avenue, <br /> 11th Main Rd, 4th T
//                     Block East, <br /> Janakpuri, Delhi <br />
//                   </div>
//                 </Link>
//               </div>

//               {/* CALL */}
//               <div className="relative mb-5 flex items-start text-2xl tracking-wide md:mb-9">
//                 <Image
//                   src="/images/call-black.svg"
//                   width={35}
//                   height={35}
//                   alt=""
//                   className="inline-block w-8 md:w-[32px]"
//                 />
//                 <div className="ml-4 space-y-2 text-lg md:text-xl">
//                   <Link
//                     href="tel:+914069044164"
//                     target="_blank"
//                     className="hover:text-red-400"
//                   >
//                     <p>+91 98138-44164</p>
//                   </Link>
//                 </div>
//               </div>

//               {/* CLINIC HOURS */}
//               <div className="relative flex items-start text-2xl tracking-wide">
//                 <Image
//                   src="/images/time.svg"
//                   width={35}
//                   height={35}
//                   alt=""
//                   className="inline-block w-8 md:w-[32px]"
//                 />
//                 <div className="ml-4 text-lg md:text-xl">
//                   Available Hours
//                   <div className="text-base text-slate-700 md:text-lg">
//                     <p>Monday to Friday: 9:00 AM - 5:00 PM</p>
//                     <p>Saturday: 10:00 AM - 2:00 PM</p>
//                     <p>Sunday: Closed</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-4">
//                 <Link
//                   className="ml-12"
//                   href="https://maps.google.com/maps/dir//Terun+Pizza+448+California+Ave+Palo+Alto,+CA+94306+United+States/@37.4259205,-122.1454743,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x808fbae5f33774b5:0x6dd7ef2d054587e3"
//                   target="_blank"
//                   rel="noopener"
//                 >
//                   <button className="rounded-xl bg-red-300 p-3 transition-all duration-300 hover:scale-110 hover:bg-red-400 hover:text-white hover:drop-shadow-xl active:bg-red-600 active:text-white md:mt-2 md:p-3 md:px-5 md:text-lg">
//                     <span className="flex items-center gap-x-2">
//                       Get Directions
//                       <FaArrowRight className="md:text-xl" />
//                     </span>
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* FAQs */}
//         {/* <section>
//           <DynamicFAQs />
//         </section> */}

//         <section className="mb-12 md:mb-24">
//           <DynamicWannaKnowMore />
//         </section>
//       </main>
//     </>
//   );
// };

// export default page;

"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
// import { FAQ } from "@/components/FAQ";

const DynamicWannaKnowMore = dynamic(
  () => import("@/components/WannaKnowMore"),
);
const DynamicFAQs = dynamic(() => import("@/components/FAQ"));

gsap.registerPlugin(ScrollTrigger);

const Visit = () => {
  const clinicRef = useRef(null);
  const hospitalRef = useRef(null);
  const wannaKnowMoreRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.set(clinicRef.current, { opacity: 0 });

      tl.to(clinicRef.current, {
        opacity: 1,
        ease: "power3.out",
      })
        .fromTo(
          ".clinic-left-div-gsap",
          { x: "-30%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 1, ease: "power3.out" },
        )
        .fromTo(
          ".clinic-right-div-gsap",
          { x: "10%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.5", // Overlaps with 1s from the end of the previous animation
        )
        .fromTo(
          ".cta-btn-gsap",
          { y: "-50%", opacity: 0 },
          { y: "0%", opacity: 1, duration: 1, ease: "power3.out" },
        );
    }, clinicRef);

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl2 = gsap.timeline();

      gsap.set(hospitalRef.current, { opacity: 0 });

      tl2
        .to(hospitalRef.current, {
          opacity: 1,
          ease: "power3.out",
        })
        .fromTo(
          ".left-div",
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            // ease: "power3.out",
            scrollTrigger: {
              trigger: ".left-div",
              start: "top 90%",
              end: "top 50%",
              toggleActions: "play none none reset",
              scrub: 0.5,
            },
          },
        )
        .fromTo(
          ".right-div",
          { x: -50, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            // ease: "power3.out",
            scrollTrigger: {
              trigger: ".right-div",
              start: "top 90%",
              end: "top 50%",
              toggleActions: "play none none reset",
              scrub: 0.5,
            },
          },
          // "-=0.5", // Overlaps with 1s from the end of the previous animation
        );
    }, hospitalRef);

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
      <header id="visit" className="mt-32 md:mt-44">
        <h1 className="heading relative block">Visit Us</h1>
        <div className="relative mx-auto mb-7 max-w-[70%] items-center justify-center py-2 text-center font-light text-black-100 md:mb-16 md:max-w-full md:py-4 md:text-lg" />
      </header>

      <main className="max-w-[90%] md:max-w-full mx-auto">
        {/* CLINIC */}
        <section
          ref={clinicRef}
          className="mb-20 flex w-full flex-col lg:flex-row"
        >
          <div className="clinic-left-div-gsap flex items-center justify-center align-middle opacity-0 lg:w-1/2">
            {/* <div className="h-[500px] pb-10 md:h-[650px] lg:h-[600px]"> */}
            <div className="h-[50vh] w-full pb-10 md:h-[65vh] md:w-10/12 lg:h-[60vh]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22582.143987612282!2d-122.1565248820646!3d37.42647615735572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbae5f33774b5%3A0x6dd7ef2d054587e3!2sTerun%20Pizza!5e0!3m2!1sen!2sin!4v1735704949104!5m2!1sen!2sin"
                width="100%"
                height="100%"
                className="rounded-3xl border-0"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="clinic-right-div-gsap relative mx-auto max-w-[90vw] text-lg tracking-wide opacity-0 md:ml-16 md:text-2xl lg:ml-0 lg:w-1/2 lg:max-w-[100vw] lg:self-center">
            {/* LOCATION */}
            <div className="mb-5 flex items-start md:mb-9 md:tracking-wide">
              <Image
                src="/images/location-black.svg"
                width={40}
                height={40}
                alt=""
                className="inline-block w-8 md:w-[40px]"
              />
              <Link
                href="https://maps.app.goo.gl/mtL9tD6hisQqbAGq6"
                target="_blank"
              >
                <div className="ml-4 hover:text-red-400 md:space-y-1">
                  {/* <p> */}
                  <span className="font-bold">Dr. Agarwal&apos;s Skincare</span>
                  , <br /> 36 Old No 9, 5th Avenue, <br /> 11th Main Rd, 4th T
                  Block East, <br /> Janakpuri, Delhi <br />
                  {/* </p> */}
                </div>
              </Link>
            </div>

            {/* CALL */}
            <div className="mb-5 flex items-start md:mb-9">
              <Image
                src="/images/call-black.svg"
                width={35}
                height={35}
                alt=""
                className="inline-block w-8 md:w-[35px]"
              />
              <div className="ml-4 space-y-2">
                <Link
                  href="tel:+914069044164"
                  target="_blank"
                  className="hover:text-red-400"
                >
                  <p>+91 98138-44164</p>
                </Link>
                {/* <Link
                href="tel:+919848038238"
                target="_blank"
                className="hover:text-red-400"
              >
                <p>+91 98480 38238</p>
              </Link> */}
              </div>
            </div>

            {/* WHATSAPP */}
            <div className="mb-5 flex items-start md:mb-9">
              <Image
                src="/images/whatsapp-black.svg"
                width={35}
                height={35}
                alt=""
                className="inline-block w-8 md:w-[35px]"
              />
              <div className="ml-4 space-y-2">
                <Link
                  href="https://wa.me/919603328484"
                  target="_blank"
                  className="hover:text-red-400"
                >
                  <p>+91 96033-12391</p>
                </Link>
              </div>
            </div>

            {/* EMAIL */}
            <div className="mb-5 flex items-start md:mb-9">
              <Image
                src="/images/email-black.svg"
                width={35}
                height={35}
                alt=""
                className="inline-block w-8 md:w-[35px]"
              />
              <div className="ml-4 space-y-2 hover:text-red-400">
                <Link href="mailto:sanjay@sassociate.in" target="_blank">
                  drvarunagarwal@gmail.com
                </Link>
              </div>
            </div>

            {/* CLINIC HOURS */}
            <div className="flex items-start">
              <Image
                src="/images/time.svg"
                width={35}
                height={35}
                alt=""
                className="inline-block w-8 md:w-[35px]"
              />
              <div className="ml-4">
                Clinic Hours
                <div className="opacity-75">
                  <p>Monday to Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* WEBSITE */}
            {/* <div className="relative mb-5 md:mb-9 text-2xl tracking-wide flex items-start">
            <Image
              src="/images/globe-black.svg"
              width={32}
              height={32}
              alt=""
              className="inline-block  w-7 md:w-[32px]"
            />
            <div className="ml-4 space-y-2 hover:text-red-400">
              <Link href="https://youtube.com/" target="_blank">
                drtravisscott.com
              </Link>
            </div>
          </div> */}

            {/* GSTIN */}
            {/* <div className="relative mb-5 md:mb-9 text-2xl tracking-wide flex items-start">
            <Image
              src="/images/document-black.svg"
              width={35}
              height={35}
              alt=""
              className="inline-block  w-7 md:w-[35px]"
            />
            <div className="ml-4 space-y-2">
              GSTIN: 36ADAPA54572A2Z8
            </div>
          </div> */}

            <div className="cta-btn-gsap mt-6 opacity-0">
              {/* OLD DAISYUI BUTTON */}
              {/* <Link
                className="btn ml-12 mt-10 bg-red-300"
                // href="tel:555-779-4407"
                href="https://maps.google.com/maps/dir//Terun+Pizza+448+California+Ave+Palo+Alto,+CA+94306+United+States/@37.4259205,-122.1454743,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x808fbae5f33774b5:0x6dd7ef2d054587e3"
                target="_blank"
                rel="noopener"
              >
                Get Directions
              </Link> */}

              <Link
                className="ml-12"
                href="https://maps.google.com/maps/dir//Terun+Pizza+448+California+Ave+Palo+Alto,+CA+94306+United+States/@37.4259205,-122.1454743,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x808fbae5f33774b5:0x6dd7ef2d054587e3"
                target="_blank"
                rel="noopener"
              >
                {/* OLDER BUTTON W GRADIENT */}
                {/* <button className="relative p-[3px]">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-300 to-red-400" />
                  <div className="group relative rounded-md bg-transparent px-8 py-2 text-lg text-white transition duration-200 hover:bg-white hover:text-black active:bg-red-400 active:text-white">
                    Get Directions
                  </div>
                </button> */}

                <button className="rounded-xl bg-red-300 p-3 text-base transition-all duration-300 hover:scale-110 hover:bg-red-400 hover:text-white hover:drop-shadow-xl active:bg-red-600 active:text-white md:p-3 md:px-6 md:text-xl">
                  <span className="flex items-center gap-x-2">
                    Get Directions
                    <FaArrowRight className="md:text-2xl" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* HOSPITALS */}
        <section
          ref={hospitalRef}
          className="mx-auto flex w-full max-w-[95%] flex-col md:mt-32 lg:flex-row"
        >
          {/* HOSPITAL 1 */}
          <div className="mb-20 flex flex-col lg:mb-0 lg:w-1/2 lg:flex-row">
            <div className="left-div flex items-center justify-center align-middle lg:w-1/2">
              <div className="h-[50vh] w-full pb-10 md:h-[65vh] md:w-10/12 lg:h-[50vh]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22582.143987612282!2d-122.1565248820646!3d37.42647615735572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbae5f33774b5%3A0x6dd7ef2d054587e3!2sTerun%20Pizza!5e0!3m2!1sen!2sin!4v1735704949104!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="rounded-3xl border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="right-div mx-auto max-w-[90vw] md:ml-16 lg:ml-0 lg:w-1/2 lg:max-w-[100vw]">
              {/* LOCATION */}
              <div className="relative mb-5 flex items-start text-2xl md:mb-9 md:tracking-wide">
                <Image
                  src="/images/location-black.svg"
                  width={40}
                  height={40}
                  alt=""
                  className="inline-block w-8 md:w-[35px]"
                />
                <Link
                  href="https://maps.app.goo.gl/mtL9tD6hisQqbAGq6"
                  target="_blank"
                >
                  <div className="ml-4 text-lg hover:text-red-400 md:space-y-1 md:text-xl">
                    <span className="font-bold">Dermax Hospital</span>
                    , <br /> 36 Old No 9, 5th Avenue, <br /> 11th Main Rd, 4th T
                    Block East, <br /> Janakpuri, Delhi <br />
                  </div>
                </Link>
              </div>

              {/* CALL */}
              <div className="relative mb-5 flex items-start text-2xl tracking-wide md:mb-9">
                <Image
                  src="/images/call-black.svg"
                  width={35}
                  height={35}
                  alt=""
                  className="inline-block w-8 md:w-[32px]"
                />
                <div className="ml-4 space-y-2 text-lg md:text-xl">
                  <Link
                    href="tel:+914069044164"
                    target="_blank"
                    className="hover:text-red-400"
                  >
                    <p>+91 98138-44164</p>
                  </Link>
                </div>
              </div>

              {/* CLINIC HOURS */}
              <div className="relative flex items-start text-2xl tracking-wide">
                <Image
                  src="/images/time.svg"
                  width={35}
                  height={35}
                  alt=""
                  className="inline-block w-8 md:w-[32px]"
                />
                <div className="ml-4 text-lg md:text-xl">
                  Available Hours
                  <div className="text-base text-slate-700 md:text-lg">
                    <p>Monday to Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <Link
                  className="ml-12"
                  href="https://maps.google.com/maps/dir//Terun+Pizza+448+California+Ave+Palo+Alto,+CA+94306+United+States/@37.4259205,-122.1454743,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x808fbae5f33774b5:0x6dd7ef2d054587e3"
                  target="_blank"
                  rel="noopener"
                >
                  <button className="rounded-xl bg-red-300 p-3 transition-all duration-300 hover:scale-110 hover:bg-red-400 hover:text-white hover:drop-shadow-xl active:bg-red-600 active:text-white md:mt-2 md:p-3 md:px-5 md:text-lg">
                    <span className="flex items-center gap-x-2">
                      Get Directions
                      <FaArrowRight className="md:text-xl" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* HOSPITAL 2 */}
          <div className="mb-20 flex flex-col lg:mb-0 lg:w-1/2 lg:flex-row">
            <div className="left-div flex items-center justify-center align-middle lg:w-1/2">
              <div className="h-[50vh] w-full pb-10 md:h-[65vh] md:w-10/12 lg:h-[50vh]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22582.143987612282!2d-122.1565248820646!3d37.42647615735572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbae5f33774b5%3A0x6dd7ef2d054587e3!2sTerun%20Pizza!5e0!3m2!1sen!2sin!4v1735704949104!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="rounded-3xl border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="right-div mx-auto max-w-[90vw] md:ml-16 lg:ml-0 lg:w-1/2 lg:max-w-[100vw]">
              {/* LOCATION */}
              <div className="relative mb-5 flex items-start text-2xl md:mb-9 md:tracking-wide">
                <Image
                  src="/images/location-black.svg"
                  width={40}
                  height={40}
                  alt=""
                  className="inline-block w-8 md:w-[35px]"
                />
                <Link
                  href="https://maps.app.goo.gl/mtL9tD6hisQqbAGq6"
                  target="_blank"
                >
                  <div className="ml-4 text-lg hover:text-red-400 md:space-y-1 md:text-xl">
                    <span className="font-bold">Abraham Hospital</span>
                    , <br /> 36 Old No 9, 5th Avenue, <br /> 11th Main Rd, 4th T
                    Block East, <br /> Janakpuri, Delhi <br />
                  </div>
                </Link>
              </div>

              {/* CALL */}
              <div className="relative mb-5 flex items-start text-2xl tracking-wide md:mb-9">
                <Image
                  src="/images/call-black.svg"
                  width={35}
                  height={35}
                  alt=""
                  className="inline-block w-8 md:w-[32px]"
                />
                <div className="ml-4 space-y-2 text-lg md:text-xl">
                  <Link
                    href="tel:+914069044164"
                    target="_blank"
                    className="hover:text-red-400"
                  >
                    <p>+91 98138-44164</p>
                  </Link>
                </div>
              </div>

              {/* CLINIC HOURS */}
              <div className="relative flex items-start text-2xl tracking-wide">
                <Image
                  src="/images/time.svg"
                  width={35}
                  height={35}
                  alt=""
                  className="inline-block w-8 md:w-[32px]"
                />
                <div className="ml-4 text-lg md:text-xl">
                  Available Hours
                  <div className="text-base text-slate-700 md:text-lg">
                    <p>Monday to Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <Link
                  className="ml-12"
                  href="https://maps.google.com/maps/dir//Terun+Pizza+448+California+Ave+Palo+Alto,+CA+94306+United+States/@37.4259205,-122.1454743,15z/data=!4m5!4m4!1m0!1m2!1m1!1s0x808fbae5f33774b5:0x6dd7ef2d054587e3"
                  target="_blank"
                  rel="noopener"
                >
                  <button className="rounded-xl bg-red-300 p-3 transition-all duration-300 hover:scale-110 hover:bg-red-400 hover:text-white hover:drop-shadow-xl active:bg-red-600 active:text-white md:mt-2 md:p-3 md:px-5 md:text-lg">
                    <span className="flex items-center gap-x-2">
                      Get Directions
                      <FaArrowRight className="md:text-xl" />
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mx-auto mb-16 max-w-[90%] rounded-3xl bg-gray-300 p-4 lg:my-16 lg:mb-20 lg:max-w-[70%] lg:p-10">
          <h1 className="subheading mb-4 py-1 text-center lg:pb-3">
            Frequently Asked Questions
          </h1>
          <DynamicFAQs />
        </section>

        <section ref={wannaKnowMoreRef} className="mb-12 md:mb-24">
          <DynamicWannaKnowMore />
        </section>
      </main>
    </>
  );
};

export default Visit;
