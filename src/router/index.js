import React from 'react';
import { Route, Switch } from 'react-router';
import Dashboard from '../components/layout/Dashboard';
import PokemonDetail from '../components/pokemon/PokemonDetail';

function index(props) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/pokemon/:pokemonIndex" component={PokemonDetail} />
      </Switch>
    </div>
  );
}

export default index;