import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Ranking from "./Ranking";
import Pagination from "./Pagination"; // Import the Pagination component
import HashLoader from "react-spinners/HashLoader"; 

// for card icons
import { IoLocationOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";

// modal
import MyModal from "../Modals/BscModal";

const Options = [
  { text: "B. Arch", link: "#" },
  { text: "B. Pharm", link: "#" },
  { text: "BCA", link: "#" },
  { text: "BE/B. Tech", link: "#" },
  { text: "B. Sc", link: "#" },
];

function Colleges() {
  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState("");
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
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Ensure loading is false even if there's an error
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
    setSelectedCourse(course);
  };

  const filteredColleges = colleges.filter((college) => {
    const isStateMatch = selectedState
      ? college.address.toLowerCase().includes(selectedState.toLowerCase())
      : true;
    const isCourseMatch = selectedCourse
      ? college.course &&
        college.course.toLowerCase().includes(selectedCourse.toLowerCase())
      : true;
    return (
      (search === "" ||
        college.name.toLowerCase().includes(search.toLowerCase())) &&
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

  const closeModal = () => setShowModal(false);
  const openModal = (type) => {
    setShowModal(true);
    setSelectedType(type);
  };

  const override = {
    display: "block",
    margin: "0 auto",
    borderWidth: "8px" // Adjust the border width to make the ring thicker
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
            onChange={(e) => setSearch(e.target.value)}
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
      <div className="mt-5 mb-5 btn-container">
        {Options.map((option, index) => (
          <Link to={option.link} key={index}>
            <button
              className="h-12 w-32 bg-[#569df4] border border-black-100 rounded-md hover:drop-shadow-lg"
              onClick={
                option.text === "B. Sc" || option.text === "BE/B. Tech"
                  ? () =>
                      openModal(option.text === "B. Sc" ? "BSc" : "BE/B. Tech")
                  : undefined
              }
            >
              <span className="hover:underline text-white font-medium">
                {option.text}
              </span>
            </button>
          </Link>
        ))}
      </div>

      <h1 className="font-bold text-gray-500 font-mono">Following Your Passion in ...</h1>

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
              <div
                key={college._id}
                className="border-b border-gray-300 border rounded-lg p-2 pl-6 pr-6 mb-5 mr-32 ml-20 hover:shadow-2xl transition-shadow "
              >
                <h1 className="text-xl font-bold text-gray-900 text-left">
                  {college.college_name}
                </h1>

                <div className="flex flex-wrap">
                  <div className="w-1/2">
                    <p
                      className="text-sm text-gray-600 mb-2 text-left flex items-center
                    "
                    >
                      <IoLocationOutline className="text-orange-500 size-5 mr-1" />
                      <i> {college.address} </i> 
                      {/* &nbsp;
                      {college.university} */}
                    </p>

                    <p className="text-sm text-gray-600 mb-1 text-left flex items-center">
                      <FaRegBuilding className="text-orange-500 size-5 mr-2" />{" "}
                      <b> Dept: {college.dept} </b>
                    </p>
                    <p className="text-sm text-gray-600 mb-1 text-left flex items-center">
                      <PiStudentFill className="text-orange-500 size-5 mr-2" />{" "}
                      Student Intake: {college.intake}
                    </p>
                    <p className="text-sm text-gray-600 mb-1 text-left flex items-center">
                      <FaPeopleGroup className="text-orange-500 size-5 mr-2" />{" "}
                      Faculty Count: {college.faculty}
                    </p>

                    <div className="text-sm text-gray-600 mb-1 text-left flex items-center ">
                      <IoNewspaperOutline className="text-orange-500 mr-1" />{" "}
                      Admission Criteria:
                      <p>{college.admission_criteria}</p>
                    </div>
                  </div>

                  <div className="mt-7">
                    <p className="text-sm text-blue-400 font-bold mb-1 text-left">
                      NIRF Rank: {college.nirf}
                    </p>
                    <p className="text-sm text-blue-400 font-bold mb-1 text-left">
                      NBA: {college.nba}
                    </p>
                    <p className="text-sm text-blue-400 font-bold mb-1 text-left">
                      NAAC: {college.naac}
                    </p>
                  </div>

                  <hr className="w-full mb-2" />

                  <div>
                    <p className="text-sm text-gray-600 mb-1 text-left flex items-center">
                      <FaPhoneAlt className="mr-2 text-orange-400 size-4" />{" "}
                      {college.contact}
                    </p>
                    <p className="text-sm text-gray-600 mb-1 text-left flex items-center">
                      <MdEmail className="mr-2 text-orange-400 size-5" />{" "}
                      {college.email}
                    </p>
                  </div>

                  <div className="flex justify-end mt-2 ml-auto mb-1">
                    <Link to={college.website}>
                      <Button variant="contained" className="text-blue-800">
                        Know more
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
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

