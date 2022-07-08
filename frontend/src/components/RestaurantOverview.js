import "../styles/RestaurantOverview.scss";
import star from "../assets/star.svg";
import overviewImg from "../assets/restaurant_overview.jpg";
import map from "../assets/laederach_map.jpg";
import pin from "../assets/pin.svg";
import phone from "../assets/phone.svg";
import web from "../assets/web.svg";

const RestaurantOverview = ({ restaurant }) => {
  console.log(restaurant);

  return (
    <>
      <div className="restaurantTitelCard">
        <div className="restaurantTitleCard__bImage">
          <img src={restaurant.image} alt="" />
          <div className="restaurantTitleCard__content">
            <div className="restaurantTitleCard__important">
              <h2 className="restaurantTitleCard__title">{restaurant.name}</h2>
              <div className="restaurantTitleCard__rest">
                <h4 className="restaurantTitleCard__genre">
                  Chocolatiers & Shop
                </h4>
                <div className="restaurantTitleCard__rating">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <h5>68 reviews</h5>
                </div>
              </div>
            </div>
            <div className="restaurantTitleCard__finden">
              <div className="restaurantTitleCard__map">
                <img src={map} alt="" />
              </div>
              <div className="restaurantTitleCard__address">
                <img src={pin} alt="" />
                <h5>{restaurant.street}</h5>
              </div>
              <div className="restaurantTitleCard__phone">
                <img src={phone} alt="" />
                <h5>+41 44 211 53 72</h5>
              </div>
              <div className="restaurantTitleCard__site">
                <img src={web} alt="" />
                <h5>{restaurant.website}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantOverview;
