import "../styles/Restaurant.scss";
import RestaurantOverview from "../components/RestaurantOverview";
import RestaurantReview from "../components/RestaurantReview";
import clockIcon from "../assets/clock.svg";
import moneyIcon from "../assets/money.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import restaurantContext from "../context/restaurant/RestaurantContext";
import { get_specific_restaurant_review } from "../context/restaurant/RestaurantActions";

const Restaurant = () => {
  const navigate = useNavigate();
  const { restaurants, restaurantReviews, dispatch } =
    useContext(restaurantContext);
  const { id } = useParams();
  restaurants.sort((a, b) => a.id - b.id);
  const handleNavigate = () => navigate("/createreview");

  useEffect(() => {
    const getRestaurantReviewData = async () => {
      const reviewData = await get_specific_restaurant_review(id - 1);
      dispatch({ type: "GET_RESTAURANT_REVIEWS", payload: reviewData });
    };

    getRestaurantReviewData();
  }, [dispatch, id]);

  console.log(restaurantReviews);

  return (
    <main className="restaurant">
      <RestaurantOverview restaurant={restaurants[id - 1]} />
      <div className="restaurant__body">
        <div className="restaurant__filter-container">
          <form className="restaurant__form">
            <label>
              <input
                type="text"
                name="filter"
                id="filter"
                placeholder="Filter List..."
              />
            </label>
            <button
              type="submit"
              className="search-btn"
              style={{ padding: "0.5rem", width: "150px" }}
            >
              Filter
            </button>
          </form>
          {restaurantReviews.map(review => (
            <RestaurantReview key={review.id} {...review} />
          ))}
        </div>
        <div className="restaurant__details-container">
          <div className="restaurant__hours-container">
            <img src={clockIcon} alt="" />
            <p>Monday-Friday 9:00am - 8:00pm</p>
          </div>
          <div className="restaurant__price-container">
            <img src={moneyIcon} alt="" />
            <p>Price level: $$$</p>
          </div>
          <div className="restaurant__btn-container">
            <button
              className="search-btn"
              style={{ padding: "0.5rem 1.5rem", width: "200px" }}
              onClick={handleNavigate}
            >
              WRITE REVIEW
            </button>
            <button
              className="search-btn"
              style={{ padding: "0.5rem 1.5rem", width: "200px" }}
            >
              EDIT DATA
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Restaurant;
