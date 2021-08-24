import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import Container from "./components/Container";
import AppBar from "./components/AppBar";
import "./App.css";

const HomePage = lazy(() =>
  import("./pages/HomePage.js" /* webpackChunkName: "home-page"*/)
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage.js" /* webpackChunkName: "movies-page"*/)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./pages/MovieDetailsPage.js" /* webpackChunkName: "movie-details-page"*/
  )
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </Container>
  );
}

export default App;
