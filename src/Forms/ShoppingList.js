import React, { useState } from 'react';
import { ShoppingListForm } from './ShoppingListForm';

export const ShoppingList = () => {

  const [items, setItems] = useState([{ name: 'Milk', qty: "2 gallons" }, { name: "Bread", qty: "2 loaves" }])

  const addItem = (item) => {
    setItems(prevState => ([ ...prevState, item ]))
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
