import "../styles/UserOverviewCard.scss";
import userImg from "../assets/user_sample.jpg";

const UserOverviewCard = () => {
  return (
    <article className="userOverview">
      <div className="userOverview__header">
        <div className="userOverview__header-img">
          <img src={userImg} alt="" />
        </div>
        <div className="userOverview__header-text">
          <h2>Laurent H.</h2>
          <p>6 Reviews in total</p>
        </div>
      </div>
      <div className="userOverview__body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, ad
          sapiente illum nesciunt cumque facilis?
        </p>
      </div>
    </article>
  );
};
export default UserOverviewCard;
