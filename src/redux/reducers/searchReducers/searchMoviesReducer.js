const searchMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case "SEARCH_MOVIE":
      return action.payload;
    default:
      return state;
  }
};

export default searchMoviesReducer;