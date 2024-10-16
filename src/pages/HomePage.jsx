import React from "react";
import Home from "../component/Home/Home";
import Programs from "../component/Home/Programs";
import TopCities from "../component/Home/TopCities";
import HomeBlog from "../component/Home/HomeBlog";
import FAQs from "../component/Home/FAQs";

const HomePage = () => {
  return (
    <>
      <Home />
      <Programs />
      <TopCities />
      {/* <HomeBlog /> */}
      <FAQs />
    </>
  );
};

export default HomePage;
