import { useState } from "react";
import Image from "next/image";
import { NavbarMobile } from "./NavbarMobile";
import Link from "next/link";

const NavbarPS = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="fixed top-0 z-50 w-full">
      {/* Header */}
      <div className="flex justify-end bg-red-300">
        <Image
          src="/images/call-black.svg"
          className="mr-1 md:mr-2"
          width={20}
          height={20}
          alt=""
        />
        <p className="mr-5 md:mr-20">+91 98138-44164</p>
        {/* <p className="left-[90%]">+91 98138-44164</p> */}
      </div>

      {/* Container */}
      <div className="relative z-10 mx-auto hidden items-center justify-between bg-white px-4 py-5 md:px-24 lg:flex">
        <div>
          <h1 className="text-lg font-bold md:text-2xl">Dr. Travis Scott</h1>
          <p className="text-sm md:text-base">MBBS, DDV</p>
        </div>

        {/* Main Navbar Menu */}
        <nav
          id="navbar-menu"
          className={`${menuOpen ? "block" : "hidden"} md:block`}
        >
          <ul className="flex space-x-6 font-medium">
            <li>
              <Link href="/" className="text-lg">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-lg">
                Services
              </Link>
            </li>
            <li>
              <Link href="/why-us" className="text-lg">
                Why Us
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-lg">
                About
              </Link>
            </li>
            <li>
              <Link href="/visit" className="text-lg">
                Visit
              </Link>
            </li>
            <li>
              <Link
                href="tel:01274222811"
                className="rounded-xl bg-red-300 p-3 px-7 text-lg hover:bg-red-400 hover:text-white"
              >
                Call Now
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
