import React, {Component} from 'react'
import Proppy from './Proppy'

class Firework extends Component {

    

    render() {
        // console.log(this.props.opacity)
        let {opacity} = this.props

        if (opacity > 0.95) {
            return <img
            className="celebrate"
            src="https://media3.giphy.com/media/peAFQfg7Ol6IE/giphy.gif?cid=790b76115d163a6d46422e336305a143&rid=giphy.gif"
            />
        } else {
            return <Proppy />
        }
    }
}

export default Firework