// for this part you should show a series of 16 boxes (a box is just a square div with a background color).
// initially each box should have a background color chosen from a random list of colors.
//  When you click any box: it should change its color to a different random color. 
// for this exercise you might need to violate the "children are dumber than their parents" rule of thumb. since each box will probably need to have its own color state, while the parent container doesn't really need to be smart. 

import React, { Component } from 'react';
import ColorBox from './ColorBox';

import "./ColorBoxContainer.css"

export class ColorBoxContainer extends Component {

  static defaultProps = {
    allColors: ["red", "seagreen", "seashell", "darkorchid", "darksalmon", "darkturquoise", "darkskyblue", "yellow", "yellowgreen", "beige", "black", "brown", "gold", "gray", "goldenrod", "green"],
    numBoxes: 16
  }

  randomColor = () => {
    let random = Math.floor(Math.random() * this.props.colors.length);
    return this.props.colors[random];
  }
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(
      (b) => <ColorBox color={this.props.allColors}/>
    )
    return (
      <div className="ColorBoxContainer">
        {boxes}
      </div>
    )
  }
}

export default ColorBoxContainer
