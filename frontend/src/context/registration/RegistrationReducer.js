export const ACTIONS = {
  VALIDATE_USER: "validate_user",
  VERIFY_USER: "verify_user",
  ADD_LOGIN: "add_login",
  CHECK_LOGIN: "check_login",
  LOGIN_LOGOUT: "login_logout",
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

    case ACTIONS.ADD_LOGIN:
      // console.log(action.payload.email)
      // console.log(action.payload.password)
      // console.log(action.payload.target.value)
      return {
        ...state,
        userValues: {...state.userValues, [action.payload.target.name]: action.payload.target.value}
      }

    case ACTIONS.CHECK_LOGIN:
      // localStorage.setItem('token', state.token)
      // if(token):
      return {
        ...state,
        statusCode: action.payload.status,
        token: action.payload.data.access,
      }

    case ACTIONS.LOGIN_LOGOUT:
      console.log(action.payload.isLoggedIn)
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn
      }

    default:
      return state;
  }
};

export default registrationReducer;
