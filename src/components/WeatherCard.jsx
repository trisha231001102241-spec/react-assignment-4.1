function WeatherCard({ weather }) {
  const sunrise = new Date(weather.sys.sunrise * 1000).toLocaleTimeString();
  const sunset = new Date(weather.sys.sunset * 1000).toLocaleTimeString();

  return (
    <div className="weather-card">
      <h2>{weather.name}</h2>

      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Weather icon"
      />

      <h3>{weather.main.temp}°C</h3>

      <p>Weather: {weather.weather[0].description}</p>
      <p>💧 Humidity: {weather.main.humidity}%</p>
      <p>💨 Wind: {weather.wind.speed} m/s</p>
      <p>🌅 Sunrise: {sunrise}</p>
      <p>🌇 Sunset: {sunset}</p>
    </div>
  );
}

export default WeatherCard;