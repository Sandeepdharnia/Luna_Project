import axios from "axios";

const LUNA_URL = "http://localhost:8000/backend/api";

export const register_user = async email => {
  const response = await axios.post(`${LUNA_URL}/auth/registration/`, {
    email: email,
  });

  return response;
};

export const verify_user = async user_info => {
  const response = await axios.post(
    `${LUNA_URL}/auth/registration/validation/`,
    {
      email: user_info.email,
      code: user_info.code,
      username: user_info.username,
      location: user_info.location,
      password: user_info.password,
    }
  );

  return response;
};

export const check_login_user = async user_info => {
  const response = await axios.post(`${LUNA_URL}/auth/token/`, {
    email: user_info.email,
    password: user_info.password,
  });

  return response;
};
