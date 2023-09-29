import  { useState } from 'react';
import './AddItem.css';

function AddItem({ onAddTask }) {
  const [newTask, setNewTask] = useState(''); // nshof eltext of new task

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onAddTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="container item">
      <div className="blue">
        <div className="row item">
          <div className="col-7"></div>
          <div className="col-5">
            <h1>To-Do App!</h1>
            <h6>Add New To-Do</h6>
          </div>
        </div>
        <div className="row item">
          <div className="col">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
          </div>
        </div>
        <div className="row item">
          <div className="col-7"></div>
          <div className="col-5">
            <button onClick={handleAddTask} type="button" className="btn btn-outline-dark">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
