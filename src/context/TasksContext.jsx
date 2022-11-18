import { createContext, useState } from 'react';
import starterTasks from '../data/starterTasks.json';

export const TasksContext = createContext(starterTasks);

const TasksProvider = (props) => {
    const [tasks, setTasks] = useState(starterTasks);

    const addTask = (task) => {
        console.log(task);
        setTasks([...tasks, task]);
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return (
        <TasksContext.Provider value={{ tasks, addTask, removeTask }}>
            {props.children}
        </TasksContext.Provider>
    )
}

export default TasksProvider;