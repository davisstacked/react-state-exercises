import React, { Component } from 'react';
import { choice } from "./helpers";

import "./ColorBox.css"

export class ColorBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: choice(this.props.color)
    }
    this.handleClick = this.handleClick.bind(this);
    this.pickColor = this.pickColor.bind(this);
  }

  pickColor() {
    let newColor;
    do {
      newColor = choice(this.props.color);
    } while (newColor === this.state.color)
    
    this.setState({ color: newColor });
  }

  handleClick() {
    this.pickColor();
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: this.state.color
        }}
        className="ColorBox"
        onClick={this.handleClick}>    
      </div>
    )
  }
}

export default ColorBox;
