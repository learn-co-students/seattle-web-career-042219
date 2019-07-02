import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor() {
    super();
    this.state = {
      showFront: true
    }
  }

  handleClick = () => {
    this.setState(prevState => {
      return {showFront: !prevState.showFront}
    })
  }

  render() {
    const {name, stats, sprites} = this.props.pokemon
    return (
      <Card onClick={this.handleClick}>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.showFront?sprites.front:sprites.back}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {stats[5].value} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
