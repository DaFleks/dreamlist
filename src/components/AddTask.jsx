import './AddTask.css';
import AddTaskHeader from './AddTask/Header/AddTaskHeader';
import AddTaskForm from './AddTask/Form/AddTaskForm';

const AddTask = () => {
    return (
            <div className="AddTask">
                <AddTaskHeader />
                <AddTaskForm />
            </div>
    )
}

export default AddTask;