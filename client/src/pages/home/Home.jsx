import React from "react";
import Banner from "./Banner";
import "./home.css"
import PopularClasses from "./PopularClasses";
import PopularInstructor from "./PopularInstructor";

export const Home = () => {
  return (
    <div >
     <Banner></Banner>
     <PopularClasses/>
     <PopularInstructor/>
    </div>
  );
};
