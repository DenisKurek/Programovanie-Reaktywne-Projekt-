import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import classes from "./Forms.module.css";
import axios from "axios";

export default function RegisterPage(props) {
  const loginRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const repeatPasswordRef = useRef();
  const navigate = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    if (passwordRef.current.value != repeatPasswordRef.current.value) {
      console.log("error");
      return;
    }

    axios({
      method: "post",
      url: "https://at.usermd.net/api/user/create",
      data: {
        name: loginRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
    }).then((response) => {
      console.log(response);
      navigate.push("/movies");
    });
  }

  return (
    <div className={`${classes.card} ${classes.centered}`}>
      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="login"
            placeholder="Login"
            className="form-control"
            ref={loginRef}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="name"
            placeholder="Nazwa"
            className="form-control"
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="email"
            placeholder="Email address"
            className="form-control"
            ref={emailRef}
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

        <div className="d-flex flex-row align-items-center mb-4">
          <input
            type="password"
            id="repat-password"
            placeholder="Repeat Password"
            className="form-control"
            ref={repeatPasswordRef}
          />
        </div>

        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <button type="submit" className="btn btn-primary btn-lg">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
