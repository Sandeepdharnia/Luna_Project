import "../styles/RestaurantComment.scss";

const RestaurantComment = () => {
  return (
    <article className="restaurantComment">
      <div className="restaurantComment__text-container">
        <h3>Colin Wirz</h3>
        <p>Actually you have no taste!!</p>
      </div>
      <div className="restaurantComment__time">
        <p>06.07.2022 09:00</p>
      </div>
    </article>
  );
};
export default RestaurantComment;
