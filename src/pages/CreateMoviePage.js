import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const CreateMoviePage = () => {
  // State variables for capturing form input values
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");
  const [runtime, setRuntime] = useState("");
  const [actors, setActors] = useState("");
  const [plot, setPlot] = useState("");
  const [src, setSrc] = useState("");

  const navigate = useNavigate();
  const { setData } = useOutletContext();

  // Handle form submission
  const handleOnSubmit = () => {
    // Create a new movie object with the form input values
    const newMovie = {
      title,
      year,
      director,
      genre,
      rating,
      runtime,
      actors,
      plot,
      src,
      id: uuid(),
    };

    // Update the data state with the new movie
    setData((prevState) => [...prevState, newMovie]);

    // Reset form input values
    setTitle("");
    setYear("");
    setDirector("");
    setGenre("");
    setRating("");
    setRuntime("");
    setActors("");
    setPlot("");
    setSrc("");

    // Navigate back to the home page
    navigate("/");
  };

  return (
    <div className="add-movie-pg">
      <h1>Add Movie</h1>
      <div>
        {/* Input fields for capturing movie details */}
        <label htmlFor="title">Title:</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <br />
        <label htmlFor="year">Year:</label>
        <input value={year} onChange={(e) => setYear(e.target.value)} />
        <br />
        <label htmlFor="director">Director:</label>
        <input value={director} onChange={(e) => setDirector(e.target.value)} />
        <br />
        <label htmlFor="genre">Genre:</label>
        <input value={genre} onChange={(e) => setGenre(e.target.value)} />
        <br />
        <label htmlFor="rating">Rating:</label>
        <input value={rating} onChange={(e) => setRating(e.target.value)} />
        <br />
        <label htmlFor="runtime">Runtime:</label>
        <input value={runtime} onChange={(e) => setRuntime(e.target.value)} />
        <br />
        <label htmlFor="actors">Actors:</label>
        <input value={actors} onChange={(e) => setActors(e.target.value)} />
        <br />
        <label htmlFor="plot">Plot:</label>
        <textarea value={plot} onChange={(e) => setPlot(e.target.value)} />
        <br />
        <label htmlFor="src">Image:</label>
        <input value={src} onChange={(e) => setSrc(e.target.value)} />
        <br />
        {/* Submit button triggers handleOnSubmit */}
        <button onClick={handleOnSubmit} style={{ backgroundColor: "green" }}>
          Submit
        </button>
      </div>
      <div className="add-movie-test">
        <h2>Copy and paste</h2>
        <p>title: John Wick</p>
        <p>year: 2014</p>
        <p>director: Chad Stahelski</p>
        <p>genre: Action, Thriller</p>
        <p>rating: 7.4</p>
        <p>runtime: 101</p>
        <p>actors: Keanu Reeves", "Michael Nyqvist", "Alfie Allen", "Willem Dafoe", "Adrianne Palicki</p>
        <p>plot: An ex-hitman comes out of retirement to track down the gangsters that took everything from him.</p>
        <p>src: https://tse1.mm.bing.net/th?id=OIP.aCANSGt2aJYD72EaiV4mFgHaJ4&pid=Api&P=0&h=180</p>
      </div>
    </div>
  );
};

export default CreateMoviePage;
