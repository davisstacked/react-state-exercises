import React, { useState } from 'react'

const NewTimerForm = (props) => {

  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTitle(title);
    setTitle("");
  }

  return (
    <form>
      <label htmlFor="title">Title</label>
      <input
        onChange={handleChange}
        name="title"
        value={title}
        type="text" />
      <div>
        <button>Create</button>
        <button onClick={() => setTitle("")}>Cancel</button>
      </div>
    </form>
  )
}

export default NewTimerForm;