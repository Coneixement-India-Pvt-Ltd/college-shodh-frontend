import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import State from './State';
import Ranking from './Ranking';

function Colleges() {
  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState('');
  const [filterNaac, setFilterNaac] = useState('');
  const [sortOrder, setSortOrder] = useState('');
  const [selectedState, setSelectedState] = useState('');

  useEffect(() => {
    axios
      .get('/api/college')
      .then((response) => {
        const data = response.data.map((college) => ({
          ...college,
          nirf: parseNirfRank(college.nirf),
        }));
        setColleges(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const parseNirfRank = (nirfString) => {
    const match = nirfString.match(/NIRF\s*(\d+)/i);
    return match ? parseInt(match[1], 10) : null;
  };

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

  const filteredColleges = colleges.filter((college) => {
    const isStateMatch = selectedState
      ? college.address.toLowerCase().includes(selectedState.toLowerCase())
      : true;
    return (
      (search === '' || college.name.toLowerCase().includes(search.toLowerCase())) &&
      (!filterNaac || college.naac === filterNaac) &&
      isStateMatch
    );
  });

  return (
    <>
      <div className="flex justify-evenly mt-5">
        <h2 className="text-xl font-sans font-bold text-blue-700 mt-2">Follow Your Passion</h2>
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
        <p className="mt-3 text-red-700 font-bold font-sans text-xl">Total Results: {filteredColleges.length}</p>
      </div>

      <Ranking
        filterNaac={filterNaac}
        handleNaacFilter={handleNaacFilter}
        sortOrder={sortOrder}
        handleSortChange={handleSortChange}
      />

      <div className="flex justify-between mt-5">
        <State onStateChange={handleStateChange} />

        <div className="w-3/4 pl-10 pr-16 flex flex-col items-center">
          {filteredColleges.map((college) => (
            <div key={college.id} className="border-b border-gray-300 border rounded-lg p-4 mb-5 w-full mr-10">
              <h1 className="text-xl font-bold text-gray-900 mb-1"> {college.name} </h1>
              <p className="text-sm text-gray-600 mb-2">Address: {college.address} </p>
              <p className="text-sm text-gray-600 mb-2">{college.university} </p>
              <p className="text-sm text-gray-600 mb-2">NIRF Rank: {college.nirf} </p>
              <p className="text-sm text-gray-600 mb-2">NAAC: {college.naac} </p>
              <p className="text-sm text-gray-600 mb-2"> {college.date_of_estb} </p>
              <p className="text-sm text-gray-600 mb-2">Contact: {college.contact} </p>
              <p className="text-sm text-gray-600 mb-2">Principal: {college.principal} </p>
              <p className="text-sm text-gray-600 mb-2"> {college.email} </p>
              <div className="flex justify-end">
                <Link to={college.website}>
                  <Button variant="contained" color="success">Know more</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Colleges;





