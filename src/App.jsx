import "./App.css";
import Dreamlist from "./pages/Dreamlist";
import AddTask from "./pages/AddTask";
import TasksProvider from "./context/TasksContext";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
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
