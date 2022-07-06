import Grid from "../components/Grid";
import RestaurantRatingCard from "../components/RestaurantRatingCard";

const SearchRestaurants = () => {
  return (
    <div className="search__card-section">
      <Grid>
        <RestaurantRatingCard />
        <RestaurantRatingCard />
        <RestaurantRatingCard />
        <RestaurantRatingCard />
        <RestaurantRatingCard />
        <RestaurantRatingCard />
        <RestaurantRatingCard />
        <RestaurantRatingCard />
        <RestaurantRatingCard />
        <RestaurantRatingCard />
        <RestaurantRatingCard />
      </Grid>
    </div>
  );
};
export default SearchRestaurants;
