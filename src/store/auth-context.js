import React from "react";

const AuthContext = React.createContext({
  isLogged: false,
  logInHandler: null,
  logOutHandler: null,
});

export default AuthContext;
