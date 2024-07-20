import { footerItemsCol2, footerItemsCol3, socialMedia } from "@/data/index";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center overflow-clip px-5 text-white sm:px-10">
      <div
        className="font-lexendDeca relative w-full pb-12 lg:mt-24"
        id="contact"
      >
        <div className="flex flex-col md:flex-1 md:flex-row">
          <div>
            <h1 className="text-xl font-bold md:text-3xl lg:max-w-[45vw]">
              Dr. Travis Scott
            </h1>
            <p className="text-white-200 mt-3 text-sm">
              MD Dermatologist based in Illinois, CH.
            </p>

            <div className="pt-32">
              <h1>Email:</h1>
              <p>travis@cactusjack.com</p>
            </div>
          </div>

          {/* <br className="block md:hidden" />
        <br className="block md:hidden" /> */}
          <div className="flex flex-1 flex-wrap justify-start gap-10 md:justify-around">
            {footerItemsCol2.map((section) => (
              <div key={section.bigTitle} className="max-w-md">
                <h1 className="mb-2 text-2xl font-medium leading-normal">
                  {section.bigTitle}
                </h1>
                <ul>
                  {section.block.map((block) => (
                    <li
                      className="mt-7 text-sm leading-normal text-slate-200 md:text-base"
                      key={block.id}
                    >
                      <h1 className="text-lg uppercase">{block.hospital}</h1>
                      <p>{block.timinings}</p>
                      {block.text.map((text) => (
                        <li key={text.title}>
                          <span className="font-bold">{text.title}: </span>
                          {text.desc}
                        </li>
                      ))}
                      {block.direction.map((dir) => (
                        <li
                          className="cursor-pointer text-sm leading-normal text-red-300 transition-all hover:text-red-400 md:text-base"
                          key={dir.label}
                        >
                          <a href={dir.href}>{dir.label}</a>
                        </li>
                      ))}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {footerItemsCol3.map((section) => (
              <div key={section.title}>
                <h1 className="mb-6 text-2xl font-medium leading-normal">
                  {section.title}
                </h1>
                <ul>
                  {section.links.map((item) => (
                    <li
                      className="mt-3 cursor-pointer text-sm leading-normal text-slate-200 transition-all hover:scale-110 hover:text-red-400 md:text-base"
                      key={item.label}
                    >
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-50 mt-16 flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm font-light md:text-base md:font-normal">
            Copyright © 2024 Dr. Travis Scott
          </p>

          <p className="text-sm font-light md:text-base md:font-normal">
            Hand-coded by{" "}
            <Link
              href="https://www.celesteconsulting.in/"
              className="!cursor-pointer hover:font-bold hover:text-indigo-400"
              target="_blank"
            >
              {" "}
              Céleste Consulting
            </Link>
          </p>

          <div className="flex items-center gap-6 pt-5 md:gap-3 md:pt-0">
            {socialMedia.map((profile) => (
              <div
                key={profile.id}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 saturate-150 backdrop-blur-lg backdrop-filter"
              >
                <Image
                  src={profile.img}
                  alt="Social Media Link Icons"
                  width={20}
                  height={20}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
