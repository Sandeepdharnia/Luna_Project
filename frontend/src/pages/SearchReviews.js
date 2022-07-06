import Grid from "../components/Grid";
import RestaurantReviewCard from "../components/RestaurantReviewCard";

const SearchReviews = () => {
  return (
    <div className="search__card-section">
      <Grid>
        <RestaurantReviewCard />
        <RestaurantReviewCard />
        <RestaurantReviewCard />
        <RestaurantReviewCard />
        <RestaurantReviewCard />
        <RestaurantReviewCard />
        <RestaurantReviewCard />
        <RestaurantReviewCard />
      </Grid>
    </div>
  );
};
export default SearchReviews;
