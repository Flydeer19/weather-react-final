import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Kyiv</h1>
      <ul>
        <li>Friday: 15:00</li>
        <li>Snow</li>
      </ul>
      <div className="row mt-3">
        <div className="col-7">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/snow_light.png"
            alt="Snow"
            className="d-inline-block align-middle"
          />
          <div className="d-inline-block">
            <span className="temperature align-middle">2</span>
            <span className="unit align-top">°C</span>
          </div>
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
  );
}
