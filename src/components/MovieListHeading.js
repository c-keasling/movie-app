import React from "react";

//creating the heading for the movie list
const MovieListHeading = (props) => {
  return (
    <div className="col">
      <h1>{props.heading}</h1>
    </div>
  );
};

export default MovieListHeading;
