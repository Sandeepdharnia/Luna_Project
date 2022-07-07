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
  };

  const [state, dispatch] = useReducer(registrationReducer, initialState);

  return (
    <RegistrationContext.Provider
      value={{
        userValues: state.userValues,
        dispatch,
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

export default RegistrationContext;
