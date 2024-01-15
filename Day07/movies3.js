const movieList = {
    DCMovies: {
      movie1: {
        title: "The Dark Knight",
        year: 2008,
      },
      movie2: {
        title: "Batman Begins",
        year: 2005,
      },
    },
    MCUMovies: {
      movie1: {
        title: "Avengers: Endgame",
        year: 2019,
      },
      movie2: {
        title: "Black Panther",
        year: 2018,
      },
    },
  };
  
  // Function to add a movie to the list
  function addMovie(movieList, universe, movieTitle, movieYear) {
    const newMovie = {
      title: movieTitle,
      year: movieYear,
    };
  
    if (!movieList[universe]) {
      movieList[universe] = {};
    }
  
    const movieCount = Object.keys(movieList[universe]).length + 1;
    movieList[universe][`movie${movieCount}`] = newMovie;
  }
  
  // Function to delete a movie from the list based on its title
  function deleteMovie(movieList, universe, movieTitle) {
    if (movieList[universe]) {
      for (const key in movieList[universe]) {
        if (movieList[universe].hasOwnProperty(key)) {
          if (movieList[universe][key].title === movieTitle) {
            delete movieList[universe][key];
            break;
          }
        }
      }
    }
  }
  
  // Function to display the list of movies
  function displayMovies(movieList) {
    for (const universe in movieList) {
      if (movieList.hasOwnProperty(universe)) {
        console.log(`${universe} Movies:`);
        for (const key in movieList[universe]) {
          if (movieList[universe].hasOwnProperty(key)) {
            const movie = movieList[universe][key];
            console.log(`  ${movie.title} (${movie.year})`);
          }
        }
      }
    }
  }
  
  // Add a new Marvel movie
  addMovie(movieList, "MCUMovies", "Spider-Man: No Way Home", 2021);
  
  // Display the updated movie list
  displayMovies(movieList);
  
//   // Delete a DC movie
//   deleteMovie(movieList, "DCMovies", "Batman Begins");
  
//   // Display the updated movie list
//   displayMovies(movieList);

// console.log(movieList['DCMovies']['movie1'])

