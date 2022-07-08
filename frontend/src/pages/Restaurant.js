import "../styles/Restaurant.scss";
import RestaurantOverview from "../components/RestaurantOverview";
import RestaurantReview from "../components/RestaurantReview";
import clockIcon from "../assets/clock.svg";
import moneyIcon from "../assets/money.svg";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import restaurantContext from "../context/restaurant/RestaurantContext";

const Restaurant = () => {
  const navigate = useNavigate();
  const { restaurants } = useContext(restaurantContext);
  const { id } = useParams();

  const handleNavigate = () => navigate("/createreview");

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
          <RestaurantReview />
          <RestaurantReview />
          <RestaurantReview />
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
