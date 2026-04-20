import React, { useEffect, useState } from "react";
import { getTasks, deleteTask, updateTask } from "./api";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await getTasks();
    setTasks(res.data);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    fetchTasks();
  };

  const handleUpdate = async (task) => {
    await updateTask(task._id, {
      ...task,
      status: task.status === "Pending" ? "Completed" : "Pending"
    });
    fetchTasks();
  };

  // filter logic
  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    return task.status === filter;
  });

  return (
    <div>
      <h2>Tasks</h2>

      {/* FILTER BUTTONS */}
      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Pending")}>Pending</button>
      <button onClick={() => setFilter("Completed")}>Completed</button>

      {filteredTasks.map((task) => (
        <div
          key={task._id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px",
            borderRadius: "8px"
          }}
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>

          <button onClick={() => handleUpdate(task)}>
            Toggle Status
          </button>

          <button onClick={() => handleDelete(task._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;