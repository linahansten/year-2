import { useState } from "react";

const WeatherApp = () => {
  const [country, setCountry] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");
  const [error, setError] = useState("");

  const apiKey = "api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}";

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=metric`
      );
      const data = await response.json();

      if (response.ok) {
        setTemperature(data.main.temp);
        setWeatherDescription(data.weather[0].description);
        setError("");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Error fetching weather data");
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <div>
        <label>
          Enter Country:
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </label>
        <button onClick={handleSearch}>Search</button>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {temperature && weatherDescription && (
        <div>
          <h2>Weather in {country}</h2>
          <p>Temperature: {temperature} °C</p>
          <p>Weather: {weatherDescription}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
