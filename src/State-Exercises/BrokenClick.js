import React, { Component } from 'react'

export class BrokenClick extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    // can avoid this by simply using an arrow function for our methods. wtf. 
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }))
  }

  render() {
    return (
      <div>
        <h1>{ this.state.clicked ? 'Clicked!!!' : 'Not clicked'}</h1>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
  }
}

export default BrokenClick
