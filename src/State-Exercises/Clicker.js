import React, { Component } from 'react'

export class Clicker extends Component {

  constructor(props) {
    super(props);
    this.state = { number: 1 };
    this.randomNum = this.randomNum.bind(this);
  }

  randomNum(e) {
    let num = Math.floor(Math.random() * 10 + 1);
    this.setState({ number: num });
  }
  
  render() {
    return (
      <div>
        <h1>The number is {this.state.number}</h1>
        {this.state.number === 7
          ? <h2>YOU WIN!</h2>
          : <button onClick={this.randomNum}>Random Number</button>}
      </div>
    )
  }
}

export default Clicker;
