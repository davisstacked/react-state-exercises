import React, { Component } from 'react';

import "./ColorBox.css"

export class ColorBox extends Component {
  render() {
    return (
      <div style={{ backgroundColor: this.props.color
  }} className="ColorBox">
        
      </div>
    )
  }
}

export default ColorBox;
