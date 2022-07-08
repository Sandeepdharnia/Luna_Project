import "../styles/Profile.scss";
import { Outlet, NavLink } from "react-router-dom";
import banner from "../assets/new-york.jpg";
import starIcon from "../assets/star.svg";
import editIcon from "../assets/edit.svg";
import restaurantIcon from "../assets/restaurant.svg";
import commentIcon from "../assets/comment.svg";
import userImg from "../assets/user_sample.jpg";
import { useContext, useEffect } from "react";
import userContext from "../context/users/UserContext";
import { get_logged_in_user } from "../context/users/UserActions";
import genericImg from "../assets/generic_restaurant.png";
import UserEdit from "../components/UserEdit";

const Profile = () => {
  const { loggedInUser, dispatch } = useContext(userContext);

  useEffect(() => {
    const getUserData = async () => {
      const userData = await get_logged_in_user();
      dispatch({ type: "GET_LOGGED_IN_USER", payload: userData });
    };

    getUserData();
  }, [dispatch]);

  return (
    <main className="profile">
      <div className="profile__banner-container">
        <img className="profile__banner" src={banner} alt="" />
      </div>
      <section className="profile__main-container">
        <div className="profile__left-container">
          <div className="profile__img-container">
            <img
              className="profile__img"
              src={
                loggedInUser[0] ? loggedInUser[0].profile_picture : genericImg
              }
              alt=""
            />
          </div>
          <div>
            <p>Laurent's profile</p>
          </div>
          <div className="profile__btn-container">
            <NavLink to="review" className="profile-btn">
              {" "}
              <img src={starIcon} alt="" /> Reviews
            </NavLink>
            <NavLink to="comment" className="profile-btn">
              {" "}
              <img src={commentIcon} alt="" /> Comments
            </NavLink>
            <NavLink to="restaurant" className="profile-btn">
              {" "}
              <img src={restaurantIcon} alt="" /> Restaurants
            </NavLink>
            <NavLink to="edit" className="profile-btn">
              <button className="profile-btn">
                {" "}
                <img src={editIcon} alt="" /> Edit Profile
              </button>
            </NavLink>
          </div>
        </div>
        <div className="profile__middle-container">
          <div className="profile__personal-info">
            <h2>{loggedInUser[0] ? loggedInUser[0].username : "loading"}</h2>
            <p>{loggedInUser[0] ? loggedInUser[0].location : "loading"}</p>
            <p>3 reviews</p>
            <p>21 comments</p>
          </div>
          <div className="profile__reviews-container">
            <h3>REVIEWS</h3>
            <div className="profile__review">
              <Outlet />
            </div>
          </div>
        </div>
        <div className="profile__user-info">
          <div>
            <h2>
              ABOUT {loggedInUser[0] ? loggedInUser[0].username : "loading"}
            </h2>
          </div>
          <div>
            <h3>Location</h3>
            <p>{loggedInUser[0] ? loggedInUser[0].location : "loading"}</p>
          </div>
          <div>
            <h3>Luna member since</h3>
            <p>{loggedInUser[0] ? loggedInUser[0].date_joined : "loading"}</p>
          </div>
          <div>
            <h3>Things I love</h3>
            <p>{loggedInUser[0] ? loggedInUser[0].things_i_love : "loading"}</p>
          </div>
          <div>
            <h3>Description</h3>
            <p>{loggedInUser[0] ? loggedInUser[0].description : "loading"}</p>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Profile;

