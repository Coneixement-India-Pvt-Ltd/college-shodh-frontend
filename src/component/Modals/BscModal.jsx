// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import "./BscModal.css";

// const MyModal = ({ closeModal, type }) => {
//   // to stop scrolling when modal is open
//   useEffect(() => {
//     document.body.style.overflowY = "hidden"; // hide scroll
//     return () => {
//       document.body.style.overflowY = "scroll"; // back to normal scroll (cleanup fn)
//     };
//   }, []);

//   const bscCourses = [
//     { name: "Physics", img: "./demoImg.png" },
//     { name: "Chemistry", img: "./demoImg.png" },
//     { name: "Biology", img: "./demoImg.png" },
//     { name: "Mathematics", img: "./demoImg.png" },
//     { name: "Microbiology", img: "./demoImg.png" },
//     { name: "Nursing", img: "./demoImg.png" },
//     { name: "Home Science", img: "./demoImg.png" },
//     { name: "Bio Technology", img: "./demoImg.png" },
//   ];

//   const beCourses = [
//     { name: "Computer Science", img: "./demoImg.png" },
//     { name: "Electrical Engineering", img: "./demoImg.png" },
//     { name: "Mechanical Engineering", img: "./demoImg.png" },
//     { name: "Civil Engineering", img: "./demoImg.png" },
//     { name: "Chemical Engineering", img: "./demoImg.png" },
//     { name: "Aerospace Engineering", img: "./demoImg.png" },
//     { name: "Biomedical Engineering", img: "./demoImg.png" },
//     { name: "Environmental Engineering", img: "./demoImg.png" },
//   ];

//   const courses = type === "BSc" ? bscCourses : beCourses;

//   return (
//     <>
//       <div className="modal-wrapper" onClick={closeModal}></div>
//       <div className="modal-container">
//         <h1>{type === "BSc" ? "B. Sc Courses" : "BE/B. Tech Courses"}</h1>
//         {courses.map((course, index) => (
//           <button className="model-btn" onClick={closeModal} key={index}>
//             <img src={course.img} alt={course.name} />
//             <span>{course.name}</span>
//           </button>
//         ))}

//         <div>
//           <button className="explore-btn">Explore More</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MyModal;


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
    { name: "Physics", img: "./demoImg.png" },
    { name: "Chemistry", img: "./demoImg.png" },
    { name: "Biology", img: "./demoImg.png" },
    { name: "Mathematics", img: "./demoImg.png" },
    { name: "Microbiology", img: "./demoImg.png" },
    { name: "Nursing", img: "./demoImg.png" },
    { name: "Home Science", img: "./demoImg.png" },
    { name: "Bio Technology", img: "./demoImg.png" },
    { name: "Environmental Science", img: "./demoImg.png" },
    { name: "Agriculture", img: "./demoImg.png" },
  ];

  const beCourses = [
    { name: "Computer Science", img: "./demoImg.png" },
    { name: "Electrical Engineering", img: "./demoImg.png" },
    { name: "Mechanical Engineering", img: "./demoImg.png" },
    { name: "Civil Engineering", img: "./demoImg.png" },
    { name: "Chemical Engineering", img: "./demoImg.png" },
    { name: "Aerospace Engineering", img: "./demoImg.png" },
    { name: "Biomedical Engineering", img: "./demoImg.png" },
    { name: "Environmental Engineering", img: "./demoImg.png" },
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
        <h1>{type === "BSc" ? "B. Sc Courses" : "BE/B. Tech Courses"}</h1>
        {currentCourses.map((course, index) => (
          <button className="model-btn" onClick={closeModal} key={index}>
            <img src={course.img} alt={course.name} />
            <span>{course.name}</span>
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
