// Should show 6 balls
// value 1-40 generated when button clicked 
// When we click generate, should get 6 new balls showing up with new numbers
// Should be reusable/ flexible. also want to have a mini daily lotto. Should be able to control title, num balls to show, and max value. 

// for mini daily lotto should show 4 balls  with numbers 1-10
// <Lottery title="Mini Daily" numBalls={4} maxNum={10} />

// design
// what components will we need ?
// what props will they need?
// what state will we need?

// Lottery component has props. So we can alter title. 
// Props
// title, numBalls, maxNum

// State
// nums:array of [num, num, num, ...] for balls

// Events 
// onClick: regenerate nums in state

import React, { Component } from 'react'
import LottoBall from './LottoBall';

import './Lottery.css';
export class Lottery extends Component {

  static defaultProps = {
    title: "Lottery",
    numBalls: 6,
    maxNum: 40
  }

  constructor(props) {
    super(props);
    this.state = {
      nums: Array.from({length: this.props.numBalls})
    }
    this.generateNumbers.bind(this);
  }

  generateNumbers() {
    // gets a random number between 1 and 40 for each lotto ball
    // creates a new array of the same length called curState which we map the new array onto from nums
    this.setState(curState =>({
      nums: curState.nums.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
    }))
  };

  handleClick = () => {
    this.generateNumbers();
  }

  render() {
    return (
      <div className="Lottery">
        <h1 className="Lottery-title">{this.props.title}</h1>
        <div className="Lottery-balls">
          {this.state.nums.map(num => <LottoBall num={num}/>)}
        </div>
        <button onClick={this.handleClick}>Generate</button>
      </div>
    )
  }
}

// so when we push the button we will push 40 

export default Lottery




