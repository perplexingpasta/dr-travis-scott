import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="mt-[-10rem] items-center py-12 md:py-16 lg:py-60"
    >
      <div className="flex max-w-screen-xl flex-col items-center  md:flex-row md:items-start md:justify-between">
        <div className="h-auto md:w-1/2">
        <picture className="image-box ml-3 mr-0">
            <source media="(max-width: 600px)" srcSet="/images/doctor.jpg" />
            <source media="(min-width: 601px)" srcSet="/images/doctor.jpg" />
            <img
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              src="/images/doctor.jpg"
              alt="cabinets"
              width="400"
              height="662"
              className="z-10"
            />
          </picture>
        </div>
        <div className="h-auto w-full md:w-1/2">
          <h1 className="mb-1 text-2xl font-bold md:text-4xl">
            Dr. Priyanka Singla
          </h1>
          <h1 className="mb-4 text-xl md:text-2xl">MBBS, MD, FCP</h1>
          <div className="font-halyard text-lg opacity-75">
            <p>
              Dr. Priyanka Singla is a renowned dermatologist in Rewari,
              Haryana, with over 9 years of experience. She earned her medical
              degree from Stanford University School of Medicine and completed
              her dermatology residency at UCSF.
            </p>
            <br />
            <p>
              Dr. Singla specializes in treating a wide range of skin
              conditions, including acne, eczema, psoriasis, and skin cancer,
              using a personalized approach to patient care.
            </p>
            <br />
            <p>
              Outside of her professional life, Dr. Singla enjoys hiking,
              cycling, and painting. Dr. Singla is also a dedicated advocate for
              healthy living, often educating her patients on skincare and
              overall wellness. And she is also one of the Best Dermatologist
              and Skincare Specialist in Rewari, Haryana.{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
