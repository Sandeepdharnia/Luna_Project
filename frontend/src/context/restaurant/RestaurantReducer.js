const restaurantReducer = (state, action) => {
  switch (action.type) {
    case "GET_RESTAURANTS":
      return {
        ...state,
        restaurants: action.payload,
      };

    case "GET_RESTAURANT_REVIEWS":
      return {
        ...state,
        restaurantReviews: action.payload,
      };

    default:
      return state;
  }
};

export default restaurantReducer;
