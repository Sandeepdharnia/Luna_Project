import "../styles/RestaurantReview.scss";
import star from "../assets/star.svg";
import userImg from "../assets/user_sample.jpg";
import { useState } from "react";
import RestaurantComment from "./RestaurantComment";

const RestaurantReview = ({ content, date_created, rating, liked_by }) => {
  let date = new Date();

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
            <h2>Adrien</h2>
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
          <p>{`${date.getDay(date_created)} / ${date.getMonth(
            date_created
          )} / ${date.getFullYear(date_created)}`}</p>
        </div>
      </div>
      <div className="review__body">
        <p>{content}</p>
        <div className="review__comment">
          {!showComment && (
            <div className="review__btn-container">
              <button className="like-btn">
                thumbUp Like {liked_by.length}
              </button>
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
