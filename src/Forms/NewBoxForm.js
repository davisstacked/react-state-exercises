import React, { useState } from 'react'

export const NewBoxForm = (props) => {

  const [styles, setStyles] =
    useState({
      height: "",
      width: "",
      backgroundColor: ""
    })

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBox(styles)

  }

  const handleChange = (e) => {
    setStyles(state => ({...state, [e.target.name]: e.target.value}))
  }

  return (
    <form className="NewBoxForm" onSubmit={handleSubmit}>
      <h1>Box Maker Thingy</h1>
      <label htmlFor="height">Height</label>
      <input
        name="height"
        value={styles.height}
        onChange={handleChange}
        type="text"
      />
      <label htmlFor="width">Width</label>
      <input
        name="width"
        value={styles.width}
        onChange={handleChange}
        type="text"
      />
      <label htmlFor="backgroundColor">Background Color</label>
      <input
        name="backgroundColor"
        value={styles.backgroundColor}
        onChange={handleChange}
        type="text"
      />
      <button>Add a new box!</button>
    </form>
  )
}
