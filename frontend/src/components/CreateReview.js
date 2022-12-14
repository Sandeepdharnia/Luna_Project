import "../styles/CreateReview.scss";
import { Link, useNavigate } from "react-router-dom";

const CreateReview = () => {

  const navigate = useNavigate()

  const handleNavigate = () => navigate("/restaurant")

  return (
    <section className="createReview">
      <div className="createReview__star-rating-container">
        <div>stars go in here</div>
        <p>Select your rating</p>
      </div>
      <form className="createReview__form">
        <label>
          <textarea
            name="rating"
            id="rating"
            cols="60"
            rows="10"
            required
            placeholder="Your review helps others learn about great local businesses. Please
            don't review this business if you received a freebie for writing
            this review, or if you're connected in any way to the owner or
            employees."
          ></textarea>
        </label>
        <button className="search-btn" onClick={handleNavigate}>SUBMIT</button>
      </form>
    </section>
  );
};
export default CreateReview;
