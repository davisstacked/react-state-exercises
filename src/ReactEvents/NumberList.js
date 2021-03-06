import React, { Component } from 'react';
import NumberItem from './NumberItem';

export class Numberlist extends Component {

  constructor() {
    super();
    this.state = {
      nums: [1, 2, 3, 4, 5]
    }
    this.remove = this.remove.bind(this);
  }

  remove(num) {
    this.setState(st => ({
      nums: st.nums.filter(n => n !== num)
    }))
  }

  render() {
    let nums = this.state.nums.map(n => <NumberItem value={n} remove={this.remove}/>);
    return (
      <div>
        <h1>First Number List</h1>
        <ul>{nums}</ul>
      </div>
    )
  }
}

export default Numberlist
