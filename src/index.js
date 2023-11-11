import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App"; // Import your main App component
import "./index.css"; // Import your index.css file here

// Wrap the App component with BrowserRouter and set the basename
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/project-15/movie-app">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
