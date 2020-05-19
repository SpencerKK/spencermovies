const showCreditsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_SHOW_CREDITS":
      return action.payload;
    default:
      return state;
  }
};

export default showCreditsReducer;