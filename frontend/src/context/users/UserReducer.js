const userReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };

    case "GET_LOGGED_IN_USER":
      return {
        ...state,
        loggedInUser: action.payload,
      };

    case "GET_USER_COMMENTS":
      return {
        ...state,
        userComments: action.payload,
      };

    case "GET_USER_REVIEWS":
      return {
        ...state,
        userReviews: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
