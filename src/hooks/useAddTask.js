import { useMutation } from "react-query";
import { addTask } from "../api/taskService";

export const useAddTask = () => {
  return useMutation("addTask", ({ task }) => {
    return addTask(task);
  });
};
