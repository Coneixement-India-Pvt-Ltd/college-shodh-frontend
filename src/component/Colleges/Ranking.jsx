import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';

function Ranking({ filterNaac, handleNaacFilter, sortOrder, handleSortChange, onStateChange }) {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    onStateChange(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    onStateChange(event.target.value);
  };

  return (
    <Grid container spacing={2} className="ml-2 mt-5">
      <Grid item xs={12} sm={6} md={3}>
        <Select
          value={filterNaac}
          onChange={handleNaacFilter}
          displayEmpty
          fullWidth
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
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Select
          value={sortOrder}
          onChange={handleSortChange}
          displayEmpty
          fullWidth
          inputProps={{ 'aria-label': 'Sort Order' }}
        >
          <MenuItem value="" disabled>
            Sort by NIRF Ranking
          </MenuItem>
          <MenuItem value="lowToHigh">Low to High</MenuItem>
          <MenuItem value="highToLow">High to Low</MenuItem>
        </Select>
      </Grid>
      
      <Grid item xs={12} sm={6} md={3}>
        <Select
          value={selectedState}
          onChange={handleStateChange}
          displayEmpty
          fullWidth
          inputProps={{ 'aria-label': 'State Filter' }}
        >
          <MenuItem value="" disabled>
            Select State
          </MenuItem>
          <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
          <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
          <MenuItem value="Assam">Assam</MenuItem>
          <MenuItem value="Bihar">Bihar</MenuItem>
          <MenuItem value="Chhattisgarh">Chhattisgarh</MenuItem>
          <MenuItem value="Gujarat">Gujarat</MenuItem>
          <MenuItem value="Haryana">Haryana</MenuItem>
          <MenuItem value="Himachal Pradesh">Himachal Pradesh</MenuItem>
          <MenuItem value="Jammu and Kashmir">Jammu and Kashmir</MenuItem>
          <MenuItem value="Goa">Goa</MenuItem>
          <MenuItem value="Jharkhand">Jharkhand</MenuItem>
          <MenuItem value="Karnataka">Karnataka</MenuItem>
          <MenuItem value="Kerala">Kerala</MenuItem>
          <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
          <MenuItem value="Maharashtra">Maharashtra</MenuItem>
          <MenuItem value="Manipur">Manipur</MenuItem>
          <MenuItem value="Meghalaya">Meghalaya</MenuItem>
          <MenuItem value="Mizoram">Mizoram</MenuItem>
          <MenuItem value="Nagaland">Nagaland</MenuItem>
          <MenuItem value="Odisha">Odisha</MenuItem>
          <MenuItem value="Punjab">Punjab</MenuItem>
          <MenuItem value="Rajasthan">Rajasthan</MenuItem>
          <MenuItem value="Sikkim">Sikkim</MenuItem>
          <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
          <MenuItem value="Telangana">Telangana</MenuItem>
          <MenuItem value="Tripura">Tripura</MenuItem>
          <MenuItem value="Uttarakhand">Uttarakhand</MenuItem>
          <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
          <MenuItem value="West Bengal">West Bengal</MenuItem>
          <MenuItem value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</MenuItem>
          <MenuItem value="Chandigarh">Chandigarh</MenuItem>
          <MenuItem value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</MenuItem>
          <MenuItem value="Daman and Diu">Daman and Diu</MenuItem>
          <MenuItem value="Delhi">Delhi</MenuItem>
          <MenuItem value="Lakshadweep">Lakshadweep</MenuItem>
          <MenuItem value="Puducherry">Puducherry</MenuItem>
        </Select>
      </Grid>

      <Grid item xs={12} sm={6} md={3}>
        <Select
          value={selectedCity}
          onChange={handleCityChange}
          displayEmpty
          fullWidth
          inputProps={{ 'aria-label': 'City Filter' }}
        >
          <MenuItem value="" disabled>
            Select City
          </MenuItem>
          <MenuItem value="Pune">Pune</MenuItem>
          <MenuItem value="Mu">Mumbai</MenuItem>
          <MenuItem value="Ch">Chennai</MenuItem>
          <MenuItem value="Dl">Delhi</MenuItem>
          <MenuItem value="Hy">Hyderabad</MenuItem>
          <MenuItem value="GA">Bengaluru</MenuItem>
          <MenuItem value="HR">Jaipur</MenuItem>
          <MenuItem value="HP">Ahemdabad</MenuItem>
          <MenuItem value="JK">Kolkata</MenuItem>
          <MenuItem value="GA">Indore</MenuItem>
        </Select>
      </Grid>

      
    </Grid>
  );
}

export default Ranking;



