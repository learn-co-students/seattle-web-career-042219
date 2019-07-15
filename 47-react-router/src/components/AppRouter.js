import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Home from "./Home";

class AppRouter extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
          <Welcome />
          <Route path="/" exact component={Home} />
        </Router>
      </div>
    );
  }
}

export default AppRouter;
