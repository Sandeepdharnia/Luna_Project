import axios from "axios";

const BEARER_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3Nzg2NzU4LCJpYXQiOjE2NTczNTQ3NTgsImp0aSI6Ijc1ZmFlMWU2NWNjZDQ5ZGE4OWVmYWM4ZGJhMDZkYTg0IiwidXNlcl9pZCI6IkRhbmllbCJ9.jYOSBUAMD2TEJkyTPlSWwRc63gK4gqe1Zisq7qI0UKY";

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
