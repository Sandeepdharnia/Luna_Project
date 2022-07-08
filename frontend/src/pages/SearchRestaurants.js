import Grid from "../components/Grid";
import { useContext, useEffect } from "react";
import RestaurantRatingCard from "../components/RestaurantRatingCard";
import restaurantContext from "../context/restaurant/RestaurantContext";
import { list_restaurants } from "../context/restaurant/RestaurantActions";

const SearchRestaurants = () => {
  const { restaurants, dispatch } = useContext(restaurantContext);

  useEffect(() => {
    const getRestaurantData = async () => {
      const restaurantData = await list_restaurants();
      dispatch({ type: "GET_RESTAURANTS", payload: restaurantData });
    };

    getRestaurantData();
  }, [dispatch]);

  return (
    <div className="search__card-section">
      <Grid>
        {restaurants.map(restaurant => (
          <RestaurantRatingCard key={restaurant.id} {...restaurant} />
        ))}
      </Grid>
    </div>
  );
};
export default SearchRestaurants;
