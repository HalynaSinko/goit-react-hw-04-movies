import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "1c99cb518fe35a9a215bbe8dda81cde2";
export const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500/";

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
  language: "en-US",
  page: 1,
};

// async function fetchWithErrorHendling(url = "", config = {}) {
//   const response = await axios.get(url, config);

//   return response.status === 200
//     ? response.data
//     : Promise.reject(new Error("Not found"));
// }

// export function getTrendingMovies() {
//   return fetchWithErrorHendling("/trending/movie/day");
// }

export async function getTrendingMovies() {
  try {
    const { data } = await axios.get("/trending/movie/day");
    console.log(data);
    return data;
  } catch (error) {
    toast.error(error);
  }
}

export async function getMovieDetails(movieId) {
  try {
    const { data } = await axios.get(`/movie/${movieId}`);
    return data;
  } catch (error) {
    toast.error(error);
  }
}

export async function getMovieByQuery(searchQuery) {
  try {
    const { data } = await axios.get("/search/movie?", {
      params: {
        query: searchQuery,
      },
    });
    return data;
  } catch (error) {
    toast.error(error);
  }
}

export async function getActorsMovie(movieId) {
  try {
    const { data } = await axios.get(`/movie/${movieId}/credits?`);
    return data;
  } catch (error) {
    toast.error(error);
  }
}

export async function getReviewsMovie(movieId) {
  try {
    const { data } = await axios.get(`/movie/${movieId}/reviews?`);
    console.log(data);
    return data;
  } catch (error) {
    toast.error(error);
  }
}
