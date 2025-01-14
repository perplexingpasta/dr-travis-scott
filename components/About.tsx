import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="items-center py-5 pt-10 md:py-16 lg:p-16">
      <div className="flex max-w-screen-xl flex-col items-center lg:flex-row lg:items-start lg:justify-between">
        <div className="h-auto lg:w-1/2">
          <picture className="image-box ml-3 mr-0">
            <source media="(max-width: 600px)" srcSet="/images/doctor.jpg" />
            <source media="(min-width: 601px)" srcSet="/images/doctor.jpg" />
            <Image
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              src="/images/doctor.jpg"
              alt=""
              width="400"
              height="662"
              className="z-10"
            />
          </picture>
        </div>
        <div className="mt-10 h-auto w-full max-w-[90%] md:mt-16 lg:w-1/2">
          <h1 className="subheading">Dr. Varun Agarwal</h1>
          <h1 className="mb-4 text-lg text-slate-700 md:text-xl">
            MBBS, MD, FCP
          </h1>
          <div className="opacity-80 md:text-xl">
            <p>
              Dr. Varun Agarwal is a renowned dermatologist in Delhi, with over
              20 years of experience. He earned his medical degree from Stanford
              University School of Medicine and completed his dermatology
              residency at UCSF.
            </p>
            <br />
            <p>
              Dr. Agarwal specializes in treating a wide range of skin
              conditions, including acne, eczema, psoriasis, and skin cancer,
              using a personalized approach to patient care.
            </p>
            <br />
            <p>
              Outside of his professional life, Dr. Agarwal enjoys hiking,
              cycling, and painting. Dr. Agarwal is also a dedicated advocate
              for healthy living, often educating his patients on skincare and
              overall wellness.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
