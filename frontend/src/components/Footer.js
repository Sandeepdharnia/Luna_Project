import "../styles/Footer.scss";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import googleplus from "../assets/googleplus.svg";
import instagram from "../assets/instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <ul className="footer__company">
          <li>
            <button>About Us</button>
          </li>
          <li>
            <button>Press</button>
          </li>
          <li>
            <button>Blog</button>
          </li>
          <li>
            <button>iOS</button>
          </li>
          <li>
            <button>Android</button>
          </li>
        </ul>
        <ul className="footer__social">
          <li>
            <img src={facebook} alt="facebook logo" />
          </li>
          <li>
            <img src={twitter} alt="twitter logo" />
          </li>
          <li>
            <img src={googleplus} alt="googleplus logo" />
          </li>
          <li>
            <img src={instagram} alt="instagram logo" />
          </li>
        </ul>
      </div>
      <div className="footer__copyright">
        <p>&copy; Copyright Luna 2018</p>
      </div>
    </footer>
  );
};
export default Footer;
