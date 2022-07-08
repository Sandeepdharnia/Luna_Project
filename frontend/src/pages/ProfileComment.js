import "../styles/ProfileComment.scss";
import banner from "../assets/new-york.jpg";
import starIcon from "../assets/star.svg";
import editIcon from "../assets/edit.svg";
import restaurantIcon from "../assets/restaurant.svg";
import commentIcon from "../assets/comment.svg";
import userImg from "../assets/user_sample.jpg";
import UserComment from "../components/UserComment";

const ProfileComments = () => {

    return (
    <main className="profile">
        <div className="profile__banner-container">
        <img className="profile__banner" src={banner} alt="" />
        </div>
        <section className="profile__main-container">
        <div className="profile__left-container">
            <div className="profile__img-container">
            <img className="profile__img" src={userImg} alt="" />
            </div>
            <div>
            <p>Laurent's profile</p>
            </div>
            <div className="profile__btn-container">
            <button className="profile-btn">
                {" "}
                <img src={starIcon} alt="" /> Reviews
            </button>
            <button className="profile-btn">
                {" "}
                <img src={commentIcon} alt="" /> Comments
            </button>
            <button className="profile-btn">
                {" "}
                <img src={restaurantIcon} alt="" /> Restaurants
            </button>
            <button className="profile-btn">
                {" "}
                <img src={editIcon} alt="" /> Edit Profile
            </button>
            </div>
        </div>
        <div className="profile__middle-container">
            <div className="profile__personal-info">
            <h2>Laurent H.</h2>
            <p>Zürich, Ch</p>
            <p>6 reviews</p>
            <p>210 comments</p>
            </div>
            <div className="profile__reviews-container">
            <div className="profile__review">
                <UserComment />
            </div>
            </div>
        </div>
        <div className="profile__user-info">
            <div>
            <h2>ABOUT LAURENT</h2>
            </div>
            <div>
            <h3>Location</h3>
            <p>Zürich, CH</p>
            </div>
            <div>
            <h3>Luna member since</h3>
            <p>April, 2018</p>
            </div>
            <div>
            <h3>Things I love</h3>
            <p>Everything</p>
            </div>
            <div>
            <h3>Description</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                quaerat neque eaque, non nemo id culpa quam nam aliquid
                consequatur, fugiat consectetur ipsum perspiciatis laborum.
            </p>
            </div>
        </div>
        </section>
    </main>
    );
};
export default ProfileComments;
