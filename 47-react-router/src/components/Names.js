import React, { Component } from "react";
import EditName from "./EditName";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class Names extends Component {
  state = {
    names: [
      {
        name: "Greg",
        id: 1
      },
      {
        name: "Erin",
        id: 2
      }
    ]
  };

  editName = () => {
      console.log("We edited the name")
  }

  render() {
    return (
      <Router>
        <h2>Names</h2>
        {this.state.names.map(name => {
          return (
            <li>
              <Link to={`${this.props.match.url}/${name.id}`} key={name.id}>
                {name.name}
              </Link>
            </li>
          );
        })}
        <Route path="/names/:id"
            render={props => <EditName {...props} onEditName={this.editName}/>}
        />
      </Router>
    );
  }
}

export default Names;
