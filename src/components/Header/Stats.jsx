import './Stats.css';
import { useState, useContext } from 'react';
import { TasksContext } from '../../context/TasksContext';

const Stats = (props) => {
    const tasks = useContext(TasksContext);
    const [nPersonal] = useState(tasks.filter((task) => task.type === 'Personal').length);
    const [nBusiness] = useState(tasks.filter((task) => task.type === 'Business').length);
    
    return (
        <div className="Stats">
            <div>
                <h1>{nPersonal}</h1>
                <span>Personal</span>
            </div>
            <div>
                <h1>{nBusiness}</h1>
                <span>Business</span>
            </div>
        </div>
    )
}

export default Stats;