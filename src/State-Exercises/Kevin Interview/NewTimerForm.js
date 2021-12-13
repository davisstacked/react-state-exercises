import React, { useState } from 'react'

const NewTimerForm = (props) => {

  const [timer, setTimer] = useState({timer: ""});

  const handleChange = (e) => {
    setTimer(state => ({ ...state, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTimer(timer);
    setTimer({todo: ''});
  }

  return (
    <form>
      <label htmlFor="timer">Title</label>
      <input
        onChange={handleChange}
        name="timer"
        value={timer}
        type="text" />
      <div>
        <button onClick={handleSubmit}>Create</button>
        <button onClick={() => setTimer({timer:""})}>Cancel</button>
      </div>
    </form>
  )
}

export default NewTimerForm;