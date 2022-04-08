import { useQueryClient } from "react-query";
import {
  useDeleteTask,
  useTasks,
  useToggleTask,
} from "../hooks";
import Task from "./Task";

const Tasks = () => {
  const { data: tasks, refetch } = useTasks();
  const { mutateAsync: toggleTask } = useToggleTask();
  const { mutateAsync: deleteTask } = useDeleteTask();
  const queryClient = useQueryClient();

  const handleDeleteTask = async (id) => {
    await deleteTask({ id });
    queryClient.setQueryData("tasks", (oldTasks) => {
      return oldTasks.filter((task) => task.id !== id);
    });
  };

  const toggleReminder = async (id) => {
    const task = tasks.find((task) => task.id === id);
    task.reminder = !task.reminder;
    await toggleTask({ id, task });
    await refetch();
  };

  if (tasks?.length === 0 || !tasks) {
    return <p>No Tasks To Show</p>;
  }

  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onDelete={handleDeleteTask}
          onToggle={toggleReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
