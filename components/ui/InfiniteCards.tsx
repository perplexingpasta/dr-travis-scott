"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    img: any;
    quote: string;
    name: string;
    date: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "160s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        // "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        "scroller relative z-20 w-screen overflow-hidden",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-5 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            // className="relative w-[90vw] max-w-full flex-shrink-0 rounded-2xl border border-slate-800 bg-gray-200 p-5 md:w-[20vw] md:max-w-[30vw]"
            className="relative w-[75vw] max-w-full flex-shrink-0 border border-slate-400 p-5 md:max-h-[30vh] md:w-[40vw] md:max-w-[50vw] lg:max-h-full lg:w-[20vw] lg:max-w-[30vw]"
            style={
              {
                //   background:
                //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)", //remove this one
                //   add these two
                //   you can generate the color from here https://cssgradient.io/
                // background: "rgb(4,7,29)",
                // backgroundColor:
                //   "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }
            }
            key={idx}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <div className="relative z-20 mb-[16px] flex flex-row items-center">
                <div className="me-3">
                  <Image
                    src={item.img}
                    width={50}
                    height={50}
                    alt=""
                    className="w-11 rounded-full md:w-12"
                  />
                </div>
                <span className="flex flex-col gap-1">
                  <div className="flex items-center gap-x-1 font-semibold md:text-xl">
                    {item.name} <TbRosetteDiscountCheckFilled />
                  </div>

                  <span className="text-xs font-normal text-gray-500 md:text-sm">
                    {item.date}
                  </span>
                </span>
                <div className="ml-auto">
                  <Image
                    src="/images/google.png"
                    width={50}
                    height={50}
                    alt=""
                    className="w-10 md:w-12"
                  />
                </div>
              </div>
              <div className="mb-[8px]">
                <Image
                  src="/images/5stars.png"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
              <span className="relative z-20 text-sm font-normal md:text-lg">
                {item.quote}
              </span>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
