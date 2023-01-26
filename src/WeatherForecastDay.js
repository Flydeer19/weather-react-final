import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    const temperature = Math.round(props.forecast.temp.max);
    return temperature;
  }

  function minTemperature() {
    const temperature = Math.round(props.forecast.temp.min);
    return temperature;
  }

  function day() {
    const date = new Date(props.forecast.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon iconCode={props.forecast.weather[0].icon} size={30} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}°
        </span>
      </div>
    </div>
  );
}
