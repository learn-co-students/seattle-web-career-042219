import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.username = React.createRef();
    this.password = React.createRef();
    this.state = { user: null };
    this.getProfile();
  }

  login = (ev) => {
    ev.preventDefault();

    const username = this.username.current.value;
    const password = this.password.current.value;

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: {username, password} })
    })
    .then(res => res.json())
    .then(json => {
      if (json && json.jwt) {
        localStorage.setItem('jwt', json.jwt);
        this.getProfile();
      }
    });
  }

  logout = () => {
    localStorage.setItem('jwt', '');
    this.setState({user: null});
  }

  getProfile = () => {
    const token = localStorage.getItem('jwt');
    console.log("token", token)
    if (token) {
      fetch('http://localhost:3000/profile', {
        headers: {
          'Authorization': 'Bearer ' + token
        }
      })
      .then(res => res.json())
      .then(({username, location}) => {
        this.setState({user: {username, location}});
      })
    }
  }

  renderLoggedInInfo = () => {
    if (this.state.user) {
      return (
        <div>
          <h4>You are logged in as {this.state.user.username}</h4>
          <p>Your location is {this.state.user.location}</p>
        </div>
      );
    } else {
      return <p>Log in to see more information</p>;
    }
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.login}>
          <input type="text" placeholder="username" ref={this.username} />
          <input type="password" placeholder="password" ref={this.password} />
          <input type="submit" value="log in" />
          <button type="button" onClick={this.logout}>log out</button>
        </form>
        {this.renderLoggedInInfo()}
      </div>
    );
  }
}

export default App;
