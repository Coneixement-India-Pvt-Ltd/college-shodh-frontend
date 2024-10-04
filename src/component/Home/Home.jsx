import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MyModal from "../Modals/Modal";
import barch_image from "../../assets/barch.jpg";
import bpharma from "../../assets/bpharma.jpg";
import bca from "../../assets/bca.jpg";
import bebtech from "../../assets/bebtech.jpg";
import "../../styles/Home/Home.css";
import { IoArrowForwardOutline } from "react-icons/io5";

const BackgroundImages = [barch_image, bpharma, bca, bebtech];

// const Options = [
//   { text: "B. Arch", img: "./agri.png", link: "#" },
//   { text: "B. Pharm", img: "./Pharma.png", link: "#" },
//   { text: "BCA", img: "./BCA.png", link: "#" },
//   { text: "BE/B. Tech", img: "./Btech.png", link: "#" },
//   { text: "B. Sc", img: "./BSC.png", link: "#" },
// ];

export default function Home() {
  // const [showModal, setShowModal] = useState(false);
  // const [selectedType, setSelectedType] = useState("BSc"); // Default to BSc

  // const closeModal = () => setShowModal(false);
  // const openModal = (type) => {
  //   setShowModal(true);
  //   setSelectedType(type);
  // };

  const [bgIndex, setBgIndex] = useState(0);
  // const [optionIndex, setOptionIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setBgIndex((prevIndex) => (prevIndex + 1) % BackgroundImages.length);
  //     setOptionIndex((prevIndex) => (prevIndex + 1) % Options.length);
  //   }, 5000);

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div>
      <div
        id="image"
        className="relative h-96 bg-cover bg-center bg-[rgba(0,0,0,0.4)] bg-blend-darken"
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
              <form className="w-full flex"
                onSubmit={(e) => {
                  e.preventDefault()
                  if (e.target.search.value.trim() === "") return
                  window.location.href = `/colleges?search=${e.target.search.value}`
                }}>
                <div className="input+svg">
                  <input
                    type="text"
                    id="search"
                    placeholder="Search for colleges, courses, exams, QnAs...."
                    className="text-black px-4 py-3 md:py-4 pl-12 h-10 md:h-12 w-full md:w-96 border border-gray-500 rounded-2xl focus:outline-none focus:border-blue-500"
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
                <button type="submit" className="bg-orange-600 text-white px-4 py-3 md:py-4 ml-2 rounded-2xl">
                  <IoArrowForwardOutline />
                </button>
              </form>
            </div>

            {/* <div className="options-container absolute top-0 right-0 mt-40 mr-4 md:mr-36">
              {Options.map((option, index) => (
                <Link to={option.link} key={index}>
                  <div
                    className={`option-item text-left text-lg md:text-3xl font-sans font-semibold text-gray-800 mb-2 mr-40 ${optionIndex === index
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
            </div> */}
          </div>
        </div>
      </div>

      {/* {showModal && <MyModal closeModal={closeModal} type={selectedType} />} */}
    </div>
  );
}
