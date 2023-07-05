// MovieCard: Holds information of each movie that will be displayed in the Home component.
import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div
      className="movie-card"
      onClick={() => navigate(`/movie/${movie.id}/details`)}
    >
      <img src={movie.src} alt={movie.title} className="movie-image-card" />
      
    </div>
  );
};

export default MovieCard;
