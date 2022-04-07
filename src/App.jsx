import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

import { useDeleteTask } from "./hooks/useDeleteTask";
import { useTasks } from "./hooks/useTasks";
import { useToggleTask } from "./hooks/useToggleTask";

function App() {
  const { data: tasks, refetch } = useTasks();
  const { mutateAsync: toggleTask } = useToggleTask();
  const { mutateAsync: deleteTask } = useDeleteTask();

  const handleDeleteTask = async (id) => {
    await deleteTask({ id });
    await refetch();
  };

  const toggleReminder = async (id) => {
    const task = tasks.find((task) => task.id === id);
    task.reminder = !task.reminder;
    await toggleTask({ id, task });
    await refetch();
  };

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTask />
                {tasks?.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={handleDeleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No Tasks To Show"
                )}
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
