import React, { Component } from 'react';

import WidgetSelector from './components/WidgetSelector'
import Hello from './components/Hello'

class App extends Component {

  sayHello = () => {
    console.log("%cI said hello, sir", "color:red;font-family:fantasy");
  }

  render() {
    return (
      <div id='app'>
        <Hello onClickHello={this.sayHello}/>
        <WidgetSelector />
      </div>
    )
  }
}

export default App;


