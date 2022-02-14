import axios from 'axios';
import React, { Component } from 'react';
import PokemonCard from './PokemonCard';

class PokemonList extends Component {
  constructor() {
    super()
    this.state = {
      url: 'https://pokeapi.co/api/v2/pokemon/',
      pokemons: []
    };

  }
  getPokemon = async () => {
    try {
      let res = await axios.get('https://pokeapi.co/api/v2/pokemon/')
      this.setState({
        pokemons: res.data['results']
      })
    } catch (e) {
      console.log(e.message);
    }
  };
  componentDidMount() {
    this.getPokemon()
  }

  render() {
    const { pokemons } = this.state
    return (
      <div className="row">
        {
          pokemons.map((pokemon, index) =>
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          )
        }
      </div>
    );
  }
}

export default PokemonList;