import axios from "axios";

const BEARER_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3Nzg2NzU4LCJpYXQiOjE2NTczNTQ3NTgsImp0aSI6Ijc1ZmFlMWU2NWNjZDQ5ZGE4OWVmYWM4ZGJhMDZkYTg0IiwidXNlcl9pZCI6IkRhbmllbCJ9.jYOSBUAMD2TEJkyTPlSWwRc63gK4gqe1Zisq7qI0UKY";

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
