import "../styles/Search.scss";
import { NavLink } from "react-router-dom";
import Grid from "../components/Grid";
import RestaurtRatingCard from "../components/RestaurantRatingCard";
import { Outlet } from "react-router-dom";

const Search = () => {
  return (
    <main className="search">
      <div className="search__form">
        <form>
          <label>
            <input type="text" name="search" placeholder="Search..." />
          </label>
          <label>
            <select name="category" id="category">
              <option value="italian">Italian</option>
              <option value="german">German</option>
              <option value="asian">Asian</option>
            </select>
          </label>
        </form>
      </div>
      <div className="search__links">
        <div className="search__link-container">
          <NavLink to="restaurants">RESTAURANTS</NavLink>
        </div>
        <div>
          <NavLink to="reviews">REVIEWS</NavLink>
        </div>
        <div>
          <NavLink to="users">USERS</NavLink>
        </div>
      </div>
      <Outlet />
    </main>
  );
};
export default Search;
