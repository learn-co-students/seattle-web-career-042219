import React from 'react'

class Filters extends React.Component {

  handleChangeType = (e) => {
    this.props.onChangeType(e.target.value);
  }

  handleFindPets = () => {
    this.props.onFindPetsClick()
  }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={this.handleChangeType} name="type" id="type">
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleFindPets}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
