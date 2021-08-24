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

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=<<query>>&page=1&include_adult=false

export function fetchMovieByQuery(query) {
  return fetchWithErrorHendling(`${BASE_URL}
/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
}

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

export function fetchActorsMovie(movieId) {
  return fetchWithErrorHendling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
}

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

export function fetchReviewsMovie(movieId) {
  return fetchWithErrorHendling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
}
