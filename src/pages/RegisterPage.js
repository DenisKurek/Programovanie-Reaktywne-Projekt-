import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/UI/Card";
import classes from "./Forms.module.css";

export default function RegisterPage(props) {
  return (
    <Card className={`${classes.card} ${classes.centered}`}>
      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

      <form>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="login"
            placeholder="Login"
            className="form-control"
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
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="form-control"
          />
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <input
            type="password"
            id="password"
            placeholder="Repeat Password"
            className="form-control"
          />
        </div>

        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <Link to="/" className="btn btn-primary btn-lg">
            Register
          </Link>
        </div>
      </form>
    </Card>
  );
}
