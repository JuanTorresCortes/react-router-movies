# Movie Catalog App

This is a Movie Catalog App built using React and React Router. It allows users to browse a collection of movies, add movies to their favorites list, edit movie details, delete movies, and create new movies.

## Features

- View a list of movies on the home page
- Click on a movie to view its details
- Add movies to your favorites list
- Edit movie details
- Delete movies
- Create new movies

## Installation

1. Clone the repository:
https://github.com/JuanTorresCortes/react-router-movies.git

2. Navigate to the project directory:

3. Install the dependencies:

4. Start the development server:

5. Open the app in your browser at [http://localhost:3000](http://localhost:3000).

## Folder Structure

The project follows a standard React folder structure:

├── public
│ ├── index.html
│ └── ...
└── src
├── components
│ ├── HomeComponent.js
│ ├── MovieCard.js
│ ├── MovieDetailsPage.js
│ ├── FavoriteMoviePage.js
│ ├── CreateMoviePage.js
│ ├── EditMovieComponent.js
│ ├── NavBar.js
│ ├── SideBar.js
│ └── ...
├── data
│ └── movies.js
├── App.js
├── index.js
└── ...


- The `public` folder contains the static HTML file and other assets.
- The `src` folder contains the application source code.
- The `components` folder contains reusable React components used in the app.
- The `data` folder contains the movie data.
- The `App.js` file is the root component of the application.

## Dependencies

The app uses the following dependencies:

- React
- React Router
- react-router-dom
- uuid

You can find the complete list of dependencies in the `package.json` file.

## Usage

### Creating New Movies

To create a new movie and add it to the app:

1. Navigate to the "Add Movie" page by clicking on the "Add movie" link in the navigation bar.
2. Fill in the details of the new movie in the input fields provided.
3. Click the "Submit" button to add the movie to the movie catalog.
4. The new movie will be added to the list of movies and can be viewed on the home page.

### Viewing Movie Details

To view the details of a movie:

1. On the home page, browse the list of movies.
2. Click on a movie card to view its details.
3. You will be redirected to the movie details page where you can see the movie's title, year, director, genre, rating, runtime, actors, plot, and image.

### Adding Movies to Favorites

To add a movie to your favorites list:

1. On the movie details page, click the "Add To Favorites List" button.
2. The movie will be added to your favorites list.
3. You can view your favorites list by clicking on the "Favorite Movies" link in the navigation bar.

### Editing Movie Details

To edit the details of a movie:

1. On the movie details page, click the "Edit Movie" button.
2. You will be redirected to the edit movie page.
3. Modify the details of the movie in the input fields provided.
4. Click the "Submit" button to save the changes.
5. The movie details will be updated and reflected on the home page.

### Deleting Movies

To delete a movie:

1. On the movie details page, click the "Delete Movie" button.
2. The movie will be permanently removed from the movie catalog.
3. You will be redirected to the home page.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the app, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
