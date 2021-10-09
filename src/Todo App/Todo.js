// this component should display a div with the task of the todo.
// for each todo component, there should also be a button with the text "X" that when clicked, removes the todo. 

import React, {useState} from 'react';


import './Todo.css'

export const Todo = (props) => {

  const [edit, setEdit] = useState(false);
  const [task, setTask] = useState(props.task);

  const handleUpdate = (e) => {
    e.preventDefault();
    // take new task and pass up to parent.
    props.update(props.id, task)
    setEdit(false)
  }

  const handleToggle = (e) => {
    props.toggleTodo(props.id)
  }

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const toggleForm = () => {
    setEdit(!edit)
  }

    if(edit) {
      return (
        <div className="Todo">
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              value={task}
              name="task"
              onChange={handleChange}
            />
            <button onClick={handleUpdate}>Save</button>
          </form>
        </div>
      )
    } else {
      return (
        <div className="Todo">
          <h3 className={props.completed ? 'Todo-task completed' : 'Todo-task'} onClick={handleToggle}>{props.task}</h3>
          <div className="Todo-buttons">
            <button onClick={toggleForm}>
              <i className="fas fa-edit"></i>
            </button>
            <button onClick={props.remove}>
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      )
    }
  }

