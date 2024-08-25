import "./Navbar2.css";
import { Link } from "react-router-dom";

function SecondaryNavbar() {
  return (
    <div className="secondary-navbar-container">
      <div className="secondary-navbar">
        <a href="#">Today</a>
        <Link to="/hourly">Hourly</Link>
        <a href="#">Daily</a>
        <a href="#">Radar</a>
        <a href="#">Minutecast</a>
        <a href="#">Monthly</a>
        <a href="#">Air Quality</a>
        <a href="#">Health & Activities</a>
        <a href="#">For Business</a>
      </div>
    </div>
  );
}

export default SecondaryNavbar;
