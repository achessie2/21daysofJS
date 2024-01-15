const movieList = [
    {
        mcuMovies: {
            movie1: {
                name: "Avengers Infinity War",
                date: 2018,
            },
            movie2: {
                name: "Avengers Endgame",
                date: 2019,
            },
        }
    },
    {
        dceuMovies: {
            movie3: {
                name: "Justice League",
                date: 2017,
            },
            movie4: {
                name: "Wonder Woman",
                date: 2019
            },
        }
    },
]
movieList.hollyWoodMovies = { movie1: { name: 'Test', date: 2020 }, movie2: { name: 'Test', date: 2020 } }

console.log(movieList)