// Roll dice component renders the dice and a button to roll. state is managed in rolldice component and passed thru props to die

import React, { Component } from 'react'

import Die from './Die';

import "./RollDice.css"

export class RollDice extends Component {
  state = {
    dice1: "one",
    dice2: "one",
    rolling: false,
    class: ""
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
      class: "animate__animated animate__shakeX"
    });
    setTimeout(() => {
      this.setState({
        rolling: false,
        class: ""
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
        <button onClick={this.rolling}>Role Dice</button>
      </div>
    )
  }
}

export default RollDice;


// the roll dice component should have the state for both of the dice.
// a roll() method that rolls them to randomly get a new result. 

// you can use default props to set an array of six possible faces for each die. 

// your roll method can pick a random element from the array for each die. then update the status. 

// remember that these values will have to be translated into fas fa-dice-one through fas fa-dice-six for the child component to receive the appropriate class name through its props.

// Do you have to store each class name in the array or can you programmatically decide which one the Die components should have?

// Further Study - Animation
// The solution displays an animation every time the dice are rolled.
// A new piece of state is necessary to say whether the dice are currently rolling or not.
// This is done by appending a class containing a CSS animation and then removing it after one second. (hint: setTimeout with setState, but be careful what "this" references!)

// Changing Button Text - the button can also dynamically change its text and become disabled (unclickable) until the animation has completed. It relies on the additional piece of state that says whether the dice are currently rolling or not. 