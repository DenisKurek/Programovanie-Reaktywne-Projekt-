import React from "react";
import Card from "../components/UI/Card";
import classes from "./Forms.module.css";
import { Link } from "react-router-dom";

export default function AddMoviePage(props) {
  return (
    <Card className={`${classes.card} ${classes.centered}`}>
      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Movie</p>
      <form>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="name"
            placeholder="nazwa"
            className="form-control"
          />
        </div>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="date"
            placeholder="data produkcji"
            className="form-control"
          />
        </div>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="genre"
            placeholder="gatunek"
            className="form-control"
          />
        </div>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="director"
            placeholder="reżyser"
            className="form-control"
          />
        </div>
        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <Link to="/" className="btn btn-primary btn-lg">
            Add
          </Link>
        </div>
      </form>
    </Card>
  );
}
