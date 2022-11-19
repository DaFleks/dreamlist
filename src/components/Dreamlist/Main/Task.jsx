import { redirect } from "react-router-dom";
import "./Task.css";

const Task = (props) => {
  const { id, task, type, place, time, date, isCompleted, icon } = props.task;

  return (
    <div className={`Task ${isCompleted && `Task-completed`}`}>
      <div className="Task-icon">
        <i className={`fa-solid fa-${icon}`}></i>
      </div>
      <div className="Task-text">
        <h4 className={isCompleted && `Task-completed`}>{task}</h4>
        <p>{place}</p>
      </div>
      <div className="Task-time">
        <p>{time}</p>
      </div>
    </div>
  );
};

export default Task;
