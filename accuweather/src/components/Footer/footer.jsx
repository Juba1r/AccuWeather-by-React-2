import { FaFacebook, FaTwitter } from "react-icons/fa";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Company</h4>
          <a href="#">Proven Superior Accuracy</a>
          <a href="#">About AccuWeather</a>
          <a href="#">Digital Advertising</a>
          <a href="#">Careers</a>
          <a href="#">Press</a>
          <a href="#">Contact Us</a>
          <br />
          <div className="social-icons">
            <FaFacebook className="social-icon" />
            <FaTwitter className="social-icon" />
          </div>
        </div>
        <div className="footer-section">
          <h4>Products & Services</h4>
          <a href="#">For Business</a>
          <a href="#">For Partners</a>
          <a href="#">For Advertising</a>
          <a href="#">AccuWeather APIs</a>
          <a href="#">AccuWeather Connect</a>
          <a href="#">RealFeel® and RealFeel Shade™</a>
        </div>
        <div className="footer-section">
          <h4>Apps & Downloads</h4>
          <a href="#">iPhone App</a>
          <a href="#">Android App</a>
          <a href="#">See all Apps & Downloads</a> <br />
          <h4>Subscription Services</h4>
          <a href="#">AccuWeather Premium</a>
          <a href="#">AccuWeather Professional</a>
        </div>
        <div className="footer-section">
          <h4>More</h4>
          <a href="#">AccuWeather Ready</a>
          <a href="#">Business</a>
          <a href="#">Health</a>
          <a href="#">Hurricane</a>
          <a href="#">Leisure and Recreation</a>
          <a href="#">Severe Weather</a>
          <a href="#">Space and Astronomy</a>
          <a href="#">Sports</a>
          <a href="#">Travel</a>
          <a href="#">Weather News</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2024 AccuWeather, Inc. AccuWeather and sun design are registered
          trademarks of AccuWeather, Inc. All Rights Reserved.
        </p>
        <div className="footer-policies">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
