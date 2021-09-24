import React, { Component } from 'react';

import './Die.css'

// an individual die that takes props and displays the correct face of the die based on props.

// icon that dynamically changes its class to the proper die face based on props from the parent component's state.
export class Die extends Component {

  render() {
    return (
      <div className="Die">
        <i className={`Die-face fas fa-dice-${this.props.num} fa-7x ${this.props.roll}`}></i>
      </div>
    )
  }
}

export default Die;



