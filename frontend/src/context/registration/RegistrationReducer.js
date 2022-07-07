// const actions = {
//   actions.addEmail = "addEmail"
// }

const registrationReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EMAIL":
      return {
        ...state,
        userValues: { email: action.payload },
      };
    default:
      return state;
  }
};

export default registrationReducer;
