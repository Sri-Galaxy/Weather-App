import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import './SearchBox.css';
import { useState } from "react";

export default function SearchBox({ searchInfo }) {
  const API = "yourapi";
  const url = "https://api.openweathermap.org/data/2.5/weather";

  let [cityName, setCityName] = useState("");
  let [error, setError] = useState(false);

  let getWeatherInfo = async () => {
    try {
    let res = await fetch(`${url}?q=${cityName}&appid=${API}&units=metric`);
    let json_res = await res.json();

    let result = {
      name: cityName,
      feels_like: json_res.main.feels_like,
      pressure: json_res.main.pressure,
      temp: json_res.main.temp,
      temp_min: json_res.main.temp_min,
      temp_max: json_res.main.temp_max,
      humidity: json_res.main.humidity,
      weather: json_res.weather[0].description,
    };

    return result;
  } catch (err) {
      throw new Error("City not found. Please try again.");
    }
  };

  function handleChange(event) {
    setCityName(event.target.value);
  }

  async function handleSubmit(event) {
    try {
    event.preventDefault();
    setCityName("");
    let weatherData = await getWeatherInfo();
    searchInfo(weatherData);
    } catch (err) {
      setError(true);
      console.error(err.message);
    }
  }

  return (
    <div className="search-box">
      <h3>Search for weather!</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          value={cityName}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p className="error-message">City not found. Please try again.</p>}
      </form>
    </div>
  );
}
