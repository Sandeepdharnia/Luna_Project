import "../styles/UserReviewInnerPage.scss";
import UserReview from "../components/UserReview";
import userContext from "../context/users/UserContext";
import { useContext, useEffect } from "react";
import { get_user_reviews } from "../context/users/UserActions";

const UserReviewInnerPage = () => {
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
    <article className="userReview">
      {userReviews.map(review => (
        <UserReview key={review.id} {...review} />
      ))}
    </article>
  );
};
export default UserReviewInnerPage;
