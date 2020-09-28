import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "£8.99",
      id: 23412,
    },
    {
      name: "Game of Thrones",
      price: "£8.99",
      id: 25513,
    },
    {
      name: "Kibaro",
      price: "£8.99",
      id: 21114,
    },
  ]);

  return (
    <div>
      <MovieContext.Provider value={[movies, setMovies]}>
        {/* <Nav />
        <MovieList /> */}
        {props.children}
      </MovieContext.Provider>
    </div>
  );
};
