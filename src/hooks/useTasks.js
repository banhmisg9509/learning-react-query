import { useQuery } from "react-query";
import { fetchTasks } from "../api/taskService";

export const useTasks = () => {
  return useQuery("tasks", fetchTasks);
};
