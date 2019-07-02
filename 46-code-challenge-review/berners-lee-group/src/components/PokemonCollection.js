import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {
  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {
          this.props.pokemons.map(pokemon => {
            return pokemon.visible?
            <PokemonCard key={pokemon.id} pokemon={pokemon}/>:
            null
          })
        }
      </Card.Group>
    )
  }
}

export default PokemonCollection
