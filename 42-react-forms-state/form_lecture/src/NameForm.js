import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmitNames(
      `${this.state.firstName} ${this.state.lastName}`
    );
    this.setState({ firstName: "", lastName: "" });
  };

  handleFirstNameChange = e => {
    console.log("e.target.value=", e.target.value);
    this.setState({ firstName: e.target.value }, () =>
      console.log("this.state.firstName=", this.state.firstName)
    );
  };

  handleLastNameChange = e => {
    console.log("e.target.value=", e.target.value);
    this.setState({ lastName: e.target.value }, () =>
      console.log("this.state.lastName=", this.state.lastName)
    );
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row col-md-6">
            <label htmlFor="first-name">First Name: </label>
            <input
              type="text"
              className="form-control"
              name="first-name"
              id="first-name"
              value={this.state.firstName}
              onChange={this.handleFirstNameChange}
            />
          </div>
          <div className="form-group row col-md-6">
            <label htmlFor="last-name">Last Name: </label>
            <input
              type="text"
              className="form-control"
              name="last-name"
              id="last-name"
              value={this.state.lastName}
              onChange={this.handleLastNameChange}
            />
          </div>
          <input type="submit" id="name-submit" value="Submit Name" />
        </form>
      </React.Fragment>
    );
  }
}

export default NameForm;
