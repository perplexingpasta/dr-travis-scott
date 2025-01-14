import { useState } from "react";
import Image from "next/image";
import { NavbarMobile } from "./NavbarMobile";
import Link from "next/link";
import { BiSolidPhoneCall } from "react-icons/bi";

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
        <Link
          href="tel:01274222811"
          className="mr-5 flex items-center gap-x-1 md:mr-20"
        >
          <BiSolidPhoneCall />
          +91 98138-44164
        </Link>
      </div>

      {/* Container */}
      <div className="relative z-10 mx-auto hidden items-center justify-between bg-white px-4 py-5 md:px-24 lg:flex">
        <div className="font-lexendDeca">
          <h1 className="text-lg font-bold md:text-2xl">Dr. Varun Agarwal</h1>
          <p className="text-sm md:text-base">MBBS, DDV</p>
        </div>

        {/* Main Navbar Menu */}
        <nav
          id="navbar-menu"
          className={`${menuOpen ? "block" : "hidden"} md:block`}
        >
          <ul className="flex items-center space-x-6 text-lg lg:-mt-4">
            <li>
              <Link
                href="/"
                className="duration-500 group relative inline-block transition-all hover:text-xl hover:font-semibold"
              >
                Home
                <span className="duration-500 absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 transform bg-red-400 opacity-0 transition-all group-hover:w-full group-hover:opacity-100"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/treatments"
                className="duration-500 group relative inline-block transition-all hover:text-xl hover:font-semibold"
              >
                Treatments
                <span className="duration-500 absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 transform bg-red-400 opacity-0 transition-all group-hover:w-full group-hover:opacity-100"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/why-us"
                className="duration-500 group relative inline-block transition-all hover:text-xl hover:font-semibold"
              >
                Why Us
                <span className="duration-500 absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 transform bg-red-400 opacity-0 transition-all group-hover:w-full group-hover:opacity-100"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="duration-500 group relative inline-block transition-all hover:text-xl hover:font-semibold"
              >
                About
                <span className="duration-500 absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 transform bg-red-400 opacity-0 transition-all group-hover:w-full group-hover:opacity-100"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/visit"
                className="duration-500 group relative inline-block transition-all hover:text-xl hover:font-semibold"
              >
                Visit
                <span className="duration-500 absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 transform bg-red-400 opacity-0 transition-all group-hover:w-full group-hover:opacity-100"></span>
              </Link>
            </li>
            <li>
              <Link
                href="tel:01274222811"
                className="duration-500 flex items-center gap-x-2 rounded-xl bg-red-300 p-2 px-4 transition-all hover:bg-red-400 hover:text-white hover:drop-shadow-xl active:bg-red-500 active:text-white"
              >
                Call Now
                <BiSolidPhoneCall />
              </Link>
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
