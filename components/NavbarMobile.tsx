"use client";
import { useClickAway } from "react-use";
import { useRef } from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { navItems } from "@/data/index";
import Link from "next/link";
// import { ModeToggle } from "./ui/ModeToggle";
import { usePathname } from "next/navigation";

export const NavbarMobile = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway(ref, () => setOpen(false));
  const pathname = usePathname();

  return (
    <>
      <div ref={ref} className="relative z-[1000] bg-white">
      <Link href={"/"}>
      <div className="px-4 pt-3">
        <h1 className="text-lg font-bold">Dr. Travis Scott</h1>
        <p className="text-sm">MBBS, DDV</p>
      </div></Link>
        <div className="absolute right-0 top-0 pt-4">
          <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween" }}
              className="fixed left-0 top-0 z-[600] h-full w-2/3 bg-red-300 pt-20 saturate-50"
            >
              {/* <div className="px-2">
              <ModeToggle />
            </div> */}
              <ul className="grid">
                {navItems.map((navItem: any, idx: number) => {
                  const isActive = pathname.startsWith(navItem.link);

                  return (
                    <li key={`link=${idx}`} className="w-full rounded-lg">
                      <Link
                        onClick={() => setOpen((prev) => !prev)}
                        className={`flex w-full items-center justify-between p-5 pt-5 uppercase tracking-widest ${isActive && navItem.link !== "/" ? "dark:border-purpledark dark:!text-purple border-b-2 border-black-100 !font-bold" : ""}`}
                        href={navItem.link}
                      >
                        <span className="flex gap-1 text-lg">
                          {navItem.name}
                        </span>
                        {/* <Icon className="text-xl" /> */}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
