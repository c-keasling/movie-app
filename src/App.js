import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/Searchbox";
import AddToWatchlist from "./components/AddToWatchList";
import RemoveFromWatchlist from "./components/RemoveFromWatchList";

const App = () => {
  // State hooks for movies, WatchList, and search value
  const [movies, setMovies] = useState([]);
  const [watchlist, setWatchlist] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  //function to get movie objects from api
  const getMovieRequest = async (searchValue) => {
    //url for api please see my slack message for api code
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;
    //get api response as variable using fetch
    const response = await fetch(url);
    //convert response to json
    const responseJson = await response.json();

    // Setting the movies state if the response contains movies
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  //getmovie request when the page loads only
  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  // useEffect to load WatchList from local storage on component mount
  useEffect(() => {
    const movieWatchlist = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    // If there are stored WatchList then update the state
    if (movieWatchlist) {
      setWatchlist(movieWatchlist);
    }
  }, []);
  // Function to save WatchList to local storage
  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-watchlist", JSON.stringify(items));
  };

  // Function to save WatchList to local storage
  const addMovieToWatchlist = (movie) => {
    const newWatchlist = [...watchlist, movie];
    setWatchlist(newWatchlist);
    saveToLocalStorage(newWatchlist);
  };
  //remove from list
  const removeMovieFromWatchlist = (movie) => {
    const newWatchlist = watchlist.filter(
      (watchlistMovie) => watchlistMovie.imdbID !== movie.imdbID
    );

    setWatchlist(newWatchlist);
    saveToLocalStorage(newWatchlist);
  };
  // The layout of the app
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handleWatchlistClick={addMovieToWatchlist}
          watchlistComponent={AddToWatchlist}
        />
      </div>
      <div className="row d-flex align-items-center mt-4 mb-4">
        <MovieListHeading heading="Watchlist" />
      </div>
      <div className="row">
        <MovieList
          movies={watchlist}
          handleWatchlistClick={removeMovieFromWatchlist}
          watchlistComponent={RemoveFromWatchlist}
        />
      </div>
    </div>
  );
};

export default App;
