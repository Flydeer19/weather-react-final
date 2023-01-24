import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  const apiKey = "8ca7dd4e61360b90fb66918853670e48";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  function handleResponse(response) {
    console.log(response.data.daily[0].temp);
  }

  axios.get(apiUrl).then(handleResponse);
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
