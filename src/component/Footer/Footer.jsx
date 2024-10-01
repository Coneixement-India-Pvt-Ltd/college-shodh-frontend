import React from "react";
import "../../styles/Footer.css";

export default function Footer() {
  return (
    // <footer className="bg-white border-y">
    //   <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
    //     <div className="md:flex md:justify-start ml-auto gap-52">
    //       <div className="mb-6 md:mb-0">
    //         <Link to="/" className="flex items-center">
    //           <img
    //             src="Collegeshodh logo_page-0001.png"
    //             className="mr-3 h-14"
    //             id="footer-logo"
    //             alt="Logo"
    //           />
    //         </Link>
    //       </div>

    //       <div
    //         id="info"
    //         className="flex justify-evenly space-x-12 mr-5 max-w-full sm:font-thin"
    //       >
    //         <div className="text-left">
    //           <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
    //             Top Colleges
    //           </h2>
    //           <ul className="text-gray-500 font-medium">
    //             <li className="mb-4">
    //               <Link
    //                 to="#"
    //                 className="hover:text-orange-700 hover:underline"
    //               >
    //                 NIT, Agartala
    //               </Link>
    //             </li>
    //             <li className="mb-4">
    //               <Link
    //                 to="#"
    //                 className="hover:text-orange-700 hover:underline"
    //               >
    //                 NIT, Trichy
    //               </Link>
    //             </li>
    //             <li className="mb-4">
    //               <Link
    //                 to="#"
    //                 className="hover:text-orange-700 hover:underline"
    //               >
    //                 NIT, Warangal
    //               </Link>
    //             </li>
    //             <li className="mb-4">
    //               <Link
    //                 to="#"
    //                 className="hover:text-orange-700 hover:underline"
    //               >
    //                 NIT, Calicut
    //               </Link>
    //             </li>
    //           </ul>
    //         </div>

    //         <div className="text-left">
    //           <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
    //             Top Cities
    //           </h2>
    //           <ul className="text-gray-500 font-medium">
    //             <li className="mb-4 hover:text-orange-700 hover:underline">
    //               Pune
    //             </li>
    //             <li className="mb-4 hover:text-orange-700 hover:underline">
    //               Banglore
    //             </li>
    //             <li className="mb-4 hover:text-orange-700 hover:underline">
    //               Mumbai
    //             </li>
    //             <li className="mb-4 hover:text-orange-700 hover:underline">
    //               Lucknow
    //             </li>
    //           </ul>
    //         </div>

    //         <div className="flex justify-end gap-8 text-left">
    //           <div>
    //             <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
    //               Top States
    //             </h2>
    //             <ul className="text-gray-500 font-medium">
    //               <li className="mb-4 hover:text-orange-700 hover:underline">
    //                 Uttar Pradesh
    //               </li>
    //               <li className="mb-4 hover:text-orange-700 hover:underline">
    //                 West Bengal
    //               </li>
    //               <li className="mb-4 hover:text-orange-700 hover:underline">
    //                 Karnataka
    //               </li>
    //               <li className="mb-4 hover:text-orange-700 hover:underline">
    //                 Kerala
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <hr className="border-gray-200 sm:mx-auto" />

    //     <div className="flex">
    //       <div className="flex mt-4 space-x-4 ml-2 sm:justify-left mr-3">
    //         <Link
    //           to="#"
    //           className="text-gray-500 hover:text-blue-600 active:text-blue-600"
    //         >
    //           <svg
    //             className="w-4 h-4"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="currentColor"
    //             viewBox="0 0 8 19"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //           <span className="sr-only">Facebook page</span>
    //         </Link>

    //         <Link
    //           to="#"
    //           className="text-gray-500 hover:text-blue-600 active:text-blue-600"
    //         >
    //           <svg
    //             className="w-4 h-4"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="currentColor"
    //             viewBox="0 0 20 17"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //           <span className="sr-only">Twitter page</span>
    //         </Link>
    //         <Link
    //           to="#"
    //           className="text-gray-500 hover:text-slate-950 active:text-slate-950"
    //         >
    //           <svg
    //             className="w-4 h-4"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //           <span className="sr-only">GitHub account</span>
    //         </Link>
    //         <Link to="#" className="text-gray-500 hover:text-gray-700">
    //           <svg
    //             className="w-4 h-4"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
    //               clipRule="evenodd"
    //             />
    //           </svg>
    //           <span className="sr-only">Dribbble account</span>
    //         </Link>
    //       </div>

    //       {/* <div className="grid justify-items-end ml-auto mt-2"> */}
    //       <div id="info" className="flex mt-2 justify-items-end ml-auto">
    //         <ul className="text-gray-500 font-medium flex flex-row space-x-2 sm:flex-row justify-items-end mr-2 tracking-tighter ml-2">
    //           <li className="mb-4">
    //             <Link
    //               to="contact"
    //               className="hover:text-orange-700 hover:underline"
    //             >
    //               Contact us
    //             </Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link to="#" className="hover:text-orange-700 hover:underline">
    //               Terms and Conditions
    //             </Link>
    //           </li>
    //           <li className="mb-4">
    //             <Link to="#" className="hover:text-orange-700 hover:underline">
    //               Privacy and Policy
    //             </Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>

    //     <div>
    //       <span
    //         id="info"
    //         className="text-sm text-gray-700 sm:text-center justify-center tracking-tight"
    //       >
    //         © 2024 Coneixement India Pvt Ltd. All Rights Reserved.
    //       </span>
    //     </div>
    //   </div>
    // </footer>
    <footer className="bg-white">
  <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="text-teal-600">
          <img
                  src="Collegeshodh logo_page-0001.png"
                  className="mr-3 h-14"
                  id="footer-logo"
                  alt="Logo"
          />
  
      </div>

      <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75"
          >
            <span className="sr-only">Facebook</span>

            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75"
          >
            <span className="sr-only">Instagram</span>

            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75"
          >
            <span className="sr-only">Twitter</span>

            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75"
          >
            <span className="sr-only">GitHub</span>

            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>

        <li>
          <a
            href="#"
            rel="noreferrer"
            target="_blank"
            className="text-gray-700 transition hover:opacity-75"
          >
            <span className="sr-only">Dribbble</span>

            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>

    <div
      className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16 text-left"
    >
      <div>
        <p className="font-medium text-gray-900">Services</p>

        <ul className="mt-6 space-y-4 text-sm">
          <li>
            <a href="#" className="text-gray-700 transition hover:opacity-75"> 1on1 Coaching </a>
          </li>

          <li>
            <a href="#" className="text-gray-700 transition hover:opacity-75"> Company Review </a>
          </li>

          <li>
            <a href="#" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
          </li>

          <li>
            <a href="#" className="text-gray-700 transition hover:opacity-75"> HR Consulting </a>
          </li>

          <li>
            <a href="#" className="text-gray-700 transition hover:opacity-75"> SEO Optimisation </a>
          </li>
        </ul>
      </div>

      <div>
        <p className="font-medium text-gray-900">Company</p>

        <ul className="mt-6 space-y-4 text-sm">
          <li>
            <a href="#" className="text-gray-700 transition hover:opacity-75"> About </a>
          </li>

          <li>
            <a href="#" className="text-gray-700 transition hover:opacity-75"> Meet the Team </a>
          </li>

          <li>
            <a href="#" className="text-gray-700 transition hover:opacity-75"> Accounts Review </a>
          </li>
        </ul>
      </div>

      <div>
        <p className="font-medium text-gray-900">Helpful Links</p>

        <ul className="mt-6 space-y-4 text-sm">
          <li>
            <a href="#" className="text-gray-700 transition hover:opacity-75"> Contact </a>
          </li>

          <li>
            <a href="#" className="text-gray-700 transition hover:opacity-75"> FAQs </a>
          </li>

          <li>
            <a href="#" className="text-gray-700 transition hover:opacity-75"> Live Chat </a>
          </li>
        </ul>
      </div>

      <div>
        <p className="font-medium text-gray-900">Legal</p>

        <ul className="mt-6 space-y-4 text-sm">
          <li>
            <a href="#" className="text-gray-700 transition hover:opacity-75"> Accessibility </a>
          </li>

          <li>
            <a href="#" className="text-gray-700 transition hover:opacity-75"> Returns Policy </a>
          </li>

          <li>
            <a href="#" className="text-gray-700 transition hover:opacity-75"> Refund Policy </a>
          </li>

          <li>
            <a href="#" className="text-gray-700 transition hover:opacity-75"> Hiring Statistics </a>
          </li>
        </ul>
      </div>
    </div>
    
    <p className="text-xs text-gray-500">&copy; 2024. Coneixement India Pvt Ltd. All rights reserved.</p>
  </div>
</footer>
  );
}
