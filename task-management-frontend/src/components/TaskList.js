import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = ({ onSelectTask }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchTasks() {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
    }
    fetchTasks();
  }, []);

  if(!tasks) return <h1>There are No Tasks</h1>

  return (
    <div className="container">
      <h1>Task List</h1>
      {tasks.map(task => (
        <div className="task" key={task._id} onClick={() => onSelectTask(task)}>
          <h2>{task.title}</h2>
          <p>Status: {task.status}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
