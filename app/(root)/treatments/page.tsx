import React from "react";
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

const page = () => {
  return (
    <>
      <header id="treatments" className="mt-32 md:mt-44">
        <h1 className="heading relative block">Our Treatments</h1>
        <div className="relative mx-auto mb-7 max-w-[70%] items-center justify-center py-2 text-center font-light text-black-100 md:mb-16 md:max-w-full md:py-4 md:text-lg" />
      </header>
      <main className="mx-auto mb-12 max-w-[90%] md:-mt-10">
        <section className="container mx-auto mb-10 rounded-3xl bg-gray-200 px-4 pt-10 md:px-8 md:pt-7 lg:px-12">
          <h1 className="subheading mb-24 text-center md:py-3 lg:mb-28 lg:mt-0 lg:text-left">
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
              />
            ))}
          </div>
        </section>

        <section className="container mx-auto mb-10 rounded-3xl bg-gray-200 px-4 pt-10 md:px-8 md:pt-7 lg:px-12">
          <h1 className="subheading mb-24 text-center md:py-3 lg:mb-28 lg:mt-0 lg:text-left">
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
              />
            ))}
          </div>
        </section>

        <section className="container mx-auto mb-10 rounded-3xl bg-gray-200 px-4 pt-10 md:px-8 md:pt-7 lg:px-12">
          <h1 className="subheading mb-24 text-center md:py-3 lg:mb-28 lg:mt-0 lg:text-left">
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
              />
            ))}
          </div>
        </section>

        <section className="container mx-auto mb-10 rounded-3xl bg-gray-200 px-4 pt-10 md:px-8 md:pt-7 lg:px-12">
          <h1 className="subheading mb-24 text-center md:py-3 lg:mb-28 lg:mt-0 lg:text-left">
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
              />
            ))}
          </div>
        </section>

        <section className="container mx-auto mb-10 rounded-3xl bg-gray-200 px-4 pt-10 md:px-8 md:pt-7 lg:px-12">
          <h1 className="subheading mb-24 text-center md:py-3 lg:mb-28 lg:mt-0 lg:text-left">
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
              />
            ))}
          </div>
        </section>

        <section>
          <DynamicWannaKnowMore />
        </section>

        {/* OLDER NON-3D SERVICES */}
        {/* <main className="mb-12">
        <section className="container mx-auto px-4 py-8">
          <h1 className="mb-5 text-xl font-semibold md:text-3xl">
            Aesthetic & Anti-Aging Treatments
          </h1>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-10">
            {servicesAAT.map((service, index) => (
              <ServiceCard
                key={index}
                imgSrc={service.imgSrc}
                imgAlt={service.imgAlt}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </section>

        <section className="container mx-auto mt-5 px-4 py-8 md:mt-10">
          <h1 className="mb-5 text-xl font-semibold md:text-3xl">
            Hair Restoration & Treatment
          </h1>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-10">
            {servicesHRT.map((service, index) => (
              <ServiceCard
                key={index}
                imgSrc={service.imgSrc}
                imgAlt={service.imgAlt}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </section>

        <section className="container mx-auto mt-5 px-4 py-8 md:mt-10">
          <h1 className="mb-5 text-xl font-semibold md:text-3xl">
            Skin Lesion Removal
          </h1>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-10">
            {servicesSLR.map((service, index) => (
              <ServiceCard
                key={index}
                imgSrc={service.imgSrc}
                imgAlt={service.imgAlt}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </section>

        <section className="container mx-auto mt-5 px-4 py-8 md:mt-10">
          <h1 className="mb-5 text-xl font-semibold md:text-3xl">
            Pigmentation & Scar Treatment
          </h1>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-10">
            {servicesPST.map((service, index) => (
              <ServiceCard
                key={index}
                imgSrc={service.imgSrc}
                imgAlt={service.imgAlt}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </section>

        <section className="container mx-auto mt-5 px-4 py-8 md:mt-10">
          <h1 className="mb-5 text-xl font-semibold md:text-3xl">
            Skin Cancer Treatment
          </h1>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-10">
            {servicesSCT.map((service, index) => (
              <ServiceCard
                key={index}
                imgSrc={service.imgSrc}
                imgAlt={service.imgAlt}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </section>
       </main> */}
      </main>
    </>
  );
};

export default page;
