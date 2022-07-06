import "../styles/RestaurantOverview.scss";
import overviewImg from "../assets/restaurant_overview.jpg";

const RestaurantOverview = () => {
    return (
        <>
            <div className="restaurantTitelCard">
                <img src={overviewImg} alt="" ></img>
            </div>
        </>
    );
};

export default RestaurantOverview;
