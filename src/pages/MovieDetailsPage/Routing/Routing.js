import { lazy, Suspense } from "react";
import { Route, useRouteMatch, useParams } from "react-router-dom";
import routes from "../../../routes";

const Cast = lazy(() => import("../../Cast/" /* webpackChunkName: "cast"*/));
const Reviews = lazy(() =>
  import("../../Reviews" /* webpackChunkName: "reviews"*/)
);

const RouteingSubPage = ({ movie }) => {
  const { path } = useRouteMatch();
  const { movieId } = useParams();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route path={`${path}${routes.pathSubPageCast}`}>
        {movie && <Cast movieId={movieId} />}
      </Route>
      <Route path={`${path}${routes.pathSubPageReviews}`}>
        {movie && <Reviews movieId={movieId} />}
      </Route>
    </Suspense>
  );
};

export default RouteingSubPage;
