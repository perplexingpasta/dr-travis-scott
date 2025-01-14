import Image from "next/image";
import React from "react";

const WhyChooseUsCards = () => {
  return (
    <>
      <div className="mt-6 flex max-w-[85%] flex-row font-lexendDeca md:ml-5 md:mt-8">
        <Image
          src="/images/whyus1.png"
          width={50}
          height={50}
          alt=""
          className="h-12"
        />
        <div className="ml-4 text-sm md:text-base">
          <p className="font-semibold">Best In Dermatology and Cosmetology</p>
          <p className="opacity-80">
            Leading dermatologist in Delhi with 20+ years of experience{" "}
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
          <p className="opacity-80">
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
          <p className="opacity-80">
            Fully trained & friendly staff to attend to all your needs
          </p>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsCards;
