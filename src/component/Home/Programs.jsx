import React from "react";
import { Link } from "react-router-dom";

const Options = [
  { text: "B. Arch", img: "./agri.png", link: "#" },
  { text: "B. Pharm", img: "./Pharma.png", link: "#" },
  { text: "BCA", img: "./BCA.png", link: "#" },
  { text: "BE/B. Tech", img: "./Btech.png", link: "#" },
  { text: "B. Sc", img: "./BSC.png", link: "#" },
];

const Programs = () => {
  return (
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
                      openModal(option.text === "B. Sc" ? "BSc" : "BE/B. Tech")
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
      <hr />
    </div>
  );
};

export default Programs;
