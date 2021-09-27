import React, { useState } from 'react';
import { NewBoxForm } from './NewBoxForm';
import { Box } from './Box';
import { v4 as uuid } from "uuid";

export const BoxList = () => {

  const [styles, setStyles] = useState([{width: "", height: "", backgroundColor: ""}])

  const addBox = (styles) => {
    let newBox = { ...styles, id: uuid() }
    setStyles(state => ([...state, newBox]))
  }
  return (
    <div>
      <NewBoxForm addBox={addBox}/>
      <ul>

      </ul>
    </div>
  )
}
