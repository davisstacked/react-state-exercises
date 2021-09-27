import React, { useState } from 'react'

export const NewBoxForm = () => {

  const [styles, setStyles] =
    useState({
      height: "",
      width: "",
      backgroundColor: ""
    })

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const handleChange = (e) => {
    setStyles(state => ({...state, [e.target.id]: e.target.value}))
  }

  return (
    <form className="NewBoxForm" onSubmit={handleSubmit}>
      <h1>Box Maker Thingy</h1>
      <label htmlFor="height">Height</label>
      <input
        id="height"
        name="height"
        value={styles.height}
        onChange={handleChange}
      />
      <label htmlFor="width">Width</label>
      <input
        id="width"
        name="width"
        value={styles.width}
        onChange={handleChange}
      />
      <label htmlFor="backgroundColor">Background Color</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={styles.backgroundColor}
        onChange={handleChange}
      />
      <button>Add a new box!</button>
    </form>
  )
}
