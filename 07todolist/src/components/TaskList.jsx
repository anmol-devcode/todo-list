import TaskItem from "./TaskItem";
import "./TaskList.css";

function TaskList({ tasks, deleteTask, toggleTask,  }) {
  return (
     <div className="task-list">

      <h2>Tasks</h2>

      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          deleteTask={deleteTask}
          index={index}
          toggleTask={toggleTask}
        />
      ))}
    </div>
  );
}

export default TaskList;
