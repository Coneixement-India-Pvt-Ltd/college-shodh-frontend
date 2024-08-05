import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyModal from "../Modals/BscModal";
import "./Home.css";
import BlogListing from "../BlogListing/BlogListing";

const BackgroundImages = ["./bg1.jpg", "./bg2.jpg", "./bg3.jpg"];

const Options = [
  { text: "B. Arch", img: "./agri.png", link: "#" },
  { text: "B. Pharm", img: "./Pharma.png", link: "#" },
  { text: "BCA", img: "./BCA.png", link: "#" },
  { text: "BE/B. Tech", img: "./Btech.png", link: "#" },
  { text: "B. Sc", img: "./BSC.png", link: "#" },
];

const cities = [
  { name: "Kolkata", img: "./kolkata.png" },
  { name: "Pune", img: "./pune.JPG" },
  { name: "Bangalore", img: "./banglore.png" },
  { name: "Mumbai", img: "./mumbai.png" },
  { name: "Jaipur", img: "./jaipur.png" },
  { name: "Gurgaon", img: "./kolkata.png" },
  { name: "Delhi", img: "./kolkata.png" },
  { name: "Chennai", img: "./kolkata.png" },
  { name: "Hyderabad", img: "./kolkata.png" },
  { name: "Ahmedabad", img: "./kolkata.png" },
];

export default function Home() {
  const [startIndex, setStartIndex] = useState(0);
  const citiesPerPage = 5;

  const [showModal, setShowModal] = useState(false);
  const [selectedType, setSelectedType] = useState("BSc"); // Default to BSc

  const closeModal = () => setShowModal(false);
  const openModal = (type) => {
    setShowModal(true);
    setSelectedType(type);
  };

  const handleNext = () => {
    if (startIndex + citiesPerPage < cities.length) {
      setStartIndex(startIndex + citiesPerPage);
    }
  };

  const handlePrev = () => {
    if (startIndex - citiesPerPage >= 0) {
      setStartIndex(startIndex - citiesPerPage);
    }
  };

  const [bgIndex, setBgIndex] = useState(0);
  const [optionIndex, setOptionIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBgIndex((prevIndex) => (prevIndex + 1) % BackgroundImages.length);
      setOptionIndex((prevIndex) => (prevIndex + 1) % Options.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    
    // old hero section without opacity 
    // <div>
    //   <div
    //     id="image"
    //     className="h-96 flex items-start bg-cover relative transition-all opacity-70"
    //     style={{ backgroundImage: `url(${BackgroundImages[bgIndex]})` }}
    //   >

    //     <div className="mt-12 md:mt-24 ml-4 md:ml-24">
    //       <p id="passion" className="s text-gray-800 mb-2 md:mb-3 mt-6 md:mt-6">
    //         <div className="container">
    //           <div className="text">
    //             <span className="text-black">FOLLOW YOUR </span>
    //             <span className="text-orange-600">PASSION</span>
    //           </div>
    //         </div>
    //       </p>
    //       <p
    //         id="stem"
    //         className="text-base md:text-lg text-gray-800 mb-3 md:mb-5"
    //       >
    //         <span className="text-black">
    //           Science Technology Engineering Mathematics (STEM)
    //         </span>
    //       </p>

    //       <div className="relative mb-3 md:mb-6">
    //         <input
    //           type="text"
    //           id="search"
    //           placeholder="Search for colleges, courses, exams, QnAs...."
    //           className="px-3 md:px-4 py-3 md:py-4 pl-10 md:pl-12 h-10 md:h-11 w-full md:w-96 border border-gray-500 rounded-2xl focus:outline-none focus:border-blue-500"
    //         />
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth="1.5"
    //           stroke="currentColor"
    //           className="w-6 md:w-7 h-6 md:h-7 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
    //           style={{ fontSize: "1.5em" }}
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M21 21l-4.35-4.35m2.85-3.65A7.5 7.5 0 1112 4.5a7.5 7.5 0 017.5 7.5z"
    //           />
    //         </svg>
    //       </div>
    //     </div>
    //     </div>

    //   {/* slider links */}
    //     <div className="options-container absolute top-0 right-0 mt-40 mr-4 md:mr-36">
    //       {Options.map((option, index) => (
    //         <Link to={option.link} key={index}>
    //           <div
    //             className={`option-item text-left text-lg md:text-3xl font-sans font-semibold text-gray-800 mb-2 mr-72 ${
    //               optionIndex === index
    //                 ? "font-bold text-orange-600 text-decoration-line: underline"
    //                 : ""
    //             }`}
    //             onClick={
    //               option.text === "B. Sc" || option.text === "BE/B. Tech"
    //                 ? () =>
    //                     openModal(
    //                       option.text === "B. Sc" ? "BSc" : "BE/B. Tech"
    //                     )
    //                 : undefined
    //             }
    //           >
    //             {option.text}
    //           </div>
    //         </Link>
    //       ))}
    //     </div>
    //   {/* </div> */}

    //   <div className="text-center pb-8">
    //     <div>
    //       <p className="text-2xl font-mono p-4 mt-4 text-gray-800 bg-neutral-200">
    //         Discover Bachelor's Program in Science, Technology, Engineering and Mathematics
    //       </p>
    //     </div>

    //     <div className="text-left ml-32 mt-8">
    //       <p className="font-bold text-xl">Explore Programs</p>
    //     </div>

    //     <div className="mt-5 mb-5 flex flex-wrap justify-center gap-4">
    //       {Options.map((option, index) => (
    //         <Link to={option.link} key={index}>
    //           <button
    //             className="h-28 w-52 bg-gray- border border-black rounded-lg flex flex-col items-center justify-center hover:drop-shadow-2xl transition-all"
    //             onClick={
    //               option.text === "B. Sc" || option.text === "BE/B. Tech"
    //                 ? () =>
    //                     openModal(
    //                       option.text === "B. Sc" ? "BSc" : "BE/B. Tech"
    //                     )
    //                 : undefined
    //             }
    //           >
    //             <img
    //               src={option.img}
    //               alt={option.text}
    //               className="h-16 rounded-lg"
    //             />
    //             <span className="hover:underline text-gray-800 font-medium hover:text-orange-600 mt-2">
    //               {option.text}
    //             </span>
    //           </button>
    //         </Link>
    //       ))}
    //     </div>

        
    //   </div>

    //   <hr />

    //   <div className="text-left ml-32 mt-8">
    //     <p className="font-bold text-xl">Top Cities</p>
    //   </div>

    //   <div className="flex justify-center mb-4">
    //     <button
    //       onClick={handlePrev}
    //       disabled={startIndex === 0}
    //       className={`arrow-button ${startIndex === 0 ? "disabled" : ""}`}
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //         className="w-6 h-6"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth={2}
    //           d="M15 19l-7-7 7-7"
    //         />
    //       </svg>
    //     </button>

    //     <div className="mb-8 mt-8 flex flex-wrap justify-center gap-4">
    //       {cities
    //         .slice(startIndex, startIndex + citiesPerPage)
    //         .map((city, index) => (
    //           <Link to="#" key={index}>
    //             <button className="h-28 w-44 border border-black rounded-lg flex flex-col items-center justify-center">
    //               <img
    //                 src={city.img}
    //                 alt={city.name}
    //                 className="h-16 rounded-lg"
    //               />
    //               <span className="hover:underline text-gray-800 font-medium hover:text-orange-600 mt-2">
    //                 {city.name}
    //               </span>
    //             </button>
    //           </Link>
    //         ))}
    //     </div>

    //     <button
    //       onClick={handleNext}
    //       disabled={startIndex + citiesPerPage >= cities.length}
    //       className={`arrow-button ${
    //         startIndex + citiesPerPage >= cities.length ? "disabled" : ""
    //       }`}
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //         className="w-6 h-6"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth={2}
    //           d="M9 5l7 7-7 7"
    //         />
    //       </svg>
    //     </button>
    //   </div>

    //   {showModal && <MyModal closeModal={closeModal} type={selectedType} />}
    // </div>

    <div>
      <div
        id="image"
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${BackgroundImages[bgIndex]})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>

        <div className="relative flex flex-col items-start justify-center h-full px-4 md:px-24">
          <div className="text-white text-left">
            <div id="passion" className="s text-gray-800 mt-6 md:mt-6">
              <div className="container">
                <div className="text">
                  <span className="text-white">FOLLOW YOUR </span>
                  <span className="text-orange-600">PASSION</span>
                </div>
              </div>
            </div>

            <p id="stem" className="text-lg font-medium mb-4">
              Science Technology Engineering Mathematics (STEM)
            </p>


            <div className="relative mb-6">
              <input
                type="text"
                id="search"
                placeholder="Search for colleges, courses, exams, QnAs...."
                className="px-4 py-3 md:py-4 pl-12 h-10 md:h-12 w-full md:w-96 border border-gray-500 rounded-2xl focus:outline-none focus:border-blue-500"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 md:w-7 h-6 md:h-7 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                style={{ fontSize: "1.5em" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m2.85-3.65A7.5 7.5 0 1112 4.5a7.5 7.5 0 017.5 7.5z"
                />
              </svg>
            </div>

            <div className="options-container absolute top-0 right-0 mt-40 mr-4 md:mr-36">
              {Options.map((option, index) => (
                <Link to={option.link} key={index}>
                  <div
                    className={`option-item text-left text-lg md:text-3xl font-sans font-semibold text-gray-800 mb-2 mr-40 ${
                      optionIndex === index
                        ? "font-bold text-orange-600 text-decoration-line: underline"
                        : "text-white"
                    }`}
                    onClick={
                      option.text === "B. Sc" || option.text === "BE/B. Tech"
                        ? () =>
                            openModal(
                              option.text === "B. Sc" ? "BSc" : "BE/B. Tech"
                            )
                        : undefined
                    }
                  >
                    {option.text}
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </div>

      <div className="text-center pb-8">
        <div>
          <p className="text-2xl font-mono p-4 mt-4 text-gray-800 bg-neutral-200">
            Discover Bachelor's Program in Science, Technology, Engineering and
            Mathematics
          </p>
        </div>

        <div className="text-left ml-32 mt-8">
          <p className="font-bold text-xl">Explore Programs</p>
        </div>

        <div className="mt-5 mb-5 flex flex-wrap justify-center gap-4">
          {Options.map((option, index) => (
            <Link to={option.link} key={index}>
              <button
                className="h-28 w-52 bg-gray-200 border border-black rounded-lg flex flex-col items-center justify-center hover:drop-shadow-2xl transition-all"
                onClick={
                  option.text === "B. Sc" || option.text === "BE/B. Tech"
                    ? () =>
                        openModal(
                          option.text === "B. Sc" ? "BSc" : "BE/B. Tech"
                        )
                    : undefined
                }
              >
                <img
                  src={option.img}
                  alt={option.text}
                  className="h-16 rounded-lg"
                />
                <span className="hover:underline text-gray-800 font-medium hover:text-orange-600 mt-2">
                  {option.text}
                </span>
              </button>
            </Link>
          ))}
        </div>
      </div>

      <hr />

      <div className="text-left ml-32 mt-8">
        <p className="font-bold text-xl">Top Cities</p>
      </div>

      <div className="flex justify-center mb-4">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`arrow-button ${startIndex === 0 ? "disabled" : ""}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <div className="mb-8 mt-8 flex flex-wrap justify-center gap-4">
          {cities
            .slice(startIndex, startIndex + citiesPerPage)
            .map((city, index) => (
              <Link to="#" key={index}>
                <button className="h-28 w-44 border border-black rounded-lg flex flex-col items-center justify-center">
                  <img
                    src={city.img}
                    alt={city.name}
                    className="h-16 rounded-lg"
                  />
                  <span className="hover:underline text-gray-800 font-medium hover:text-orange-600 mt-2">
                    {city.name}
                  </span>
                </button>
              </Link>
            ))}
        </div>

        <button
          onClick={handleNext}
          disabled={startIndex + citiesPerPage >= cities.length}
          className={`arrow-button ${
            startIndex + citiesPerPage >= cities.length ? "disabled" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

       <hr />

      <div className="ml-32 mr-36 min-h-screen flex flex-col">
        <div className="mt-10 flex flex-row space-x-4 mb-10">
          <div className="flex-shrink-0 w-72 h-40 bg-gray-200 rounded-md shadow-lg p-4">
            <BlogListing />
          </div>
          <div className="flex-shrink-0 w-72 h-40 bg-gray-200 rounded-md shadow-lg p-4">
            <BlogListing />
          </div>
          <div className="flex-shrink-0 w-72 h-40 bg-gray-200 rounded-md shadow-lg p-4">
            <BlogListing />
          </div>
          <div className="flex-shrink-0 w-72 h-40 bg-gray-200 rounded-md shadow-lg p-4">
            <BlogListing />
          </div>
        </div>
      </div>
      {showModal && <MyModal closeModal={closeModal} type={selectedType} />}
    </div>


  );
}
