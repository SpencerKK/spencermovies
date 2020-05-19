import axios from "axios";

// Movie Actions
export const fetchPopularMovies = () => async dispatch => {
  const response = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=27b7e0f9e91ab4856fb6b854493be9c2&language=en-US&page=1");

  dispatch({ type: "FETCH_POPULAR_MOVIES", payload: response.data });
};

export const fetchUpcomingMovies = () => async dispatch => {
  const response = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=27b7e0f9e91ab4856fb6b854493be9c2&language=en-US&page=1");

  dispatch({ type: "FETCH_UPCOMING_MOVIES", payload: response.data });
};

export const fetchTopRatedMovies = () => async dispatch => {
  const response = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=27b7e0f9e91ab4856fb6b854493be9c2&language=en-US&page=1");

  dispatch({ type: "FETCH_TOP_RATED_MOVIES", payload: response.data });
};

export const fetchCredits = id => async dispatch => {
  const response = await axios.get("https://api.themoviedb.org/3/movie/" + id + "/credits?api_key=27b7e0f9e91ab4856fb6b854493be9c2");

  dispatch({ type: "FETCH_CREDITS", payload: response.data.cast });
};

export const fetchMovieRecs = id => async dispatch => {
  const response = await axios.get("https://api.themoviedb.org/3/movie/" + id + "/recommendations?api_key=27b7e0f9e91ab4856fb6b854493be9c2&language=en-US&page=1");

  dispatch({ type: "FETCH_MOVIE_RECS", payload: response.data.results });
};

// Television Actions

export const fetchPopularShows = () => async dispatch => {
  const response = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=27b7e0f9e91ab4856fb6b854493be9c2&language=en-US&page=1");

  dispatch({ type: "FETCH_POPULAR_SHOWS", payload: response.data });
};

export const fetchAiringShows = () => async dispatch => {
  const response = await axios.get("https://api.themoviedb.org/3/tv/airing_today?api_key=27b7e0f9e91ab4856fb6b854493be9c2&language=en-US&page=1");

  dispatch({ type: "FETCH_AIRING_SHOWS", payload: response.data });
};

export const fetchTopRatedShows = () => async dispatch => {
  const response = await axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=27b7e0f9e91ab4856fb6b854493be9c2&language=en-US&page=1");

  dispatch({ type: "FETCH_TOP_RATED_SHOWS", payload: response.data });
};

export const fetchShowCredits = id => async dispatch => {
  const response = await axios.get("https://api.themoviedb.org/3/tv/" + id + "/credits?api_key=27b7e0f9e91ab4856fb6b854493be9c2");

  dispatch({ type: "FETCH_SHOW_CREDITS", payload: response.data.cast });
};


export const fetchShowRecs = id => async dispatch => {
  const response = await axios.get("https://api.themoviedb.org/3/tv/" + id + "/recommendations?api_key=27b7e0f9e91ab4856fb6b854493be9c2&language=en-US&page=1");

  dispatch({ type: "FETCH_SHOW_RECS", payload: response.data.results });
};

// Search Actions

export const searchMovies = term => async dispatch => {
  const response = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=27b7e0f9e91ab4856fb6b854493be9c2&language=en-US&query=" + term + "&page=1&include_adult=false");

  dispatch({ type: "SEARCH_MOVIE", payload: response.data });
};

export const searchShows = term => async dispatch => {
  const response = await axios.get("https://api.themoviedb.org/3/search/tv?api_key=27b7e0f9e91ab4856fb6b854493be9c2&language=en-US&page=1&query=" + term + "&include_adult=false");

  dispatch({ type: "SEARCH_SHOW", payload: response.data });
};