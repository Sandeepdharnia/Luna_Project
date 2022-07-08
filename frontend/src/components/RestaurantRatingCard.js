import "../styles/RestaurantRatingCard.scss";
import star from "../assets/star.svg";
import restaurantImg from "../assets/restaurant_sample.jpg";
import { NavLink } from "react-router-dom";
import genericImg from "../assets/generic_restaurant.png";

const RestaurantRatingCard = ({ name, country, city, street, zip, image }) => {
  return (
    <button className="card-btn" onClick={handleNavigate}>
      <article className="ratingCard">
        <div className="ratingCard__heading">
          <h2>{name}</h2>
          <p>{`${street} / ${city} - ${zip}, ${country} `}</p>
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
          <img src={image === null ? `${genericImg}` : image} alt="" />
        </div>
      </article>
    </button>
  );
};
export default RestaurantRatingCard;
