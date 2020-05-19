const popularShowsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_POPULAR_SHOWS":
      return action.payload.results;
    default:
      return state;
  }
};

export default popularShowsReducer;