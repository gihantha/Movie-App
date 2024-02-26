import { useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

//External API calling
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=d6638f4c";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState(null);

  const searchMovies = async () => {
    if (title) {
      const response = await fetch(`${API_URL}&s=${title}}`);

      //convert data into json format
      const data = await response.json();
      setMovies(data.Search);
    } 
  };

  return (
    <div className="app">
      <h1>MovieLands</h1>
      <div className="search">
        <input
          placeholder="Search for Movies"
          value= {title}
          onChange={(e) => setTitle(e.target.value) }
        />
        <img src={SearchIcon} alt="search" onClick={searchMovies} />
      </div>
      <div className="">
        {/* Displays movies data calling the movie card component*/}
        {movies.map((movie)=> {
             return <MovieCard movie1={movie} />
        })}   
      </div>
    </div>
  );
};

export default App;
