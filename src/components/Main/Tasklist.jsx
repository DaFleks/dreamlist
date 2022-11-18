import './Tasklist.css';
import Task from './Task';
import { useContext } from 'react';
import { TasksContext } from '../../context/TasksContext'

const Tasklist = () => {
    const tasks = useContext(TasksContext);

    return (
        <section className="Tasklist">
            {tasks.map(task => <Task key={task.id} task={task} />)}
        </section>
    )
}

export default Tasklist;