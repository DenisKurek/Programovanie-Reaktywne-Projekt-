import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { isExpired } from "react-jwt";
import AuthContext from "../store/auth-context";

export default function LoginButton(props) {
  const ctx = useContext(AuthContext);
  return (
    <div>
      {ctx.isLogged ? (
        <Link
          onClick={() => {
            ctx.logOutHandler();
          }}
          to="/signin"
          className="btn btn-dark"
        >
          LogOut
        </Link>
      ) : (
        <Link to="/signin" className="btn btn-dark">
          Login
        </Link>
      )}
    </div>
  );
}
