// import React from 'react'

// const WannaKnowMore = () => {
//   return (
//     <div className='text-xl flex flex-col text-center mx-auto md:flex-row md:max-w-[75%]'>
//         <div className='w-1/2'>hiiiiiii</div>
//         <div className='w-1/2'>hiiiiiii</div>
//     </div>
//   )
// }

// export default WannaKnowMore

import Link from "next/link";
import { BiSolidPhoneCall } from "react-icons/bi";

const WannKnowMore = () => {
  return (
    <>
      <div className="mx-auto border-b-2 border-t-2 md:max-w-[80vw] md:rounded-3xl md:border-2 md:border-black-100 lg:max-w-[60%]">
        <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="max-w-md text-lg md:text-xl lg:text-2xl">
              <p className="font-medium">Got some questions? 🤔</p>
              <p className="text-base opacity-75 md:mt-1 md:text-lg lg:mt-2 lg:text-xl">
                Just click here to give us a call and a representative from our
                clinic will assist you and answer all your queries!
              </p>
            </div>
            <div className="text-center md:my-auto md:mr-10 md:text-right">
              <Link href="tel:01274222811">
                <button className="rounded-xl bg-red-300 p-3 transition-all duration-300 hover:scale-110 hover:bg-red-400 hover:text-white hover:drop-shadow-xl active:bg-red-600 active:text-white md:mt-2 md:p-3 md:px-5 md:text-lg lg:p-4 lg:px-7 lg:text-2xl">
                  <span className="flex items-center gap-x-2 lg:gap-x-3">
                    Call Now
                    <BiSolidPhoneCall />
                  </span>
                </button>
              </Link>
              {/* <p className="mt-2 text-center text-sm text-gray-700 lg:mt-4">
                If the line is busy, we&apos;ll call you back as soon as
                possible.
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WannKnowMore;
