import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
      {this.props.pets.map((pet, index) => {
        return <Pet onAdoptPet={this.props.onAdoptPet} key={index} pet={pet}/>
      })}
    </div>
  }
}

export default PetBrowser
