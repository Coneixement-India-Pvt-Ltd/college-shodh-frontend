import React from "react";

import { MdEmail } from "react-icons/md";

function ContactUs() {
  const emailAddress = "coneixementindia@gmail.com";
  const emailStyle = {
    color: "blue",
  };
  return (
    <>
      <div>
        {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

        <section className="bg-gray-100">
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="lg:col-span-2 lg:py-12">
                <p className="max-w-xl text-lg">
                  At the same time, the fact that we are wholly owned and
                  totally independent from manufacturer and other group control
                  gives you confidence that we will only recommend what is right
                  for you.
                </p>

                <div className="mt-8">
                  {/* <a href="#" className="text-2xl font-bold text-orange-600"> 0151 475 4450 </a> */}

                  <p className="mt-2 not-italic text-orange-600 text-left flex items-center pl-40">
                    <MdEmail className="text-orange-400 size-5 mr-1" /> {" "}
                    info@collegeshodh.in
                  </p>
                </div>
              </div>

              <div className="rounded-lg bg-gray-200 p-8 shadow-lg lg:col-span-3 lg:p-12">
                <h1 className="text-2xl font-bold pb-4">Get in Touch</h1>
                <form action="#" className="space-y-4">
                  <div>
                    <label className="sr-only" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Name"
                      type="text"
                      id="name"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="message">
                      Message
                    </label>

                    <textarea
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Message"
                      rows="8"
                      id="message"
                    ></textarea>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-orange-600 px-5 py-3 font-medium text-white sm:w-auto"
                    >
                      Send Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default ContactUs;