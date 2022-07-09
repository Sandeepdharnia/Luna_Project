import axios from "axios";

const BEARER_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3NzgyNzUwLCJpYXQiOjE2NTczNTA3NTAsImp0aSI6ImE4ZWU2MDM3YjYzODRjMmI4MDc4NTM2ZGQ4NWZmMjEwIiwidXNlcl9pZCI6ImRhbmllbGtvZXR0In0.eoFOGzivlvPdEim1TjIoA56moGleV4pv_Mcwt32TB5c";

const LUNA_URL = "http://localhost:8000/backend/api";

// get all the users
export const list_users = async () => {
  const response = await axios.get(`${LUNA_URL}/users/list/`);

  return response.data;
};

// get logged in user
export const get_logged_in_user = async () => {
  const response = await axios.get(`${LUNA_URL}/me/`, {
    headers: {
      Authorization: `Bearer ${BEARER_TOKEN}`,
    },
  });

  return response.data;
};

//get user comments
export const get_user_comments = async user_id => {
  const response = await axios.get(`${LUNA_URL}/comments/${user_id}`);

  return response.data;
};

// get user reviews
export const get_user_reviews = async user_id => {
  const response = await axios.get(`${LUNA_URL}/review/${user_id}`);

  return response.data;
};
