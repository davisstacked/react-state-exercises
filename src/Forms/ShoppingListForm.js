import React, { useState } from 'react'

export const ShoppingListForm = (props) => {

  const [items, setItems] = useState({name: "", qty: ""})

  const handleSubmit = (e) => {
    // default is to refresh page
    e.preventDefault();
    props.addItem(items)
  }

  const handleChange = (e) => {
    setItems(prevState => ({...prevState, [e.target.id]: e.target.value}))
  }
  return (

    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name: </label>
      <input
        id="name"
        name="name"
        value={items.name}
        onChange={handleChange}
        type="text" />
      <label htmlFor="qty">Quantity: </label>
      <input
        id="qty"
        name="qty"
        value={items.qty}
        onChange={handleChange}
        type="text" />
      <button>Submit!</button>
    </form>
  )
}
