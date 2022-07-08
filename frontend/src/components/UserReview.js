import "../styles/UserReview.scss";

const UserReview = ({ content, rating, date_created }) => {
  return (
    <>
      <div className="userReview__heading">
        <h1>Läderach Chocolatier Suisse</h1>
        <p>{date_created}</p>
      </div>
      <p>Stars will go in here</p>
      <p>{content}</p>
    </>
  );
};
export default UserReview;
