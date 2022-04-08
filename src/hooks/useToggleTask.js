import { useMutation } from "react-query";
import { toggleTask } from "../api/taskService";

export const useToggleTask = () => {
  return useMutation("toggleTask", ({ id, task }) => {
    return toggleTask(id, task);
  });
};
