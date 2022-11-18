import { createContext, useState } from 'react';
import starterTasks from '../data/starterTasks.json';

export const TasksContext = createContext(starterTasks);

const TasksProvider = (props) => {
    const [tasks, setTasks] = useState(starterTasks);
    return (
        <TasksContext.Provider value={ tasks }>
            {props.children}
        </TasksContext.Provider>
    )
}

export default TasksProvider;