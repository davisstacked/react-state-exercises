import React, { Component } from 'react'

export class IconList extends Component {

  static defaultProps = {
    options: [
      "angry",
      "anchor",
      "archive",
      "at",
      "archway",
      "baby",
      "bell",
      "bolt",
      "bone",
      "car",
      "city",
      "cloud",
      "couch"
    ]
  };

  constructor(props) {
    super(props);
    this.state = { icons: [] };
    this.addIcon = this.addIcon.bind(this);
  }

  // bad way of mutating state - should create a new array object with map and manipulate that. leaving original intact. 
  // addIcon() {
  //   let idx = Math.floor(Math.random() * this.props.options.length);
  //   let newIcon = this.props.options[idx];
    // let icons = this.state.icons;
    // icons.push(newIcon);
    // this.setState({icons: icons})
  // }

  // better way! use spread operator to create a brand new array to mutate
  addIcon() {
    let idx = Math.floor(Math.random() * this.props.options.length);
    let newIcon = this.props.options[idx];
    // this creates a brand new array where we add the new icon 
    this.setState({icons: [...this.state.icons, newIcon]});
  }

  render() {
    const icons = this.state.icons.map(i => <i className={`fas fa-${i}`} />);
    return (
      <div>
        <h1>Icons: {icons}</h1>
        <button onClick={this.addIcon}>Add New Icon</button>
      </div>
    )
  }
}

export default IconList;
