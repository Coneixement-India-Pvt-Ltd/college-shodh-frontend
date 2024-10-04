import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Ranking from "../component/Colleges/Ranking";
import Pagination from "../component/Colleges/Pagination";
import HashLoader from "react-spinners/HashLoader";
// import "../styles/Colleges/Colleges.css";

// for card icons
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";

// modal
import MyModal from "../component/Modals/Modal";
import CollegeCard from "../component/Colleges/CollegeCard";

const Options = [
  { text: "B. Arch", course: "Architecture" },
  { text: "B. Pharm", course: "Pharmacy" },
  { text: "BCA", course: "BCA" },
  { text: "BE/B. Tech", course: "Engineering" },
  { text: "B. Sc", course: "Science" },
];

function Colleges() {
  // Get the query from the URL
  const query = new URLSearchParams(window.location.search);
  const searchQuery = query.get("search") || "";

  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState(searchQuery);
  const [filterNaac, setFilterNaac] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true); // Added loading state
  const collegesPerPage = 10;

  useEffect(() => {
    axios
      .get("https://college-shodh-backend.onrender.com/api/courses")
      .then((response) => {
        setColleges(response.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleNaacFilter = (event) => {
    setFilterNaac(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    const sortedColleges = [...colleges].sort((a, b) => {
      if (event.target.value === "lowToHigh") {
        return a.nirf - b.nirf;
      } else if (event.target.value === "highToLow") {
        return b.nirf - a.nirf;
      }
      return 0;
    });
    setColleges(sortedColleges);
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
  };

  const handleCourseChange = (course) => {
    setSelectedCourse(course.name);
    setCurrentPage(1); // Reset to the first page when course changes
  };

  const filteredColleges = colleges.filter((college) => {

    const isStateMatch = selectedState
      ? college.address.toLowerCase().includes(selectedState.toLowerCase())
      : true;
    const isCourseMatch = selectedCourse
      ? college.dept &&
      college.dept.toLowerCase().includes(selectedCourse.toLowerCase())
      : true;
    return (
      (search === "" ||
        college.college_name.toLowerCase().includes(search.toLowerCase())) &&
      (!filterNaac || college.naac === filterNaac) &&
      isStateMatch &&
      isCourseMatch
    );
  });

  const totalPages = Math.ceil(filteredColleges.length / collegesPerPage);
  const displayedColleges = filteredColleges.slice(
    (currentPage - 1) * collegesPerPage,
    currentPage * collegesPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // modal
  const [showModal, setShowModal] = useState(false);
  const [selectedType, setSelectedType] = useState("BSc"); // Default to BSc

  const [optionIndex, setOptionIndex] = useState(0);

  const closeModal = (course) => {
    setShowModal(false);
    if (course) {
      handleCourseChange(course);
    }
  }
  const openModal = (type) => {
    setShowModal(true);
    setSelectedType(type);
  };

  const override = {
    display: "block",
    margin: "0 auto",
    borderWidth: "8px", // Adjust the border width to make the ring thicker
    marginTop: "-300px",
  };

  return (
    <>
      <div className="flex justify-evenly mt-5">
        {/* <h2 className="text-3xl font-sans font-bold text-black-700 mt-2">
          Follow Your Passion
        </h2> */}
        <div className="relative">
          <input
            type="text"
            id="search"
            value={search}
            onChange={(e) => {
              // Add query to the URL
              window.history.pushState(
                "",
                "",
                `/colleges?search=${e.target.value}`
              );
              setSearch(e.target.value)

            }}
            placeholder="Search college"
            className="p-2 h-11 w-96 mb-5 border border-black-400 rounded-2xl focus:outline-none focus:border-blue-600 text-center pl-10"
          />
          <SearchIcon className="absolute left-3 top-3 text-gray-400" />
        </div>
        <p className="mt-3 text-blue-700 font-bold font-sans text-xl">
          Total Colleges Found: {filteredColleges.length}
        </p>
      </div>

      {/* buttons */}
      <div className="mt-5 mb-5 btn-container flex justify-center gap-x-8">
        {Options.map((option, index) => (
          <Link to={option.link} key={index}>
            <button
              className="h-12 w-32 bg-[#569df4] border border-black-100 rounded-md hover:drop-shadow-lg"
              onClick={() => {
                if (option.text === "B. Sc" || option.text === "BE/B. Tech") {
                  openModal(option.text === "B. Sc" ? "BSc" : "BE/B. Tech")
                }
                else {
                  handleCourseChange({ name: option.course });
                }
              }
              }
            >
              <span className="hover:underline text-white font-medium">
                {option.text}
              </span>
            </button>
          </Link>
        ))}
      </div>

      {/* <div className="mt-5 mb-5 btn-container">
        {Options.map((option, index) => (
          <button
            className="h-12 w-32 bg-[#569df4] border border-black-100 rounded-md hover:drop-shadow-lg"
            key={index}
            onClick={() => {
              if (option.text === "B. Sc" || option.text === "BE/B. Tech") {
                openModal(option.text);
              } else {
                handleCourseChange(option.course);
              }
            }}
          >
            <span className="hover:underline text-white font-medium">
              {option.text}
            </span>
          </button>
        ))}
      </div> */}

      <h1 className="font-bold text-gray-500 font-mono flex justify-center">
        Following Your Passion in {selectedCourse}
      </h1>

      <div className="flex justify-between">
        <div className="w-1/4 ml-4 mt-4 mb-4">
          <Ranking
            filterNaac={filterNaac}
            handleNaacFilter={handleNaacFilter}
            sortOrder={sortOrder}
            handleSortChange={handleSortChange}
            onStateChange={handleStateChange}
          />
        </div>

        <div className="w-full pl-10 flex flex-col mt-3 items-center">
          {loading ? (
            <div className="flex justify-center items-center h-full w-full">
              <HashLoader
                size={100}
                color={"orange"}
                loading={loading}
                cssOverride={override}
              />
            </div>
          ) : (
            displayedColleges.map((college) => (
              <CollegeCard key={college._id} college={college} />
            ))
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
        {showModal && <MyModal closeModal={closeModal} type={selectedType} />}
      </div>
    </>
  );
}

export default Colleges;
