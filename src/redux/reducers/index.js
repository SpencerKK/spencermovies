import { combineReducers } from "redux";

// Movies Reducers
import popularMoviesReducer from "./moviesReducers/popularMoviesReducer";
import upcomingMoviesReducer from "./moviesReducers/upcomingMoviesReducer";
import topRatedMoviesReducer from "./moviesReducers/topRatedMoviesReducer";
import movieRecsReducer from "./moviesReducers/movieRecsReducer";
import creditsReducer from "./moviesReducers/creditsReducer";

// Shows Reducer 
import popularShowsReducer from "./showsReducers/popularShowsReducer";
import airingShowsReducer from "./showsReducers/airingShowsReducer";
import topRatedShowsReducer from "./showsReducers/topRatedShowsReducer";
import showRecsReducer from "./showsReducers/showRecsReducer";
import showCreditsReducer from "./showsReducers/showCreditsReducer";

// Search Reducer
import searchMoviesReducer from "./searchReducers/searchMoviesReducer";
import searchShowsReducer from "./searchReducers/searchShowsReducer";

export default combineReducers({
  popularMovies: popularMoviesReducer,
  upcomingMovies: upcomingMoviesReducer,
  topRatedMovies: topRatedMoviesReducer,
  credits: creditsReducer,
  movieRecs: movieRecsReducer,
  popularShows: popularShowsReducer,
  airingShows: airingShowsReducer,
  topRatedShows: topRatedShowsReducer,
  showRecs: showRecsReducer,
  showCredits: showCreditsReducer,
  movieSearchResults: searchMoviesReducer,
  showSearchResults: searchShowsReducer
});

