import "./AddTaskHeader.css";
import { Link } from "react-router-dom";

const AddTaskHeader = () => {
  return (
    <header className="AddTaskHeader">
      <div className="AddTaskHeader-top">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <i className="fa-solid fa-arrow-left fa-2x"></i>
        </Link>
        <h4>Add new thing</h4>
        <i className="fa-solid fa-sliders"></i>
      </div>
      <div className="AddTaskHeader-bottom">
        <i className="fa-solid fa-pen-to-square fa-2x"></i>
      </div>
    </header>
  );
};

export default AddTaskHeader;
