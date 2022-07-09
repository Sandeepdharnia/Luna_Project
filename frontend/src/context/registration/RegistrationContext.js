import { createContext, useReducer } from "react";
import registrationReducer from "./RegistrationReducer";

const RegistrationContext = createContext();

export const RegistrationProvider = ({ children }) => {
  const initialState = {
    userValues: {
      email: "",
      code: "",
      username: "",
      location: "",
      password: "",
      repeatPassword: "",
    },
    statusCode: null,
    token: null,
  };

  const [state, dispatch] = useReducer(registrationReducer, initialState);

  return (
    <RegistrationContext.Provider
      value={{
        userValues: state.userValues,
        statusCode: state.statusCode,
        token: state.token,
        dispatch,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export default RegistrationContext;
