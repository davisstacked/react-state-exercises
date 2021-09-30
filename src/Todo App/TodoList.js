// this component should render the NewTodoForm component and should render the list of Todo components. Place your state that contains all of the todos in this component.
import React, { useState } from 'react';
import { NewTodoForm } from './NewTodoForm';
import { Todo } from './Todo';
import { v4 as uuid } from "uuid";

export const TodoList = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodo = {...todo, key: uuid(), id: uuid()}
    setTodos(state => ([...state, newTodo]))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <NewTodoForm addTodo={addTodo}/>
    </div>
  )
}
