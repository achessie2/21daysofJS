// Movie class to represent a movie
class Movie {
    constructor(title, genre, releaseYear) {
        this.title = title;
        this.genre = genre;
        this.releaseYear = releaseYear;
    }
}

// Function to add a movie to the list
function addMovie(movies, movie) {
    movies.push(movie);
    console.log(`${movie.title} has been added to the list.`);
}

// Function to display all movies in the list
function displayMovies(movies) {
    if (movies.length === 0) {
        console.log("No movies in the list.");
    } else {
        console.log("Movie List:");
        movies.forEach((movie, index) => {
            console.log(`${index + 1}. ${movie.title} (${movie.releaseYear}) - ${movie.genre}`);
        });
    }
}

// Function to delete a movie from the list
function deleteMovie(movies, title) {
    const indexToDelete = movies.findIndex(movie => movie.title.toLowerCase() === title.toLowerCase());

    if (indexToDelete !== -1) {
        const deletedMovie = movies.splice(indexToDelete, 1)[0];
        console.log(`${deletedMovie.title} has been deleted from the list.`);
    } else {
        console.log(`${title} not found in the list.`);
    }
}

// Main function to run the movie application
function main() {
    const moviesList = [];

    while (true) {
        console.log("\nMovie Application Menu:");
        console.log("1. Add a Movie");
        console.log("2. Display Movies");
        console.log("3. Delete a Movie");
        console.log("4. Quit");

        const choice = prompt("Enter your choice (1-4):");

        switch (choice) {
            case '1':
                const title = prompt("Enter the movie title:");
                const genre = prompt("Enter the genre:");
                const releaseYear = prompt("Enter the release year:");

                const newMovie = new Movie(title, genre, releaseYear);
                addMovie(moviesList, newMovie);
                break;

            case '2':
                displayMovies(moviesList);
                break;

            case '3':
                const titleToDelete = prompt("Enter the title of the movie to delete:");
                deleteMovie(moviesList, titleToDelete);
                break;

            case '4':
                console.log("Exiting the Movie Application. Goodbye!");
                return;

            default:
                console.log("Invalid choice. Please enter a number between 1 and 4.");
                break;
        }
    }
}

// Run the main function
main(1);