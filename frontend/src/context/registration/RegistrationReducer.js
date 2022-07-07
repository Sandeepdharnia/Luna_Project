export const ACTIONS = {
  VALIDATE_USER: "validate_user",
  VERIFY_USER: "verify_user",
}

const registrationReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EMAIL":
      console.log(action.payload)
      return {
        ...state,
        userValues: { email: action.payload },
      };

    case "REGISTER_USER":
      return {
        ...state,
        statusCode: action.payload,
      };

    case ACTIONS.VALIDATE_USER:
      // console.log(action.payload.name)
      return {
        ...state,
        userValues: {...state.userValues, [action.payload.target.name]: action.payload.target.value}

      }

    case ACTIONS.VERIFY_USER:
      return {
        ...state,
        userValues: {...state.userValues}
      }

    default:
      return state;
  }
};

export default registrationReducer;
