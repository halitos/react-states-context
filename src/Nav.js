import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies] = useContext(MovieContext);

  return (
    <div className="nav">
      <h1>Movie Lister</h1>
      <p>Number of Movies: {movies.length} </p>
    </div>
  );
};

export default Nav;
