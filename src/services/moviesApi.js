const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "1c99cb518fe35a9a215bbe8dda81cde2";
export const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500/";

async function fetchWithErrorHendling(url = "", config = {}) {
  const response = await fetch(url, config);

  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchTrendingMovies() {
  return fetchWithErrorHendling(`${BASE_URL}
/trending/movie/day?api_key=${API_KEY}`);
}

export function fetchMovieDetails(movieId) {
  return fetchWithErrorHendling(`${BASE_URL}
/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
}

export function fetchMovieByQuery(query) {
  return fetchWithErrorHendling(`${BASE_URL}
/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
}

export function fetchActorsMovie(movieId) {
  return fetchWithErrorHendling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

export function fetchReviewsMovie(movieId) {
  return fetchWithErrorHendling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}
