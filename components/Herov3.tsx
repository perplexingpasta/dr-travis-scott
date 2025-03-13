import React from "react";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";

const Herov3 = () => {
  const words = ["Love ✨", "Deserve ✨", "Want ✨"];
  return (
    <div>
      <div className="absolute left-0 top-0 hidden overflow-clip lg:block lg:h-[40rem] lg:w-full">
        <Image src="/herov3/herov3-2k.png" width={2560} height={1440} alt="" />
      </div>
      <div className="absolute left-0 top-0 overflow-clip lg:hidden lg:h-[40rem] lg:w-full">
        <Image src="/herov3/herov3-md.png" width={1920} height={1080} alt="" />
      </div>
      <div className="mt-20 flex items-center justify-center px-4 md:ml-8 md:mt-16 lg:mx-auto lg:ml-60 lg:mt-0 lg:h-[40rem] lg:w-[75%] lg:flex-row lg:space-x-32">
        {/* <div className="flex justify-end lg:w-1/2 lg:flex-col"> */}
        <div className="z-10 mx-auto text-3xl font-semibold md:text-5xl lg:text-6xl lg:leading-tight">
          <div className="ml-2 hidden font-normal text-black text-opacity-50 md:-mb-8 md:block md:text-sm lg:-mb-16 lg:text-xl">
            Expert Care by Delhi&apos;s #1 Dermatologist
          </div>
          <br />
          <span className="text-neutral-50">
            Get The Skin <br className="hidden md:block lg:hidden" /> You
          </span>
          <br className="hidden lg:block" />
          <FlipWords words={words} className="font-extrabold" />
          <br />
          <div className="ml-2 hidden font-normal text-black text-opacity-75 md:mt-4 md:block md:max-w-[40%] md:text-base lg:mt-8 lg:text-xl">
            Welcome to Le Dermique®, led by board-certified dermatologist Dr.
            Varun Agarwal. With over 22 years of experience, Dr. Agarwal is
            committed to providing exceptional care for your skin health.{" "}
            <a
              className="relative flex items-center justify-start md:mt-4 lg:-mb-4 lg:mt-8 lg:w-full"
              href="tel:01274222811"
            >
              <button className="rounded-lg bg-red-300 p-3 text-base transition-all duration-300 hover:scale-110 hover:bg-red-400 hover:text-white hover:drop-shadow-xl active:bg-red-600 active:text-white md:p-3 lg:p-4 lg:px-4 lg:text-lg">
                <span className="flex items-center gap-x-2">
                  Book An Appointment
                </span>
              </button>
            </a>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Herov3;
