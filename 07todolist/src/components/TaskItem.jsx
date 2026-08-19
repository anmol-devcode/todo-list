import "./TaskItem.css";
function TaskItem({ task, deleteTask, index, toggleTask }) {
  return (
    <div className="task-item">
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(index)}
        />

        {/* .text property hmne khud bnye hai object ki property ka naam hai  */}
        <span className={task.completed ? "completed" : ""}>{task.text}</span>
      </div>

      <button onClick={() => deleteTask(index)}>Delete</button>
    </div>
  );
}

export default TaskItem;
