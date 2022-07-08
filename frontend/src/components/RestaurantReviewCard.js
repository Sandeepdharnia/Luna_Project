import "../styles/RestaurantReviewCard.scss";
import "../styles/ReviewButton.scss";
import userImg from "../assets/user_sample.jpg";
import LikeIcon from "../assets/like.svg";

const RestaurantReviewCard = ({ content, liked_by }) => {
  return (
    <button className="card-btn">
      <article className="reviewsCard">
        <div className="reviewsCard__header">
          <div className="reviewsCard__header-img">
            <img src={userImg} alt="" />
          </div>
          <div className="reviewsCard__header-text">
            <h2>Laurent H.</h2>
            <p>6 Reviews in total</p>
          </div>
        </div>
        <div className="reviewsCard__body">
          <div className="reviewsCard__info">
            <h2>Colinz Bar</h2>
            <p>{content}</p>
          </div>
          <div className="reviewsCard__btn-container">
            <button className="like-btn">
              <img className="reviewsCard__likeIcon" src={LikeIcon} alt="" />
              <span>Likes</span> {liked_by.length}
            </button>
            <button className="comment-btn">Comment 23</button>
          </div>
          <div className="reviewsCard__comments">
            <h3>Latest comments</h3>
            <div>
              <h4>Sandeep</h4>
              <p>This is super delicious</p>
            </div>
            <div>
              <h4>Adrien</h4>
              <p>Tastes like garbage!!! never again</p>
            </div>
          </div>
        </div>
      </article>
    </button>
  );
};
export default RestaurantReviewCard;
