import React from "react";
import sunny from "../assets/Sunny.svg";
import rainy from "../assets/Rainy.svg";
import cloudy from "../assets/Cloudy.svg";
import partlyCloudy from "../assets/PartlyCloudy.svg";

function WeatherCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          className="card-img-top"
          src={
            props.data.forecast === "Sunny"
              ? sunny
              : props.data.forecast === "Rainy"
              ? rainy
              : props.data.forecast === "Cloudy"
              ? cloudy
              : partlyCloudy
          }
          alt="Card image cap"
          id="icon"
        />
      </div>
      <div class="card-body">
        <h3 className="card-title">{props.data.city}</h3>
        <h5 className="card-text">{props.data.temperature}</h5>
        <h5 className="card-text">{props.data.forecast}</h5>
      </div>
    </div>
  );
}

// Export the WeatherCard
module.exports = WeatherCard;
