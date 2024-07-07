import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const cityname = "dallas";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=bdbb5797eb735d68427eedbbe1337c77";

  return (
    <div className="container">
      <div className="top">
        <div className="Location">
          <p>Dallas</p>
        </div>
        <div className="Temperture">
          <p>60 degrees</p>
        </div>
        <div className="description">
          <p>Clouds</p>
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default App;
