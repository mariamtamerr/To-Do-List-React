import  { useState } from 'react';
import './Parent.css';
import AddItem from '../AddItem/AddItem';
import FormInput from '../FormInput/FormInput';
// import TaskList from '../TaskList/TaskList';
function Parent() {
    const [tasks, setTasks] = useState([]); //n-keep el array of tasks hna
  
    // all tasks function (Add,mark,delete,update) hna 

    const addTask = (text) => {
      setTasks([...tasks, { text, done: false }]);
    };
  
    const markAsDone = (index) => {
      const updatedTasks = [...tasks];
      updatedTasks[index].done = !updatedTasks[index].done;
      setTasks(updatedTasks);
    // Check if the task was marked as done or undone and show a message accordingly
    if (updatedTasks[index].done) {
      alert(`Task "${updatedTasks[index].text}" is marked as Done.`);
    } else {
      alert(`Task "${updatedTasks[index].text}" is marked as Not Done.`);
    }
  };
  
    const deleteTask = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !== index);
      setTasks(updatedTasks);
    };
  
    const updateTask = (index, newText) => {
      const updatedTasks = [...tasks];
      updatedTasks[index].text = newText;
      setTasks(updatedTasks);
    };
  
    return (
      <div className="container parent">
        <AddItem onAddTask={addTask} />
        <FormInput
          tasks={tasks}
          onMarkAsDone={markAsDone}
          onDeleteTask={deleteTask}
          onUpdateTask={updateTask}
        />
      </div>
    );
  }
  
  export default Parent;

  
  
  
  