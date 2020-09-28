import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
  const [movies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((m) => {
        return <Movie name={m.name} price={m.price} key={m.id} />;
      })}
    </div>
  );
};

export default MovieList;
