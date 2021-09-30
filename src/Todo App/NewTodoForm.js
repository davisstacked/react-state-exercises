// this component should render a form with one text input for the task to be created. When this form is submitted, a new Todo component should be created.

import React, { useState } from 'react';

export const NewTodoForm = (props) => {

  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo('')
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  return (
    <form onClick={handleSubmit}>
      <label htmlFor="todo">New Todo</label>
      <input
        onChange={handleChange}
        name="todo"
        value={todo}
        type="text" />
      <button>Add ToDo</button>
    </form>
  )
}
