const upcomingMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_UPCOMING_MOVIES":
      return action.payload.results;
    default:
      return state;
  }
};

export default upcomingMoviesReducer;