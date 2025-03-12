import { useState } from "react";
import Image from "next/image";
import { NavbarMobile } from "./NavbarMobile";
import Link from "next/link";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const NavbarPS = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="fixed top-0 z-50 w-full tracking-wide">
      {/* Header */}
      <div className="flex justify-end bg-red-300">
        {/* <Image
          src="/images/call-black.svg"
          className="mr-1 md:mr-2"
          width={20}
          height={20}
          alt=""
        /> */}
        {/* <p className="mr-5 md:mr-20">+91 98138-44164</p> */}
        <p className="mr-4 hidden lg:block">Have any questions?</p>
        <a
          href="tel:01274222811"
          className="mr-5 flex items-center gap-x-1 md:mr-20 lg:mr-8"
        >
          <BiSolidPhoneCall className="lg:text-lg" />
          +91 98138-44164
        </a>
        <div className="mr-12 hidden items-center lg:flex">
          <FaLocationDot className="mr-1" />
          36, 11th Main Road, Janakpuri, Delhi
        </div>
      </div>

      {/* Container */}
      <div className="relative z-10 mx-auto hidden items-center justify-between bg-white px-4 py-3 shadow-xl md:px-24 lg:flex lg:px-72">
        <Link href="/" className="flex flex-row items-center">
          <Image
            src="/images/dermat-logo.png"
            width={100}
            height={100}
            alt=""
            className="w-20"
          />
          <div>
            <h1 className="text-2xl font-bold">Dr. Varun Agarwal</h1>
            <p className="text-xl opacity-75">MBBS, MD</p>
          </div>
        </Link>

        {/* Main Navbar Menu */}
        <nav
          id="navbar-menu"
          className={`${menuOpen ? "block" : "hidden"} md:block`}
        >
          <ul className="flex items-center space-x-6 text-lg lg:-mt-4">
            <li>
              <Link
                href="/"
                className="group relative inline-block transition-all duration-500 hover:text-xl hover:font-semibold"
              >
                Home
                <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 transform bg-red-400 opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/treatments"
                className="group relative inline-block transition-all duration-500 hover:text-xl hover:font-semibold"
              >
                Treatments
                <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 transform bg-red-400 opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/why-us"
                className="group relative inline-block transition-all duration-500 hover:text-xl hover:font-semibold"
              >
                Why Us
                <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 transform bg-red-400 opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="group relative inline-block transition-all duration-500 hover:text-xl hover:font-semibold"
              >
                About
                <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 transform bg-red-400 opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/visit"
                className="group relative inline-block transition-all duration-500 hover:text-xl hover:font-semibold"
              >
                Visit
                <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 transform bg-red-400 opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100"></span>
              </Link>
            </li>
            <li>
              <a
                href="tel:01274222811"
                className="flex items-center gap-x-2 rounded-xl bg-red-300 p-2 px-4 transition-all duration-500 hover:bg-red-400 hover:text-white hover:drop-shadow-xl active:bg-red-500 active:text-white"
              >
                Call Now
                <BiSolidPhoneCall />
              </a>
            </li>
          </ul>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <button
          className="hamburger-menu p-2 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="my-1 block h-0.5 w-6 bg-black"></span>
          <span className="my-1 block h-0.5 w-6 bg-black"></span>
          <span className="my-1 block h-0.5 w-6 bg-black"></span>
        </button>
      </div>
      <div className="lg:hidden">
        <NavbarMobile />
      </div>
    </div>
  );
};

export default NavbarPS;
