import React from "react";
import Card from "../UI/Card";
import Movie from "./Movie";
import classes from "./MovieList.module.css";

export default function (props) {
  return (
    <Card className={classes.card}>
      {props.movies.map((movie, index) => (
        <Movie key={index} />
      ))}
    </Card>
  );
}
