import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import {
  toggleShowAddTask,
  useShowAddTaskState,
} from "../hooks/useShowAddTaskState";
import Button from "./Button";

const Header = ({ title }) => {
  const location = useLocation();
  const { showAddTask } = useShowAddTaskState();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAddTask ? "red" : "green"}
          text={showAddTask ? "Close" : "Add"}
          onClick={() => toggleShowAddTask()}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
