// Home component: Fetches the list of movies from your list
// of fake movies and displays them in a list format.
import React from "react";
import MovieCard from "./MovieCard";
// import { useOutletContext } from 'react-router-dom'

const HomeComponent = ({ data }) => {
  // const {data} = useOutletContext()
  //console.log(data)
  return (
    <div className="home">
      {data.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default HomeComponent;
