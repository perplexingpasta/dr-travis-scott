"use client";
import React from "react";
// import NavbarNextUI from "@/components/Navbar2";
import dynamic from "next/dynamic";

const DynamicWhatsapp = dynamic(() => import("@/components/Whatsapp"), {
  ssr: false,
});

const DynamicFooter = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>
        <div>
          {/* <div className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-white px-5 dark:bg-black-100 sm:px-10">
        <div className="w-full max-w-7xl"> */}
          {/* <NavbarNextUI /> */}
          {children}
          <DynamicWhatsapp />
          <footer className="bg-black-100 px-5 sm:px-10">
            <DynamicFooter />
          </footer>
        </div>
      </div>
    </>
  );
};

export default layout;
