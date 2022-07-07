import "../styles/Home.scss";
import restaurantImg from "../assets/restaurant_sample.jpg";
import RestaurantRatingCard from "../components/RestaurantRatingCard";
import Grid from "../components/Grid";
import "../styles/ReviewButton.scss";
import { useContext, useEffect } from "react";
import restaurantContext from "../context/restaurant/RestaurantContext";
import { list_restaurants } from "../context/restaurant/RestaurantActions";

const Home = () => {
  const { restaurants, dispatch } = useContext(restaurantContext);

  useEffect(() => {
    const getRestaurantData = async () => {
      const restaurantData = await list_restaurants();
      dispatch({ type: "GET_RESTAURANTS", payload: restaurantData });
    };

    getRestaurantData();
  }, [dispatch]);

  return (
    <main className="home">
      <div className="home__top-section">
        <img src={restaurantImg} alt="" />
        <form className="home__form">
          <label>
            <input
              className="home__input"
              type="text"
              name="search"
              id="name"
              placeholder="Search..."
            />
          </label>
          <button className="search-btn">Search</button>
        </form>
      </div>
      <div className="home__title">
        <h1>BEST RATED RESTAURANTS</h1>
        <hr />
      </div>
      <div className="home__card-section">
        <Grid>
          {restaurants.map(restaurant => (
            <RestaurantRatingCard key={restaurant.id} {...restaurant} />
          ))}
        </Grid>
      </div>
    </main>
  );
};
export default Home;
