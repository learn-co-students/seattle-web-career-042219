import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';

const initialState = {
  count: 0,
  something: 'not being used'
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}

const store = createStore(reducer);

console.log(store.getState())
class App extends Component {
  // state = {
  //   count: 0
  // }

  // increment = () => {
  //   this.setState({
  //     count: this.state.count + 1
  //   })
  // }

  // decrement = () => {
  //   this.setState({
  //     count: this.state.count - 1
  //   })
  // }

  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate()
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Counter />
      </div>
    );
  }
}

class Header extends Component {

  renderDescription = () => {
    const remainder = store.getState().count % 5
    const upToNext = 5 - remainder
    return `The current count is less than ${store.getState().count + upToNext}`
  }

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Intro to Redux</h1>
        <h3>{this.renderDescription()}</h3>
      </header>
    )
  }
}

class Counter extends Component {

  increment = () => {
    store.dispatch({type: 'INCREMENT'})
  }

  decrement = () => {
    store.dispatch({type: 'DECREMENT'})
  }
  render() {
    return (
      <div className="Counter">
        <h1>{store.getState().count}</h1>
        <button onClick={this.decrement}> - </button>
        <button onClick={this.increment}> + </button>
      </div>
    )
  }
}

export default App;
