import React from "react";

const Enquiry = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Have a question? Need Some Help?
            </h2>
            <p className="hidden text-gray-500 sm:mt-4 sm:block">
              We’d love to hear from you! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-xl">
            <form className="flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-blue-400 mb-4 border-2"
                  required
                />
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-blue-400 mb-4 border-2"
                  required
                />
                <label htmlFor="company" className="sr-only">
                  Contact Number
                </label>
                <input
                  type="number"
                  name="contact"
                  placeholder="Enter your contact number"
                  className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-blue-400 border-2"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 rounded-md bg-blue-700 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-blue-400"
                >
                  <span className="text-sm font-medium">Send</span>
                  <svg
                    className="size-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Enquiry;
