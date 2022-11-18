import './Footer.css';
import { TasksContext } from '../../context/TasksContext';
import { useContext, useState } from 'react';

const Footer = () => {
    const { tasks } = useContext(TasksContext);
    const [nTasksCompleted, setNTasksCompleted] = useState(tasks.filter((task) => task.isCompleted === true).length);

    return (
        <footer className="Footer">
            <h6>COMPLETED <span className="completed">{nTasksCompleted}</span></h6>
            <div className="Footer-addBtn">
                <i className="fa-solid fa-plus"></i>
            </div>
        </footer>
    )
}

export default Footer;