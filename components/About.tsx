import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="items-center py-12 md:py-16 lg:py-60">
      <div className="flex max-w-screen-xl flex-col items-center md:flex-row md:items-start md:justify-between">
        <div className="h-auto md:w-1/2">
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
        <div className="mt-10 h-auto w-full max-w-[90%] md:w-1/2">
          <h1 className="subheading">Dr. Travis Scott</h1>
          <h1 className="mb-4 text-lg text-slate-700 md:text-xl">
            MBBS, MD, FCP
          </h1>
          <div className="opacity-80 md:text-lg">
            <p>
              Dr. Travis Scott is a renowned dermatologist in Rewari, Haryana,
              with over 9 years of experience. She earned his medical degree
              from Stanford University School of Medicine and completed his
              dermatology residency at UCSF.
            </p>
            <br />
            <p>
              Dr. Scott specializes in treating a wide range of skin conditions,
              including acne, eczema, psoriasis, and skin cancer, using a
              personalized approach to patient care.
            </p>
            <br />
            <p>
              Outside of his professional life, Dr. Scott enjoys hiking,
              cycling, and painting. Dr. Scott is also a dedicated advocate for
              healthy living, often educating his patients on skincare and
              overall wellness. And she is also one of the Best Dermatologist
              and Skincare Specialist in Rewari, Haryana.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
