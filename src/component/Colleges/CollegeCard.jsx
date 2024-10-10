import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { IoBuildSharp, IoCopy, IoLocationOutline } from "react-icons/io5";
import { FaRegBuilding, FaSearchLocation } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { FaLocationCrosshairs, FaMapLocationDot, FaPeopleGroup } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import naac_a_logo from "../../assets/NAAC/NAAC-A.png";
import nba_logo from "../../assets/nba.svg";
import nirf_logo from "../../assets/nirf.png";
import { accordionClasses, Snackbar } from "@mui/material";

const x = {
  "_id": "66b21df8c295c65c6d702bb7",
  "college_name": "NATIONAL INSTITUTE OF TECHNOLOGY (Dakshina Kannada)",
  "address": "Surathkal, Mangalore, Karnataka",
  "course": "Engineering",
  "dept": "Mechanical Engg.",
  "university": "Autonomous University",
  "nirf": null,
  "naac": null,
  "nba": "ACCREDITED (upto 30-06-2028)",
  "fees": "5 L",
  "admission_criteria": "10+2 : 75 %, Exams : JEE MainDASA UG",
  "intake": 175,
  "contact": "0824 2474000",
  "faculty": null,
  "email": [
    "director@nita.ac.in, nita.director@gmail.com"
  ],
  "website": "https://mech.nitk.ac.in/",
  "__v": 0
}


export default function CollegeCard({ college }) {

  function getNaacLogo(naac) {
    if (naac === "NAAC A") {
      return naac_a_logo;
    }
  }
  // console.log(college);

  function sanitizeAccreditation(a) {
    if (a.toLowerCase().startsWith("accredited")) {
      // Use Regex to find the date/year between the brackets
      const date = a.match(/\(([^)]+)\)/)[1];
      return date;
    }
    return null

  }

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }


  const action = (
    <React.Fragment>
      <Button size="small" onClick={handleClose}>
        <span className="text-yellow-300">Close</span>
      </Button>
    </React.Fragment>
  );



  return (
    <div
      id="college-card"
      key={college._id}
      className="lg:w-[70%] w-11/12 border-gray-300 border rounded-lg py-4 px-6 mb-5 hover:shadow-2xl transition-shadow"
    >
      <h1 className="text-2xl font-bold text-gray-900 text-left">
        {college.college_name}
      </h1>

      <div className="flex items-center gap-2">
        <IoLocationOutline />
        <p>{college.address}</p>
      </div>

      <div className="flex items-center gap-x-4 py-3">
        {/* Add NAAC condition using college.naac */}
        {college.naac && <img src={getNaacLogo(college.naac)} alt={college.naac} className="w-24" />}

        {sanitizeAccreditation(college.nba) &&
          <div className="flex flex-col justify-center items-center">
            <img src={nba_logo} alt="NBA" className="w-16" />
            <p className="font-bold">{
              sanitizeAccreditation(college.nba)
            }</p>
          </div>
        }
        {college.nirf &&
          <div className="flex flex-col justify-end mt-2 items-center">
            <img src={nirf_logo} alt="NIRF" className="w-16 pb-3" />
            <p className="font-bold">{college.nirf}</p>
          </div>
        }
      </div>

      <div className="dept_and_intake grid grid-cols-2 gap-x-16">
        <div className="flex justify-start w-full items-center group gap-2">
          <IoBuildSharp className="size-8 min-w-8" />
          <p
            className="font-semibold"
          >{college.dept}</p>
          <span
            className="invisible group-hover:visible absolute mb-16 mr-10 z-10 width-20 text-white text-sm bg-gray-900 rounded-lg p-1"
          >Department</span>
        </div>
        <div className="flex justify-start items-center group gap-2">
          <PiStudentFill className="size-8 min-w-8" />
          <p
            className="font-semibold"
          >{college.intake}</p>
          <span
            className="invisible group-hover:visible absolute mb-16 ml-10 z-10 width-20 text-white text-sm bg-gray-900 rounded-lg p-1"
          >Student Intake</span>
        </div>
      </div>

      <div className="faculty_and_criteria grid grid-cols-2 gap-x-16 mt-8">
        {
          college.faculty &&
          <div className="flex w-full justify-start items-center group gap-2">
            <FaPeopleGroup className="size-8 min-w-8" />
            <p
              className="font-semibold"

            >{college.faculty}</p>
            <span
              className="invisible group-hover:visible absolute mb-16 mr-10 z-10 width-20 text-white text-sm bg-gray-900 rounded-lg p-1"
            >Faculty Count</span>
          </div>
        }
        <div className="flex w-full justify-start items-center group gap-2">
          {/* criteria */}
          <IoNewspaperOutline className="size-8 min-w-8" />
          <p
            className="font-semibold"
          >{college.admission_criteria}</p>
          <span
            className="invisible group-hover:visible absolute mb-16 ml-10 z-10 width-20 text-white text-sm bg-gray-900 rounded-lg p-1"
          >Admission Criteria</span>
        </div>
      </div>
      <hr className="my-4" />
      <div className="email_phone_location_knowmore flex items-center justify-between gap-2 mt-8">
        <div className="icons flex flex-row justify-start gap-x-8 w-full">
          <div className="hover:cursor-pointer">
            {/* <MdEmail className="size-8" /> */}
            <FlipButton icon={<MdEmail className="size-6" />} onClick={() => {
              navigator.clipboard.writeText(college.email[0]);
              handleClick();

            }} />
          </div>
          <div className="hover:cursor-pointer">
            {/* <FaPhoneAlt className="size-6" /> */}
            <FlipButton icon={<FaPhoneAlt className="size-6" />} onClick={() => {
              navigator.clipboard.writeText(college.contact);
              handleClick();
            }} />
          </div>
          <div className="hover:cursor-pointer">
            <FlipButton icon={<FaMapLocationDot className="size-6" />} onClick={() => {
              window.open(`https://www.google.com/maps/search/?api=1&query=${college.college_name + " " + college.address}`);
            }}
              flipIcon={<FaSearchLocation className="size-6" />}
            />
          </div>
        </div>
        <Link
          to={college.website}
          target="_blank"
          rel="noreferrer"
          className=""
        >
          <button className="bg-[#569df4] hover:bg-blue-700 text-white py-2 px-4 rounded">
            KNOW MORE
          </button>
        </Link>
      </div>

      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Copied to clipboard"
        action={action}
      />
    </div>
  )
}

const styles = `
  .flip-button {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .flip-button__button {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #3f51b5;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.5s;
  }
  .flip-button__text {
    position: relative;
    z-index: 2;
  }
  .flip-button__flip-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #4caf50;
    color: #fff;
    padding: 10px 20px;
    font-size: 16px;
    transform: rotateY(180deg);
    backface-visibility: hidden;
    transition: all 0.5s;
  }
  .flip-button__button:hover .flip-button__text {
    transform: rotateY(-180deg);
    visibility: hidden;
  }
  .flip-button__button:hover .flip-button__flip-text {
    transform: rotateY(0deg);
  }
  `;

function FlipButton({
  onClick = () => { },
  icon,
  flipIcon,
}) {
  return (
    <div className="flip-button">

      <style>{styles}</style>
      <button className="flip-button__button rounded-lg" onClick={onClick}>
        <span className="flip-button__text">
          {icon}
        </span>

        <span className="flip-button__flip-text rounded-lg">
          {
            flipIcon ? flipIcon : <IoCopy className="size-6" />
          }
        </span>
      </button>
    </div>
  )
}
