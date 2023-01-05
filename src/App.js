import "./App.css";
import Header from "./components/Header";
import MovieList from "./components/movie/MovieList";
import Footer from "./components/Footer";
import { Route, Redirect } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AddMoviePage from "./pages/AddMoviePage";
import DetailsPage from "./pages/DetailsPage";

const movies = [1, 2, 3, 4, 5, 6, 7];

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/">
        <Redirect to="/movies" />
      </Route>
      <Route path="/movies">
        <MovieList movies={movies} />
      </Route>
      <Route path="/details">
        <DetailsPage />
      </Route>
      <Route path="/add">
        <AddMoviePage />
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
    </div>
  );
}

export default App;
