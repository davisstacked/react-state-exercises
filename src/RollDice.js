// Roll dice component renders the dice and a button to roll. state is managed in rolldice component and passed thru props to die

import React, { Component } from 'react'

import Die from './Die';

import "./RollDice.css"

export class RollDice extends Component {
  state = {
    dice1: "one",
    dice2: "one",
    rolling: false,
    class: "",
    button: "Roll Dice",
  };

  static defaultProps = {
    dice: ["one", "two", "three", "four", "five", "six"]
  }
  
  randomNumbers = () => {
    const randOne = Math.floor(Math.random() * this.props.dice.length);
    const randTwo = Math.floor(Math.random() * this.props.dice.length);
    const randIndOne = this.props.dice[randOne];
    const randIndTwo = this.props.dice[randTwo];
    this.setState({
      dice1: randIndOne,
      dice2: randIndTwo,
    })
  };

  rolling = () => {
    this.randomNumbers();
    this.setState({
      rolling: true,
      class: "animate__animated animate__shakeX",
      button: "Rolling..."
    });
    setTimeout(() => {
      this.setState({
        rolling: false,
        class: "",
        button: "Role Dice"
      })
    }, 2000);
}

  render() {
    return (
      <div className="RollDice">
        <div className={`${this.state.class} RollDice-dice`}>
          <Die num={this.state.dice1} />
          <Die num={this.state.dice2}/>
        </div>
        <button onClick={this.rolling}>{this.state.button}</button>
      </div>
    )
  }
}

export default RollDice;


// Further Study - Animation
// The solution displays an animation every time the dice are rolled.
// A new piece of state is necessary to say whether the dice are currently rolling or not.
// This is done by appending a class containing a CSS animation and then removing it after one second. (hint: setTimeout with setState, but be careful what "this" references!)

// Changing Button Text - the button can also dynamically change its text and become disabled (unclickable) until the animation has completed. It relies on the additional piece of state that says whether the dice are currently rolling or not. 