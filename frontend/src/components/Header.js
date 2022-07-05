import "../styles/Header.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">LUNA</div>
            <div className="header__navbar">
                <ul className="header__navlist">
                    <il>
                        <button>Home</button>
                    </il>
                    <li>
                        <button>Search</button>
                    </li>
                    <li>
                        <button>Profile</button>
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
