import './AddTaskForm.css';
import useInput from '../../../hooks/useInput';
import { useState, useContext } from 'react';
import { TasksContext } from '../../../context/TasksContext';

const AddTaskForm = () => {
    const { addTask } = useContext(TasksContext);
    const [type, setType] = useState('Business')
    const [taskInput, task] = useInput({ id: 'task', placeholder: 'task' });
    const [placeInput, place] = useInput({ id: 'place', placeholder: 'place' });
    const [timeInput, time] = useInput({ id: 'time', placeholder: 'time' });

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTask({ type, task, place, time });
    }

    return (
        <form onSubmit={handleSubmit} className="AddTaskForm" method="POST">
            <select id="type" name="type" onChange={(evt) => { setType(evt.target.value) }}>
                <option value="Business">Business</option>
                <option value="Personal">Personal</option>
            </select>
            {taskInput}
            {placeInput}
            {timeInput}
            <button>
                ADD YOUR THING
            </button>
        </form>
    )
}

export default AddTaskForm;