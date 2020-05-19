const showRecsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SHOW_RECS":
      return action.payload;
    default:
      return state;
  }
};

export default showRecsReducer;