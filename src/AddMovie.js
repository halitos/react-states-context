import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  function updateName(e) {
    setName(e.target.value);
  }
  function updatePrice(e) {
    setPrice(e.target.value);
  }

  function addMovie(e) {
    e.preventDefault();
    let newMovie = [{ name: name, price: price }];
    if (name && price) {
      setMovies(movies.concat(newMovie));
    }
    setName("");
    setPrice("");
  }

  return (
    <form onSubmit={addMovie} className="form-div">
      <div className="box-1">
        <label>Title</label>
        <input type="text" name="name" value={name} onChange={updateName} />
      </div>
      <div className="box-2">
        <label>Price</label>
        <input type="text" name="price" value={price} onChange={updatePrice} />
      </div>

      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
