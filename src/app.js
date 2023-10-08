import React, { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";
// import './styles.css'
import SearchIcon from "./search.svg";
const API_URL = "https://www.omdbapi.com?apikey=df2a299";

// let movie1 = {
//   Title: "Miles Morales Ultimate Spiderman",
//   Year: "2021",
//   imdbID: "tt14311386",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BNmMzODkwNDktMTkyMy00MmU5LWE4MGMtYzIzZjdjNmJiZDRiXkEyXkFqcGdeQXVyNDU1NDQ0NzE@._V1_SX300.jpg",
// };

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovie("Avengers");
  }, []);
  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
      <input
  onChange={(e) => setSearchTerm(e.target.value)}
  type="search"
  value={searchTerm}
  placeholder="Search for a movie"
/>

        <img onClick={() => searchMovie(searchTerm)} src={SearchIcon} alt="search" />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movie Data Founded</h2>
        </div>
      )}
    </div>
  );
};

export default App;
