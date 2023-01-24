import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <WeatherIcon iconCode="01d" size={30} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">15°</span>
            <span className="WeatherForecast-temperature-min">7°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
