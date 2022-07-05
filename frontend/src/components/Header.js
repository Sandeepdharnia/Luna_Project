import "../styles/Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
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
            <button className="signup">SIGNUP</button>
          </li>
          <li>
            <button className="login">LOGIN</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
