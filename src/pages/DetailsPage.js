import React, { useState, useEffect, createContext, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import classes from "../components/movie/MovieList.module.css";
import axios from "axios";
import AuthContext from "../store/auth-context";

export default function DetailsPage(props) {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const navigate = useHistory();
  const ctx = useContext(AuthContext);

  function getDetails() {
    console.log(params.id);
    console.log(params.id.length);
    axios
      .get(`https://at.usermd.net/api/movies/${params.id}`)
      .then((response) => {
        setMovie(response.data);
      });
  }

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div className={` ${classes.details} ${classes.centered}`}>
      <img id={movie.id} src={movie.image} alt=" plakat" loading="lazy" />

      <div>
        <h2>{movie.title}</h2>
        <p>{movie.content}</p>
        {ctx.isLogged && (
          <button
            className={`btn btn-dark btn-lg ${classes.deleteButton}`}
            onClick={() => {
              axios
                .delete(`https://at.usermd.net/api/movie/${params.id}`)
                .then(() => navigate.push("/movies"));
            }}
          >
            delete
          </button>
        )}
      </div>
    </div>
  );
}
