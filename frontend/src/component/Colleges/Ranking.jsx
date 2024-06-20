import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

function Ranking({ filterNaac, handleNaacFilter, sortOrder, handleSortChange }) {
  return (
    <div className="flex justify-evenly mt-5">
      <Select
        value={filterNaac}
        onChange={handleNaacFilter}
        displayEmpty
        inputProps={{ 'aria-label': 'NAAC Filter' }}
      >
        <MenuItem value="" disabled>
          NAAC Rating
        </MenuItem>
        <MenuItem value="NAAC A"> NAAC A </MenuItem>
        <MenuItem value="NAAC A+"> NAAC A+ </MenuItem>
        <MenuItem value="NAAC A++"> NAAC A++ </MenuItem>
        <MenuItem value="NAAC B">NAAC B</MenuItem>
        <MenuItem value="NAAC B+">NAAC B+</MenuItem>
        <MenuItem value="NAAC B++">NAAC B++</MenuItem>
        <MenuItem value="NAAC C">NAAC C</MenuItem>
        <MenuItem value="NAAC D">NAAC D</MenuItem>
      </Select>

      <Select
        value={sortOrder}
        onChange={handleSortChange}
        displayEmpty
        inputProps={{ 'aria-label': 'Sort Order' }}
      >
        <MenuItem value="" disabled>
          Sort by NIRF Ranking
        </MenuItem>
        <MenuItem value="lowToHigh">Low to High</MenuItem>
        <MenuItem value="highToLow">High to Low</MenuItem>
      </Select>
    </div>
  );
}

export default Ranking;
