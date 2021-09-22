import React, { Component } from 'react';
import { choice } from "./helpers";

import "./ColorBox.css"

export class ColorBox extends Component {

  static defaultProps = {
    allColors: ["red", "seagreen", "seashell", "darkorchid", "darksalmon", "darkturquoise", "darkskyblue", "yellow", "yellowgreen", "beige", "black", "brown", "gold", "gray", "goldenrod", "green"]
  }

  constructor(props) {
    super(props);
    this.state = {
      color: choice(this.props.allColors)
    }
    this.handleClick = this.handleClick.bind(this);
    this.pickColor = this.pickColor.bind(this);
  }

  pickColor() {
    let newColor = choice(this.props.allColors);
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
