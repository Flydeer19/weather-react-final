import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";

import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay forecast={forecast[0]} />
          </div>
          <div className="col">
            <WeatherForecastDay forecast={forecast[1]} />
          </div>
          <div className="col">
            <WeatherForecastDay forecast={forecast[2]} />
          </div>
          <div className="col">
            <WeatherForecastDay forecast={forecast[3]} />
          </div>
          <div className="col">
            <WeatherForecastDay forecast={forecast[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8ca7dd4e61360b90fb66918853670e48";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
