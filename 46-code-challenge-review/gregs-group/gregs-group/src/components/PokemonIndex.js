import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
// import { Search } from "semantic-ui-react";
import MySearch from "./MySearch";
// import _ from "lodash";

class PokemonPage extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonList: [],
      searchTerm: ""
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(res => this.setState({ pokemonList: res }))
      .catch(err => console.log(err));
  }

  handleSearchChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.filter();
  };

  // filter = () => {
  //   let newPokeList = Array.from(this.state.pokemonList);
  //   let filteredList = newPokeList.filter(pokemon =>
  //     pokemon.name.includes(this.state.searchTerm)
  //   );
  //   this.setState({ pokemonList: filteredList });
  // };

  handleAddPokemon = pokemon => {
    this.setState(prevState => ({
      pokemonList: [...prevState.pokemonList, pokemon]
    }));
  };

  render() {
    let newPokeList = Array.from(this.state.pokemonList);
    let filteredList = newPokeList.filter(pokemon =>
      pokemon.name.includes(this.state.searchTerm)
    );
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        {/* <Search
          onSearchChange={_.debounce(this.handleSearchChange, 500)}
          showNoResults={false}
        /> */}
        <MySearch
          searchTerm={this.state.searchTerm}
          handleSearchChange={this.handleSearchChange}
          handleSubmit={this.handleSubmit}
        />
        <br />
        <PokemonForm handleAddPokemon={this.handleAddPokemon} />
        <br />
        <PokemonCollection pokemonList={filteredList} />
      </div>
    );
  }
}

export default PokemonPage;
