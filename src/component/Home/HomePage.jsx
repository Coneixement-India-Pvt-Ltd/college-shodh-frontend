import React from "react";
import Home from "./Home";
import Programs from "./Programs";
import TopCities from "./TopCities";
import HomeBlog from "./HomeBlog";
import FAQ from "./FAQ";

const HomePage = () => {
  return (
    <>
      <Home />
      <Programs />
      <TopCities />
      {/* <HomeBlog /> */}
      <FAQ/>
    </>
  );
};

export default HomePage;
