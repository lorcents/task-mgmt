import React, { useState } from 'react';
import axios from 'axios';

const AddTask = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const newTask = { title, description, dueDate, status };

    console.log(newTask)
    const response = await axios.post('http://localhost:5000/api/tasks', newTask);
    console.log(response);
    onAddTask(response.data);
    setTitle('');
    setDescription('');
    setDueDate('');
    setStatus('');
  };

  return (
    <div className="container">
      <h1>Add New Task</h1>
      <hr/>
      <form className="add-task-form" onSubmit={handleSubmit}>
        <div className='formInput'>
        <label>Title:</label>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div className='formInput'>
        <label>Description:</label>
        <textarea value={description} onChange={e => setDescription(e.target.value)} required />
        </div>
        <div className='formInput'>
        <label>Due Date:</label>
        <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} required />
        </div>
        <div className='formInput'>
        <label>Status:</label>
        <select value={status} onChange={e => setStatus(e.target.value)} required>
          <option value="">Select Status</option>
          <option value="incomplete">Incomplete</option>
          <option value="in progress">In Progress</option>
          <option value="complete">Complete</option>
        </select>
        </div>
        <div>
        <button className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
