import axios from "axios";

const LUNA_URL = "http://localhost:8000/backend/api";

export const register_user = async email => {
  const response = await axios.post(`${LUNA_URL}/auth/registration/`, {
    email: email,
  });
  console.log(response);

  return response;
};
