import { proxy, useSnapshot } from "valtio";

const state = proxy({ showAddTask: false });

export const toggleShowAddTask = () => {
  state.showAddTask = !state.showAddTask;
};

export const useShowAddTaskState = () => {
  return useSnapshot(state);
};
