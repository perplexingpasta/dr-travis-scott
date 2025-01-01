// const Footer2 = () => {
//   return (
//     <div id="footer">
//       <div className="container">
//         <div className="left-section">
//           <a className="logo footerName" href="/dist/index.html">
//             <p>Dr. Adam Smith</p>
//             <p className="-mt-2 text-sm font-normal opacity-70">
//               MBBS, MD, FCP
//             </p>
//           </a>
//           <div className="credit">
//             <span className="copyright">Copyright &copy; 2024.</span>
//           </div>
//           <div className="credit">
//             <span>Designed by</span>
//             <a
//               href="https://celesteconsulting.in"
//               target="_blank"
//               rel="noopener"
//             >
//               Celeste Consulting.
//             </a>
//           </div>
//         </div>
//         <div className="right-section">
//           <div className="lists">
//             <ul>
//               <li>
//                 <h2>For consultation</h2>
//               </li>
//               <li>
//                 <div id="footerconsult">
//                   <p>DERMAX HOSPITAL</p>
//                   <p>MON, TUES, WED, FRI 3-5 pm</p>
//                   <p>
//                     <strong>Address:</strong>
//                     36, 5th Avenue, 11th Main Rd, 4th Block, East Lincoln,
//                     Illinois, Chicago
//                   </p>
//                   <p>
//                     <strong>Phone:</strong>
//                     +1 23238-8800
//                   </p>
//                   <p>
//                     <strong>WhatsApp:</strong>
//                     +1 23238-9900
//                   </p>
//                 </div>
//               </li>
//               <li>
//                 <div id="footerconsult" className="mt-2">
//                   <p>ABRAHAM HOSPITAL</p>
//                   <p>MON, TUES, WED, FRI 3-5 pm</p>
//                   <p>
//                     <strong>Address:</strong>
//                     36, 5th Avenue, 11th Main Rd, 4th Block, East Lincoln,
//                     Illinois, Chicago
//                   </p>
//                   <p>
//                     <strong>Phone:</strong>
//                     +1 23238-8800
//                   </p>
//                   <p>
//                     <strong>WhatsApp:</strong>
//                     +1 23238-9900
//                   </p>
//                 </div>
//               </li>
//             </ul>
//             <ul>
//               <li>
//                 <h2>Information</h2>
//               </li>
//               <li>
//                 <a href="/index.html">Home</a>
//               </li>
//               <li>
//                 <a href="#services">Services</a>
//               </li>
//               <li>
//                 <a href="#about">About Us</a>
//               </li>
//               <li>
//                 <a href="#whychooseus">Why Us</a>
//               </li>
//               <li>
//                 <a href="#contact">Contact</a>
//               </li>
//             </ul>
//             <ul>
//               <li>
//                 <h2>Contact</h2>
//               </li>
//               <li>
//                 <a href="#contact">Denver CO 80206</a>
//               </li>
//               <li>
//                 <a href="tel:555-779-4407">T: (555) 779-4407</a>
//               </li>
//               <li>
//                 <a href="mailto:email@email.com">Click to Email</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer2;

const Footer2 = () => {
  return (
    <div
      id="footer"
      className="bg-[#1c1c1c] pb-[1.25em] pt-[5.25em] text-sm sm:text-base"
    >
      <div className="container mx-auto flex w-[96%] max-w-[82.5em] flex-col justify-between p-0 sm:flex-row">
        <div className="left-section w-full text-center sm:w-[25.5625em] sm:text-left">
          <a
            className="logo mx-auto mb-[1.875em] mt-[22%] inline-block h-[4.375em] text-center sm:mx-0"
            href="/dist/index.html"
          >
            <p>Dr. Adam Smith</p>
            <p className="mt-[-0.5em] text-sm font-normal opacity-70">
              MBBS, MD, FCP
            </p>
          </a>
          <div className="credit text-start text-base text-white">
            <span className="copyright">Copyright &copy; 2024.</span>
          </div>
          <div className="credit text-start">
            <span>Designed by</span>
            <a
              className="text-primary no-underline hover:underline"
              href="https://celesteconsulting.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Celeste Consulting.
            </a>
          </div>
        </div>
        <div className="right-section flex w-full max-w-none flex-col sm:w-[52.0625em]">
          <div className="lists mx-auto flex w-[96%] max-w-[48.0625em] flex-wrap justify-between">
            <ul className="m-0 p-0">
              <li>
                <h2 className="relative mb-[2.05555556em] text-[1.125em] font-bold uppercase text-white before:absolute before:bottom-[-0.88888889em] before:left-0 before:block before:h-[0.11111111em] before:w-[5.38888889em] before:bg-[#eebe76] before:opacity-100 before:content-['']">
                  For consultation
                </h2>
              </li>
              <li>
                <div id="footerconsult" className="mt-2">
                  <p>DERMAX HOSPITAL</p>
                  <p>MON, TUES, WED, FRI 3-5 pm</p>
                  <p>
                    <strong>Address:</strong>
                    36, 5th Avenue, 11th Main Rd, 4th Block, East Lincoln,
                    Illinois, Chicago
                  </p>
                  <p>
                    <strong>Phone:</strong>
                    +1 23238-8800
                  </p>
                  <p>
                    <strong>WhatsApp:</strong>
                    +1 23238-9900
                  </p>
                </div>
              </li>
              <li>
                <div id="footerconsult" className="mt-2">
                  <p>ABRAHAM HOSPITAL</p>
                  <p>MON, TUES, WED, FRI 3-5 pm</p>
                  <p>
                    <strong>Address:</strong>
                    36, 5th Avenue, 11th Main Rd, 4th Block, East Lincoln,
                    Illinois, Chicago
                  </p>
                  <p>
                    <strong>Phone:</strong>
                    +1 23238-8800
                  </p>
                  <p>
                    <strong>WhatsApp:</strong>
                    +1 23238-9900
                  </p>
                </div>
              </li>
            </ul>
            <ul className="m-0 p-0">
              <li>
                <h2 className="relative mb-[2.05555556em] text-[1.125em] font-bold uppercase text-white before:absolute before:bottom-[-0.88888889em] before:left-0 before:block before:h-[0.11111111em] before:w-[5.38888889em] before:bg-[#eebe76] before:opacity-100 before:content-['']">
                  Information
                </h2>
              </li>
              <li>
                <a
                  className="text-base text-white opacity-90 hover:text-primary"
                  href="/index.html"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-base text-white opacity-90 hover:text-primary"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  className="text-base text-white opacity-90 hover:text-primary"
                  href="#about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-base text-white opacity-90 hover:text-primary"
                  href="#whychooseus"
                >
                  Why Us
                </a>
              </li>
              <li>
                <a
                  className="text-base text-white opacity-90 hover:text-primary"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
            <ul className="m-0 p-0">
              <li>
                <h2 className="relative mb-[2.05555556em] text-[1.125em] font-bold uppercase text-white before:absolute before:bottom-[-0.88888889em] before:left-0 before:block before:h-[0.11111111em] before:w-[5.38888889em] before:bg-[#eebe76] before:opacity-100 before:content-['']">
                  Contact
                </h2>
              </li>
              <li>
                <a
                  className="text-base text-white opacity-90 hover:text-primary"
                  href="#contact"
                >
                  Denver CO 80206
                </a>
              </li>
              <li>
                <a
                  className="text-base text-white opacity-90 hover:text-primary"
                  href="tel:555-779-4407"
                >
                  T: (555) 779-4407
                </a>
              </li>
              <li>
                <a
                  className="text-base text-white opacity-90 hover:text-primary"
                  href="mailto:email@email.com"
                >
                  Click to Email
                </a>
              </li>
            </ul>
          </div>
          <div className="buttons flex justify-center sm:justify-start">
            <button className="button-solid h-[2.94444444em] w-[13.88888889em] py-[0.16666667em]">
              Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
