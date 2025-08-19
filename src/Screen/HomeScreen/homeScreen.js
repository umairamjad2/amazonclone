import React from "react";
import "./homeScreen.css";
import HomeBanner from "./HomeBanner/homeBanner";
import HomeDetail from "./HomeDetail/homeDetail";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <HomeBanner />
      <HomeDetail />
    </div>
  );
};

export default HomeScreen;
