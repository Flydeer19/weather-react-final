import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          The project was coded by {"  "}
          <a
            href="https://loquacious-kangaroo-77f3b3.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Oleksandra Kondieieva
          </a>
          {"  "}
          and is {"  "}
          <a
            href="https://github.com/Flydeer19/weather-react-final"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
