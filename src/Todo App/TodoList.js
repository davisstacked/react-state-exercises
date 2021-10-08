// this component should render the NewTodoForm component and should render the list of Todo components. Place your state that contains all of the todos in this component.
import React, { useState } from 'react';
import { NewTodoForm } from './NewTodoForm';
import { Todo } from './Todo';
import { v4 as uuid } from "uuid";

export const TodoList = () => {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodo = { ...todo, id: uuid() }
    setTodos(state => ([...state, newTodo]))
  }

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const updateTodo = (id, updatedTask) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todos, todo: updatedTask }
      }
      return todo;
    });
    setTodos(updatedTodos)
  }

  const renderTodos = () => {
    return (
      <ul>
        <li style={{listStyleType: "none"}}>
          {todos.map(todo => (
            <Todo
              remove={() => removeTodo(todo.id)}
              update={updateTodo}
              task={todo.todo}
              key={todo.id}
              id={todo.id}
            />
          ))}
        </li>
      </ul>
    )
  }

  return (
    <div>
      {renderTodos()}
      <NewTodoForm addTodo={addTodo}/>
    </div>
  )
}
