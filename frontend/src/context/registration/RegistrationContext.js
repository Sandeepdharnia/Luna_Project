import { createContext, useState, useReducer } from "react";
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
  };

  const [state, dispatch] = useReducer(registrationReducer, initialState);

  return (
    <RegistrationContext.Provider
      value={{
        userValues: state.userValues,
        statusCode: state.statusCode,
        dispatch,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export default RegistrationContext;
