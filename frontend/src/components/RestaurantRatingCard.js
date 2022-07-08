import "../styles/RestaurantRatingCard.scss";
import star from "../assets/star.svg";
import restaurantImg from "../assets/restaurant_sample.jpg";
import { useNavigate } from "react-router-dom";

const RestaurantRatingCard = () => {

  const navigate = useNavigate();

  const handleNavigate = () => navigate("/restaurant");

  return (
    <button className="card-btn" onClick={handleNavigate}>
      <article className="ratingCard">
        <div className="ratingCard__heading">
          <h2>Restaurant Name</h2>
          <p>Address</p>
        </div>
        <div className="ratingCard__rating">
          <div className="ratingCard__icon-container">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
          <p>68</p>
        </div>
        <div className="ratingCard__image">
          <img src={restaurantImg} alt="" />
        </div>
      </article>
    </button>
  );
};
export default RestaurantRatingCard;
