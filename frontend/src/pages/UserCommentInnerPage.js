import "../styles/UserCommentInnerPage.scss";
import UserComment from "../components/UserComment";
import userContext from "../context/users/UserContext";
import { useContext, useEffect } from "react";
import { get_user_comments } from "../context/users/UserActions";

const UserCommentInnerPage = () => {
  const { userComments, loggedInUser, dispatch } = useContext(userContext);

  useEffect(() => {
    const getUserComments = async () => {
      const commentData = await get_user_comments(
        loggedInUser && loggedInUser[0].id
      );
      dispatch({ type: "GET_USER_COMMENTS", payload: commentData });
    };

    getUserComments();
  }, [dispatch, loggedInUser]);

  return (
    <article className="userComment">
      {userComments.map(comment => (
        <UserComment key={comment.id} {...comment} />
      ))}
    </article>
  );
};
export default UserCommentInnerPage;
