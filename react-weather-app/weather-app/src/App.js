import React from "react";
import "./App.css";

const API_URL = "http://api.openweathermap.org/data/2.5/weather";
const CITY = "Zduńska Wola";
const UNITS = "metric";
const APP_ID = "1b6987ff9427bba70142ad7f485571b9";

const URL = `${API_URL}?q=${CITY}&units=${UNITS}&appid=${APP_ID}`;

class App extends React.Component {
  state = {
    temperature: "",
    icon: "",
    wind: "",
    windDeg: "",
  };

  componentDidMount() {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          temperature: data.main.temp,
          icon: data.weather[0].icon,
          wind: data.wind.speed,
          windDeg: data.wind.deg,
        });
      });
  }

  render() {
    return (
      <div className="App">
        {CITY}
        {this.state.temperature} &#8451;
        <img
          src={`http://openweathermap.org/img/wn/${this.state.icon}@2x.png`}
          alt="weather icon"
        />
        <div>
          {this.state.wind} <p>m/s</p>
          <div className="windDir"> &uarr;</div>
        </div>
      </div>
    );
  }
}

export default App;
