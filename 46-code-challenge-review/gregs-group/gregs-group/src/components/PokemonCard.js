import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    seeFront: true
  };

  handleCardSideToggle = () => {
    this.setState({ seeFront: !this.state.seeFront });
  };

  render() {
    const hp =
      this.props.pokemon.stats.find(stat => stat.name === "hp").value || 40;
    return (
      <Card onClick={this.handleCardSideToggle}>
        <div>
          <div className="image">
            <img
              src={
                this.state.seeFront
                  ? this.props.pokemon.sprites.front
                  : this.props.pokemon.sprites.back
              }
              alt="oh no!"
            />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
