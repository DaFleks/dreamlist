import { useState, useEffect } from "react";
import weatherData from "../data/weather.json";

const fetchData = () => {
  return new Promise(async (resolve, reject) => {
    const { REACT_APP_WEATHER_URL, REACT_APP_API_KEY } = process.env;
    try {
      const response = await fetch(`${REACT_APP_WEATHER_URL}${REACT_APP_API_KEY}`);
      const data = await response.json();
      resolve(data);
    } catch (e) {
      console.error(e);
      reject(e);
    }
  });
};

const useWeatherData = () => {
  const [data, setData] = useState([]);
  const [dailyArr, setDailyArr] = useState([]);
  const [description, setDescription] = useState("");
  const [icon, setIcon] = useState("");
  const [currentTemp, setCurrentTemp] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const jsonData = await fetchData();

      if (jsonData.cod === 429) {
        setData(weatherData);
        setDailyArr([...weatherData.daily]);
        setDescription(weatherData.current.weather[0].description);
        setIcon(weatherData.current.weather[0].icon);
        setCurrentTemp(weatherData.current.temp);
        setMinTemp(weatherData.daily[0].temp.min);
        setMaxTemp(weatherData.daily[0].temp.max);
        setIsLoading(false);
      } else {
        setData(jsonData);
        setDailyArr([...jsonData.daily]);
        setDescription(jsonData.current.weather[0].description);
        setIcon(jsonData.current.weather[0].icon);
        setCurrentTemp(jsonData.current.temp);
        setMinTemp(jsonData.daily[0].temp.min);
        setMaxTemp(jsonData.daily[0].temp.max);
        setIsLoading(false);
      }
    })();
  }, []);

  return [
    dailyArr,
    description,
    icon,
    currentTemp,
    minTemp,
    maxTemp,
    isLoading,
  ];
};

export default useWeatherData;
