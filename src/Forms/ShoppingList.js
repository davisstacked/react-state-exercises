import React, { useState } from 'react';
import { ShoppingListForm } from './ShoppingListForm';
import { v4 as uuid } from "uuid";

export const ShoppingList = () => {

  const [items, setItems] = useState([{ name: 'Milk', id: uuid(), qty: "2 gallons" }, { name: "Bread", id: uuid(), qty: "2 loaves" }])

  const addItem = (item) => {
    let newItem = {...item, id: uuid()}
    setItems(prevState => ([ ...prevState, newItem ]))
  }
  
  const renderItems = () => {
    return (
      <ul>
        {items.map(item => (
          <li>
            {item.name}: {item.qty}
          </li>
        ))}
      </ul>
    )
  }

  console.log("hello", items)

  return (
    <div>
      <h1>Shopping List</h1>
      {renderItems()}
      <ShoppingListForm addItem={addItem}/>
    </div>
  )
}
