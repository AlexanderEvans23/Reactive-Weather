import React from "react";
// Import data and WeatherCard here
import WeatherCard from "./components/WeatherCard";
import cities from "./data";
import { useState } from "react";
import location from "./components/Location";

function App() {
  const [location, setLocation] = useState("Tulsa");
  return (
    <>
      <h1 className="title">REACTIVE WEATHER</h1>
      <h3 className="subtitle">Up to the minute weather news</h3>
      <div className="app">
        {cities.map((value) => (
          <WeatherCard data={value} />
        ))}
      </div>
    </>
  );
}

export default App;
