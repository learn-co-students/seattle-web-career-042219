import React, {Component} from 'react'

class Hello extends Component {
        
    handleClick = () => {
        console.log("handle that click")
        console.log(this.props)
        this.props.onClickHello()
    }

    render() {
        return <button onClick={this.handleClick}>Hello</button>
    }
}

export default Hello