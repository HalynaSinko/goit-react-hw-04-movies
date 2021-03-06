import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Container from "./components/Container";
import AppBar from "./components/AppBar";
import routes from "./routes";
import "./App.css";

const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "home-page"*/)
);
const MoviesPage = lazy(() =>
  import("./pages/MoviesPage" /* webpackChunkName: "movies-page"*/)
);
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage" /* webpackChunkName: "movie-details-page"*/)
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage.js" /* webpackChunkName: "not-found-page"*/)
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={routes.pathHomePage} exact>
            <HomePage />
          </Route>
          <Route path={routes.pathMovieDetailsPage}>
            <MovieDetailsPage />
          </Route>
          <Route path={routes.pathMoviesPage}>
            <MoviesPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Suspense>
      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default App;
