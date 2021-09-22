// user able to click on a button to flip a coin. Every time the user clicks, the coin gets flipped again. the app should also keep track of how many times heads and tails has shown up.

import React, { Component } from 'react';
import Coin from './Coin';

export class CoinFlipper extends Component {
  render() {
    return (
      <div>
        <Coin heads={false}/>
      </div>
    )
  }
}

export default CoinFlipper


