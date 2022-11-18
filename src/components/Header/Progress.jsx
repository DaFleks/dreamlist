import './Progress.css';
import { useState, useContext } from 'react';
import { TasksContext } from '../../context/TasksContext';

const Progress = () => {
    const tasks = useContext(TasksContext);
    const [progress] = useState(0.0);

    const getProgress = () => {
        const nCompleted = tasks.filter((tasks) => tasks.isCompleted === true).length;
        const num = ((nCompleted / tasks.length) * 100).toFixed(0);
        return num;
    }
    return (
        <div className="Progress">
            <h5>{getProgress()}% done</h5>
        </div>
    )
}

export default Progress;