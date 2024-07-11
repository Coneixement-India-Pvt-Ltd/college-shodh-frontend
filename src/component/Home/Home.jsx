import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyModal from "../Modals/BscModal";
import "./Home.css";

const BackgroundImages = [
  "./background1.jpg",
  "./background3.jpg",
  "./background4.jpg",
  "./background.jpg",
  "./background3.jpg",
];

const Options = [
  { text: "B. Arch", link: "#" },
  { text: "B. Pharm", link: "#" },
  { text: "BCA", link: "#" },
  { text: "BE/B. Tech", link: "#" },
  { text: "B. Sc", link: "#" },
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

  // bsc modal
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  // cities per page 10
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
    }, 2000); // Change background and option every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div
        id="image"
        className="h-96 flex items-start bg-cover relative"
        style={{ backgroundImage: `url(${BackgroundImages[bgIndex]})` }}
      >
        <div className="mt-12 md:mt-24 ml-4 md:ml-24">
          <p
            id="passion"
            className="text-2xl md:text-3xl font-sans font-bold text-gray-800 mb-2 md:mb-3 mt-6 md:mt-6"
          >
            FOLLOW YOUR PASSION
          </p>
          <p
            id="stem"
            className="text-base md:text-lg text-gray-800 mb-3 md:mb-5"
          >
            Science Technology Engineering Mathematics
          </p>
          <div className="relative mb-3 md:mb-6">
            <input
              type="text"
              id="search"
              placeholder="Search for colleges, courses, exams, QnAs...."
              className="px-3 md:px-4 py-3 md:py-4 pl-10 md:pl-12 h-10 md:h-11 w-full md:w-96 border border-gray-500 rounded-2xl focus:outline-none focus:border-blue-500"
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
        </div>
        
        <div className="options-container absolute top-0 right-0 mt-24 mr-4 md:mr-36">
          {Options.map((option, index) => (
            <Link to={option.link} key={index}>
              <div
                className={`option-item text-left text-lg md:text-3xl font-sans text-gray-800 mb-2 mr-72 ${
                  optionIndex === index ? "font-bold" : ""
                }`}
                onClick={option.text === "B. Sc" ? openModal : undefined}
              >
                {option.text}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-800 mt-5">
          Discover Bachelor's Program in Science and Engineering
        </p>
        <div className="mt-5 mb-5 flex flex-wrap justify-center gap-4">
          {Options.map((option, index) => (
            <Link to={option.link} key={index}>
              <button className="h-28 w-52 bg-[#cbd5e1] border border-black rounded-lg flex flex-col items-center   
              justify-center" onClick={option.text === "B. Sc" ? openModal : undefined}>
                <img
                  src="./science.png"
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

      <div className="text-center">
        <p className="font-bold">Top Cities</p>
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
      {showModal && <MyModal closeModal={closeModal} />}
    </div>
  );
}





