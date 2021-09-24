import React, { Component } from 'react'

export class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={function() {alert('Clicked')}}>Click Me!</button>
      </div>
    )
  }
}

export default Button
