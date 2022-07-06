import "../styles/RestaurantReview.scss";
import star from "../assets/star.svg";
import userImg from "../assets/user_sample.jpg";
import { useState } from "react";
import RestaurantComment from "./RestaurantComment";

const RestaurantReview = () => {
  const [showComment, setShowComment] = useState(false);

  const handleShowComment = () =>
    showComment ? setShowComment(!showComment) : setShowComment(!showComment);

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
          {!showComment && (
            <div className="review__btn-container">
              <button className="like-btn">thumbUp Like 63</button>
              <button className="comment-btn">Comment 23</button>
            </div>
          )}
          {showComment && (
            <form className="review__comment-form">
              <label>
                <input
                  type="text"
                  name="comment"
                  id="comment"
                  placeholder="Write a comment..."
                />
              </label>
              <button
                type="submit"
                className="search-btn"
                style={{ padding: "0.2rem 2rem", width: "auto" }}
              >
                Post
              </button>
            </form>
          )}
          <button className="viewAll-comments-btn" onClick={handleShowComment}>
            {showComment ? "Hide" : "View all comments"}
          </button>
        </div>
      </div>
      {/* Additional condition needs to be added here based on the length of an array. If the length is > 0, then show the comments */}
      {showComment && (
        <>
          <RestaurantComment />
          <RestaurantComment />
          <RestaurantComment />
        </>
      )}
    </article>
  );
};
export default RestaurantReview;
