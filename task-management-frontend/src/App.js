import React, { useState } from 'react';
import axios from 'axios';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import TaskDetails from './components/TaskDetails';
import './styles.css';

function App() {
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const response = await axios.get('/api/tasks');
    setTasks(response.data);
  };

  const handleAddTask = newTask => {
    setTasks([...tasks, newTask]);
  };

  const handleUpdateStatus = async (taskId, status) => {
    console.log(taskId, status);
    try {
      const reponse = await axios.put(`http://localhost:5000/api/tasks/${taskId}`, { status });
      console.log(reponse);

    } catch (error) {
      console.error();

    }

    setSelectedTask(null);
  };


  const handleDelete = async (taskId) => {
    await axios.delete(`http://localhost:5000/api/tasks/${taskId}`);
    setSelectedTask(null);
  }
  return (
    <div>
      <h1>Task Management System</h1>
      {selectedTask ? (
        <TaskDetails task={selectedTask} onUpdateStatus={handleUpdateStatus} onDeleteTask={handleDelete} />
      ) : (
        <>
          <AddTask onAddTask={handleAddTask} />
          <TaskList onSelectTask={task => setSelectedTask(task)} />

        </>
      )}
    </div>
  );
}

export default App;
