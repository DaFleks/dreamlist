import './AddTask.css';
import AddTaskHeader from '../components/AddTask/Header/AddTaskHeader';
import AddTaskForm from '../components/AddTask/Form/AddTaskForm';

const AddTask = () => {
    return (
            <div className="AddTask">
                <AddTaskHeader />
                <AddTaskForm />
            </div>
    )
}

export default AddTask;