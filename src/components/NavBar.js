import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";

export default function NavBar() {
  const ctx = useContext(AuthContext);

  return (
    <div className="nav">
      <Link className="nav-item nav-link text-light" to="/">
        Home
      </Link>
      {ctx.isLogged && (
        <Link className="nav-item nav-link text-light" to="/add">
          add movie
        </Link>
      )}
    </div>
  );
}
