import React, { useContext } from "react";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

export default function Header(props) {
  return (
    <div className="navbar navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <div className="d-flex flex-row">
          <Logo />
          <NavBar />
        </div>
        <SearchBar onChange={props.onChange} />
        <LoginButton />
      </div>
    </div>
  );
}
