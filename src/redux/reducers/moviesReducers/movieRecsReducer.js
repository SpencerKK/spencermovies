const movieRecsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIE_RECS":
      return action.payload;
    default:
      return state;
  }
};

export default movieRecsReducer;