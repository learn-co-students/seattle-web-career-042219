import React, { Component } from 'react'

class StockTicker extends Component {

  componentWillMount = () => {
    console.log("I am about to exist!!")
  }
  
  componentDidMount = () => {
    // console.log("I exist!!!")
  }

  makeMoney = setInterval(() => {
    this.props.onUpdatePrice()
  }, 1000)

  //look up error handling for mounting methods

  componentWillUpdate = () => {
    // console.log("I feel a change a coming!!")
    // debugger
  }

  componentDidUpdate = () => {
    // console.log("I just got a new price")
  }

  componentWillUnmount = () => {
    clearInterval(this.makeMoney)
  }

  render () {
    return (
      <div className="app-children">
        <div id="ticker">
          <h2>Flatiron</h2>
          <div>
            {this.props.price}
          </div>
        </div>
      </div>
    )
  }
}

const Header = props => <h1>{props.text}</h1>


export default StockTicker
