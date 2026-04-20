import React, { useState } from "react";
import { addTask } from "./api";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (task.title === "" || task.description === "") {
      alert("Please fill all fields");
      return;
    }

    await addTask(task);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        placeholder="Title"
        value={task.title}
        onChange={(e) =>
          setTask({ ...task, title: e.target.value })
        }
      />

      <input
        placeholder="Description"
        value={task.description}
        onChange={(e) =>
          setTask({ ...task, description: e.target.value })
        }
      />

      <button>Add Task</button>
    </form>
  );
}

export default TaskForm;