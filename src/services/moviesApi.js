// import { func } from "prop-types";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "1c99cb518fe35a9a215bbe8dda81cde2";

async function fetchWithErrorHendling(url = "", config = {}) {
  const response = await fetch(url, config);
  //   console.log(response);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

// api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>>

export function fetchTrendingMovies() {
  return fetchWithErrorHendling(`${BASE_URL}
/trending/movie/day?api_key=${API_KEY}`);
}

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US

export function fetchMovieDetails(movieId) {
  return fetchWithErrorHendling(`${BASE_URL}
/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
}
