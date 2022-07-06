import "../styles/Header.scss";
import { NavLink, Link } from "react-router-dom";

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
            <Link to="registration" className="signup">
              SIGNUP
            </Link>
          </li>
          <li>
            <Link to="login" className="login">
              LOGIN
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
