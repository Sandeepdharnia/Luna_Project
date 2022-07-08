import axios from "axios";

const BEARER_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3NzIzMDc0LCJpYXQiOjE2NTcyOTEwNzQsImp0aSI6IjA4Yjc5OGI3NDUxYjRiNmVhYmM4OGIwYWVjNzFhMzZmIiwidXNlcl9pZCI6IkRhbmllbCJ9.gD6UOnXaCt7oPiaYs5Tj69Z94lk14k8zJwLYu_fU56o";

const LUNA_URL = "https://luna-team1.propulsion-learn.ch/backend/api";

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

//get reviews of a specific restaurant using restaurant id
export const get_specific_restaurant_review = async restaurant_id => {
  const response = await axios.get(
    `${LUNA_URL}/review/reviews/restaurant/${restaurant_id}`,
    {
      headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`,
      },
    }
  );

  return response.data;
};
