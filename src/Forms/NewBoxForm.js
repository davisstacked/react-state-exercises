import React, { useState } from 'react'

export const NewBoxForm = (props) => {

  const [styles, setStyles] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBox(styles);
  }

  const handleChange = (e) => {
    setStyles(state => ({...state, [e.target.name]: e.target.value}))
  }

  return (
    <form className="NewBoxForm" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="height">Height</label>
        <input
          name="height"
          value={styles.height}
          onChange={handleChange}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="width">Width</label>
        <input
          name="width"
          value={styles.width}
          onChange={handleChange}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color</label>
        <input
          name="backgroundColor"
          value={styles.backgroundColor}
          onChange={handleChange}
          type="text"
        />
      </div>
      <button>Add a new box!</button>
    </form>
  )
}
