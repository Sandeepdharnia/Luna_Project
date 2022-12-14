import Grid from "../components/Grid";
import RestaurantReviewCard from "../components/RestaurantReviewCard";
import { useContext, useEffect } from "react";
import userContext from "../context/users/UserContext";
import { get_user_reviews } from "../context/users/UserActions";

const SearchReviews = () => {
  const { userReviews, loggedInUser, dispatch } = useContext(userContext);

  useEffect(() => {
    const getUserComments = async () => {
      const commentData = await get_user_reviews(
        loggedInUser && loggedInUser[0].id
      );
      dispatch({ type: "GET_USER_REVIEWS", payload: commentData });
    };

    getUserComments();
  }, [dispatch, loggedInUser]);

  return (
    <div className="search__card-section">
      <Grid>
        {userReviews.map(review => (
          <RestaurantReviewCard key={review.id} {...review} />
        ))}
      </Grid>
    </div>
  );
};
export default SearchReviews;
