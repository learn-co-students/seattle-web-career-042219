import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Band from "./Band";

const Music = ({ match }) => {
  // console.log(match)
  return (
    <div>
      <h3>Music</h3>
      <Router>
        <ul>
          <li>
            <Link to={`${match.url}/The Flying Lizards`}>British New Wave</Link>
          </li>
          <li>
            <Link to={`${match.url}/Lin-Manuel Miranda`}>
              American Stage Musicals
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/Rammstein`}>Neue Deutsche Härte</Link>
          </li>
        </ul>
        <Route
          path={`${match.url}/:band`}
          render={props => <Band {...props} message="You're learning about " />}
        />
      </Router>
    </div>
  );
};

export default Music;
