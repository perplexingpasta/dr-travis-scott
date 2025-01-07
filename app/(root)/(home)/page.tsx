import React from "react";
import About from "@/components/About";
import Link from "next/link";
import Image from "next/image";
import GoogleReviewsCarousel from "@/components/ui/GoogleReviewsCarousel";

const page = () => {
  return (
    <>
      <main className="relative mx-auto mt-24 flex flex-col items-center justify-center overflow-clip bg-white">
        {/* HERO */}
        <section className="relative">
          <Image
            src="/images/hero-skin1.jpg"
            width={1280}
            height={1920}
            alt=""
            className="brightness-75 filter"
          />
          <div className="hero-overlay absolute inset-0 flex flex-col items-start justify-end p-5 pb-10 text-white">
            <p className="mb-1 text-2xl font-semibold">Glowing Skin ✨</p>
            <p className="text-lg">
              Visit Dr. Travis Scott today to start your healthy skin journey!
            </p>
          </div>
        </section>

        {/* STATS */}
        <section>
          <div className="mx-auto w-full bg-red-300">d</div>
        </section>

        {/* ABOUT THE DOCTOR */}
        <About />

        {/* WHY CHOOSE US */}
        <section className="mb-5 ml-4">
          <h1 className="text-2xl font-semibold md:text-3xl">Why Choose Us</h1>
          <div className="mt-6 flex max-w-[85%] flex-row font-lexendDeca md:ml-5 md:mt-8">
            <Image
              src="/images/whyus1.png"
              width={50}
              height={50}
              alt=""
              className="h-12"
            />
            <div className="ml-4 text-sm md:text-base">
              <p className="font-semibold">
                Best In Dermatology and Cosmetology
              </p>
              <p className="opacity-75">
                Leading dermatologist in Rewari with 10+ years of experience{" "}
              </p>
            </div>
          </div>
          <div className="mt-6 flex max-w-[85%] flex-row font-lexendDeca md:ml-5 md:mt-8">
            <Image
              src="/images/whyus2.png"
              width={50}
              height={50}
              alt=""
              className="h-12"
            />
            <div className="ml-4 text-sm md:text-base">
              <p className="font-semibold">Effective Treatments</p>
              <p className="opacity-75">
                Evidence based and proven treatments & procedures
              </p>
            </div>
          </div>
          <div className="mt-6 flex max-w-[85%] flex-row font-lexendDeca md:ml-5 md:mt-8">
            <Image
              src="/images/whyus3.png"
              width={50}
              height={50}
              alt=""
              className="h-12"
            />
            <div className="ml-4 text-sm md:text-base">
              <p className="font-semibold">Trained Staff</p>
              <p className="opacity-75">
                Fully trained & friendly staff to attend to all your needs
              </p>
            </div>
          </div>
        </section>

        {/* GOOGLE TESTIMONIALS */}
        <section>
          <GoogleReviewsCarousel />
        </section>

        {/* CONTACT US */}
        <section>
          <h1 className="mb-4 text-2xl font-semibold md:text-3xl">
            Contact Us
          </h1>
          <div className="mb-20 flex w-full flex-col font-lexendDeca lg:flex-row">
            <div className="flex items-center justify-center align-middle lg:w-1/2">
              <div className="h-[50vh] w-full pb-10 md:h-[65vh] md:w-10/12 lg:h-[60vh]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22582.143987612282!2d-122.1565248820646!3d37.42647615735572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbae5f33774b5%3A0x6dd7ef2d054587e3!2sTerun%20Pizza!5e0!3m2!1sen!2sin!4v1735704949104!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  className="border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="mx-auto max-w-[90vw] md:ml-16 lg:ml-0 lg:w-1/2 lg:max-w-[100vw] lg:self-center">
              {/* LOCATION */}
              <div className="relative mb-5 flex items-start text-2xl md:mb-9 md:tracking-wide">
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
                  <div className="ml-4 text-lg hover:text-red-400 md:space-y-1 md:text-2xl">
                    {/* <p> */}
                    Dr. Agarwal&apos;s Skincare, <br /> 36 Old No 9, 5th Avenue,{" "}
                    <br /> 11th Main Rd, 4th T Block East, <br /> Chicago,
                    Illinois <br />
                    {/* </p> */}
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
                </div>
              </div>

              {/* CLINIC HOURS */}
              <div className="relative flex items-start text-2xl tracking-wide">
                <Image
                  src="/images/time.svg"
                  width={35}
                  height={35}
                  alt=""
                  className="inline-block w-8 md:w-[35px]"
                />
                <div className="ml-4 text-lg md:text-xl">
                  <p>Monday to Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday: 10:00 AM - 2:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              <div>
                {/* OLD DAISYUI BUTTON */}
                {/* <Link
                  className="btn mx-auto mt-5 flex max-w-[30%] justify-center bg-red-300"
                  href="tel:555-779-4407"
                  target="_blank"
                  rel="noopener"
                >
                  Call Now
                </Link> */}

                {/* BUTTON 1 - LIT UP BORDERS*/}
                <Link
                  className="mx-auto mt-5 flex justify-center"
                  href="tel:555-779-4407"
                  target="_blank"
                  rel="noopener"
                >
                  <button className="relative p-[3px]">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-300 to-red-400" />
                    <div className="group relative rounded-md bg-transparent px-8 py-2 text-white transition duration-200 hover:bg-white hover:text-black active:bg-red-400 active:text-white">
                      Call Now
                    </div>
                  </button>
                </Link>

                {/* BUTTON 2 - INVERT */}
                {/* <Link
                  className="mx-auto mt-5 flex justify-center"
                  href="tel:555-779-4407"
                  target="_blank"
                  rel="noopener"
                >
                  <button className="rounded-md border-2 border-transparent bg-red-300 px-8 py-2 font-bold text-black transition duration-200 hover:bg-gray-500 hover:text-white active:bg-red-500">
                    Call Now
                  </button>
                </Link> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
