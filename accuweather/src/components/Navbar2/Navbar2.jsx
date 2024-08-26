import "./Navbar2.css";
import { Link } from "react-router-dom";

function SecondaryNavbar() {
  return (
    <div className="secondary-navbar-container">
      <div className="secondary-navbar">
        <Link to="/">Today</Link>
        <Link to="/hourly">Hourly</Link>
        <Link to="/daily">Daily</Link>
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
