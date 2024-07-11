import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./BscModal.css"

const MyModal = ({ closeModal }) => {
  // to stop scrolling when modal is open
  useEffect(() => {
    document.body.style.overflowY = "hidden"; // hide scroll
    return () => {
      document.body.style.overflowY = "scroll"; // back to normal scroll (cleanup fn)
    };
  }, []);

  const courses = [
    { name: "Physics", img: "./demoImg.png" },
    { name: "Chemistry", img: "./demoImg.png" },
    { name: "Biology", img: "./demoImg.png" },
    { name: "Mathematics", img: "./demoImg.png" },
    { name: "Microbiology", img: "./demoImg.png" },
    { name: "Nursing", img: "./demoImg.png" },
    { name: "Home Science", img: "./demoImg.png" },
    { name: "Bio Technology", img: "./demoImg.png" },
  ];

  return (
    <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
        <h1>B.Sc Courses</h1>
        {courses.map((course, index) => (
          <Link to="#" key={index}>
            <button className="model-btn" onClick={closeModal}>
              <img
                src={course.img}
                // className="ml-16"
              />
              <span>{course.name}</span>
            </button>
          </Link>
        ))}

        <div>
          <button className="explore-btn">Explore More</button>
        </div>
      </div>
    </>
  );
};

export default MyModal;
