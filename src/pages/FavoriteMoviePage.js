import React from "react";
import MovieCard from "../components/MovieCard";
import { useOutletContext } from "react-router-dom";

const FavoriteMoviePage = () => {
  // Access the favoriteMovie data from the outlet context
  const { favoriteMovie } = useOutletContext();
  //const {favoriteMovieArray} = favoriteMovie
  //Convert favoriteMovie object to an array
  const favoriteMovieArray = Object.values(favoriteMovie);
  
  return (
    <div className="fav-movie-pg">
      <h1>Favorite Movie List</h1>
      <div className="fav-movie-component">
        {/* Iterate over the favoriteMovieArray and render a MovieCard component for each movie */}
        {favoriteMovieArray.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default FavoriteMoviePage;
