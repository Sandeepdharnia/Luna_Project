import "../styles/UserOverviewCard.scss";
import userImg from "../assets/user_sample.jpg";

const UserOverviewCard = ({ username, profile_picture, description }) => {
  return (
    <button className="card-btn">
      <article className="userOverview">
        <div className="userOverview__header">
          <div className="userOverview__header-img">
            <img src={profile_picture} alt="" />
          </div>
          <div className="userOverview__header-text">
            <h2>{username}</h2>
            <p>6 Reviews in total</p>
          </div>
        </div>
        <div className="userOverview__body">
          <p>{description}</p>
        </div>
      </article>
    </button>
  );
};
export default UserOverviewCard;
