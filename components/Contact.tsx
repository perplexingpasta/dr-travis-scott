// import Image from "next/image";

// const Contact = () => {
//   return (
//     <div id="sidebyside" className="sidebyside">
//       <div className="container" id="contact">
//         <div className="content">
//           <h1 className="contact-title">Contact Us</h1>
//           <div className="inline-flex items-center">
//             <Image
//               src="/images/location.svg"
//               alt=""
//               width="25"
//               height="25"
//               className="mr-2"
//             />
//             <h3 className="m-0">21 Rosewood St, Palo Alto, CA 94301</h3>
//           </div>
//
//
//           <div className="inline-flex items-center">
//             <Image
//               src="/images/call.svg"
//               alt=""
//               width="25"
//               height="25"
//               className="mr-2"
//             />
//             <h3 className="m-0">(555) 779-4407</h3>
//           </div>
//
//           <div className="inline-flex items-center">
//             <Image
//               src="/images/call.svg"
//               alt=""
//               width="25"
//               height="25"
//               className="mr-2"
//             />
//             <h3 className="m-0">(555) 779-2820</h3>
//           </div>
//
//
//
//           <div className="inline-flex items-center">
//             <Image
//               src="/images/time.svg"
//               alt=""
//               width="25"
//               height="25"
//               className="mr-2"
//             />
//             <h3 className="m-0">Clinic Hours</h3>
//           </div>
//           <p>
//             Monday to Friday: 9:00 AM - 5:00 PM
//
//             Saturday: 10:00 AM - 2:00 PM
//
//             Sunday: Closed
//           </p>

//           <div>
//             <a className="button-solid" href="tel:555-779-4407" rel="noopener">
//               Call Us
//             </a>
//           </div>
//         </div>

//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10237.585034093197!2d76.60972043789774!3d28.192352306398316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d50733667f049%3A0x7084b768842f7002!2sSai%20Skin%20Clinic!5e0!3m2!1sen!2sin!4v1723364926443!5m2!1sen!2sin"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           id="contactmap"
//         />
//       </div>
//     </div>
//   );
// };

// export default Contact;

import Image from "next/image";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mt-[-10rem] items-center py-12 md:py-16 lg:py-60"
    >
      <div className="flex max-w-screen-xl flex-col items-center space-x-36 md:flex-row md:items-start md:justify-between">
        <div className="h-auto md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10237.585034093197!2d76.60972043789774!3d28.192352306398316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d50733667f049%3A0x7084b768842f7002!2sSai%20Skin%20Clinic!5e0!3m2!1sen!2sin!4v1723364926443!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            id="contactmap"
            className="h-[360px] w-[360px] md:h-[500px] md:w-[700px]"
          />
        </div>
        <div className="h-auto w-full md:w-1/2">
          <h1 className="text-2xl font-bold md:text-4xl mb-4">Contact Us</h1>
          <div className="inline-flex items-center">
            <Image
              src="/images/location.svg"
              alt=""
              width="25"
              height="25"
              className="mr-2"
            />
            <h3 className="font-halyard m-0 md:text-xl">
              21 Rosewood St, Palo Alto, CA 94301
            </h3>
          </div>

          <div className="inline-flex items-center md:mt-6">
            <Image
              src="/images/call.svg"
              alt=""
              width="25"
              height="25"
              className="mr-2"
            />
            <h3 className="font-halyard m-0 md:text-xl">(555) 779-4407</h3>
          </div>
          <br />
          <div className="inline-flex items-center md:mt-2">
            <Image
              src="/images/call.svg"
              alt=""
              width="25"
              height="25"
              className="mr-2"
            />
            <h3 className="font-halyard m-0 md:text-xl">(555) 779-2820</h3>
          </div>
          <br />
          <div className="inline-flex items-center md:mt-6">
            <Image
              src="/images/time.svg"
              alt=""
              width="25"
              height="25"
              className="mr-2"
            />
            <h3 className="font-halyard m-0 md:text-xl">Clinic Hours</h3>
          </div>
          <div className="font-halyard pl-8 text-slate-600 md:text-lg">
            <p>Monday to Friday: 9:00 AM - 5:00 PM</p>  
            <p>Saturday: 10:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>

          <div>
            <a
              className="btn mt-10 bg-[#ffba19]"
              href="tel:555-779-4407"
              rel="noopener"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
