import { useState } from "react";
import { useQueryClient } from "react-query";
import { useAddTask } from "../hooks/useAddTask";
import { useShowAddTaskState } from "../hooks/useShowAddTaskState";

const AddTask = () => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const { mutateAsync: addTask } = useAddTask();
  const { showAddTask } = useShowAddTaskState();
  const queryClient = useQueryClient();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
      return;
    }

    const task = { text, day, reminder };
    await addTask({ task });
    queryClient.invalidateQueries("tasks");

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    showAddTask && (
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Day & Time</label>
          <input
            type="text"
            placeholder="Add Day & Time"
            value={day}
            onChange={(e) => setDay(e.target.value)}
          />
        </div>
        <div className="form-control form-control-check">
          <label>Set Reminder</label>
          <input
            type="checkbox"
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
          />
        </div>

        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    )
  );
};

export default AddTask;
