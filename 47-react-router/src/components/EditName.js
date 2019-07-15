import React, {Component} from 'react'

class EditName extends Component {

    handleEditNameClick = () => {
        this.props.onEditName()
    }

    render() {
        console.log(this.props)
        return <h2 onClick={this.handleEditNameClick}>I am edit name</h2>
    }
}

export default EditName