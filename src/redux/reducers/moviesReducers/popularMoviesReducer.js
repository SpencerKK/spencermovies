const popularMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POPULAR_MOVIES":
      return action.payload.results;
    default:
      return state;
  }
};

export default popularMoviesReducer;