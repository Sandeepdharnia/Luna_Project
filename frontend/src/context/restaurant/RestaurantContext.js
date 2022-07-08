import { createContext, useState, useReducer } from "react";
import restaurantReducer from "./RestaurantReducer";

const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const initialState = {
    restaurants: [],
    restaurantReviews: [],
  };

  const [state, dispatch] = useReducer(restaurantReducer, initialState);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants: state.restaurants,
        restaurantReviews: state.restaurantReviews,
        dispatch,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export default RestaurantContext;
