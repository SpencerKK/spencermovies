const topRatedShowsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_TOP_RATED_SHOWS":
      return action.payload.results;
    default:
      return state;
  }
};

export default topRatedShowsReducer;