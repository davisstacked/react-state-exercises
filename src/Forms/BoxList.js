import React, { useState } from 'react';
import { NewBoxForm } from './NewBoxForm';
import { Box } from './Box';
import { v4 as uuid } from "uuid";

export const BoxList = (props) => {

  const [boxes, setBoxes] = useState([])

  const addBox = (styles) => {
    let newBox = { ...styles, key: uuid(), id: uuid()}
    setBoxes(state => ([...state, newBox]));
  }

  const removeBox = (id) => {
    setBoxes(boxes.filter(box => box.id !== id))
  }
  const renderBoxes = () => {
    return (
    <ul>
      {boxes.map(box => (
        <Box
          remove={() => removeBox(box.id)}
          key={box.key}
          id={box.id}
          width={box.width}
          height={box.height}
          backgroundColor={box.backgroundColor} />
      ))}
      </ul>
    )
  }


  return (
    <div>
      <h1>Box Maker Thingy</h1>
      <NewBoxForm removeBox={removeBox} addBox={addBox} />
      <div>
        {renderBoxes()}
      </div>
    </div>
  )
}
