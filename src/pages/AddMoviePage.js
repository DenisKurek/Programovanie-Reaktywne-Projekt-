import React, { useRef } from "react";
import classes from "./Forms.module.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

export default function AddMoviePage(props) {
  const title = useRef();
  const image = useRef();
  const content = useRef();
  const navigate = useHistory();

  function addMovie() {
    axios({
      method: "post",
      url: "https://at.usermd.net/api/movies",
      data: {
        title: title.current.value,
        image: image.current.value,
        content: content.current.value,
      },
    });
  }

  return (
    <div className={`${classes.card} ${classes.centered}`}>
      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Movie</p>
      <form
        onSubmit={() => {
          addMovie();
          navigate.push("/movies");
        }}
      >
        <div className="form-outline mb-4">
          <input
            type="text"
            id="name"
            placeholder="tytuł"
            className="form-control"
            ref={title}
          />
        </div>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="image"
            placeholder="url obrazu"
            className="form-control"
            ref={image}
          />
        </div>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="content"
            placeholder="opis"
            className="form-control"
            ref={content}
          />
        </div>
        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <button type="submit" className="btn btn-primary btn-lg">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
