import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Greeting from "./Greeting";
import Random from "./Random";
import Music from "./Music";
import Names from "./components/Names"
import "./App.css";

class AppRouter extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron title">
          <h1>App Component</h1>
        </div>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/random">Random Number Generator</Link>
            </li>
            <li>
              <Link to="/music">Music</Link>
            </li>
            <li>
              <Link to="/names">Names</Link>
            </li>
          </ul>
          <Route path="/" exact component={Greeting} />
          <Route path="/random/" component={Random} />
          <Route path="/music" component={Music} />
          <Route path='/names' component={Names} />
        </Router>
      </div>
    );
  }
}

export default AppRouter;
