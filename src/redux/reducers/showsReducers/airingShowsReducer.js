const airingShowsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_AIRING_SHOWS":
      return action.payload.results;
    default:
      return state;
  }
};

export default airingShowsReducer;