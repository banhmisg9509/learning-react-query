import { client } from "./client";

export const fetchTasks = async () => {
  return client.get("/tasks");
};

export const toggleTask = async (id, task) => {
  return client.put(`/tasks/${id}`, task);
};

export const deleteTask = async (id) => {
  return client.delete(`/tasks/${id}`);
};

export const addTask = async (task) => {
  return client.post("/tasks", task);
};
