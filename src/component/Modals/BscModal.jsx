import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./BscModal.css";

const MyModal = ({ closeModal, type }) => {
  // to stop scrolling when modal is open
  useEffect(() => {
    document.body.style.overflowY = "hidden"; // hide scroll
    return () => {
      document.body.style.overflowY = "scroll"; // back to normal scroll (cleanup fn)
    };
  }, []);

  const bscCourses = [
    { name: "Physics", img: "./Phy.png" },
    { name: "Chemistry", img: "./chemistry.png" },
    { name: "Biology", img: "./biology.png" },
    { name: "Mathematics", img: "./maths.png" },
    { name: "Microbiology", img: "./demoImg.png" },
    { name: "Nursing", img: "./Nursing.png" },
    { name: "Home Science", img: "./HomeScience.png" },
    { name: "Bio Technology", img: "./technology.png" },
    { name: "Environmental Science", img: "./Enviromental.png" },
    { name: "Agriculture", img: "./agriculture.png" },
    { name: "Economics", img: "./Phy.png" },
    { name: "Statistics", img: "./Phy.png" },
    { name: "Data Science", img: "./Phy.png" },
    { name: "Data Science and Application", img: "./Phy.png" },
    { name: "Biological Science", img: "./Phy.png" },
    { name: "Electronics", img: "./Phy.png" },
    { name: "Applied Geology", img: "./Phy.png" },
    { name: "Mathematics Scientific Computing", img: "./Phy.png" },
    { name: "Exploration Geophysics", img: "./Phy.png" },
    { name: "Computer Science", img: "./Phy.png" },
    { name: "IT", img: "./Phy.png" },
    { name: "Forensic Science", img: "./Phy.png" },
    { name: "Optometry", img: "./Phy.png" },
    { name: "Botany", img: "./Phy.png" },
    { name: "Zoology", img: "./Phy.png" },
    { name: "Bio Chemistry", img: "./Phy.png" },
    { name: "Psychology", img: "./Phy.png" },
    { name: "Fashion Design", img: "./Phy.png" },
    { name: "Food Technology", img: "./Phy.png" },
    { name: "Horticulture", img: "./Phy.png" },
    { name: "Animation", img: "./Phy.png" },
    { name: "Bioinformatics", img: "./Phy.png" },
    { name: "Geography", img: "./Phy.png" },
    { name: "Hospitality", img: "./Phy.png" },
    { name: "Medical Imaging Technology", img: "./Phy.png" },
    { name: "Physiotherapy", img: "./Phy.png" },
  ];

  const beCourses = [
    { name: "Computer Science", img: "./computer-science.png" },
    { name: "Electrical Engineering", img: "./Electrical.png" },
    { name: "Mechanical Engineering", img: "./Mechanical.png" },
    { name: "Civil Engineering", img: "./Civil.png" },
    { name: "Chemical Engineering", img: "./chemistry.png" },
    { name: "Aerospace Engineering", img: "./Aerospace.png" },
    { name: "Biomedical Engineering", img: "./microBio.png" },
    { name: "Environmental Engineering", img: "./Enviromental.png" },
    { name: "Computer Science & Engineering", img: "./Civil.png" },
    { name: "Electronic Engineering", img: "./Civil.png" },
    { name: "Agricultural Engineering", img: "./Civil.png" },
    { name: "Automobile Engineering", img: "./Civil.png" },
    { name: "Robotics Engineering", img: "./Civil.png" },
    { name: "Marine Engineering", img: "./Civil.png" },
    { name: "Petroleum Engineering", img: "./Civil.png" },
    { name: "Manufacturing Engineering", img: "./Civil.png" },
    { name: "Artificial Intelligence Engineering", img: "./Civil.png" },
    { name: "Information Technology Engineering", img: "./Civil.png" },
    { name: "Power Engineering", img: "./Civil.png" },
    { name: "Structural Engineering", img: "./Civil.png" },
    { name: "Food Technology Engineering", img: "./Civil.png" },
    { name: "Cyber Security Engineering", img: "./Civil.png" },
    { name: "Industrial Engineering", img: "./Civil.png" },
    { name: "Irrigation Engineering", img: "./Civil.png" },
    { name: "Biotechnology Engineering", img: "./Civil.png" },
    { name: "Aeronautical Engineering", img: "./Civil.png" },
    { name: "Construction Engineering", img: "./Civil.png" },
    { name: "Electronics & Telecommunication Engineering", img: "./Civil.png" },
    { name: "RF & Microwave Engineering", img: "./Civil.png" },
  ];

  const courses = type === "BSc" ? bscCourses : beCourses;

  const [currentPage, setCurrentPage] = useState(0);
  const coursesPerPage = 8; // Number of courses to display per page

  const handleNext = () => {
    if ((currentPage + 1) * coursesPerPage < courses.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const currentCourses = courses.slice(startIndex, endIndex);

  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h1 className="font-mono">{type === "BSc" ? "B. Sc Courses" : "BE/B. Tech Courses"}</h1>
        {currentCourses.map((course, index) => (
          <button className="model-btn" onClick={closeModal} key={index}>
            <img src={course.img} alt={course.name} />
            <span className="font-normal">{course.name}</span>
          </button>
        ))}
        <div className="pagination">
          <button onClick={handlePrev} disabled={currentPage === 0}>
            &lt; Prev
          </button>
          <button onClick={handleNext} disabled={endIndex >= courses.length}>
            Next &gt;
          </button>
        </div>
      </div>
    </>
  );
};

export default MyModal;
