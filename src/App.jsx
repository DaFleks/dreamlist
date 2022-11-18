import './App.css';
import Dreamlist from './components/Dreamlist';
import AddTask from './components/AddTask'
import TasksProvider from './context/TasksContext';

const App = () => {
  return (
    <TasksProvider>
      <div className="App">
        <Dreamlist />
        {/* <AddTask /> */}
      </div>
    </TasksProvider>
  )
}

export default App;