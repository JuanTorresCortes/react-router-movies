import React, { useState, useEffect } from "react";
import { useParams, useOutletContext, useNavigate } from "react-router-dom";

const EditMovieComponent = () => {
  const [editTitle, setEditTitle] = useState("");
  const [editYear, setEditYear] = useState("");
  const [editDirector, setEditDirector] = useState("");
  const [editGenre, setEditGenre] = useState("");
  const [editRating, setEditRating] = useState("");
  const [editRuntime, setEditRuntime] = useState("");
  const [editActors, setEditActors] = useState("");
  const [editPlot, setEditPlot] = useState("");
  const [editSrc, setEditSrc] = useState("");
  
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, setData,setFavoriteMovie } = useOutletContext();

  useEffect(() => {
    // Update and populate the edit states with the selected movie details
    const foundMovie = data.find((movie) => movie.id.toString() === id);
    setEditTitle(foundMovie.title);
    setEditYear(foundMovie.year);
    setEditDirector(foundMovie.director);
    setEditGenre(foundMovie.genre);
    setEditRating(foundMovie.rating);
    setEditRuntime(foundMovie.runtime);
    setEditActors(foundMovie.actors);
    setEditPlot(foundMovie.plot);
    setEditSrc(foundMovie.src);
  }, [id, data]);

  // Create a function that handles the submit button below. It should update the current movie, which will update all the movies.
  // Once updated, it should redirect to the home page where you would see the updated movie.
  const handleSubmit = () => {
    setData((prevState) => {
      const updatedMovies = prevState.map((movie) => {
        if (movie.id.toString() === id) {
          movie.title = editTitle;
          movie.year = editYear;
          movie.director = editDirector;
          movie.genre = editGenre;
          movie.rating = editRating;
          movie.runtime = editRuntime;
          movie.actors = editActors;
          movie.plot = editPlot;
          movie.src = editSrc;
        }
        return movie;
      });
      return updatedMovies;
    });
    navigate("/");
  };

  const deleteMovie = () => {
    setData((prevState) => {
      const remainingMovies = prevState.filter(
        (movie) => movie.id.toString() !== id
      );
      return remainingMovies;
    });

    setFavoriteMovie((prevState) => {
      const remainingFavorites = prevState.filter(
        (movie) => movie.id.toString() !== id
      );
      return remainingFavorites;
    });
    navigate("/");
  };

  return (
    <div className="edit-component">
      <h1>Edit Movie:</h1>
      {/* Create input fields for title and content, and a button to submit changes */}
      <label htmlFor="title">Title: </label>
      <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
      <br />
      <label htmlFor="year">Year:</label>
        <input value={editYear} onChange={(e) => setEditYear(e.target.value)} />
        <br />
        <label htmlFor="director">Director:</label>
        <input value={editDirector} onChange={(e) => setEditDirector(e.target.value)} />
        <br />
        <label htmlFor="genre">Genre:</label>
        <input value={editGenre} onChange={(e) => setEditGenre(e.target.value)} />
        <br />
        <label htmlFor="rating">Rating:</label>
        <input value={editRating} onChange={(e) => setEditRating(e.target.value)} />
        <br />
        <label htmlFor="runtime">Runtime:</label>
        <input value={editRuntime} onChange={(e) => setEditRuntime(e.target.value)} />
        <br />
        <label htmlFor="actors">Actors:</label>
        <input value={editActors} onChange={(e) => setEditActors(e.target.value)} />
        <br />
        <label htmlFor="plot">Plot:</label>
        <textarea value={editPlot} onChange={(e) => setEditPlot(e.target.value)} />
        <br />
        <label htmlFor="src">Image:</label>
        <input value={editSrc} onChange={(e) => setEditSrc(e.target.value)} />
      
      <br />
      <button
        onClick={handleSubmit}
        style={{ backgroundColor: "green", margin: "1em" }}
      >
        Submit
      </button>
      <br />
      <button onClick={deleteMovie} style={{ backgroundColor: "red" }}>
        Delete Movie
      </button>
    </div>
  );
};

export default EditMovieComponent;
