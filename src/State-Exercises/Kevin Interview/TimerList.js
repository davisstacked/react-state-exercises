import React, { useState } from 'react';
import { Timer } from './Timer';
import NewTimerForm from './NewTimerForm';
import { Todo } from '../../Todo App/Todo';
import { v4 as uuid } from "uuid";

export const TimerList = () => {

  const [timers, setTimers] = useState([]);

  const addTimer = (timer) => {
    const newTimer = { ...timer, id: uuid()}
    setTimers(state => ([...state, newTimer]))
  }

  const removeTodo = (id) => {
    setTimers(timers.filter(timer => timer.id !== id))
  }

  const renderTimers = () => {
    return (
      <ul>
        <li style={{listStyleType: "none"}}>
          {timers.map(timer => (
            <Timer title={title}/>
          ))}
        </li>
      </ul>
    )
  }

  return (
    <div>
      <h1>Timers</h1>
      <button>
        <i class="far fa-plus-square"></i>
      </button>
    </div>
  )
}
