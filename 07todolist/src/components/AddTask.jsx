import { useState } from "react";
import "./AddTask.css";

function AddTask({ addTask }) {
        const [task, setTask] = useState("");


    const handleAddTask = () => {

        if (task.trim() === "") {
            return;
        }

        addTask(task);
        setTask("");
    };

    return(
                <div className="todo-input">
            <input type="text" placeholder="Enter a Task" onChange={(e) => setTask(e.target.value)} value={task}/>
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
}

export default AddTask;