import axios from "axios";

const LUNA_URL = "http://localhost:8000/backend/api";

export const list_users = async () => {
  const response = await axios.get(`${LUNA_URL}/users/list/`);

  return response.data;
};
