import UserOverviewCard from "../components/UserOverviewCard";
import Grid from "../components/Grid";
import { useContext, useEffect } from "react";
import userContext from "../context/users/UserContext";
import { list_users } from "../context/users/UserActions";

const SearchUsers = () => {
  const { users, dispatch } = useContext(userContext);

  useEffect(() => {
    const getUserData = async () => {
      const userData = await list_users();
      dispatch({ type: "GET_USERS", payload: userData });
    };

    getUserData();
  }, [dispatch]);

  console.log(users);

  return (
    <div className="search__card-section">
      <Grid>
        {users.map(user => (
          <UserOverviewCard key={user.id} {...user} />
        ))}
      </Grid>
    </div>
  );
};
export default SearchUsers;
