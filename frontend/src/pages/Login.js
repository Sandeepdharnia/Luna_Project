import "../styles/Login.scss";
import {useContext} from "react";
import RegistrationContext from "../context/registration/RegistrationContext";
import {ACTIONS} from "../context/registration/RegistrationReducer";
import {check_login_user} from "../context/registration/RegistrationActions";

const Login = () => {

    const { userValues, dispatch} = useContext(RegistrationContext)

  const handleInput = (event) => {

      dispatch({ type: ACTIONS.ADD_LOGIN, payload: event})
  }

  console.log(userValues)

  const handleLogin = async e => {
      e.preventDefault()
      const response = await check_login_user(userValues)
      dispatch({ type: ACTIONS.CHECK_LOGIN, payload: response.status})
  }



  return (
    <main className="userLogin">
      <div className="userLogin__title-container">
        <h1>LOGIN</h1>
        <hr />
      </div>

      <form className="userLogin__form" onSubmit={handleLogin}>
        <label>
          <input
              type="text"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleInput}/>
        </label>
        <label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={handleInput}
          />
        </label>
        <button
          type="submit"
          className="search-btn"
          style={{ padding: "0.6rem 1rem" }}
        >
          Register
        </button>
      </form>
    </main>
  );
};
export default Login;
