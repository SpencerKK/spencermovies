const searchShowsReducer = (state = [], action) => {
  switch (action.type) {
    case "SEARCH_SHOW":
      return action.payload;
    default:
      return state;
  }
};

export default searchShowsReducer;