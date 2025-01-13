import { Metadata } from "next";
import React from "react";
import dynamic from "next/dynamic";
import HomeEmblaCarousel from "../../../components/ui/HomeEmbla";

const DynamicAbout = dynamic(() => import("@/components/About"));
const DynamicWhy = dynamic(() => import("@/components/ui/WhyChooseUsCards"));
const DynamicGoogleReviews = dynamic(
  () => import("@/components/ui/GoogleReviewsCarousel"),
);
const DynamicContact = dynamic(
  () => import("@/components/HomepageContact"),
  {
    ssr: false,
  },
);

export const metadata: Metadata = {
  title: "Home - Dr. Travis Scott",
  description: "MD Dermatologist based in Chicago, IL",
};

const page = () => {
  return (
    <>
      <main className="relative mx-auto mt-24 flex flex-col items-center justify-center overflow-clip bg-white">
        {/* HERO */}
        <section className="relative">
          {/* <Image
            src="/images/hero-skin1.jpg"
            width={1280}
            height={1920}
            alt=""
            className="brightness-75 filter"
          /> */}
          <HomeEmblaCarousel />
          <div className="hero-overlay absolute inset-0 flex flex-col items-start justify-end p-3 pb-6 text-white">
            <p className="mb-1 text-lg font-semibold md:text-2xl">
              Your Beautiful Self
            </p>
            <p className="md:text-lg">
              Visit Dr. Travis Scott today to start your healthy skin journey!
            </p>
          </div>
        </section>

        {/* STATS */}
        <section>
          <div className="mx-auto w-full bg-red-300">d</div>
        </section>

        {/* ABOUT THE DOCTOR */}
        <section>
          <DynamicAbout />
        </section>

        {/* WHY CHOOSE US */}
        <section className="mb-12 ml-4">
          <h1 className="text-2xl font-semibold md:text-3xl">Why Choose Us</h1>
          <DynamicWhy />
        </section>

        {/* GOOGLE TESTIMONIALS */}
        <section>
          <DynamicGoogleReviews />
        </section>

        {/* CONTACT US */}
        <section>
          <DynamicContact />
        </section>
      </main>
    </>
  );
};

export default page;
