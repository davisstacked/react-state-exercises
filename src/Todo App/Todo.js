// this component should display a div with the task of the todo.
// for each todo component, there should also be a button with the text "X" that when clicked, removes the todo. 

import React from 'react';

import './Todo.css'

export const Todo = (props) => {
  return (
    <div className="Todo">
      <h3>{props.todo}</h3>
      <button>
        <i class="fas fa-edit"></i>
      </button>
      <button onClick={props.remove}>
      <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  )
}
