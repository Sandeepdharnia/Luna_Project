import axios from "axios";

const LUNA_URL = "http://localhost:8000/backend/api";

//get all restaurants
export const list_restaurants = async () => {
  const response = await axios.get(`${LUNA_URL}/restaurants/`);

  return response.data;
};

//get a specific restaurant using the id
export const get_specific_restaurant = async restaurant_id => {
  const response = await axios.get(`${LUNA_URL}/restaurants/${restaurant_id}`);

  return response.data;
};
