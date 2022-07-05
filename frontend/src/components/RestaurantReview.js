import "../styles/RestaurantReview.scss";
import star from "../assets/star.svg";
import userImg from "../assets/user_sample.jpg";

const RestaurantReview = () => {
  return (
    <article className="review">
      <div className="review__header">
        <div className="review__profile">
          <div className="review__header-img">
            <img src={userImg} alt="" />
          </div>
          <div className="review__header-text">
            <h2>Laurent H.</h2>
            <p>6 Reviews in total</p>
          </div>
          <div className="review__star-container">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
          </div>
        </div>
        <div className="review__time">
          <p>05.07.2022 17:00</p>
        </div>
      </div>
      <div className="review__body">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
          quibusdam veniam quaerat nulla, provident aliquam.
        </p>
        <div className="review__comment">
          <div className="review__btn-container">
            <button className="like-btn">thumbUp Like 63</button>
            <button className="comment-btn">Comment 23</button>
          </div>
          <button className="viewAll-comments-btn">View all comments</button>
        </div>
      </div>
    </article>
  );
};
export default RestaurantReview;
