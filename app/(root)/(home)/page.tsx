// import Footer from "@/components/Footer";
import Header from "@/components/Header";
// import Navbar from "@/components/Navbar";
// import Whatsapp from "@/components/Whatsapp";
import React from "react";
import Hero from "../../../components/Hero";
import Contact from "@/components/Contact";
import About from "@/components/About";
import { BeforeAfter } from "@/components/BeforeAfter";

const page = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-white">
        <nav className="w-full max-w-7xl px-5 sm:px-10">{/* <Navbar /> */}</nav>
        {/* <Hero /> */}
        <About />
        {/* <BeforeAfter /> */}
        {/* <Contact /> */}
        {/* <Whatsapp /> */}
      </div>
     
    </>
  );
};

export default page;
