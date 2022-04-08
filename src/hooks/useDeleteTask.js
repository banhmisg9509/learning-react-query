import { useMutation } from "react-query";
import { deleteTask } from "../api/taskService";

export const useDeleteTask = () => {
  return useMutation("deleteTask", ({ id }) => {
    return deleteTask(id);
  });
};
