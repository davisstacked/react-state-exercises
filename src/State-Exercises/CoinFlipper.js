// user able to click on a button to flip a coin. Every time the user clicks, the coin gets flipped again. the app should also keep track of how many times heads and tails has shown up.

// my functioning solution to coinflipper
import React, { Component } from 'react';
import Coin from './Coin';

export class CoinFlipper extends Component {

  constructor(props) {
    super(props);
    this.state = {
      heads: true,
      numOfFlips: 0,
      numOfHeads: 0,
      numOfTails: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.flipCoin = this.flipCoin.bind(this);
  }

  // flipCoin() {
  //   const random = Math.floor(Math.random() * 2);
  //   random === 0
  //     ? this.setState({ heads: true })
  //     : this.setState({ heads: false });
  //   this.setState(prevState => ({ numOfFlips: prevState.numOfFlips + 1 }));
  //   random === 0
  //     ? this.setState(prevState => ({ numOfHeads: prevState.numOfHeads + 1 }))
  //     : this.setState(prevState => ({ numOfTails: prevState.numOfTails + 1 }));
  //     console.log(random);
  // };

  flipCoin() {
    const random = Math.floor(Math.random() * 2);
    this.setState(st => {
      if (random === 0) {
        return {
          ...st,
          heads: true,
          numOfFlips: st.numOfFlips + 1,
          numOfHeads: st.numOfHeads + 1
        }
      } else {
        return {
          ...st,
          heads: false,
          numOfFlips: st.numOfFlips + 1,
          numOfTails: st.numOfTails + 1
        }
      }
    })
  }

  handleClick(e) {
    this.flipCoin();
  };


  render() {
    return (
      <div>
        <h1>Let's flip a coin!</h1>
        <Coin heads={this.state.heads} />
        <button onClick={this.handleClick}>Flip Me!</button>
        <p>Out of {this.state.numOfFlips}, there have been {this.state.numOfHeads} heads and {this.state.numOfTails} tails.</p>
      </div>
    )
  }
}

export default CoinFlipper


