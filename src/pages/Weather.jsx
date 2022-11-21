import "./Weather.css";
import { useEffect } from "react";
import useWeatherData from "../hooks/useWeatherData";
import { useNavContext } from "../context/NavContext";
import NavMenu from "./NavMenu";
import WeatherHeader from "../components/Weather/Header/WeatherHeader";
import Daily from "../components/Weather/Daily/Daily";
import { v4 as uuidv4 } from "uuid";

const Weather = () => {
  const { navMenu, navMenuToggler } = useNavContext();

  useEffect(() => {
    if (navMenu) navMenuToggler();
  }, []);

  const [
    dailyArr,
    description,
    icon,
    currentTemp,
    minTemp,
    maxTemp,
    isLoading,
  ] = useWeatherData();

  const loadingImg = (
    <img
      src="https://user-images.githubusercontent.com/2493614/33472418-17bcab1a-d66a-11e7-9841-3f32d75307dd.gif"
      alt="Loading"
      style={{
        width: "10%",
        position: "relative",
        top: "42%",
        left: "45%",
      }}
    />
  );

  return (
    <div className="Weather">
      <NavMenu />
      <div className="Weather-wrapper">
        <i onClick={navMenuToggler} className="fa-solid fa-bars fa-2x"></i>
        {isLoading ? (
          loadingImg
        ) : (
          <>
            <WeatherHeader
              description={description}
              icon={icon}
              currentTemp={currentTemp}
              min={minTemp}
              max={maxTemp}
            />
            <main className="Weather-daily">
              {dailyArr.map(
                (day, idx) =>
                  idx != 0 && (
                    <Daily
                      key={uuidv4()}
                      day={day.dt}
                      icon={day.weather[0].icon}
                      min={day.temp.min}
                      max={day.temp.max}
                    />
                  )
              )}
            </main>
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;
