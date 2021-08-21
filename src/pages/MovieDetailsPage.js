import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import * as moviesApi from "../services/moviesApi";
import PageHeading from "../components/PageHeading";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    moviesApi.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const genres = movie ? movie.genres.map((item) => item.name).join(" ") : null;

  return (
    movie && (
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div>
          <PageHeading text={movie.title} />
          <p>User scope:{movie.vote_average * 10}%</p>
          <p>Overview</p>
          <p>{movie.overview}</p>
          <p>Genres</p>
          <p>{genres}</p>
        </div>
      </div>
    )
  );
}
// console.log(movie);
