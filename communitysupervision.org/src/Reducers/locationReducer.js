export const locationReducer = (state = {}, action) => {
  switch (action.type) {
    case "setLocation":
      return {
        ...state,
        location: action.location
      };
    default:
      return state;
  }
};

export default locationReducer;
