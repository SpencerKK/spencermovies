const topRatedMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_TOP_RATED_MOVIES":
      return action.payload.results;
    default:
      return state;
  }
};

export default topRatedMoviesReducer;