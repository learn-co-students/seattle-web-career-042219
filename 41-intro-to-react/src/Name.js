import React, { Component } from "react";

export class Name extends Component {
  constructor() {
    super();
    this.state = {
      name: "erin",
      age: 4
    };
    this.changeName = this.changeName.bind(this);
  }

  // changeName = () => {this.setState({name: "greg", age: "howdy"})}
  changeName() {
    this.setState({ name: "greg" });
  }

  changeAge = () => {
    this.setState({ age: 34 });
  };

  render() {
    return (
      <div>
        <h2 onClick={this.changeName}>Hello my name is {this.state.name}</h2>
        <h3 onClick={this.changeAge}>I'm this many {this.state.age}</h3>
      </div>
    );
  }
}
