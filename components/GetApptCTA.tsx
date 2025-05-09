import Link from "next/link";
import { BiSolidPhoneCall } from "react-icons/bi";

const GetApptCTA = () => {
  return (
    <>
      <div className="mx-auto bg-gray-200 bg-opacity-50 md:max-w-[85%] md:rounded-3xl">
        <div className="mx-auto max-w-[90%] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="mb-4 text-2xl font-bold md:mb-6 md:text-3xl lg:mb-8 lg:text-4xl">
              Get a Dazzling Skin <br className="block lg:hidden" /> in Lowest
              Price
            </h2>
            <p className="md:mb-2 md:text-lg lg:mb-4 lg:max-w-[75%] lg:text-xl">
              Ready to show your skin some love?
              <br /> Don’t be shy, click that button below and let’s get you an
              appointment with the best dermatologist in Delhi.
              <br /> Your skin is awaiting its pampering session!
            </p>
            <a
              className="relative mt-4 flex items-center justify-center lg:-mb-4 lg:mt-8 lg:w-full"
              href="tel:01274222811"
            >
              <div className="max-w-[100%] rounded-lg bg-red-300 p-3 text-base transition-all duration-300 hover:scale-110 hover:bg-red-400 hover:text-white hover:drop-shadow-xl active:bg-red-600 active:text-white md:p-3 md:px-6 md:text-xl lg:max-w-[50%]">
                <span className="flex items-center gap-x-2">
                  Get Appointment
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetApptCTA;
