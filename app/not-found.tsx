import React from "react";
import { HomeIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
// import Navbar from "@/components/Navbar";

const PageNotFound = () => {
  return (
    <>
      <section id="error" className="pt-40">
        <div className="content relative">
          <h1 className="header text-[9rem] font-bold md:text-[13rem] lg:text-[16rem] 2xl:text-[12vw]">
            404
          </h1>
          <h1
            id="pagenotfound"
            className="pt-4 text-xl md:text-[2rem] md:font-medium"
          >
            Page not found
          </h1>
          <br />
          <p className="mx-auto max-w-[70vw] md:text-lg md:leading-8">
            Oops! It seems like the page you&apos;re trying to access
            doesn&apos;t exist.
          </p>
          <p className="mx-auto max-w-[70vw] md:text-lg">
            If you believe there&apos;s an issue, feel free to report it and
            we&apos;ll look into it.
          </p>
          <div className="mb-20 mt-10 flex flex-col items-center justify-evenly md:mt-10 md:flex-row">
            <div className="btns btn mt-6 rounded-full bg-slate-200 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-300 hover:text-white md:my-6">
              <Link href="/">return home</Link>
              <HomeIcon className="-ml-8 mt-4 mr-7 lg:mt-0" />
            </div>
            <div className="btns btn mt-6 rounded-full bg-slate-200 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-300 hover:text-white md:my-6">
              <Link href="/visit">report issue</Link>
              <ArrowRightIcon className="-ml-8 mt-4 mr-7 lg:mt-0" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
