import { useState } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./Todo.css";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTask = (task) => {
    const newTask = {
      text: task,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return {
          ...task,
          completed: !task.completed,
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  const activeCount = tasks.filter((task) => !task.completed).length;

  const completedCount = tasks.filter((task) => task.completed).length;

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    }

    if (filter === "completed") {
      return task.completed;
    }

    return true;
  });

  return (
    <di className="todo-container">
      <h1>My Todo List</h1>
      <p className="todo-subtitle">Stay organized, one task at a time.</p>

      <AddTask addTask={addTask} />

      <div className="filters">
        <button onClick={() => setFilter("all")}>All ({tasks.length})</button>

        <button onClick={() => setFilter("active")}>
          Active ({activeCount})
        </button>

        <button onClick={() => setFilter("completed")}>
          Completed ({completedCount})
        </button>
      </div>

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </di>
  );
}

export default Todo;
