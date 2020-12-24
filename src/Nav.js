import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies] = useContext(MovieContext);

  return (
    <div className="nav">
      <h2>Welcome to Movie Lister</h2>
      <p>Number of Movies: {movies.length} </p>
    </div>
  );
};

export default Nav;
