import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

const PopularCities = () => {
  const [weatherData, setWeatherData] = useState([]);
  const cities = ["New York", "London", "Tokyo", "Paris", "Sydney", "Casablanca"];
  const apiKey = "50125c23cc02daf927baf57603776551";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const responses = await Promise.all(
          cities.map((city) =>
            fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
            ).then((res) => res.json())
          )
        );
        setWeatherData(responses);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeather();
  }, []);

  return (
    <div className="p-4">
      <h2 className=" font-bold mb-4 text-center mb-6 text-3xl" >Popular Cities</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {weatherData.map((data, index) => (
          <WeatherCard key={index} weather={data} />
        ))}
      </div>
    </div>
  );
};

export default PopularCities;
