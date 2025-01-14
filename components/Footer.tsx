import { footerItemsCol2, footerItemsCol3, socialMedia } from "@/data/index";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const footerCol3 = {
    title: "Get in touch",
    links: [
      {
        img: "/images/call-white.svg",
        label: "+91 98138-44164",
        href: "tel:+914069044164",
      },
      {
        img: "/images/whatsapp-white.svg",
        label: "+91 96033-12391",
        href: "https://wa.me/919603328484",
      },
      {
        img: "/images/email-white.svg",
        label: "drvarunagarwal@gmail.com",
        href: "mailto:travis@cactusjack.com",
      },
    ],
  };

  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center overflow-clip px-5 text-white sm:px-10">
      <div className="relative w-full pb-12 font-lexendDeca lg:mt-12">
        {/* ALL 3 TOP SECTIONS */}
        <div className="flex flex-col md:flex-1 lg:flex-row">
          {/* LEFT SECTION */}
          <div className="mt-16 md:mr-40 lg:mt-40">
            <h1 className="text-xl font-bold md:text-3xl lg:max-w-[45vw]">
              Dr. Varun Agarwal
            </h1>
            <p className="text-white-200 mt-1 text-sm md:mt-3">
              MD Dermatologist based in Delhi
            </p>

            <div className="pb-12 pt-5 md:pt-12">
              <ul>
                {footerCol3.links.map((item) => (
                  <li
                    className="hover:text-purple mt-2 cursor-pointer leading-normal text-white-400 transition-all hover:scale-110"
                    key={item.label}
                  >
                    <Image
                      src={item.img}
                      width={25}
                      height={25}
                      alt=""
                      className="mr-3 inline-flex flex-shrink-0"
                    />
                    <Link href={item.href} target="_blank" rel="noopener">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* MIDDLE & RIGHT SECTION */}
          <div className="flex flex-1 flex-wrap justify-start gap-10 md:justify-around">
            {footerItemsCol2.map((section) => (
              <div key={section.bigTitle} className="max-w-md">
                <h1 className="mb-2 text-xl font-medium leading-normal md:text-2xl">
                  {section.bigTitle}
                </h1>
                <ul>
                  {section.block.map((block) => (
                    <li
                      className="mt-3 text-sm leading-normal text-slate-200 md:mt-7 md:text-base"
                      key={block.id}
                    >
                      <h1 className="text-base font-semibold uppercase md:text-lg">
                        {block.hospital}
                      </h1>
                      <p>{block.timings}</p>
                      {block.text.map((text) => (
                        <div key={text.title} className="md:mb-1">
                          {text.title}: {text.desc}
                        </div>
                      ))}
                      {block.direction.map((dir) => (
                        <div
                          key={dir.label}
                          className="mb-2 cursor-pointer text-sm leading-normal text-red-300 transition-all hover:text-red-400 md:text-base"
                        >
                          <Link href={dir.href}>{dir.label}</Link>
                        </div>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {footerItemsCol3.map((section) => (
              <div key={section.title} className="hidden md:block">
                <h1 className="mb-3 text-xl font-medium leading-normal md:mb-6 md:text-2xl">
                  {section.title}
                </h1>
                <ul>
                  {section.links.map((item) => (
                    <li
                      className="mt-1 cursor-pointer text-sm leading-normal text-slate-200 transition-all hover:scale-110 hover:text-red-300 md:mt-3 md:text-base"
                      key={item.label}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* COPYRIGHT, HANDCODED & SOCIAL ICONS */}
        <div className="relative z-50 mt-16 flex flex-col items-center justify-between lg:flex-row">
          <p className="text-sm font-light md:text-base md:font-normal">
            Copyright © 2024 Dr. Varun Agarwal
          </p>

          <p className="mt-2 text-sm font-light md:text-base md:font-normal lg:mt-0">
            Designed by{" "}
            <Link
              href="https://www.celesteconsulting.in/"
              className="!cursor-pointer hover:text-indigo-300"
              target="_blank"
            >
              {" "}
              Céleste Consulting ✨
            </Link>
          </p>

          <div className="flex items-center gap-6 pt-5 md:gap-3 lg:pt-0">
            {socialMedia.map((profile) => (
              <div
                key={profile.id}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-[#393939] bg-opacity-75 saturate-150 backdrop-blur-lg backdrop-filter"
              >
                <Link href={profile.link} target="_blank">
                  <Image
                    src={profile.img}
                    alt="Social Media Link Icons"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
