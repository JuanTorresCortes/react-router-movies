import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import CreateMoviePage from "./pages/CreateMoviePage";
import EditMovieComponent from "./components/EditMovieComponent";
import FavoriteMoviePage from "./pages/FavoriteMoviePage";
import FavoriteMovieComponent from "./components/FavoriteMovieComponent";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element:  <HomePage />
      },
      {
        // displays favorite movies list
        path: "favorites" ,
        element: <FavoriteMoviePage />
      },
      {
        path: "/movie/:id/favorites",
        element: <FavoriteMovieComponent />
      },
      {
        // Displays detailed information about a specific movie
        path: "/movie/:id/details",
        element: <MovieDetailsPage />,
      },
      {
        //Allows users to add a new movie
        path: "/movie/create-movie",
        element: <CreateMoviePage />
      },
      {
        path: "/movie/:id/edit",
        element: <EditMovieComponent />
      }
    ],
    
  },
  
  {
    // Displays a list of movies
    path: "home", 
    element: <HomePage />,
  },
  
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
