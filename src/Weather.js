import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Kyiv</h1>
      <ul>
        <li>Friday: 15:00</li>
        <li>Snow</li>
      </ul>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/snow_light.png"
              alt="Snow"
            />
            2°C
          </div>
          <div className="col-5">
            <ul>
              <li>Precipitation: 80%</li>
              <li>Humidity: 75%</li>
              <li>Wind: 3 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
