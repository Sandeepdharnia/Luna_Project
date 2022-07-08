import axios from "axios";

const BEARER_TOKEN =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjU3Njk0MDA0LCJpYXQiOjE2NTcyNjIwMDQsImp0aSI6ImMxZGYzOGRlMDQ5ZjQ1MmU4MmNhNzAyMzg3NmVkYjRmIiwidXNlcl9pZCI6IkRhbmllbCJ9.Bqb9V70x0iIIsTYYYTfbcL0EiH67re3E7KKJ3tVNXto";

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
