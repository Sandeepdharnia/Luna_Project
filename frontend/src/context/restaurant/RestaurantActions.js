import axios from "axios";

const LUNA_URL = "http://localhost:8000/backend/api";

export const list_restaurants = async () => {
  const response = await axios.get(`${LUNA_URL}/restaurants/`);

  return response.data;
};
