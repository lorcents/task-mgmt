import React from 'react';

const TaskDetails = ({ task, onUpdateStatus,onDeleteTask }) => {
    console.log(task,"======");
  return (
    <div className="container">
      <h1>Task Details</h1>
      <div className="task-details">
        <h2>{task.title}</h2>
        <p>Description: {task.description}</p>
        <p>Due Date: {task.dueDate}</p>
        <p>Status: {task.status}</p>
        <button className="btn" onClick={() => onUpdateStatus(task.id, 'in progress')}>
          Mark as In Progress
        </button>
        
        <button className="btn" onClick={() => onUpdateStatus(task.id, 'complete')}>
          Mark as Complete
        </button>
        <button className="btn" onClick={() => onDeleteTask(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;
