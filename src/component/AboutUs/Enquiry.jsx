import React from "react";
import { Link } from "react-router-dom";

const OpenAccount = () => {
  return (
    <div className="container mx-auto p-5 mb-3">
      <div className="text-center">
        <h1 className="pt-3 text-3xl font-bold">Have a question? Need Some Help? </h1>
        <p className="pt-3 pb-3 text-lg">
        We’d love to hear from you! Lorem ipsum, dolor sit amet
        consectetur adipisicing elit.
        </p>
        <a
                href="/contact"
                className="inline-block rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-400"
              >
                Contact Us
              </a>
      </div>
    </div>
  );
};

export default OpenAccount;





// import React from "react";
// import { Link } from "react-router-dom";

// const OpenAccount = () => {
//   return (
//     <div className="container mx-auto p-5 mb-3">
//       <div className="text-center">
//         <h1 className="pt-3 text-3xl font-bold">Have a question? Need Some Help? </h1>
//         <p className="pt-3 pb-3 text-lg">
//           We’d love to hear from you! Lorem ipsum, dolor sit amet
//           consectetur adipisicing elit.
//         </p>
//         <Link
//           to="/contact"
//           className="bg-blue-500 text-white text-lg py-2 px-6 mt-4 mx-auto block rounded-md"
//         >
//           Sign Up
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default OpenAccount;
