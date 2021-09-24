import React, { Component } from 'react';

// just needs a prop called num: value on ball.

import './LottoBall.css';

export class LottoBall extends Component {
  render() {
    return (
      <div className="LottoBall">
        <div className="LottoBall-ball">
            { this.props.num }
        </div>
      </div>
    )
  }
}

export default LottoBall;
