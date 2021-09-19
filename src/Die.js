import React, { Component } from 'react';

import './Die.css'

// an individual die that takes props and displays the correct face of the die based on props.

// icon that dynamically changes its class to the proper die face based on props from the parent component's state.
export class Die extends Component {

  render() {
    return (
      <div className="Die">
        <i className={`fas fa-dice-${this.props.num} fa-7x`}></i>
        {/* <i class="fas fa-dice-one fa-7x"></i>
        <i class="fas fa-dice-two fa-7x"></i>
        <i class="fas fa-dice-three fa-7x"></i>
        <i class="fas fa-dice-four fa-7x"></i>
        <i class="fas fa-dice-five fa-7x"></i>
        <i class="fas fa-dice-six fa-7x"></i> */}
      </div>
    )
  }
}

export default Die;



