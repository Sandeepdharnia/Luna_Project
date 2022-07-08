import axios from "axios";

const BEARER_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3NzIzMDc0LCJpYXQiOjE2NTcyOTEwNzQsImp0aSI6IjA4Yjc5OGI3NDUxYjRiNmVhYmM4OGIwYWVjNzFhMzZmIiwidXNlcl9pZCI6IkRhbmllbCJ9.gD6UOnXaCt7oPiaYs5Tj69Z94lk14k8zJwLYu_fU56o";

const LUNA_URL = "https://luna-team1.propulsion-learn.ch/backend/api";

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
