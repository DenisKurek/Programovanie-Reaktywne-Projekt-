import React from "react";
import { Link } from "react-router-dom";

export default function LoginButton(props) {
  return (
    <div>
      <Link to="/signin" className="btn btn-dark">
        Login
      </Link>
    </div>
  );
}
