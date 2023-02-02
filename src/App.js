import "./App.css";
import Header from "./components/Header";
import MovieList from "./components/movie/MovieList";
import Footer from "./components/Footer";
import { Route, Redirect, useHistory, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AddMoviePage from "./pages/AddMoviePage";
import DetailsPage from "./pages/DetailsPage";
import React, { useState, useContext } from "react";
import AuthContext from "./store/auth-context";

function App() {
  const [searchValue, setSearch] = useState("");
  const [isLoggedIn, setLogIn] = useState(false);
  const navigation = useHistory();

  function logInHandler(token) {
    localStorage.setItem("token", token);
    setLogIn(true);
    navigation.push("/");
  }

  function logOutHandler() {
    localStorage.setItem("token", "");
    setLogIn(false);
    navigation.push("/");
  }

  return (
    <AuthContext.Provider
      value={{
        isLogged: isLoggedIn,
        logInHandler: logInHandler,
        logOutHandler: logOutHandler,
      }}
    >
      <Header onChange={setSearch} />
      <Route exact path="/">
        <Redirect to="/movies" />
      </Route>
      <Route path="/movies">
        <MovieList searchValue={searchValue} />
      </Route>
      <Route path="/details/:id">
        <DetailsPage />
      </Route>
      <Route path="/add">
        {console.log(isLoggedIn)}
        {isLoggedIn ? <AddMoviePage /> : <Redirect to="/movies" />}
      </Route>
      <Route path="/signin">
        <div className="backdrop">
          <LoginPage />
        </div>
      </Route>
      <Route path="/signup">
        <div className="backdrop">
          <RegisterPage />
        </div>
      </Route>
      <Footer>footer</Footer>
    </AuthContext.Provider>
  );
}

export default App;
