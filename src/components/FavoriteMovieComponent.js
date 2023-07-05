import React, { useEffect } from "react";
import { useOutletContext, useParams, useNavigate } from "react-router-dom";

const FavoriteMovieComponent = () => {
  const { setFavoriteMovie, data } = useOutletContext();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Find the movie with the matching ID from the data array
    const foundMovie = data.find((movie) => movie.id.toString() === id.toString());

    if (foundMovie) {
      setFavoriteMovie((prevFavorites) => {
        // Check if the movie already exists in favorites
        if (prevFavorites.find((movie) => movie.id === foundMovie.id)) {
          return prevFavorites; // No need to duplicate the movie
        }

        return [...prevFavorites, foundMovie]; // Add the movie to favorites
      });
    }

    navigate("/favorites");
  }, [id, data, navigate, setFavoriteMovie]);

  return (
    <div>
      <h1>FavoriteMovieComponent</h1>
    </div>
  );
};

export default FavoriteMovieComponent;
