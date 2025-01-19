"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import WhyChooseUsCards from "@/components/ui/WhyChooseUsCards";
import dynamic from "next/dynamic";

const DynamicBeforeAfter = dynamic(
  () => import("@/components/BeforeAfterSection"),
);
const DynamicGoogleReviews = dynamic(
  () => import("@/components/ui/GoogleReviewsCarousel"),
);
const DynamicWannaKnowMore = dynamic(
  () => import("@/components/WannaKnowMore"),
);
gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  const heroRef = useRef(null);
  // const beforeAfterRef = useRef(null);
  const wannaKnowMoreRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.set(heroRef.current, { opacity: 0 });

      tl.to(heroRef.current, {
        opacity: 1,
        ease: "power3.out",
      })
        .fromTo(
          ".top-div-gsap",
          { x: "20%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 2, ease: "power3.out" },
        )
        .fromTo(
          ".points-div-gsap",
          { x: "-10%", opacity: 0 },
          { x: "0%", opacity: 1, duration: 1.5, ease: "power3.out" },
          "-=0.5", // Overlaps
        );
      // .fromTo(
      //   ".cta-btn-gsap",
      //   { y: "-50%", opacity: 0 },
      //   { y: "0%", opacity: 1, duration: 1, ease: "power3.out" },
      // );
    }, heroRef);

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        wannaKnowMoreRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: wannaKnowMoreRef.current,
            start: "top 70%",
            toggleActions: "play none none reset",
          },
        },
      );
    }, wannaKnowMoreRef);

    return () => ctx.revert(); // Cleanup GSAP context
  }, []);

  return (
    <>
      <header id="whyus" className="mt-32 md:mt-44">
        <h1 className="heading relative mb-7 block md:mb-16">Why Choose Us?</h1>
      </header>
      <main>
        {/* WHY CHOOSE US */}
        <section ref={heroRef}>
          <div className="mx-auto mb-20 max-w-[90%] md:mb-32 md:max-w-[75%] md:text-lg lg:text-xl">
            <p className="top-div-gsap opacity-0">
              Located in Delhi, Dr. Agarwal&apos;s Skin Care Clinic offers over
              20 years of specialized dermatological expertise. We provide
              personalized treatment plans and our clinic integrates advanced
              technology and cosmetic procedures like laser treatments for
              effective results, ensuring compassionate care for all. <br />
              <br /> Some of our services include treatments for acne vulgaris,
              allergies, hyperpigmentation, warts and corns, laser procedures
              for aesthetic concerns, etc.
            </p>
            <div className="points-div-gsap opacity-0">
              <WhyChooseUsCards />
            </div>
          </div>
        </section>

        {/* BEFORE & AFTER */}
        {/* <section className="mx-auto max-w-[90%] rounded-3xl bg-red-500 py-7 md:py-12"> */}
        <section className="mx-auto max-w-[90%]">
          <DynamicBeforeAfter />
        </section>

        {/* GOOGLE REVIEWS CAROUSEL */}
        <section className="md:mx-auto md:max-w-[90%] lg:mt-32">
          <div className="mt-16 text-center text-2xl font-semibold md:ml-[5%] md:text-left md:text-3xl lg:-mb-10 lg:mt-0">
            <p className="font-lexendDeca md:text-4xl">Google Reviews</p>
            <p className="mx-auto max-w-[80%] text-base font-light md:max-w-full md:text-xl">
              Some genuine google reviews.
            </p>
          </div>
          <DynamicGoogleReviews />
        </section>

        {/* LONG REVIEW */}
        <section className="md:mx-auto md:max-w-[90%] lg:mt-12">
          <div className="mb-5 mt-8 text-center text-2xl font-semibold md:mb-10 md:ml-[5%] md:mt-0 md:text-left md:text-3xl">
            <p className="font-lexendDeca md:text-4xl">Success Stories</p>
            <p className="mx-auto max-w-[80%] text-base font-light md:max-w-full md:text-xl">
              Case studies of patients in their own words.
            </p>
          </div>
          <div className="mx-auto mb-24 max-w-[90%] lg:grid lg:grid-cols-3 lg:place-items-start lg:gap-x-16">
            <div className="mx-auto rounded-3xl bg-red-200 p-10 text-sm md:mt-12 md:text-base">
              <p>
                We saw Dr. Agarwal for my persistent skin issues, and I am so
                grateful for the care and expertise he provided. I had been
                struggling with severe acne for several months, which left me
                feeling self-conscious and frustrated.
                <br />
                <br /> Dr. Agarwal patiently listened to my concerns and
                thoroughly examined my skin before recommending a treatment plan
                tailored to my needs. His attention to detail and ability to
                explain everything in simple terms put my mind at ease. He was
                proactive in addressing the root causes of my acne rather than
                just treating the surface symptoms.
                <br />
                <br /> He gave me a very clear skincare routine and explained
                why each product and step was necessary, ensuring I understood
                the science behind it. Over the course of a few months, my skin
                drastically improved, and I finally saw the clear complexion I
                had long desired. Dr. Agarwal also took time to follow up on my
                progress regularly, adjusting the treatment as needed. Thanks to
                his care, my confidence has returned, and I no longer feel
                insecure about my skin.
                <br />
                <br />
                His calm, reassuring manner made every appointment a pleasant
                experience, and I truly appreciate his dedication to his
                patients&apos; well-being.
              </p>
              <p className="mt-3">
                <br />
                <span className="italic">— Pop Smoke</span>
                <br />
                <span className="text-slate-600">
                  Suffered from severe acne which impacted self-confidence
                </span>
              </p>
            </div>
            <div className="mx-auto mt-10 rounded-3xl bg-red-200 p-10 text-sm md:text-base lg:mt-0">
              <p>
                I visited Dr. Agarwal for a consultation about my sensitive
                skin, which had been reacting to various skincare products,
                leaving me with irritation and redness. <br />
                <br />
                From the moment I met Dr. Agarwal, I knew I was in the right
                hands. He took the time to listen carefully to my concerns and
                conducted a detailed examination of my skin. He not only
                diagnosed the root cause of my skin issues but also educated me
                on how different ingredients could impact my skin. Dr. Agarwal
                suggested a customized skincare routine that was gentle yet
                effective, with products that suited my skin type perfectly.{" "}
                <br />
                <br />
                Over the course of a few weeks, my skin&apos;s condition
                improved significantly—redness reduced, and irritation
                disappeared. Dr. Agarwal&apos;s thoroughness, professionalism,
                and warm personality made a huge difference in my treatment. His
                proactive follow-up and willingness to adjust the treatment plan
                when necessary made me feel truly cared for.
                <br />
                <br /> Thanks to his, I now have clear, healthy skin, and I
                couldn&apos;t be more grateful.
              </p>
              <p className="mt-3">
                <br />
                <span className="italic">— Karma</span>
                <br />
                <span className="text-slate-600">
                  Had very sensitive skin which reacted to skincare products
                </span>
              </p>
            </div>
            <div className="mx-auto mt-10 rounded-3xl bg-red-200 p-10 text-sm md:mt-12 md:text-base">
              <p>
                I had been dealing with dark spots and pigmentation for quite
                some time before I finally decided to see Dr. Agarwal. I&apos;m
                so glad I did! From the very first visit, he made me feel
                comfortable and assured me that we could work together to
                address the issues.
                <br />
                <br /> He explained the various factors contributing to my
                pigmentation and the steps we could take to treat it
                effectively. Dr. Agarwal devised a treatment plan that included
                both topical treatments and some in-office procedures.
                <br />
                <br />
                He explained everything thoroughly, so I knew exactly what to
                expect at each stage. Throughout the treatment process, he
                remained highly attentive to my skin&apos;s progress and made
                adjustments whenever necessary to ensure optimal results. After
                a few months, my skin has never looked better.
                <br />
                <br /> The dark spots have faded significantly, and my
                complexion is even and glowing. I&apos;m so thankful to Dr.
                Agarwal for his expertise and the personalized care he provided.
                His compassionate approach and commitment to his patients make
                his truly exceptional.
              </p>
              <p className="mt-3">
                <br />
                <span className="italic">— Zoe</span>
                <br />
                <span className="text-slate-600">
                  Had darks spots & pigmentation issues persisting for years
                </span>
              </p>
            </div>
          </div>
        </section>

        <section ref={wannaKnowMoreRef} className="mb-12 md:mb-24">
          <DynamicWannaKnowMore />
        </section>
      </main>
    </>
  );
};

export default WhyUs;
