/* eslint-disable @next/next/no-img-element */
import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Visit Us - Dr. Travis Scott",
  description: "MD Dermatologist based in Chicago, IL",
};

const page = () => {
  return (
    <>
      <header id="visit" className="mt-32 md:mt-44">
        <h1 className="heading relative block">Visit Us</h1>
        <h2 className="relative mx-auto mb-7 max-w-[70%] items-center justify-center py-2 text-center font-light text-black-100 md:mb-16 md:max-w-full md:py-4 md:text-lg">
          Feel free to reach out! lorem20
        </h2>
      </header>

      <main className="mb-20 flex w-full flex-col font-lexendDeca lg:flex-row">
        <section className="flex items-center justify-center align-middle lg:w-1/2">
          {/* <div className="h-[500px] pb-10 md:h-[650px] lg:h-[600px]"> */}
          <div className="h-[50vh] w-full pb-10 md:h-[65vh] md:w-10/12 lg:h-[60vh]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22582.143987612282!2d-122.1565248820646!3d37.42647615735572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbae5f33774b5%3A0x6dd7ef2d054587e3!2sTerun%20Pizza!5e0!3m2!1sen!2sin!4v1735704949104!5m2!1sen!2sin"
              width="100%"
              height="100%"
              className="border-0"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

        <section className="max-w-[90vw] self-center lg:w-1/2 lg:max-w-[100vw]">
          {/* LOCATION */}
          <section className="relative mb-5 flex items-start text-2xl md:mb-9 md:tracking-wide">
            <img
              src="/images/location-black.svg"
              width={40}
              alt=""
              className="inline-block w-8 md:w-[40px]"
            />
            <Link
              href="https://maps.app.goo.gl/mtL9tD6hisQqbAGq6"
              target="_blank"
            >
              <div className="ml-4 text-lg hover:text-red-400 md:space-y-1 md:text-2xl">
                {/* <p> */}
                36 Old No 9, 5th Avenue, <br /> 11th Main Rd, 4th T Block East,{" "}
                <br /> Lincoln, Chicago <br /> Illinois <br />
                {/* </p> */}
              </div>
            </Link>
          </section>

          {/* CALL */}
          <section className="relative mb-5 flex items-start text-2xl tracking-wide md:mb-9">
            <img
              src="/images/call-black.svg"
              width={35}
              alt=""
              className="inline-block w-8 md:w-[35px]"
            />
            <div className="ml-4 space-y-2 text-lg md:text-2xl">
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
          </section>

          {/* WHATSAPP */}
          <section className="relative mb-5 flex items-start text-2xl tracking-wide md:mb-9">
            <img
              src="/images/whatsapp-black.svg"
              width={35}
              alt=""
              className="inline-block w-8 md:w-[35px]"
            />
            <div className="ml-4 space-y-2 text-lg md:text-2xl">
              <Link
                href="https://wa.me/919603328484"
                target="_blank"
                className="hover:text-red-400"
              >
                <p>+91 96033-12391</p>
              </Link>
            </div>
          </section>

          {/* EMAIL */}
          <section className="relative mb-5 flex items-start text-2xl tracking-wide md:mb-9">
            <img
              src="/images/email-black.svg"
              width={35}
              alt=""
              className="inline-block w-8 md:w-[35px]"
            />
            <div className="ml-4 space-y-2 text-lg hover:text-red-400 md:text-2xl">
              <Link href="mailto:sanjay@sassociate.in" target="_blank">
                travis@cactusjack.com
              </Link>
            </div>
          </section>

          {/* CLINIC HOURS */}
          <section className="relative flex items-start text-2xl tracking-wide">
            <img
              src="/images/time.svg"
              width={35}
              alt=""
              className="inline-block w-8 md:w-[35px]"
            />
            <div className="ml-4 text-lg md:text-2xl">
              Clinic Hours
              <div className="text-base text-slate-700 md:text-xl">
                <p>Monday to Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 10:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </section>

          {/* WEBSITE */}
          {/* <section className="relative mb-5 md:mb-9 text-2xl tracking-wide flex items-start">
            <img
              src="/images/globe-black.svg"
              width={32}
              alt=""
              className="inline-block  w-7 md:w-[32px]"
            />
            <div className="ml-4 space-y-2 text-lg md:text-2xl hover:text-red-400">
              <Link href="https://youtube.com/" target="_blank">
                drtravisscott.com
              </Link>
            </div>
          </section> */}

          {/* GSTIN */}
          {/* <section className="relative mb-5 md:mb-9 text-2xl tracking-wide flex items-start">
            <img
              src="/images/document-black.svg"
              width={35}
              alt=""
              className="inline-block  w-7 md:w-[35px]"
            />
            <div className="ml-4 space-y-2 text-lg md:text-2xl">
              GSTIN: 36ADAPA54572A2Z8
            </div>
          </section> */}

          <div>
            <Link
              className="btn mt-10 bg-red-300"
              href="tel:555-779-4407"
              rel="noopener"
            >
              Call Us
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
