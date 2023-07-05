import React from "react";
import { useState, useEffect } from "react";
import { useOutletContext, useParams, useNavigate } from "react-router-dom";

const MovieDetailsPage = () => {
  // State to hold the movie details
  const [movie, setMovie] = useState({});

  // Retrieve the movie ID from the URL params
  const { id } = useParams();

  // Access the data and other functions from the outlet context
  const { data } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Function to find the movie with the matching ID
    const findMovie = () => {
      const foundMovie = data.find(
        (movie) => movie.id.toString() === id.toString()
      );
      setMovie(foundMovie); // Update the movie state with the found movie
    };
    findMovie(); // Call the function to find the movie when the component mounts or the ID/data changes
  }, [id, data]);

  return (
    <div className="movie-details-page">
      <h1>Movie Details page</h1>
      {/* Button to add the movie to the favorites list */}
      <button
        style={{ backgroundColor: "green", margin: "1em" }}
        onClick={() => navigate(`/movie/${movie.id}/favorites`)}
      >
        Add To Favorites List
      </button>
      {/* Button to edit the movie */}
      <button
        style={{ backgroundColor: "green", margin: "1em" }}
        onClick={() => navigate(`/movie/${movie.id}/edit`)}
      >
        Edit Movie
      </button>
      <div>
        <div className="movie-image-container">
          {/* Display the movie image */}
          <img
            src={movie.src}
            alt={movie.title}
            className="movie-image"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Display movie title and year */}
        <h2>
          {movie.title} {movie.year}
        </h2>
        {/* Display movie rating */}
        <h3>Rating: {movie.rating}</h3>
        {/* Display movie director */}
        <h3> Director: {movie.director}</h3>
        {/* Display movie actors */}
        <h3>Starting Actors: {movie.actors}</h3>
        <div>
          {/* Display movie plot */}
          <h3>Plot</h3>
          <p>{movie.plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
