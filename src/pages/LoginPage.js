import React, { useContext, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import classes from "./Forms.module.css";
import axios from "axios";
import AuthContext from "../store/auth-context";

export default function LoginPage(props) {
  const loginRef = useRef();
  const passwordRef = useRef();
  const ctx = useContext(AuthContext);

  function handleSubmit(event) {
    event.preventDefault();

    axios({
      method: "post",
      url: "https://at.usermd.net/api/user/auth",
      data: {
        login: loginRef.current.value,
        password: passwordRef.current.value,
      },
    }).then((response) => {
      ctx.logInHandler(response.data.token);
    });
  }

  return (
    <div className={`${classes.card} ${classes.centered}`}>
      <p classNaame="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="login"
            placeholder="login"
            className="form-control"
            ref={loginRef}
          />
        </div>
        <div className="form-outline mb-4">
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="form-control"
            ref={passwordRef}
          />
        </div>
        <div className="text-center">
          <p>
            Not a member? <Link to="/signup">Register</Link>
          </p>
        </div>
        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <button type="submit" className="btn btn-primary btn-lg">
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
