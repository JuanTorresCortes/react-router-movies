// Home page: Displays a list of movies.
import React from "react";
import HomeComponent from "../components/HomeComponent";
import { useOutletContext } from "react-router-dom";

const HomePage = () => {
  const { data } = useOutletContext();
  return (
    <div className="home-page">
      <HomeComponent data={data} />
    </div>
  );
};

export default HomePage;
