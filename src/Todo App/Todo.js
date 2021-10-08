// this component should display a div with the task of the todo.
// for each todo component, there should also be a button with the text "X" that when clicked, removes the todo. 

import React, {useState} from 'react';


import './Todo.css'

export const Todo = (props) => {

  const [edit, setEdit] = useState(false);

  const toggleForm = () => {
    setEdit(!edit)
  }

    if(edit) {
      return (
        <div>
          <form>
            <input type="text" />
          </form>
        </div>
      )
    } else {
      return (
        <div className="Todo">
          <h3>{props.todo}</h3>
          <button onClick={toggleForm}>
            <i className="fas fa-edit"></i>
          </button>
          <button onClick={props.remove}>
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      )
    }
  }

