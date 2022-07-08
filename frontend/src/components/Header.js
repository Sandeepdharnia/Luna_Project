import "../styles/Header.scss";
import {NavLink, Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import RegistrationContext from "../context/registration/RegistrationContext";
import {ACTIONS} from "../context/registration/RegistrationReducer";

const Header = () => {
  const navigate = useNavigate()

  const {isLoggedIn, dispatch} = useContext(RegistrationContext)

  // console.log(isLoggedIn)
  console.log(localStorage.getItem("token"))
  // const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [logText, setLogText] = useState("LOGIN")

  const handleLog = (e) => {
    e.preventDefault()
    if(isLoggedIn && localStorage.getItem('token')) {
      setLogText("LOGOUT")
      localStorage.clear()
      navigate("/login")
      dispatch({ type: ACTIONS.LOGIN_LOGOUT, payload: {isLoggedIn: !isLoggedIn}})
    } else {
      setLogText("LOGIN")
      dispatch({ type: ACTIONS.LOGIN_LOGOUT, payload: {isLoggedIn: !isLoggedIn}})
    }
  }

  return (
    <header className="header">
      <div className="header__logo">LUNA</div>
      <div className="header__navbar">
        <ul className="header__navlist">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="search/restaurants">Search</NavLink>
          </li>
          <li>
            <NavLink to="profile">Profile</NavLink>
          </li>
        </ul>
        <ul className="header__account">
          <li>
            <Link to="registration" className="signup">
              SIGNUP
            </Link>
          </li>
          <li>
            <Link to="login" className="login" onClick={handleLog}>
              {logText}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
