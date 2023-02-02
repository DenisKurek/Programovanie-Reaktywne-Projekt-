import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import classes from "./MovieList.module.css";
import axios from "axios";

export default function (props) {
  const [movies, setMovies] = useState([]);
  function getMovies() {
    axios.get("https://at.usermd.net/api/movies").then((response) => {
      setMovies(
        response.data.filter((movie) =>
          movie.title.toLowerCase().includes(props.searchValue.toLowerCase())
        )
      );
    });
  }

  useEffect(() => {
    getMovies();
  }, [props.searchValue]);

  return (
    <div className={classes.card}>
      {movies.map((movie) => (
        <Movie
          className={classes.movie}
          title={movie.title}
          image={movie.image}
          content={movie.content}
          key={movie.id}
          id={movie.id}
        />
      ))}
    </div>
  );
}
