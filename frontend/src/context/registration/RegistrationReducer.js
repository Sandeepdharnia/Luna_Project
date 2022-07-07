const registrationReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EMAIL":
      return {
        ...state,
        userValues: { email: action.payload },
      };

    case "REGISTER_USER":
      return {
        ...state,
        statusCode: action.payload,
      };

    default:
      return state;
  }
};

export default registrationReducer;
