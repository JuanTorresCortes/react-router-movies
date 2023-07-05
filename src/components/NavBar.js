import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="video-container">
        <video
          src="https://m.media-amazon.com/images/I/71c0gO10-sL.mp4?assetSwapper=1"
          autoPlay
          loop
          muted
        />
      </div>
      <div className="nav-bar">
        <Link to={"/"} className="nav-link">
          Home
        </Link>
        <Link to={"/favorites"} className="nav-link">
          Favorite Movies 
        </Link>
        <Link to={"/movie/create-movie"} className="nav-link">
          Add movie
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
