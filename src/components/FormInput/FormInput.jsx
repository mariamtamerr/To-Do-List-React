import React from 'react';
import './FormInput.css';

function FormInput({ tasks, onMarkAsDone, onDeleteTask, onUpdateTask }) {
  return (
    <div className="container form">
      {/* <h4>Let's get some work done!</h4> */}
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="text"
              value={task.text}
              onChange={(e) => onUpdateTask(index, e.target.value)}
              className={task.done ? 'done' : ''}
            />
            {/* <button
          
              onClick={() => onMarkAsDone(index)}
              className="btn btn-outline-dark one"
            >
              {task.done ? 'Unmark as Done' : 'Mark as Done'}
            </button> */}
            <button
              onClick={() => onMarkAsDone(index)}
              className={`btn ${task.done ? 'btn-dark' : 'btn-outline-dark'}`} // Change button style for completed tasks
            >
              {task.done ? 'Unmark as Done' : 'Mark as Done'}
            </button>
            <button
             
              onClick={() => onDeleteTask(index)}
              className="btn btn-outline-dark two"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FormInput;
