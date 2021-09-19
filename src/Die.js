import React, { Component } from 'react';

import './Die.css'

// an individual die that takes props and displays the correct face of the die based on props.

export class Die extends Component {


  render() {
    return (
      <div className="Die">
        <i class="fas 7x fa-dice-one fa-7x"></i>
        <i class="fas fa-dice-two fa-7x"></i>
        <i class="fas fa-dice-three fa-7x"></i>
        <i class="fas fa-dice-four fa-7x"></i>
        <i class="fas fa-dice-five fa-7x"></i>
        <i class="fas fa-dice-six fa-7x"></i>
      </div>
    )
  }
}

export default Die;



