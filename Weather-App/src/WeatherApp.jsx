import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

export default function WeatherApp() {
    const [WeatherInfo, setWeatherInfo] = useState({
      name: "City Name",
      temp: "N/A",
      feels_like: "N/A",
      pressure: "N/A",
      humidity: "N/A",
      weather: "N/A",
      temp_min: "N/A",
      temp_max: "N/A",
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

  return (
    <>
      <SearchBox searchInfo={updateInfo} />
      <InfoBox info={WeatherInfo} />
    </>
  );
}
