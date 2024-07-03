import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import "./Ranking.css"; // Import the CSS file

function Ranking({
  filterNaac,
  handleNaacFilter,
  sortOrder,
  handleSortChange,
  onStateChange,
}) {
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [nirfRanking, setNirfRanking] = useState([0, 200]);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
    onStateChange(event.target.value);
  };

  const handleSliderChange = (event, newValue) => {
    setNirfRanking(newValue);
    handleSortChange(newValue);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
    onStateChange(event.target.value);
  };

  const naacOptions = [
    "NAAC A",
    "NAAC A+",
    "NAAC A++",
    "NAAC B",
    "NAAC B+",
    "NAAC B++",
    "NAAC C",
    "NAAC D",
  ];
  const stateOptions = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Goa",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];
  const cityOptions = [
    "Kurukshetra",
    "Mumbai",
    "Chennai",
    "Delhi",
    "Hyderabad",
    "Bengaluru",
    "Jaipur",
    "Ahemdabad",
    "Kolkata",
    "Indore",
  ];

  const formControlLabelStyle = {
    display: "flex",
    justifyContent: "flex-start",
  };

  return (
    <Grid container direction="column" className="outer-box">
      <Grid item className="Inner-Topic">
        <h5 className="Apply-Filter  font-bold mb-1 ">Apply Filter</h5>
      </Grid>

      <Grid item className="Inner-Topic">
        <hr />
        <h4 className="font-bold mb-2 sub-topic">Select City</h4>
        <hr/>
      </Grid>
      <div className="scrollable-container">
        {cityOptions.map((city) => (
          <Grid item key={city}>
            <FormControlLabel className="Check-Box p-0"
              control={
                <Checkbox
                 
                  checked={selectedCity === city}
                  onChange={handleCityChange}
                  value={city}
                />
              }
              label={city}
              style={formControlLabelStyle}
            />
          </Grid>
        ))}
      </div>

      <Grid item className="Inner-Topic">
        <hr />
        <h4 className="font-bold mb-1 sub-topic">Top State</h4>
        <hr/>
      </Grid>
      <div className="scrollable-container">
        {stateOptions.map((state) => (
          <Grid className="mb-0" item key={state}>
            <FormControlLabel className="Check-Box p-0"
              control={
                <Checkbox
                  checked={selectedState === state}
                  onChange={handleStateChange}
                  value={state}
                />
              }
              label={state}
              style={formControlLabelStyle}
            />
          </Grid>
        ))}
      </div>

      <Grid>
        <hr />
        <h2 className="font-bold mb-2 sub-topic">NAAC Rating</h2>
        <hr/>
      </Grid>
      <div className="scrollable-container">
        {naacOptions.map((option) => (
          <Grid item key={option}>
            <FormControlLabel className="Check-Box p-0"

              control={
                <Checkbox
                  checked={filterNaac === option}
                  onChange={(event) => handleNaacFilter(event.target.value)}
                  value={option}
                />
              }
              label={option}
              style={formControlLabelStyle}
            />
          </Grid>
        ))}
      </div>

      <Grid item className="Inner-Topic">
        <hr />
        <h2 className="font-bold mb-2 sub-topic">NIRF Ranking</h2>
        <hr/>
      </Grid>
      <Grid item>
        <Slider
          value={nirfRanking}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          min={0}
          max={200}
          step={1}
        />
      </Grid>
    </Grid>
  );
}

export default Ranking;
