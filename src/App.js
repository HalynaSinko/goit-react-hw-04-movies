import { Switch, Route } from "react-router-dom";

import Container from "./components/Container";
import AppBar from "./components/AppBar";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import "./App.css";

function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
