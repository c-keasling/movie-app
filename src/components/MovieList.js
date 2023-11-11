import React from "react";

// MovieList component takes props passed from its parent component
const MovieList = (props) => {
  // Destructuring the favouriteComponent prop to use as a component
  const WatchlistComponent = props.watchlistComponent;

  return (
    <>
      {props.movies.map(
        (
          movie,
          index // Mapping over the movies array passed in props
        ) => (
          <div className="movie-list" key={index}>
            {" "}
            <img src={movie.Poster} alt="movie" />
            <div
              onClick={() => props.handleWatchlistClick(movie)} // Click event to add andremove a movie from favourites
              className="overlay d-flex align-items-center justify-content-center" // Overlay div for the favourite component, styled with flexbox
            >
              <WatchlistComponent />
            </div>
          </div>
        )
      )}
    </>
  );
};

export default MovieList;
