import "./App.css";
import Header from "./components/Header";
import MovieList from "./components/movie/MovieList";

const movies = [1, 2, 3, 4, 5, 6, 7];

function App() {
  return (
    <div>
      <Header />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
