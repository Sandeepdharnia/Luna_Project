import { createContext, useState, useReducer } from "react";
import userReducer from "./UserReducer";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const initialState = {
    users: [],
    loggedInUser: {},
    userComments: [],
    userReviews: [],
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        loggedInUser: state.loggedInUser,
        userComments: state.userComments,
        userReviews: state.userReviews,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
