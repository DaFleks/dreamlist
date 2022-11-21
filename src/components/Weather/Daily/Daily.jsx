import './Daily.css';
import { kelToCel } from "../../../utils/tempConvert";
import getWeekday from "../../../utils/getWeekday";

const Daily = (props) => {
  return (
    <div className="Daily">
      <h6>{getWeekday(props.day)}</h6>
      <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} />
      <div>
        <span>{kelToCel(props.min)} / </span>
        <span>{kelToCel(props.max)}</span>
      </div>
    </div>
  );
};

export default Daily;
