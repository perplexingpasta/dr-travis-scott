import React from "react";
import { HomeIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { FaArrowRight, FaHome } from "react-icons/fa";
// import Navbar from "@/components/Navbar";

const PageNotFound = () => {
  return (
    <>
      <section id="error" className="pt-40">
        <div className="content relative">
          <h1 className="header font-lexendDeca text-[9rem] font-bold md:text-[13rem] lg:text-[16rem] 2xl:text-[12vw]">
            404
          </h1>
          <h1 id="pagenotfound" className="subheading pt-4">
            Page not found
          </h1>
          <br />
          <p className="mx-auto max-w-[85%] md:max-w-full md:text-lg md:leading-8">
            Oops! It seems like the page you&apos;re trying to access
            doesn&apos;t exist.
          </p>
          <p className="mx-auto mt-7 max-w-[85%] md:mt-0 md:max-w-full md:text-lg">
            If you believe there&apos;s an issue, feel free to report it and
            we&apos;ll look into it.
          </p>
          <div className="mb-20 mt-10 flex flex-col items-center justify-evenly space-y-4 md:mt-10 md:flex-row md:space-y-0">
            {/* <div className="btns btn mt-6 rounded-full bg-slate-200 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-300 hover:text-white md:my-6">
              <Link href="/">return home</Link>
              <HomeIcon className="-ml-8 mt-4 mr-7 lg:mt-0" />
            </div> */}

            <Link href="/">
              <button className="relative p-[3px] transition-all duration-300 hover:scale-110">
                <div className="absolute inset-0 rounded-full bg-transparent" />
                <div className="group relative flex items-center gap-x-2 rounded-full bg-slate-200 px-8 py-2 text-lg text-black transition-all duration-300 hover:bg-red-300 hover:text-white active:bg-red-500 active:text-white">
                  Return Home
                  <FaHome />
                </div>
              </button>
            </Link>

            {/* <div className="btns btn mt-6 rounded-full bg-slate-200 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 hover:text-white md:my-6">
              <Link href="/visit">report issue</Link>
              <ArrowRightIcon className="-ml-8 mr-7 mt-4 lg:mt-0" />
            </div> */}

            <Link href="/visit">
              <button className="relative p-[3px] transition-all duration-300 hover:scale-110">
                <div className="absolute inset-0 rounded-full bg-transparent" />
                <div className="group relative flex items-center gap-x-2 rounded-full bg-slate-200 px-8 py-2 text-lg text-black transition-all duration-300 hover:bg-blue-300 hover:text-white active:bg-blue-500 active:text-white">
                  Report Issue
                  <FaArrowRight />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
