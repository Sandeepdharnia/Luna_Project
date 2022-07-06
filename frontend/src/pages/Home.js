import "../styles/Home.scss";
import restaurantImg from "../assets/restaurant_sample.jpg";
import RestaurantRatingCard from "../components/RestaurantRatingCard";
import Grid from "../components/Grid";
import "../styles/ReviewButton.scss";

const Home = () => {
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
          <RestaurantRatingCard />
          <RestaurantRatingCard />
          <RestaurantRatingCard />
          <RestaurantRatingCard />
        </Grid>
      </div>
    </main>
  );
};
export default Home;
