import React from "react";
import ReactDOM from "react-dom/client";
import BooksList from "./BooksList";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BooksList />
  </React.StrictMode>
);
