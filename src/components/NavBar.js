import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div class="nav">
      <Link className="nav-item nav-link text-light" to="/">
        Home
      </Link>
      <Link className="nav-item nav-link text-light" to="/add">
        add movie
      </Link>
    </div>
  );
}
