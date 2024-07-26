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
