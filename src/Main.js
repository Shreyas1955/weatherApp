import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Main() {
  const params = useParams(); // Get the city name from URL params
  const [data, setData] = useState(null); // Initialize state for weather data

  useEffect(() => {
    getWeatherData(); // Fetch weather data when the component mounts
  }, []);

  const getWeatherData = () => {
    const Wurl =
      `https://api.openweathermap.org/data/2.5/weather?q=${params.city}&appid=e0642f5acacb96e64b1cb602869cf272&units=metric`;
    axios
      .get(Wurl)
      .then((res) => {
        console.log(res.data);
        setData(res.data); // Set weather data in state
      })
      .catch((err) => alert(err));
  };

  const date = new Date().toDateString(); // Format current date

  return (
    <div className="main-container">
      {data ? (
        <>
          <div className="weather-info">
            <h1>Weather in {data.name}</h1>
            <h2>{data.weather[0].description}</h2>
            <h1>{data.main.temp}°C</h1>
            <div className="extra-info">
              <p><strong>Humidity:</strong> {data.main.humidity}%</p>
              <p><strong>Wind Speed:</strong> {data.wind.speed} m/s</p>
              <p><strong>Pressure:</strong> {data.main.pressure} hPa</p>
            </div>
            <p className="date">Date: {date}</p>
          </div>
          <div className="feedback-section">
            <h2>We value your feedback!</h2>
            <form className="feedback-form">
              <div className="input-group">
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
              </div>
              <textarea placeholder="Your feedback here..." rows={4} required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}
