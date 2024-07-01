import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
//import State from './State';
import Ranking from './Ranking';

function Colleges() {
  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState('');
  const [filterNaac, setFilterNaac] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const collegesPerPage = 10;

  useEffect(() => {
    axios
      .get('https://college-shodh-backend.onrender.com/api/courses')

      .then((response) => {
        setColleges(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // const parseNirfRank = (nirfString) => {
  //   const match = nirfString.match(/NIRF\s*(\d+)/i);
  //   return match ? parseInt(match[1], 10) : null;
  // };

  const handleNaacFilter = (event) => {
    setFilterNaac(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    const sortedColleges = [...colleges].sort((a, b) => {
      if (event.target.value === 'lowToHigh') {
        return a.nirf - b.nirf;
      } else if (event.target.value === 'highToLow') {
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
      ? college.course && college.course.toLowerCase().includes(selectedCourse.toLowerCase())
      : true;
    return (
      (search === '' || college.name.toLowerCase().includes(search.toLowerCase())) &&
      (!filterNaac || college.naac === filterNaac) &&
      isStateMatch &&
      isCourseMatch
    );
  });

  const displayedColleges = filteredColleges.slice(
    currentPage * collegesPerPage,
    (currentPage + 1) * collegesPerPage
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div className="flex justify-evenly mt-5">
        <h2 className="text-3xl font-sans font-bold text-black-700 mt-2">Follow Your Passion</h2>
        <div className="relative">
          <input
            type="text"
            id="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search college"
            className="p-2 h-11 w-96 mb-5 border border-gray-400 rounded-2xl focus:outline-none focus:border-gray-600 text-center pl-10"
          />
          <SearchIcon className="absolute left-3 top-3 text-gray-400" />
        </div>
        {/* <p className="mt-3 text-blue-700 font-bold font-sans text-xl">Total Results: {filteredColleges.length}</p> */}
      </div>

      <div className='mt-5 mb-5 btn-container'>
        <button
          className={`h-16 w-32 bg-[#cbd5e1] border border-black-100 rounded-md hover:drop-shadow-lg ${selectedCourse === 'B. Arch' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => handleCourseChange('B. Arch')}
        >
          <span className="hover:underline text-gray-800 font-medium hover:text-orange-600">B. Arch</span>
        </button>

        <button
          className={`h-16 w-32 bg-[#cbd5e1] border border-black-100 rounded-md hover:drop-shadow-lg ${selectedCourse === 'B. Pharm' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => handleCourseChange('B. Pharm')}
        >
          <span className="hover:underline text-gray-800 font-medium hover:text-orange-600">B. Pharm</span>
        </button>

        <button
          className={`h-16 w-32 bg-[#cbd5e1] border border-black-100 rounded-md hover:drop-shadow-lg ${selectedCourse === 'BCA' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => handleCourseChange('BCA')}
        >
          <span className="hover:underline text-gray-800 font-medium hover:text-orange-600">BCA</span>
        </button>

        <button
          className={`h-16 w-32 bg-[#cbd5e1] border border-black-100 rounded-md hover:drop-shadow-lg ${selectedCourse === 'Engineering' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => handleCourseChange('Engineering')}
        >
          <span className="hover:underline text-gray-800 font-medium hover:text-orange-600">BE/B. Tech</span>
        </button>

        <button
          className={`h-16 w-32 bg-[#cbd5e1] border border-black-100 rounded-md hover:drop-shadow-lg ${selectedCourse === 'B. Sc' ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => handleCourseChange('B. Sc')}
        >
          <span className="hover:underline text-gray-800 font-medium hover:text-orange-600">B. Sc</span>
        </button>
      </div>

      <div className='mt-5 mb-5 btn-container'>
        <button id="science" className='h-16 w-96 bg-[#cbd5e1] border border-black-500 rounded-md hover:drop-shadow-lg'>
          <Link to="#" className="hover:underline text-gray-800 font-medium hover:text-orange-600">Top Cities</Link>
        </button>

        <button id="engineering" className='h-16 w-96 bg-[#cbd5e1] border border-black-800 rounded-md items-center hover:drop-shadow-lg'>
          <Link to="#" className="hover:underline text-gray-800 font-medium hover:text-orange-600">Top Colleges</Link>
        </button>
      </div>

      
      <div className="flex justify-between">
        
        <div className="w-1/4 ml-4 mt-4">
        <Ranking
          filterNaac={filterNaac}
          handleNaacFilter={handleNaacFilter}
          sortOrder={sortOrder}
          handleSortChange={handleSortChange}
          onStateChange={handleStateChange}
        />
      </div>

        <div className="w-full pl-10 flex flex-col items-center w-3/4">
          {displayedColleges.map((college, index) => (
            <div key={college._id} className="border-b border-gray-300 border rounded-lg p-4 mb-5 w-full mr-10">
              <h1 className="text-xl font-bold text-gray-900 mb-1 text-left">{college.college_name}</h1>

              <div className="flex flex-wrap">
                <div className="w-1/2">
                  <p className="text-sm text-gray-600 mb-2 text-left">Address: {college.address}</p>
                  <p className="text-sm text-gray-600 mb-2 text-left">University: {college.university}</p>
                  <p className="text-sm text-gray-600 mb-2 text-left">Programs: {college.course}</p>
                  <p className="text-sm text-gray-600 mb-2 text-left">Department: {college.dept}</p>
                  <p className="text-sm text-gray-600 mb-2 text-left">NIRF Rank: {college.nirf}</p>
                  <p className="text-sm text-gray-600 mb-2 text-left">NAAC: {college.naac}</p>
                  <p className="text-sm text-gray-600 mb-2 text-left">NBA: {college.nba}</p>
                </div>
                <div className="w-1/2">
                  <p className="text-sm text-gray-600 mb-2 text-left">Fees: {college.fees}</p>
                  <p className="text-sm text-gray-600 mb-2 text-left">Admission Criteria: {college.admission_criteria}</p>
                  <p className="text-sm text-gray-600 mb-2 text-left">Student Intake: {college.intake}</p>
                  <p className="text-sm text-gray-600 mb-2 text-left">Faculty Count: {college.faculty}</p>
                  <p className="text-sm text-gray-600 mb-2 text-left">Contact: {college.contact}</p>
                  <p className="text-sm text-gray-600 mb-2 text-left">Email: {college.email}</p>
                  {/* <p className="text-sm text-gray-600 mb-2 text-left">Website: {college.website}</p> */}
                </div>
              </div>
              <div className="flex justify-end mt-2">
                <Link to={college.website}>
                  <Button variant="contained" color="success">
                    Know more
                  </Button>
                </Link>
              </div>
            </div>
          ))}

          {filteredColleges.length > displayedColleges.length && (
            <div className="flex justify-end w-full">
              <button
                className="bg-blue-500 text-white p-2 rounded mt-2 mb-2 mr-5 w-44"
                onClick={handleNextPage}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Colleges;

