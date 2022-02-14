import React, { Component } from 'react';
import PokemonList from '../pokemon/PokemonList';

class Dashboard extends Component {
  render() {
    return (
      <div className="py-3">
        <div className="row">
          <PokemonList />
        </div>
      </div>
    );
  }
}

export default Dashboard;