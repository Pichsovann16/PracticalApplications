import React, { useState, useEffect } from "react";

const ToDoListCard = () => {
  // Key used for storing tasks in localStorage
  const LOCAL_STORAGE_KEY = "todo-list-tasks-with-react";

  // 1. Initialize state from localStorage
  const [tasks, setTasks] = useState(() => {
    // Attempt to read stored tasks from localStorage
    const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    // Parse the stored JSON string back into a JavaScript array,
    // or default to an empty array if nothing is stored.
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [input, setInput] = useState("");

  // 2. Use useEffect to save tasks to localStorage whenever the 'tasks' state changes
  useEffect(() => {
    // Convert the tasks array to a JSON string and save it to localStorage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]); // Dependency array: this effect runs every time 'tasks' changes

  // --- Task Handlers ---
  const handleAddTask = () => {
    if (input.trim() === "") return; // ignore empty tasks
    // Use the functional update form for safety, though 'tasks' is usually fine here
    setTasks((prevTasks) => [...prevTasks, input.trim()]);
    setInput("");
  };
  const handleRemoveTask = (indexToRemove) => {
    // Filter out the task at the given index
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== indexToRemove));
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAddTask();
  };
  // --- JSX Rendering ---
  return (
    <div
      className="card shadow-sm rounded p-3 d-flex justify-content-center"
      style={{ maxWidth: "400px" }}
    >
      <div className="card-body p-3 ">
        <h5 className="card-title mb-3 text-success">📌 To-Do List</h5>

        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Add a new task"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={handleAddTask}
          >
            Add
          </button>
        </div>

        <ul className="list-group list-group-flush">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {task}
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handleRemoveTask(index)}
              >
                ✕
              </button>
            </li>
          ))}
          {tasks.length === 0 && (
            <li className="list-group-item text-muted">No tasks for today!</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ToDoListCard;
