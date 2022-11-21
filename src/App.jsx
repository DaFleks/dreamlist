import "./App.css";
import Dreamlist from "./pages/Dreamlist";
import AddTask from "./pages/AddTask";
import Weather from "./pages/Weather";
import TasksProvider from "./context/TasksContext";
import NavMenuProvider from "./context/NavContext";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <TasksProvider>
      <NavMenuProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Dreamlist />} />
            <Route path="/add" element={<AddTask />} />
            <Route path="/weather" element={<Weather />} />
          </Routes>
        </div>
      </NavMenuProvider>
    </TasksProvider>
  );
};

export default App;
