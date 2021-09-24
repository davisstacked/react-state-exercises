import React, { Component } from 'react';
// my functioning solution! 
const HEADFLIP_API = "https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Heads.png"

const TAILFLIP_API = "https://bjc.edc.org/June2017/bjc-r/img/5-algorithms/img_flipping-a-coin/Tails.png"

export class Coin extends Component {

  render() {

    return (
      <div>
        {this.props.heads ?
          <img
            src={HEADFLIP_API}
            alt="heads"
          /> :
          <img
            src={TAILFLIP_API}
            alt="tails"
          />
        }
      </div>
    )
  }
}

export default Coin;
