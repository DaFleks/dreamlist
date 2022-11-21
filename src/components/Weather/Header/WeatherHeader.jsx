import "./WeatherHeader.css";
import upperFirst from "../../../utils/upperFirst";
import { kelToCel } from "../../../utils/tempConvert";

const WeatherHeader = (props) => {
  return (
    <header className="WeatherHeader">
      <h2>Toronto
      </h2>
      <h5>{upperFirst(props.description)}</h5>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt={props.description}
        />
        <h1>{kelToCel(props.currentTemp)}</h1>
      </div>
      <h2>{`${kelToCel(props.min)} / ${kelToCel(props.max)}`}</h2>
    </header>
  );
};

export default WeatherHeader;
