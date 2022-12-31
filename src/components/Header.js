import React from "react";
import LoginButton from "./LoginButton";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import classes from "./Header.module.css";

export default function () {
  return (
    <div className={classes.header}>
      <Logo />
      <SearchBar />
      <LoginButton />
    </div>
  );
}
