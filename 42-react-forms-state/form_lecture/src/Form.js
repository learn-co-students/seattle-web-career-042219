import React, { Component } from "react";
import NameForm from "./NameForm";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      cohortName: "",
      modNumber: ""
    };
  }

  handleSelectChange = e => {
    this.setState({ cohortName: e.target.value }, () =>
      console.log("this.state.cohortName=", this.state.cohortName)
    );
  };

  handleRadioChange = e => {
    this.setState({ modNumber: e.target.value }, () =>
      console.log("this.state.modNumber=", this.state.modNumber)
    );
  };

  // way to do all in one shot
  // array destructuring

  // handleChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // handleSubmit = newName => {
  //   console.log("newName=", newName);
  //   const nameList = this.state.names;
  //   nameList.push(newName);
  //   this.setState({ names: nameList });
  // };

  handleSubmit = newName => {
    console.log("this.state.names=", this.state.names);
    this.setState(
      prevState => ({
        names: [...prevState.names, newName]
      }),
      () => console.log("this.state.names=", this.state.names)
    );
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <NameForm handleSubmitNames={this.handleSubmit} />
          <form id="the-form">
            <div className="form-group row col-md-6 col-sm-12">
              <label htmlFor="cohort-name">Cohort Name: </label>
              <select
                className="form-control"
                id="cohort-name"
                value={this.state.cohortName}
                onChange={this.handleSelectChange}
              >
                <option value="">Cohort Name</option>
                <option value="Danny, Champion of the World">
                  Danny, Champion of the World
                </option>
                <option value="Herman Whatever">Herman Whatever</option>
                <option value="Crud">Crud</option>
                <option value="Seattle.first">Seattle.first</option>
              </select>
            </div>

            <div className="col-md-6" id="mod-number">
              <label>Mod Number: </label>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="1"
                  onClick={this.handleRadioChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  1
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="2"
                  onClick={this.handleRadioChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  2
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="3"
                  onClick={this.handleRadioChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio3">
                  3
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio4"
                  value="4"
                  onClick={this.handleRadioChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio4">
                  4
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio5"
                  value="5"
                  onClick={this.handleRadioChange}
                />
                <label className="form-check-label" htmlFor="inlineRadio5">
                  5
                </label>
              </div>
            </div>

            <input type="submit" value="submit" onClick={this.handleSubmit} />
          </form>
          <br />
          <div id="append-here" className="col-md-6">
            <p>{this.state.cohortName}</p>
            <p>{this.state.modNumber}</p>
          </div>
          <div id="append-here2" className="col-md-6">
            <p>Current Roster</p>
            <ul>
              {this.state.names.map((name, index) => {
                return (
                  <li key={index}>
                    Student number {index + 1}: {name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Form;
