import React from 'react'

export const Box = (props) => {

  return (
    <div>
      <div style={{ width: `${props.width}px`, height: `${props.height}px`, backgroundColor: props.backgroundColor }}>
        
      </div>
      <button onClick={props.remove}>X</button>
    </div>
  )
}
