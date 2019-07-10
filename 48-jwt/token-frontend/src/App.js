import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    username: ''
  }

  constructor() {
    super()
    this.username = React.createRef()
    this.password = React.createRef()

    if (this.getToken()) {
      this.getProfile()
    }

    this.logout = this.logout.bind(this)
  }

  login = (ev) => {
    ev.preventDefault()
    console.log('log in')

    let username = this.username.current.value
    let password = this.password.current.value

    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user:{username, password} })
    })
    .then(res => res.json())
    .then(json => {
      console.log('login:', json)
      if (json && json.jwt) {
        this.saveToken(json.jwt)
        this.getProfile()
      }
    })
  }

  logout() {
    this.clearToken()
    this.setState({username: ''})
    return false
  }

  getProfile = () => {
    let token = this.getToken()
    fetch('http://localhost:3000/api/v1/profile', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(res => res.json())
    .then(json => {
      console.log('profile:', json)
      this.setState({user: json.user})
    })
  }

  saveToken(jwt) {
    localStorage.setItem('jwt', jwt)
  }

  clearToken(jwt) {
    localStorage.setItem('jwt', '')
  }

  getToken(jwt) {
    return localStorage.getItem('jwt')
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
        <div>
          user: {this.state.user && this.state.user.username || 'logged out'}
        </div>
        {this.state.user && <div>
          <pre>
            {'{\n'}
              username: {this.state.user.username + '\n'}
              avatar: {this.state.user.avatar + '\n'}
              bio: {this.state.user.bio + '\n'}
            {'}\n'}
          </pre>
        </div>}
      </div>
    );
  }
}

export default App;
