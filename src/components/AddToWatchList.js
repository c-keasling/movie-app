import React from "react";

// A React component for adding a movie to WatchLists
const AddToWatchlist = () => {
  return (
    // React fragment to group multiple elements without adding extra nodes to the DOM
    <>
      <span className="mr-2">Add to WatchLists</span>
      <svg
        width="1em" // Sets the width of the icon and height on the next line
        height="1em"
        viewBox="0 0 16 16" // Defines the position and dimension in user space of an SVG
        className="bi bi-heart-fill" // Bootstrap icon class for styling, corrected to className
        fill="red" // Sets the fill color of the heart icon
        xmlns="http://www.w3.org/2000/svg" // XML namespace for SVG elements
        aria-label="add to WatchLists" // Accessibility label for the SVG icon
      >
        <path
          fillRule="evenodd" // Corrected attribute name for JSX, defines the rule for painting
          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" // SVG path command for the heart shape
        />
      </svg>
    </>
  );
};

export default AddToWatchlist;
