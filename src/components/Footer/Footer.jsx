import "./Footer.css";
import { TasksContext } from "../../context/TasksContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const { tasks } = useContext(TasksContext);
  const [nTasksCompleted, setNTasksCompleted] = useState(
    tasks.filter((task) => task.isCompleted === true).length
  );

  return (
    <footer className="Footer">
      <h5>
        COMPLETED <span className="completed">{nTasksCompleted}</span>
      </h5>
      <Link to="/add" style={{textDecoration: 'none'}}>
        <div className="Footer-addBtn">
          <i className="fa-solid fa-plus"></i>
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
