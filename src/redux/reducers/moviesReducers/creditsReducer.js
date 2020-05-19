const creditsReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_CREDITS":
      return action.payload;
    default:
      return state;
  }
};

export default creditsReducer;