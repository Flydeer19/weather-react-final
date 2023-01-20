import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>Kyiv</h1>
      <ul>
        <li>
          <FormattedDate date={props.info.date} />
        </li>
        <li>{props.info.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-7 d-flex align-items-center">
          <WeatherIcon iconCode={props.info.icon} />
          <div className="d-inline-block">
            <span className="temperature">
              {Math.round(props.info.temperature)}
            </span>
            <span className="unit align-top">°C</span>
          </div>
        </div>
        <div className="col-5">
          <ul>
            <li>Humidity: {props.info.humidity}%</li>
            <li>Wind: {props.info.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
