import { useState } from "react";
import { FaSearch, FaBars, FaSun, FaChevronDown } from "react-icons/fa";
import "./Navbar.css";

function WeatherNavbar() {
  const [isLocationDropdownOpen, setLocationDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCity, setSelectedCity] = useState("Dhaka, Dhaka");
  const [temperature, setTemperature] = useState("30°C");
  const [weatherIcon, setWeatherIcon] = useState(null);

  const apiKey = "PvsDVBVgzpRPDIRRE6N36hkpqVatzO7V";

  const toggleLocationDropdown = () => {
    setLocationDropdownOpen(!isLocationDropdownOpen);
  };

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 2) {
      const url = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${query}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleCitySelect = async (city) => {
    setSelectedCity(
      `${city.LocalizedName}, ${city.AdministrativeArea.LocalizedName}`
    );
    setSearchResults([]);
    setSearchQuery("");

    const currentConditionsUrl = `http://dataservice.accuweather.com/currentconditions/v1/${city.Key}?apikey=${apiKey}`;

    try {
      const response = await fetch(currentConditionsUrl);
      const data = await response.json();

      const temp = data[0].Temperature.Metric.Value;
      setTemperature(`${temp}°C`);

      const iconCode = data[0].WeatherIcon;
      setWeatherIcon(
        `https://developer.accuweather.com/sites/default/files/${String(
          iconCode
        ).padStart(2, "0")}-s.png`
      );
    } catch (error) {
      console.error("Error fetching current conditions:", error);
    }
  };

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="navbar-brand">
          <FaSun className="navbar-icon" />
          <span className="navbar-title">AccuWeather</span>
          <div className="weather-info">
            <p className="h3-title">
              {selectedCity} {temperature}
            </p>
            {weatherIcon ? (
              <img
                src={weatherIcon}
                alt="Weather icon"
                className="weather-icon"
              />
            ) : (
              <FaSun className="weather-icon" />
            )}
          </div>
        </div>

        <div className="search-location-container">
          <div className="search-input-group">
            <span className="search-icon">
              <FaSearch />
            </span>
            <input
              type="text"
              placeholder="Address, City, or Zip code"
              className="search-input"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            {searchResults.length > 0 && (
              <div className="search-results">
                {searchResults.map((result) => (
                  <div
                    key={result.Key}
                    className="search-result-item"
                    onClick={() => handleCitySelect(result)}
                  >
                    {result.LocalizedName},{" "}
                    {result.AdministrativeArea.LocalizedName},{" "}
                    {result.Country.LocalizedName}
                  </div>
                ))}
              </div>
            )}
            <div className="location-dropdown" onClick={toggleLocationDropdown}>
              <span className="location-dropdown-text">Location</span>
              <FaChevronDown
                className={`location-dropdown-icon ${
                  isLocationDropdownOpen ? "rotate" : ""
                }`}
              />
              {isLocationDropdownOpen && (
                <div className="location-dropdown-menu">
                  <a href="#">Location</a>
                  <a href="#">News</a>
                  <a href="#">Videos</a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="dropdown-container">
          <FaBars className="dropdown-icon" />
          <div className="dropdown-menu">
            <a href="#">Action 1</a>
            <a href="#">Action 2</a>
            <a href="#">Action 3</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherNavbar;
