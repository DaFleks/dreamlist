import "./App.css";
import Dreamlist from "./components/Dreamlist";
import AddTask from "./components/AddTask";
import TasksProvider from "./context/TasksContext";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <TasksProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dreamlist />} />
          <Route path="/add" element={<AddTask />} />
        </Routes>
      </div>
    </TasksProvider>
  );
};

export default App;
