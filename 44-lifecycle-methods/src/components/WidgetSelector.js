import React, { Component } from 'react'
import StockTicker from './StockTicker'

class WidgetSelector extends Component {

  state = {
    price: 54,
    showTicker: false
  };

  toggleTicker = () => {
    this.setState({
      showTicker: !this.state.showTicker
    })
  }

  updatePrice = () => {
    this.setState({
      price: this.state.price + 1
    });
  };

  render() {
    return (
      <div className="app-children">
        <button onClick={this.toggleTicker}>Toggle Ticker</button>
        {this.state.showTicker?
          <StockTicker onUpdatePrice={this.updatePrice} price={this.state.price} />:
          null
        }
      </div>
    );
  }
}

export default WidgetSelector
