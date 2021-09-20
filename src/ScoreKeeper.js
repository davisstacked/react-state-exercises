import React, { Component } from 'react'

export class ScoreKeeper extends Component {

  constructor(props) {
    super(props);
    this.state = { score: 0 };
    this.singleKill = this.singleKill.bind(this);
  }

  singleKill() {
    this.setState({ score: this.state.score + 1 });
  }

  render() {
    return (
      <div>
        <h1>Score is: {this.state.score}</h1>
        <button onClick={this.singleKill}>Single Kill!</button>
      </div>
    )
  }
}

export default ScoreKeeper
